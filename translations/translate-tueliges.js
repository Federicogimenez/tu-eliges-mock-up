const EXPORT_PATH = "../src/data/tueliges/";

import fs from "fs";
import readline from "readline";
import { google } from "googleapis";
// const fs = require('fs');
// const readline = require('readline');
// const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), listMajors);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: this.process.stdin,
    output: this.process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */

 /**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function mkdirp(filepath) {
	if(filepath == "" || filepath == null) return;
    //var dirname = path.dirname(filepath);

	if (!fs.existsSync(filepath)){
		fs.mkdirSync(filepath);
	}


}

function saveJSONFile(path, filePath, text){
	mkdirp(path);
	
	fs.writeFile(path + filePath, text, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("Generated file: " + path + filePath);
	}); 
}

function isValidValue(value) {
	return value != null && value != "";
}

function getLanguageMap(table, col) {
	var result = {};
	var key;
	var value;
	//start from second value
	for (var row = 1; row < table.length; row++) {

		var cols = table[row];
		//check value and key
		key = cols[0];
		value = cols[col];
		if(isValidValue(key) && isValidValue(value)) {
			//BUILD OBJECT

			result[key] = escapeValue(value);
			console.log('%s: %s', key, value);
		}
	}
	return result;
	
}
 
 function escapeValue(str) {


  return str.replace(/\\n/g, '\n')
            .replace(/\\b/g, '\b')
            .replace(/\\f/g, '\f')
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t');
}


function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: '1br2fZdfdoiWzTvWKv1hi6XzDCeIVLwEB-wVilCXSfWs',
    range: 'tueliges',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    // console.log(rows);
    if (rows.length) {
      var headers = rows[0];
	
      for (var col = 0; col < headers.length; col++) {
        var value = headers[col];
        console.log(":::::::::::::::::::::::::::::::::::::::::::::")
          console.log("Lang key: " + value);
        if(value != null && value != "") {
          var object = getLanguageMap(rows, col);
          
          //TODO stringify to JSON
          var json = JSON.stringify(object);
          saveJSONFile(EXPORT_PATH,  value + ".json", json);
        }

      }
      // console.log('Name, Major:');
      // // Print columns A and E, which correspond to indices 0 and 4.
      // rows.map((row) => {
      //   console.log(`${row[0]}, ${row[4]}`);
      // });
    } else {
      console.log('No data found.');
    }
  });
}