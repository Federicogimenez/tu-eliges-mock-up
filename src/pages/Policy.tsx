import { useNavigate } from "react-router"
import BurgerMenuAlternative from "../components/BurgerMenuAlternative"
import { LegalBurgerOptions } from "../interfaces/LegalBurgerOptions"
import Footer from "../layout/Footer"


export default function Policy() {

    const navigate = useNavigate();

    function handleRedirectHome (){
        navigate("/");
        window.scrollTo(0, 0)
    }

    const burgerOptions: LegalBurgerOptions[] = [
        {
            id: 'option-1',
            label: 'Collection of Information'
        },
        {
            id: 'option-2',
            label: 'Use of Personal Information'
        },
        {
            id: 'option-3',
            label: 'Other Use of Personal Information'
        },
        {
            id: 'option-4',
            label: 'Privacy Practices of Third Parties'
        },
        {
            id: 'option-5',
            label: 'Website'
        },
        {
            id: 'option-6',
            label: 'Consumer Rights'
        },
        
    ]

    return (
            <div className="legals-page">
                    <div className="legals-page__content">
                        <header>
                            <img onClick={handleRedirectHome} src="/img/png/logo-alternative-tu-eliges.png" alt="tu eliges" />
                            <BurgerMenuAlternative {...burgerOptions} />
                        </header>
                        <article>
                            <h2>Privacy Policy</h2>
                            <p>
                                <strong>
                                    Date of Last Revision: 1/1/2025
                                </strong>
                            </p>
                            <p>
                                This website (the "Website") is a member of the TuEliges.us family of Internet properties, operated by TuEliges.us https://www.TuEliges.us ("We," or "Company").
                            </p>
                            <p>
                                By accessing, using, registering, or placing an order at or from this Website, you agree to be bound by this Privacy Policy. You hereby state and affirm that they have read, understand, and agree with this policy. Therefore, please take the time to read this policy in full, which is part of the Terms and Condition of Use of this Website. If you do not agree to the terms and conditions of this Privacy Policy, please do not use this Website or order product from us. For your convenience we will change the "Last Updated" date above to reflect changes to this policy.
                                Purpose of the Privacy Policy.
                            </p>
                            <p>
                                This Policy describes the information collection, use, and dissemination practices of Company, its parent, subsidiaries, and registered d/b/a companies (Collectively Referred herein after as "Company") and all related websites owned or registered to Company. It governs Company's right to collect, use, store and disclose information provided by You on its (a) this Website, (b) Company's other Websites, (c) on various Third-Party websites, and (d) Company's other information collection and distribution practices, including the acquisition of your information from and to Third Parties. Company is not responsible for the information collection or privacy practices of third party websites or applications which company does not own or control.
                                By providing us with Personal Information about yourself on our Website or in the course of using our services, you consent to the transfer of your Personal Information, and any other data we acquire about you from third-party service providers for commercial use.
                                Information Collection, Use, and Dissemination practices.
                            </p>
                            <section id="option-1">
                                <h5>Collection of Information.</h5>
                                <p>
                                    <strong>1.1.</strong>User Direct Information. <br />
                                    Each time you provide or transmit information via the Website, Company may obtain and collect personal information about you, including, but not limited to, your name, email address, mailing address, social security number, credit card information, bank account information and telephone or cell phone number (collectively referred to as "Personal Information").
                                </p>
                                <p>
                                    <strong>1.2.</strong> Survey Information.
                                    <br />
                                    Company may collect Personal Information from you when you voluntarily complete a Company survey, order form, or a registration page either online by using the internet or offline by providing this information through the mail, in person or using a telephone. This information may be collected by surveys, order forms, or registration pages operated by third parties. This method of collection is collectively known as a “Survey.” In such Surveys, Company or a third party may ask you to provide Personal Information including your name, email address, street address, zip code, telephone numbers (including cell phone numbers and carriers), birth date, gender, salary range, education and marital status, occupation, social security number, employment information, personal and online interests, and such other information as may be requested from time to time. Company may also collect such information concerning you from another source and uses that information in combination with information provided from the Website or Surveys. Completing the Surveys is completely voluntary, and you are under no obligation to provide Survey Information to Company or a third party.
                                </p>
                                <p>
                                    <strong>1.3.</strong> Third Party Information. 
                                    <br />
                                    Company may collect Personal Information from you when you provide information to a third party and Company subsequently acquires or uses the information provided by the third party. Such information may include, but is not limited to, your name, email address, street address, zip code, telephone numbers (including cell phone numbers and carriers), birth date, gender, salary range, education and marital status, occupation, industry of employment, personal and online interests, and such other information you may have provided to the third party. When acquiring this information, Company seeks assurances from the third party that you agreed to provide and have such information acquired by Company. If you did not give express permission, or you would like to remove your permission, you may suppress all of your information by sending notification to us at support@tueliges.us.
                                </p>
                                <p>
                                    <strong>1.4.</strong> Other Methods of Collecting Personal Information. 
                                    <br />
                                    Other occasions when Company obtains information from you include: (1) when you claim a prize or seek to redeem an offer by Company or by a third party; (2) when you request assistance through Company's customer service department; and (3) when you voluntarily subscribe to a Company service or newsletter.
                                </p>
                                <p>
                                    <strong>1.5.</strong> Cookies, Web Beacons, and Other Info Collected Using Technology. 
                                    <br />
                                    Company currently uses cookie and web beacon technology to associate certain Internet-related information about you with information about you in its database. Additionally, Company may use other new and evolving sources of information in the future.
                                    <ul>
                                        <li>
                                            (a) Cookies. “Cookies” are a feature in your browser software. If enabled, we may write cookies that may store small amounts of data on your computer about your visit to any of the pages of this Site. Cookies assist us in tracking which of our features appeal the most to you and what content you may have viewed on past visits. When you visit this site again, cookies can enable us to customize our content according to your preferences. We may use cookies to keep track of the number of return visits to this site; accumulate and report aggregate, statistical information on website usage; deliver specific content to you based on your interests or past viewing history; save your password for ease of access to our Site. You can disable cookies, although the Site may not function properly for you. Your browser preferences can be modified to accept or reject all cookies or request a notification when a cookie is set. You may read more about cookies at http://cookiecentral.com. To use all of the features and functionality of Company's websites, you need to accept cookies.
                                        </li>
                                        <li>
                                            (b) Web Beacons. A web beacon is a programming code that can be used to display an image on a web page but can also be used to transfer your unique user identification to a database and associate you with previously acquired information about an individual in a database. This allows Company to track certain websites you visit. Web beacons are used to track online behavioral habits for marketing purposes to determine products or services you may be interested in. In addition to using web beacons on web pages, Company also uses web beacons in email messages sent to individuals listed in Company's database.
                                        </li>
                                        <li>
                                            (c) IP Addresses. Company automatically tracks certain information based upon your behavior on the site. We may use this information to do internal research on our users' demographics, interests, and behavior to better understand, protect and serve you and our community. This information may include the URL that you just came from (whether this URL is on the site or not), which URL you next go to (whether this URL is on the site or not), your computer browser information, and your IP address. Your Internet Protocol ("IP") is a unique Internet "address" which is assigned to you by your Internet Service Provider ("ISP"). For local area network ("LAN"), DSL, or cable modem users, an IP address may be permanently assigned to a particular computer. IP addresses are automatically logged by Web servers, collecting information about a user's traffic patterns. While the IP address does not identify an individual by name, it may, with the cooperation of the ISP, be used to locate and identify an individual using the Web. Your IP address can, however, reveal what geographic area you are connecting from, or which ISP you are using. Finally, other websites you visit have IP addresses, and we may collect the IP addresses of those websites and their pages.
                                        </li>
                                        <li>
                                            (d) Computer Profiles. Company may also collect and accumulate other anonymous data which will help us understand and analyze the Internet experience of our visitors. For instance, Company may accumulate visitor data relating to referring domain names, the type of browsers used, operating system software, screen resolutions, color capabilities, browser plug-ins, language settings, cookie preferences, search engine keywords and JavaScript enablement. When you provide us with Personal Identification Information, we can use such visitor data to identify you.
                                        </li>
                                        <li>
                                            (e) Data Analysis. Data Analysis technology may be employed from time to time if used by a Client of Company.
                                        </li>
                                        <li>
                                            (f) New Technology. The use of technology on the Internet, including cookies and web beacons, is rapidly developing. As a result, Company strongly encourages individuals to revisit this policy for any updates regarding its use of new technology.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    <strong>1.6.</strong> No Information Collected from Children. 
                                    <br /> 
                                    Company will never knowingly collect any Personal Information about children under the age of 13. If Company obtains actual knowledge that it has collected Personal Information about a child under the age of 13, that information will be immediately deleted from its database. Because it does not collect such information, Company has no such information to use or to disclose to third parties.
                                </p>
                                <p>
                                    <strong>1.7.</strong> Credit Card Information and Bank Account Information. 
                                    <br />
                                    Company may, in certain instances, collect credit card numbers, bank account information and related information when an individual places an order on Company’s Website. When the credit card or bank account information is submitted to Company, such information is encrypted and is protected with SSL encryption software. Company will use the credit card information or bank account information for purposes of processing and completing the transaction you requested on the Website, and the credit card information or bank account information will be disclosed to third parties only as necessary to complete the requested purchase transaction. Use of Personal Information.
                                </p>

                            </section>
                            <section id="option-2">
                                <h5>Use of Personal Information.</h5>
                                <p>
                                    <strong>2.1.</strong> General Use. 
                                    <br />
                                    The following paragraphs describe how Company currently uses Personal Information, but Company may change or broaden its use at any time. As noted below, Company may update this policy from time to time. Company may use Personal Information to provide promotional offers to individuals by means of email advertising, telephone marketing, direct mail marketing, mobile marketing, online banner advertising, and package stuffers, among other possible uses. Regarding telephone and mobile text marketing, Company would obtain your prior express written consent to receive such marketing messages in accordance with federal law.
                                </p>
                                <p>
                                    <strong>2.2.</strong> Email and Unsubscribe Policy. 
                                    <br />
                                    Company uses Personal Information to provide Company or third-party promotional offers via email. Company may maintain separate email lists for different purposes. If an email recipient wishes to stop receiving email from a particular list, they need to follow the instructions at the end of the email message to unsubscribe from the list. To unsubscribe from all Company's email lists, a person need only send an email to support@tueliges.us with the subject line “email unsubscribe” or similar language.
                                    Company's unsubscribe process impacts only the future delivery of electronic mailings disseminated by Company on its own behalf. You may still receive electronic mailings sent on behalf of Third Parties and your Personal Information may still be shared with Third Parties for use in offline marketing and data appends, including email appends unless you unsubscribe as provided above.

                                    You should also note that unsubscribing from Company's electronic mailings will not automatically unsubscribe your information from any Third-Party business associates and licensees of the data. Since Third Party associates and licensee partners maintain separate databases from Company, and you will need to unsubscribe from each source individually, if desired. This allows you the freedom to pick and choose which subscriptions to maintain and which to discontinue.
                                </p>
                                <p>
                                    <strong>2.3.</strong> Content of Email Messages. 
                                    <br />
                                    You may receive certain commercial email messages sent by third parties for products which may be of interest to you. In such case, an Advertiser's name will appear in the "From:" and the email will have a method at the bottom of the email to unsubscribe from that Advertiser. Company is not responsible for the content or statutory compliance of third-party emails sent to you.
                                </p>
                                <p>
                                    <strong>2.4.</strong> Solicited Email.  
                                    <br />
                                    Company only sends email to individuals who have agreed on the Website to receive email from Company or to individuals who have agreed on a Third-Party website to receive email from Third Parties. As such, Company does not send unsolicited email messages. As a result, United States statutes requiring certain formatting for unsolicited email are not applicable to Company's email messages.
                                </p>
                                <p>
                                    <strong>2.6.</strong> Telemarketing.
                                    <br />
                                    Company may use Personal Information to advertise, directly or indirectly, to individuals using direct mail marketing or telemarketing using telephones and mobile phones. About telephone and mobile text marketing, Company would obtain your prior express written consent to receive such marketing messages in accordance with federal law. Further, if you are residing outside the United States, by registering and using this Website, you acknowledge that the processing of your Personal Information may involve the transfer of such Personal Information from within or outside the European Economic Area (“EEA”) to countries within or outside the EEA whose data protection regulation may not be as stringent as that within the European Union. We may use Personal Information to provide the services you've requested, including services that display customized content and advertising.
                                </p>
                                <p>
                                    <strong>2.7.</strong> Wireless Addresses.
                                    <br /> 
                                    If the e-mail address you provide to Company is a wireless e-mail address, you agree to receive e-mail messages at such address from Company or its business associates (unless and until you have elected not to receive such messages by following the instructions in the unsubscribe portion of this policy). You understand that your wireless carrier's standard rates apply to these messages. You represent that you are the owner or authorized user of the wireless device on which the e-mail messages will be received, and that you are authorized to approve the applicable charges.
                                </p>
                                <p>
                                    <strong>2.8.</strong>Use of Technology Information. 
                                    <br />
                                    Company may use Technology Information (1) to match a person's Personal Information and Third-Party List Information to other categories of Personal Information to make and improve profiles of individuals, (2) to track a person's online browsing habits on the Internet, (3) to determine which areas of Company's websites are most frequently visited. This information helps Company to better understand the online habits of individuals so that Company can target advertising and promotions to them.
                                </p>
                                <p>
                                    <strong>
                                        2.9.
                                    </strong> Profiles of Individuals. 
                                    <br />
                                    Company may use Personal Information to make a profile of an individual. A profile can be created by combining Survey Information and Third-Party List Information with other sources of Personal Information such as information obtained from public databases.
                                </p>
                                <p>
                                    <strong>
                                        2.10. 
                                    </strong>
                                        Storage of Personal Information. 
                                    <br />
                                    Company stores the Personal Information in a database on its computers. Company computers have security measures (such as a firewall and password protections) in place to protect against the loss, misuse, and alteration of the information under Company's control. Notwithstanding such measures, Company cannot guarantee that its security measures will prevent its computers from being illegally accessed, and the Personal Information on them stolen or altered.
                                    Other Use of Personal Information. Company may use your Personal Information in the following ways:
                                </p>

                            </section>
                            <section id="option-3">
                                <h5>
                                    Other Use of Personal Information. Company may use your Personal Information in the following ways:
                                </h5>
                                <p>
                                    <strong>
                                        3.1. 
                                    </strong>
                                        Public Forums. 
                                    <br />
                                        When you contribute to a public area or feature of our website, such as a chat room, bulletin board, list serve, blog, wiki or other open forum that we may make available on or through the Website, the information that you submit will be made available to the general public and will not be considered “Personal Information” for purposes of this Privacy Policy. For this reason, we recommend that you do not submit any sensitive information, including your full name, home address, phone number, other information that would enable other users to locate you or your financial information on these areas of our website. Instead, make up a username that does not disclose your personal identity.
                                </p>
                                <p>
                                    <strong>
                                        3.2. 
                                    </strong>
                                        Third Party Offers.
                                    <br />
                                    Company may provide your Personal Information to third parties with whom we have a business relationship for the purposes of securing the services and products you have requested or provide you with additional marketing materials from which you may choose additional products or services. Company may make your Personal Information available to companies or other entities not affiliated with the Company that have goods, services and offers that might be of interest to you so that they may send you these offers.
                                </p>
                                <p>
                                    <strong>
                                        3.3.
                                    </strong>
                                        Marketing.
                                    <br />
                                    Company will use your Personal Information for any marketing and survey purpose on behalf of Company and its affiliates and subsidiaries to send information to you about additional goods or services that may be of interest to you. In addition, Company will disclose your Personal Information to third party agents and independent contractors to help us conduct our marketing and survey efforts including but not limited to direct marketing. You may have no relationship with these other companies.
                                </p>
                                <p>
                                    <strong>
                                        3.4. 
                                    </strong>
                                        Service Providers. 
                                    <br />
                                    Company may use third parties to help operate our Website and deliver products and services, and may share your Personal Information with our affiliates, service providers and other third parties that provide products or services for or through this Website or for our business (such as Website or database hosting companies, address list hosting companies, e-mail service providers, analytics companies, distribution companies, fulfillment companies, and other similar service providers that use such information on our behalf). Unless otherwise stated, these companies do not have any right to use the Personal Information we provide to them beyond what is necessary for them to assist us. When you conduct e-commerce with one of the e-commerce affiliates or service providers to which the Website may be linked, certain Personal Information such as your e-mail and home address may be collected by the service provider's server and made available to us.
                                </p>
                                <p>
                                    <strong>
                                        3.5. 
                                    </strong>
                                        Aggregate Statistics.
                                    <br />
                                    Company may disclose aggregate statistics regarding user behavior as a measure of interest in, and use of, our website and e-mails to third parties in the form of aggregate data, such as overall patterns or demographic reports that do not describe or identify any individual user.
                                </p>
                                <p>
                                    <strong>
                                        3.6. 
                                    </strong>
                                        Complying with Legal Process.
                                    <br />
                                    Company will use or disclose your Personal Information in response to subpoenas, court orders, warrants, or legal process, or to otherwise establish or exercise our legal rights or defend against legal claims or in the event you violate or breach an agreement with Company. Company will use and disclose your Personal Information if we believe you will harm the property or rights of Company, its owners, or those of Company's other customers. Finally, we will use or disclose your Personal Information if we believe it is necessary to share information to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Company's terms of use, or as otherwise required by law when responding to subpoenas, court orders and other legal processes.
                                </p>
                                <p>
                                    <strong>3.7.</strong>
                                    Order Fulfillment.
                                    <br />
                                    Company will transfer your Personal Information to third parties when necessary to provide a product or service that you order from such third party while using Company's websites or when responding to offers provided by Company.
                                </p>
                                <p>
                                    <strong>
                                        3.8.
                                    </strong>
                                        Data Summary. 
                                    <br />
                                    Company may sell or transfer non-individualized information, such as summary or aggregated anonymous information about all persons or sub-groups of persons.
                                </p>
                            </section>
                            <section id="option-4">
                                <h5>Privacy Practices of Third Parties.</h5>
                                <p>
                                    <strong>
                                        4.1.
                                    </strong>
                                    Advertiser cookies and web beacons. 
                                    <br />
                                    Advertising agencies, advertising networks, and other companies who place advertisements on the websites and on the internet generally may use their own cookies, web beacons, and other technology to collect information about individuals. Company does not control the use of such technology and Company has no responsibility for the use of such technology to gather information about you.
                                </p>
                                <p>
                                    <strong>
                                        4.2. 
                                    </strong>
                                    Links.
                                    <br />
                                    The websites and email messages sometimes contain hypertext links to the websites of third parties. Company is not responsible for the privacy practices or the content of such other websites. Linked websites may contain links to websites maintained by third parties. Such links are provided for your convenience and reference only. Company does not operate or control in any respect any information, software, products, or services available on such third-party websites. The inclusion of a link to a website does not imply any endorsement of the services or the site, its contents, or its sponsoring organization.
                                </p>
                                <p>
                                    <strong>
                                        4.3. 
                                    </strong>
                                    Affiliations/Merger/Sale.
                                    <br />
                                    Company further reserves the right to disclose, transfer or sell your Personal Information to companies who are affiliated with Company in Company's sole discretion. If Company changes ownership through an acquisition, merger, sale, or other change of business status, it reserves the right to transfer or assign the right to use your Personal Information collected from the Website.
                                </p>
                            </section>
                            <section id="option-5">
                                <h5>
                                    Website
                                </h5>
                                <p>
                                    <strong>
                                        5.0.
                                    </strong>
                                    Foreign use of the Website. 
                                    <br />
                                    To the extent that you are accessing the Website while domiciled outside of the United States, you acknowledge that the Personal Information you are providing Company is collected and stored in the United States and therefore consent to the transfer of information to and storage of the information outside of your domiciled country and in the United States.
                                </p>
                            </section>
                            <section id="option-6">
                                <h5>
                                    Consumer Rights
                                </h5>
                                <p>
                                    <strong>
                                        6.0. 
                                    </strong>
                                    California User Consumer Rights.
                                    <br />
                                    In accordance with California Civil Code Sec. 1789.3, California resident users are entitled to know that they may file grievances and complaints with California Department of Consumer Affairs, 400 R Street, STE 1080, Sacramento, CA 95814; or by phone at 888-356-2024; or by email to dca@dca.ca.gov. For more information about protecting your privacy, you may wish to visit: http://www.ftc.gov. If you have questions about this policy, please contact us at support@tueliges.us 
                                </p>
                            </section>
                        </article>
                    </div>
                    <Footer />
            </div>
    )
}
