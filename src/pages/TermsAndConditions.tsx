import { useNavigate } from "react-router";
import BurgerMenuAlternative from "../components/BurgerMenuAlternative";
import { LegalBurgerOptions } from "../interfaces/LegalBurgerOptions";
import Footer from "../layout/Footer";


export default function TermsAndConditions() {
    const navigate = useNavigate();

    function handleRedirectHome (){
        navigate("/");
        window.scrollTo(0, 0)
    }

    const burgerOptions: LegalBurgerOptions[] = [
        {
            id: 'option-1',
            label: '1. GENERAL'
        },
        {
            id: 'option-2',
            label: '2. WEBSITE ORDER TERMS'
        },
        {
            id: 'option-3',
            label: '3. SERVICE'
        },
        {
            id: 'option-4',
            label: '4. WHO MAY USE'
        },
        {
            id: 'option-5',
            label: '5. MEMBERSHIP FEE'
        },
        {
            id: 'option-6',
            label: '6. RENEWALS'
        },
        {
            id: 'option-7',
            label: '7. RIGHT TO CANCEL MEMBERSHIP'
        },
        {
            id: 'option-8',
            label: '8. CUSTOMER SERVICE INFORMATION'
        },
        {
            id: 'option-9',
            label: '9. BILLING ERRORS'
        },
        {
            id: 'option-10',
            label: '10. LIABILITY'
        },
        {
            id: 'option-11',
            label: '11.INDEMNIFICATION'
        },
        {
            id: 'option-12',
            label: '12. CONFIDENTIALITY'
        },
        {
            id: 'option-13',
            label: '13. NO AGENCY RELATIONSHIP'
        },
        {
            id: 'option-14',
            label: '14. TERMINATING THE PROGRAMS WEB SITE'
        },
        {
            id: 'option-15',
            label: '15. VIRUSES; DESTRUCTION OF THE PROGRAMS WEB SITE'
        },
        {
            id: 'option-16',
            label: '16. TECHNICAL ISSUES'
        },
        {
            id: 'option-17',
            label: '17. ELECTRONIC COMMUNICATIONS'
        },
        {
            id: 'option-18',
            label: '18. NOTICES'
        },
        {
            id: 'option-19',
            label: '19. TERMINATION'
        },
        {
            id: 'option-20',
            label: '20. FRAUD'
        },
        {
            id: 'option-21',
            label: '21. INTELLECTUAL PROPERTY RIGHTS'
        },
        {
            id: 'option-22',
            label: '22. MISCELLANEOUS'
        },
        
    ]

    return (
            <div className="legals-page">
                    <div className="legals-page__content">
                        <header>
                            <img onClick={handleRedirectHome} src="/img/png/logo-alternative-uchooseit.png" alt="tu eliges" />
                            <BurgerMenuAlternative {...burgerOptions} />
                        </header>
                        <article>
                            <h2>Terms & Conditions</h2>
                            <p>
                                <strong>
                                    Date of Last Revision: 1/1/2025
                                </strong>
                            </p>
                            <p>
                                Welcome to the uchooseit.us website (the "Website") a member of the uchooseit.us family of Internet properties. These Terms and Conditions of Use is a legal agreement (the "Agreement") between You, the individual, company, or organization ("you," "your", or "Customer") and uchooseit.us. ("we," "our," or "Company") which operates www.uchooseit.us. This Agreement sets forth the rights and responsibilities of both you and our Company regarding the use of our website.
                            </p>
                            <p>
                                By accessing, registering, or placing an order from our Website, you are agreeing to be bound by this Agreement and are becoming a party thereto. Please take the time to read this Agreement in full. If you do not agree to the terms and conditions ("Terms") of this Agreement, do not use this Website or order product from us. Your use of this Website means that you agree to the Terms of this Agreement. From time to time, we may revise this Agreement. For your convenience we will change the “Last Updated” date above to reflect changes to this Agreement. It is your sole responsibility to review this Agreement for changes prior to use of the Website.
                            </p>
                            <section id="option-1">
                                <h5>1. GENERAL</h5>
                                <p>
                                This Agreement and the transactions made through our website are governed by the Electronic Signatures in Global and National Commerce Act. When you place an order by clicking any button containing the words "Submit," or "Order Now," or "Confirm Order," or similar syntax, you manifest your agreement to the terms and conditions in this document and you are deemed to have read and agreed to the terms and conditions in this document. By placing an order, you are electronically singing your order and authorizing us to charge payments against your debit or credit card that you provided. If you do not agree to be bound by these Terms, you may not access or use the Website, or purchase any product(s) through the Website. It is suggested that you print this form for your personal records.
                                </p>

                            </section>

                            <section id="option-2">
                                <h5>2. WEBSITE ORDER TERMS</h5>

                                <p>
                                    When you place an order from our Website, you will be presented with the total amount of all relevant charges which will vary depending upon your order. For example, on all orders you will clearly see the product cost, the processing cost, any discounts, and, if applicable, the sales tax cost. Please note that by law we must charge sales TAX on all orders placed according to the laws of each State.
                                </p>

                            </section>

                            <section id="option-3">
                                <h5>3. SERVICE</h5>
                                <p>
                                    The services and benefits that uchooseit.us will provide you during the term of your uchooseit.us membership will exclusively include access to the following: More than one million places to save in four categories nationwide. to). Retail & Services: With over 150,000 options for clothing, technology, services, auto, home, groceries, health, fitness, and more. b). Food: With over 50,000 options for casual and fine dining, fast food, pizza, catering, and more. c). Activities and Fun: with more than 50,000 options for theme parks, recreation, adventure entertainment, movies, golf, and more. d). Travel: with more than 850,000 options for hotels, car rentals, condos, airport services, cruises, tours, and more. As a member of uchooseit.us, you have access to a toll-free number +1 (888) 731-7063 that will help you use the services described above. uchooseit.us will not be considered a merchant, seller or supplier of any product or service provided to you through uchooseit.us. uchooseit.us reserves the right to change the terms and conditions of this Agreement at any time and without prior notice. uchooseit.us may terminate this Agreement upon written notice and refund you the current terms membership fee unless the reason for such termination is your failure to pay or your misuse of uchooseit.us in which event no such refund will be made to you. 
                                </p>
                            </section>

                            <section id="option-4">
                                <h5>4. WHO MAY USE</h5>
                                <p>
                                    You agree that you will use uchooseit.us services only for your own behalf and for the members of your immediate family residing in your household. You will be responsible for all use of your membership number and must notify uchooseit.us immediately of any unauthorized use of your membership number, or the theft or misplacement of your membership number. 
                                </p>
                            </section>

                            <section id="option-5">
                                <h5>5. MEMBERSHIP FEE</h5>
                                <p>
                                    For your convenience, your membership fee will be automatically billed to the credit or debit card account you designated when you registered with uchooseit.us (designated as the billing source), in accordance with the billing terms that will be provided to you upon registration at uchooseit.us. The charge on your credit card will appear as: uchooseit.us. Available membership plans are: $47.99 annually or if you have a referral promotional code, the price is $23.99 annually.
                                </p>
                            </section>

                            <section id="option-6">
                                <h5>6. RENEWALS</h5>
                                <p>
                                    Unless you notify uchooseit.us that you do not wish to renew your membership, uchooseit.us will automatically renew your membership at the end of each term and bill the then-current renewal fee to the credit or debit card account designated by you when you joined uchooseit.us. You will be notified of any price increase and may cancel your membership if you do not want to continue to be billed at the new price. 
                                </p>
                            </section>
                            
                            <section id="option-7">
                                <h5>7. RIGHT TO CANCEL MEMBERSHIP</h5>
                                <p>
                                    (a) You have the right to cancel this Agreement at any time. You may cancel this Agreement by emailing support@uchooseit.us. Cancel this Agreement during your trial, and you will owe nothing further; at any time thereafter, you will owe nothing further. You will remain liable for any other fees, purchases, or charges to be paid pursuant to this Agreement. (b) If uchooseit.us determines it is unable to bill the membership fee due hereunder to your designated billing source, uchooseit.us shall have the right to terminate this Agreement in which event you will no longer have access to any of the uchooseit.us benefits. In addition to uchooseit.us termination rights set forth above, uchooseit.us may elect in its sole discretion to keep this Agreement in effect but suspend your access to all the uchooseit.us benefits, until such time (if any) as uchooseit.us is able to bill the membership fee due hereunder to your designated billing source. 
                                </p>
                            </section>
                            <section id="option-8">
                                <h5>8. CUSTOMER SERVICE INFORMATION</h5>
                                <p>
                                    To contact our Customer Service Department, please email support@uchooseit.us. Please allow 24 hours for our Customer Service Department to respond to your inquiry. Your inquiry will be processed in the order it was received. 
                                </p>
                            </section>

                            <section id="option-9">
                                <h5>9. BILLING ERRORS</h5>
                                <p>
                                    If you believe that you have been billed in error, please contact our Customer Service Department at support@uchooseit.us immediately. Please allow 24 hours for our Customer Service Department to respond to your inquiry. Your inquiry will be processed in the order it was received. If we do not hear from you within 30 days after such billing error first appears on any account statement, the billing will be deemed accepted by you for all purposes, including resolution of inquiries made by your credit card issuer. You are deemed to have released Company from all liabilities and claims of loss resulting from any error or discrepancy that is not reported to Company within 30 days of its appearance on your credit card account statement.
                                </p>
                            </section>
                            <section id="option-10">
                                <h5>10. LIABILITY</h5>
                                <p>
                                    a) uchooseit.us and its affiliates shall have no liability to you as a seller of any products or services, including, without limitation, any liability for any defective products, provided to you through the program. Neither uchooseit.us nor any of its affiliates make any warranty, express or implied, with respect to any products or services sold or information delivered or provided to you in connection with the program, including any warranty of merchantability or fitness for a particular purpose. Neither uchooseit.us nor any of its affiliates warrant, guarantee, or make any representation regarding the quality of, or accuracy of advertisements for, any merchandise, products, or services offered or provided by affiliated merchants or other vendors. Neither uchooseit.us nor any of its affiliates assume any liability for damages, direct or indirect, consequential, or incidental, in connection with the performance of the services described herein or your request, use or attempted use of such services. In no event shall uchooseit.us and its affiliates' aggregate liability to you exceed the amount of the program membership fee paid by you to uchooseit.us. uchooseit.us and its affiliates shall have no liability for any delay or failure in performance or delivery due to any cause beyond their control, including delay due to union disputes or factory production schedules. (b) All Vendors operate independently of, and are not under the control of, the Program in any way. The Program may provide an index page or other description on the Programs Web Site of certain Affiliated Merchant's terms which is for convenience only. Neither uchooseit.us nor any of its affiliates is responsible for changes to, or discontinuance of, any special offer or coupon code. It is your responsibility to make sure that all specials are valid. If you choose to use coupons and specials that are listed or are not listed on the Affiliated Merchants landing page, we cannot guarantee that you will be eligible to receive a discount on your purchases. You understand that neither uchooseit.us nor any of its affiliates operate or control the products or services offered by third parties, promotional partners or participating Affiliated Merchants or other Vendors. Third-party Web sites and online merchants accessed through the Program are responsible for all aspects of order processing, order fulfillment, shipping and handling, billing, and customer service. uchooseit.uss sole obligation hereunder shall be to forward to the applicable Vendor all payments for services or products ordered. uchooseit.us is not a party to the transactions entered into between you and the Vendors with which you choose to do business. If you buy products or services from any Vendor, you become a customer of such Vendor and therefore must direct any comments, complaints or inquiries regarding your purchases to such Vendor, and not to uchooseit.us. All rules, policies (including privacy policies) and operating procedures of those Vendors will apply to you while you are using those Vendors' Web sites or local store locations. No reference to a third-party product or service indicates an endorsement by the Program. uchooseit.us reserves the right to eliminate merchants, including Affiliated Merchants, vendors, or suppliers (collectively, "Vendors"), as participants in the Program. Program members can locate participating Vendors online at www.uchooseit-us.enjoymydeals.com. uchooseit.us is not responsible for any refund to you due to Vendor closure, discontinuance as a participant in the Program, or restrictions in the event their products or services are no longer available to you. (c) You agree that any claim regarding services or products shall be made against the Vendor of such services or products, as applicable, and not uchooseit.us. Any information provided by uchooseit.us to you is subject to change without notice. All services ordered are subject to the availability of such services from the applicable Vendor. (d) The terms of this Section 3 shall survive any termination, cancellation, or expiration of this Agreement. 
                                </p>
                            </section>

                            <section id="option-11">
                                <h5>11.INDEMNIFICATION</h5>
                                <p>
                                    You agree to defend, indemnify, and hold harmless Company, its officers, directors, members, shareholders, employees, independent contractors, telecommunication providers, and agents, from and against any and all claims, actions, loss, liabilities, expenses, costs, or demands, including without limitation, legal and accounting fees, for all damages directly, indirectly, and/ or consequentially resulting or allegedly resulting from your misuse of the Website, or your breach of any of these terms and conditions of this Agreement. We shall promptly notify you by electronic mail of any such claim or suit and cooperate fully (at your expense) in the defense of such claim or suit. If we do not hear from you promptly, we reserve the right to defend such claim or suit and seek full compensation from you.
                                </p>
                            </section>

                            <section id="option-12">
                                <h5>12. CONFIDENTIALITY</h5>
                                <p>
                                    All information and software provided through the Program is and shall remain the sole and exclusive property of uchooseit.us. You shall not publish, broadcast, retransmit or otherwise reproduce the information or software in any medium. Any violation of this restriction is an infringement of copyright or proprietary rights in the information and software. 
                                </p>
                            </section>

                            <section id="option-13">
                                <h5>13. NO AGENCY RELATIONSHIP</h5>
                                <p>
                                    Nothing in this Agreement shall be construed as creating or constituting a partnership, joint venture or agency relationship between uchooseit.us and the Affiliated Merchants or between uchooseit.us and any other Vendor. Neither the Affiliated Merchants nor any other Vendor shall have the ability to create any obligation on behalf of uchooseit.us. 
                                </p>
                            </section>

                            <section id="option-14">
                                <h5>14. TERMINATING THE PROGRAMS WEB SITE</h5>
                                <p>
                                    uchooseit.us retains the right at any time and from time to time to discontinue or modify, or temporarily or permanently terminate, the Programs Web Site (or any part thereof) with or without notifying you. If uchooseit.us discontinues the Programs Web Site, uchooseit.us will not be liable to you or any third party for such discontinuance, modification, or termination.
                                </p>
                            </section>

                            <section id="option-15">
                                <h5>15. VIRUSES; DESTRUCTION OF THE PROGRAMS WEB SITE</h5>
                                <p>
                                    By participating on the Programs Web Site, you agree to not upload, post, e-mail or otherwise send or transmit any material that contains software viruses, or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment. You also agree to not interfere with the servers or networks connected to the Programs Web Site or to disobey any requirements, procedures, policies, or regulations of networks connected to the Programs Web Site. Any attempt by a user to deliberately damage the programs web site or to undermine the legitimate operation of such site is a violation of criminal and civil laws; if such an attempt is made, uchooseit.us reserves the right to seek remedies and damages from the user to the fullest extent permitted by law, including criminal prosecution. uchooseit.us assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect your computer equipment or other property due to your access to, use of, or browsing in the Programs Web Site or your downloading of any materials, data, text, images, video, or audio from such site. 
                                </p>
                            </section>
                            <section id="option-16">
                                <h5>16. TECHNICAL ISSUES</h5>
                                <p>
                                    By utilizing the Program, you acknowledge that technical processing and transmission of the Program’s Web Site, including the information you enter, may involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices. uchooseit.us makes no warranty that the functions of the program’s web site will be uninterrupted, timely, secure or error free or that any errors on such site will be corrected. uchooseit.us assumes no responsibility for (a) any problems relating to technical malfunction or delays of telephone networks or lines, computer on-line systems, servers, providers, computer equipment, or software, (b) failure of any e-mail to be received due to technical problems or traffic congestion of the internet, uchooseit.us sites, or any combination thereof, and/or for (c) any injury or damage to users’ computers or any other computer resulting from downloading any materials relating to the program’s web site. 
                                </p>
                            </section>
                            <section id="option-17">
                                <h5>17. ELECTRONIC COMMUNICATIONS</h5>
                                <p>
                                    uchooseit.us, at its option, may communicate with you regarding the Program by mail, by telephone or by electronic communications. uchooseit.us may communicate with you electronically by means of electronic mail to the e-mail address you provide when you sign up for the Program and/or postings to the Program's website. uchooseit.us may communicate electronically to you the following types of communications: Membership Terms and Conditions (including any amendments thereto), notices or disclosures regarding the Program, payment and billing authorizations, and other matters relating to your use of the Program. You may contact uchooseit.us at the email address listed above to request another electronic copy of an electronic communication without a fee. You may also request a paper copy of the terms of the payment authorization without a fee. You may contact uchooseit.us at the same e-mail address listed above to update your contact information or to withdraw your consent to receive electronic communications. uchooseit.us reserves the right to terminate your use of the Program if you decline or withdraw your consent to receive electronic communications from uchooseit.us. You will need the following software and hardware to access electronic communications sent to you by uchooseit.us as part of your Program membership: IBM or MAC compatible computer, Internet access, a working e-mail address, and Internet Browser (Internet Explorer, Chrome and Firefox). To retain copies of electronic communications, you must print a copy using a printer attached to your computer or save an electronic copy to your computer's disk or other storage device. 
                                </p>
                            </section>
                            <section id="option-18">
                                <h5>18. NOTICES</h5>
                                <p>
                                    Any notice or other communications arising in relation to this Agreement shall be given by sending an e-mail to the latest email address that one party has notified in writing to the other. In the case of sending notices to you, Company will use the email address you provided to Company when you ordered your product. Such notices or communications (where properly addressed) shall be considered received on the earliest of (i) the email being acknowledged by the recipient as received; (ii) receipt by the sender of an automated message indicating successful delivery or the email having been opened; or (iii) the expiry of forty-eight (48) hours after transmission, provided that the sender has not received notification of unsuccessful transmission.
                                </p>
                            </section>
                            <section id="option-19">
                                <h5>19. TERMINATION</h5>
                                <p>
                                    We reserve the right to terminate your access to or use of this Website and/or your subscription to the product should we believe that you have violated any of the terms of this Agreement or if we believe you have sought, in bad faith, charge backs, credit backs, cash back points, product returns, discounts or any other conduct designed to injure, harass or disrupt this Website or the Company's business operations.
                                </p>
                            </section>
                            <section id="option-20">
                                <h5>20. FRAUD</h5>
                                <p>
                                    We reserve the right, but undertake no obligation, to actively report and prosecute actual and suspected credit card fraud. We may, in our discretion, require further authorization from you such as a telephone confirmation of your order and other information. We reserve the right to cancel, delay, refuse to ship, or recall from the shipper any order if fraud is suspected. We capture certain information during the order process, including time, date, IP address, and other information that will be used to locate and identify individuals committing fraud. If any Website order is suspected to be fraudulent, we reserve the right, but undertake no obligation, to submit all records, with or without a subpoena, to all law enforcement agencies and to the credit card company for fraud investigation. We reserve the right to cooperate with authorities to fully prosecute offenders of the law.
                                </p>
                            </section>
                            <section id="option-21">
                                <h5>21. INTELLECTUAL PROPERTY RIGHTS</h5>
                                <p>
                                    The Website, its content and compilation of content is owned by Company or its affiliates or agents and is protected by United States Copyright Act of 1976, as amended, and the copyright laws of other countries. All content, logos, designs, and icons, unless noted otherwise, are proprietary to Company or its affiliates or agents. The materials provided in this service, including graphic images, buttons, and text, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way, without the prior written permission, except that you may download, display, or print one copy of the materials on a single computer solely for your personal, non-commercial, home use, provided that you keep intact all copyright, trademark, and other proprietary notices. Modification of the materials or use of the materials for any other purpose is a violation of Company, its affiliates' or its third-party information providers' copyrights and other proprietary rights.
                                </p>
                            </section>
                            <section id="option-22">
                                <h5>22. MISCELLANEOUS</h5>
                                <p>
                                    Choice of Law/Venue. This Agreement is governed by and construed under the laws of Cyprus. The federal and state courts of Cyprus will have exclusive jurisdiction to adjudicate any non-arbitrable dispute arising out of this Agreement. Assignment. This Agreement and the rights and liabilities of the parties hereto inure to the benefit of their respective successors and assigns. Company may assign this Agreement to any successor entity. Customer may not assign without the written permission of Company. Severability. If for any reason a court of competent jurisdiction or an arbitrator finds any provision of this Agreement, or any portion thereof, to be unenforceable, that provision will be enforced to the maximum extent permissible and the remainder of these Terms and Conditions will continue in full force and effect. Attorneys' Fees. In the event any Party shall commence any claims, actions, formal legal action, or arbitration to interpret and/or enforce the terms and conditions of this Agreement, or relating in any way to this Agreement, including without limitation asserted breaches of representations and warranties, the prevailing party in any such action or proceeding shall be entitled to recover, in addition to all other available relief, its reasonable attorney's fees and costs incurred in connection therewith, including attorneys' fees incurred on appeal. No Waiver. No waiver of or by Company shall be deemed a waiver of any subsequent default of the same provision of this Agreement. Headings. All headings are solely for the convenience of reference and shall not affect the meaning, construction, or effect of this Agreement. Modifications. Company reserves the right to change any of the provisions posted herein and you agree to review these terms and conditions each time you visit the Website. Your continued use of the Website following the posting of any changes to these terms and conditions constitutes your acceptance of such changes. Company does not and will not assume any obligation to provide you with notice of any change to this document and you acknowledge and agree to same. Unless accepted by Company in writing, you may not amend these terms and conditions in any way. Entire Agreement. This Agreement constitutes the entire agreement between the parties with respect to your access and use of the Website and you’re ordering and use of the product, and supersedes and replaces all prior understandings or agreements, written or oral, regarding such subject matters. If you have any questions about this Agreement, please contact our Customer Service Department at support@uchooseit.us.
                                </p>
                            </section>
                            <p>
                                <strong>
                                    Business Address
                                </strong>
                                <br />
                                uchooseit.us, support@uchooseit.us
                                <br />
                                Thank you! © 2024 uchooseit.us LLC. All rights reserved.
                            </p>
                        </article>
                    </div>
                    <Footer />
            </div>
    )
}
