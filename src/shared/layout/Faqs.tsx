import { Accordion } from "../components/Accordion";

export default function Faqs() {
  return (
      <section className='px-4 py-10 w-full'>
        <h5 className='text-black dark:text-white heading-1 text-center mb-5'>
          Frequent Ask Questions
        </h5>
        <Accordion label={'General FAQs'} >
          <Accordion label={'What is uchooseit.us?'} >
            It’s a private discount network exclusively for members, offering savings of up to 50% at over 1 million locations across the U.S.—including restaurants, retail, entertainment, travel, and much more. Our mission is to help you and your family save thousands of dollars every year on everyday purchases and experiences.
          </Accordion>
          <Accordion label={'How do I access the discounts?'} >
            You must purchase your annual membership, and then you can access the discounts through the <strong className="mx-1">My Deals®</strong> app or from your computer. You can view offers near you by using your location and redeem them directly from your phone.
          </Accordion>
          <Accordion label={'Where can I use the discounts?'} >
            <strong className="mr-2">All across the United States</strong>. From major brands to local businesses. Just enable GPS and discover discounts near you.
          </Accordion>
          <Accordion label={'Do I really save money?'} >
            Yes! Since we have direct agreements with brands, you’ll get the best possible discounts. Many of our members save <strong className="mx-1">hundreds or even thousands of dollars per year</strong>.
            Use just 1 or 2 discounts per month and you’ll already cover the cost of your membership.
            <strong className="mx-1">You could save over $2,500 per year</strong>, depending on how often you use it.
          </Accordion>
          <Accordion label={'Is it available in Spanish?'} >
            Yes! The platform is available in <strong className="mx-1">10 different languages, including Spanish.</strong>
          </Accordion>
          <Accordion label={'Is my information safe?'} >
            Absolutely. We take your privacy seriously. <strong className="mx-1">We do not sell your information like some free apps</strong>. Your data is secure and protected.
          </Accordion>
          <Accordion label={'Does the membership auto-renew?'} >
            Yes, but you can cancel at any time. No commitments. No fine print. Simply go to: 
            <a href="https://uchooseitus.recurly.com/account/create_account" target="_blank" rel="noopener noreferrer" className="mx-1 underline underline-offset-2">Manage My Account</a>
          </Accordion>
          <Accordion label={'How much does it cost?'} >
            <strong>$47.99 per year</strong>, less than $3.99 per month. With just one discount per month, you’ll cover the cost of your membership.
          </Accordion>
          <Accordion label={'Can I cancel anytime?'} >
            Yes. You can do it yourself in just seconds from your account. <strong className="mx-1">No hidden fees. No hassle:</strong>
            <a href="https://uchooseitus.recurly.com/account/create_account" target="_blank" rel="noopener noreferrer" className="mx-1 underline underline-offset-2">Cancel Here</a>
          </Accordion>
          <Accordion label={'Is customer support available?'} >
            Yes—we’re here to help. Reach us by <strong className="mx-1">in-app chat</strong>, email at <strong>support@uchooseit.us</strong>, or our <strong>toll-free line (888) 556-2393.</strong>         
          </Accordion>
          <Accordion label={'Can I explore the discounts without being a member?'} >
            Yes, you can! You're welcome to explore most of the available discounts by browsing through categories, cities, or ZIP codes. Just click the link below to start discovering how much you could be saving — no membership required (yet). 
            <a href="https://uchooseitus.enjoymydeals.com/" target="_blank" rel="noopener noreferrer" className="mx-1 underline underline-offset-2">Explore MyDeals</a>
          </Accordion>
          <Accordion label={'What if a merchant won’t honor my discount?'} >
            Some users run into this issue, but very infrequently. Every once in a while, a merchant's ownership will change hands, or the staff behind the counter hasn't been trained to recognize our discount offer. We're committed to making sure merchants honor their contracted discount offer. Our customer service team is available by voice, email, or chat to help resolve the issues. Call the number on your mobile app or printed coupon if you need assistance.
          </Accordion>
          <Accordion label={'How do these discounts differ from other coupons I see online, or the ones I get in my mailbox?'} >
            Because our network is private, retailers can give us deeper discounts than what you'll see elsewhere. Only users who have a login can get access to our discounts. That way, retailers or service providers are more likely to provide a discount to a members-only website like ours.
          </Accordion>
          <Accordion label={'What’s the best way to search for shopping deals?'} >
            You can use your PC or mobile device to find deals. Input what you are searching for in the search bar on the top of the page as well as the location you want to search. Click the search icon and your results will appear. You also have the option to further refine your results. For mobile, select the filter icon on the top right; or on PC, select from the filters on the left side of the page. You can also switch from a list view to a map view to see how close the establishment is to your location.
          </Accordion>
          <Accordion label={'How do I find out the details about the coupon or deal?'} >
            Select the deal by clicking on the "View Deals" button. The site will then display a page that will tell you exactly what the discount offer is. You can also view the fine print by clicking on the "offer terms" link for more details. We'll also show you how it works - whether you need to print or show the coupon on your phone.
          </Accordion>
          <Accordion label={'How do you redeem a coupon?'} >
          There are two types of deals: 1) those you bring with you to show at a physical location; or 2) an online deal. For a physical location deal, once you click on the "View Deals" link, select the "Use Coupon" button. There might be an option to either print or show the coupon. You can either show your coupon on your phone once you arrive at the venue or bring in your printed coupon. If it is an online deal, select "Shop Now". You'll be able to copy the coupon code and then select the "Continue to Site" text to go directly to that business' website.
          </Accordion>
          <Accordion label={'How does the discount platform work?'} >
            <ol>
              <li>Sign up by entering your contact information at checkout.</li>
              <li>If you have a promotional code from one of our ambassadors, enter it in the “Promotional Code” field and click Apply.</li>
              <li>After completing your annual membership payment, you’ll be redirected to a Thank You page with your login details.</li>
              <li>You can then access the platform at <a href="uchooseitus.enjoymydeals.com" target="_blank" rel="noopener noreferrer" className="mx-1">Enjoy My Deals</a>or download the <strong className="mx-1">My Deals®</strong> mobile app to use your discounts on the go.</li>
              <li>Your <strong className="mx-1">Unique Member ID</strong> will also be emailed to you.</li>
              <li>You’ll receive a reminder email <strong className="mx-1">30 days before automatic renewal</strong>, giving you time to cancel if you wish.</li>
              <li>You can cancel at any time via <a href="https://uchooseitus.recurly.com/account/create_account" target="_blank" rel="noopener noreferrer" className="mx-1 underline underline-offset-2">Cancel Here</a>.</li>
              <li>
                Discounts can be redeemed in three ways:
                <ul>
                  <li><strong>In-store</strong> (show from your mobile)</li>
                  <li><strong>Online</strong> (with a coupon code or link)</li>
                  <li><strong>By phone</strong> (for specific services)</li>
                </ul>
              </li>
              <li>We offer an <strong>8-day money-back guarantee</strong>. If you’re not satisfied, email us at <strong>support@uchooseit.us</strong>, and we’ll do our best to help.</li>
              <li>We accept all major credit/debit cards: <strong>Visa, MasterCard, Amex, Discover, Diners Club, JCB, UnionPay</strong>.</li>
            </ol>
          </Accordion>
        </Accordion>
        <Accordion label="Shop">
          <Accordion label="What kind of discounts are available?">
            Discounts are available for both national as well as local shopping establishments. Whether you want to save on clothing, electronics, furniture, office supplies, sporting goods, or pet supplies, we have those deals available (based on location).
          </Accordion>
          <Accordion label="How much can I save?">
            It all depends on what you purchase, but, on average, users save an average of $335 on auto services, and $57 on things like retail shopping, home and garden and other services in the Shop category. However, some coupons are based on a percent discount, so you could save even more depending on what you are buying.
          </Accordion>
        </Accordion>
                <Accordion label="Travel" >
          <Accordion label="What is the cancellation policy?">
            Cancellation policies vary by hotel and dates of stay. Prior to booking, the cancellation policy is listed once you've selected your room type under the Additional Details section. If you've already booked, the cancellation policy is included in your reservation confirmation email as well.
          </Accordion>
          <Accordion label="Are resort fees, parking and other hotel charges included in the rate?">
            The rate we charge up front includes the nightly charge plus taxes. Some hotels charge other fees that are not included in your nightly rate such as a deposit, resort fee, parking or other. These types of charges are not included in the nightly rate and will be charged by the hotel or property directly.
          </Accordion>
          <Accordion label="Is my reservation confirmed with the hotel immediately after I book it?" >
            After you complete your booking, you'll receive an email to confirm your reservation. If your travel plans change, please call our Member Services team and NOT the hotel directly. While we reserve the hotel room(s) for your booking, your specific contact information (name, etc.) will not be available in the hotel's system until two weeks prior to your check-in date. Don't worry, we still have your booking secured in our systems. As a courtesy to you, our Member Services team performs a pre-arrival confirmation within 5 days of your check-in date to double check that everything is on track with your reservation. We call the property directly to confirm your specific reservation. So, all you have to do is show up with your identification and credit card to check in.
          </Accordion>
          <Accordion label="When is my card charged?">
            In order to lock in your discount, we charge your credit card at the time you make your reservation.
          </Accordion>
          <Accordion label="How do I know my booking went through? " >
            There are a couple of ways to determine if your booking went through. First, upon booking the room, you should see a confirmation page that the booking was successful. Second, you should receive an email confirmation outlining your trip details. Lastly, you can always log back into the site, and on the top right side of the page, click on “My Trips” where you can see your upcoming trip information. You may call our Member Services team to verify your reservation in our system at (888) 556-2393 (toll-free), or (801) 656-1460 (international) at any time.
          </Accordion>
          <Accordion label="Can I book on the same day I want to check in?" >
            Absolutely! Feel free to make last minute travel plans and enjoy your hotel discounts.
          </Accordion>
          <Accordion label="Does the car rental rate include all taxes and fees?" >
            Sometimes, but not always, and varies by rental car company. The car rental rate you see on our site includes the daily rental fee and applicable taxes. Those are itemized for you during checkout. It does not include any additional fees paid at the counter such as insurance coverage, extra features or services, or deposits. Those will be charged by the car rental company upon pick up of the vehicle. Please also review the accompanying Rental Policies and our Important Information section during checkout for more details for your specific rental.
          </Accordion>
          <Accordion label="Are debit cards or cash accepted at the rental car counter?">
            Cash, debit cards, virtual card or prepaid cards will not be accepted at the rental car counter. You will need a credit card that it is in the name of the driver in order to pick up the car. The credit card must have enough available funds to cover any deposits or additional charges required for the rental.
          </Accordion>
          <Accordion label="What identification is required to rent a car?" >
            You will need a valid driver's license in the driver's name - the actual physical card. A digital or electronic version of your driver's license will not be accepted. The name on the driver's license will need to match the name on the reservation in order to pick up the car. If the name on the driver's license does not match the name on the reservation you will be unable to pick up the car and may not be eligible for a refund. You will also need to provide a valid credit card. The cardholder's name on the provided credit card must also match that of the name on the reservation and the driver's license. If you are renting a car outside the country where your license was issued, and your license is in non-Latin characters (e.g., Arabic, Chinese, Cyrillic, etc.), you may need to provide an International Driving Permit.
          </Accordion>
          <Accordion label="Can I get a refund if I return the car earlier than I reserved it for?">
            No. Rental car prices are based on the pick-up and drop-off times and dates when the reservation was made. If you bring the car back earlier, you will not receive a refund for any of that unused time.
          </Accordion>
          <Accordion label="What happens if I return the car late?">
            Depending upon the car rental company, there can be a grace period of up to 29 minutes after the agreed upon drop off time where you will not be charged any additional fees. However, after that initial grace period you may be charged for additional hours or an additional day depending upon how late you are. We advise you to check the rental contract received when you pick up the car for additional details on any charges if the car is returned late.
          </Accordion>
          <Accordion label="Can I pick up the car and return it to a different location from where I picked it up?" >
            Yes. On the main search page, click on the box for “Drop off at a different location”. Then input the drop off location in the search box form. Please note, that our site only allows for pick-up and drop-off at airport locations only. There may be an additional fee for returning a car to a different drop-off location than the pick-up location. Any additional drop-off fees will be indicated at checkout.
          </Accordion>
          <Accordion label="Do I need to purchase car rental insurance?" >
            Car rental insurance is not required. We recommend that if you currently have your own auto insurance that you check with your provider as to whether that extends to a rental car. If not, most rental car companies have several insurance options to choose from. The cost of optional rental car insurance varies by plan and location. Our website does not offer the option to add on car rental insurance.
          </Accordion>
        </Accordion>
        <Accordion label={"Dining"} >
          <Accordion label="What kind of discounts are available?">
            Discounts are available for both nationwide chains as well as local restaurants. Whether you want to save on pizza or try out a local fine dining restaurant, we typically have those types of deals available (based on location).
          </Accordion>
          <Accordion label="How much can I save?">
            It all depends on what you purchase, but, on average, you can save over $5.50 in the Eat category. However, some coupons are based on a percent discount, so you could save more depending on the restaurant or other establishment you choose.
          </Accordion>
        </Accordion>
        <Accordion label="Entertainment" >
          <Accordion label="What kind of discounts are available?" >
            Discounts are available for both nationally recognized entertainment venues as well as local attractions and activities. Whether you want to save on movie tickets, golf, amusement park tickets or classes, concerts, or outdoor adventures, we have those deals available (based on location).
          </Accordion>
          <Accordion label="How much can I save?" >
            It all depends on what you purchase, but, on average, you can save over $5.50 on movie tickets, $25 on recreation/entertainment, and $28 on golf and snow sports in the Play category. However, some coupons are based on a percent discount, so you could save even more depending on the activity you choose.
          </Accordion>
          <Accordion label="How much can I save on theme park tickets?" >
            You can save up to 50% on park tickets. However, it really depends on which park you choose and how many days you plan on visiting the park. When you conduct a search, you will see a strikethrough price so you can see how much it would have cost if you purchased the tickets elsewhere.
          </Accordion>
          <Accordion label="Do ticket prices and availability vary by the date of the visit?" >
            Yes, they can vary. Please ensure that you pick the correct first date you plan on visiting the park and then the number of days you want admission to the park(s). We encourage you to fully read the description under the ticket type to understand the exact details of the ticket type you want to purchase.
          </Accordion>
          <Accordion label="Do theme park tickets expire? When do I have to use them by?" >
            When you want to purchase tickets, you will need to select that date of when you will start your park visit. If you are visiting multiple days, there may be some restrictions of whether you have to use the tickets on consecutive days or not. Also, there may be a date restriction as well when you need to use the tickets by. Once you select your ticket type on the site, please read the detailed description of the ticket which will outline any restrictions or expiration.
          </Accordion>
          <Accordion label="Can I purchase the tickets and give them to someone else as a gift?" >
            Yes, you can purchase tickets on this site and have someone else use them. During the checkout process under “Guest Information”, please fill in all the guests’ first names and last names that will be entering the park. You can then use your credit card to purchase the tickets on their behalf.
          </Accordion>
        </Accordion>

      </section>
  )
}
