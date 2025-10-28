import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "../components/Modal";

export default function PrivacyPolicy() {
    
    const [searchParams] = useSearchParams();
    const urlParamOpener = searchParams.get('privacy_policy')
    const [open, setopen] = useState(urlParamOpener ? true : false)


    return (
    <>
        <button className="border-none cursor-pointer " onClick={()=>{setopen(true)}}>
            Privacy Policy
        </button>
        <Modal isOpen={open} onClose={()=>{setopen(false)}} >
            <div className="relative flex flex-col justify-stretch items-stretch gap-y-5 w-full h-full overflow-y-auto list pb-8">
                <h2 className="font-semibold text-left">
                    Privacy Policy <br />
                    Last Revised: September 8, 2025
                </h2>
                <p>
                    Uchooseit.us LLC (“Uchooseit.us,” “Company,” “We,” or “Our”) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, store, and safeguard your personal information when you use our website 
                    <a href="https://www.uchooseit.us" target="_blank" rel="noopener noreferrer" className="font-semibold underline mx-1">Uchooseit.us</a>, our Transparency App, or any of our related services.
                    By accessing or using our Website or services, you agree to this Privacy Policy. If you do not agree, please do not use our Website or services.
                </p>
                <hr />
                <h2 className="font-semibold text-left">
                    1. Information We Collect
                </h2>
                <p >
                    We collect only the information necessary to provide you with membership benefits, process payments securely, and improve your experience:
                </p>
                <ul>
                    <li>
                        <strong>Personal Information:</strong> Name, email address, phone number, billing address.
                    </li>
                    <li>
                        <strong>Payment Information:</strong> Processed securely through Recurly and its integrated providers (e.g., Stripe). Uchooseit.us does not store full credit card or bank account details.
                    </li>
                    <li>
                        <strong>Preferences and Usage Data:</strong> Your category interests (Travel, Dining, Entertainment, Shopping), device/browser data, IP address, and cookies.
                    </li>
                    <li><strong>Communications:</strong> When you contact us or subscribe to our newsletters.</li>
                </ul>
                <p >
                    We <strong>do not collect</strong> Social Security numbers, salary information, or sensitive personal identifiers.
                </p>

                <hr />

                <h2 className="font-semibold text-left">
                    2. How We Use Your Information
                </h2>
                <ul>
                    <li>To process memberships and payments securely.</li>
                    <li>To provide you with access to discounts, savings, and membership benefits.</li>
                    <li>To personalize your experience, including showing relevant offers.</li>
                    <li>To improve our Website, Transparency App, and services through analytics.</li>
                    <li>To communicate with you about your account, updates, or special offers (only if you consented).</li>
                    <li>To comply with legal obligations or protect our rights.</li>
                </ul>
                <p >We do <strong>not sell your personal information</strong> to third parties.</p>

                <hr />

                <h2 className="font-semibold text-left">
                    3. Transparency and Data Sharing
                </h2>
                <ul>
                    <li><strong>Transparency App:</strong> Only companies or individuals who participate in the <strong>Affiliate Program</strong> may access certain sales data in real time. This access is strictly limited to viewing information related to their participation in the <strong>Revenue Sharing model</strong>, ensuring transparency while protecting all other members’ personal information.</li>
                    <li><strong>Service Providers:</strong> We may share data with trusted partners (e.g., hosting providers, analytics, email services) only to operate our services.</li>
                    <li><strong>Legal Compliance:</strong> We may disclose information if required by law, court order, or to prevent fraud or abuse.</li>
                    <li><strong>Aggregate Data:</strong> We may share non-identifiable, aggregated statistics (e.g., general usage trends).</li>
                </ul>

                <hr />

                <h2 className="font-semibold text-left">
                    4. Cookies and Analytics
                </h2>
                <p >We use cookies and similar technologies to:</p>
                <ul>
                    <li>Recognize repeat visits and preferences.</li>
                    <li>Analyze site performance and usage through tools such as Google Analytics.</li>
                    <li>Improve functionality and marketing relevance.</li>
                </ul>
                <p >
                    You can disable cookies in your browser, but some features may not work properly.
                </p>

                <hr />

                
                <h2 className="font-semibold text-left ">
                    5. Children’s Privacy
                </h2>
                <p >Uchooseit.us does not knowingly collect information from children under 13. If we become aware that we have collected such information, we will delete it immediately.</p>
            

                <hr />

                
                <h2 className="font-semibold text-left ">
                    6. Data Security
                </h2>
                <p >
                    We use SSL encryption and security protocols to protect your information. While we take all reasonable measures, no system is 100% secure, and we cannot guarantee absolute protection against unauthorized access.
                </p>
            
                <hr />

                
                <h2 className="font-semibold text-left ">
                    7. Your Rights
                </h2>
                <p >
                    Depending on your location, you may have rights to:
                </p>
                <ul>
                    <li>
                        Access, correct, or delete your personal information.
                    </li>
                    <li>
                        Restrict or object to our use of your information.
                    </li>
                    <li>
                        Opt-out of marketing communications at any time.
                    </li>
                </ul>

                <p >To exercise these rights, contact us at <a href="mailto:support@uchooseit.us" className="font-semibold underline underline-offset-2">support@uchooseit.us.</a></p>

                <hr />

                <h2 className="font-semibold text-left ">
                    8. International Users
                </h2>
                <p>If you access our Website from outside the United States, you consent to the transfer and storage of your information in the United States.</p>
                
                <hr />

                <h2 className="font-semibold text-left ">
                    9. California Consumer Rights
                </h2>
                <p>
                    California residents may contact the California Department of Consumer Affairs at 400 R Street, STE 1080, Sacramento, CA 95814; phone: 888-356-2024; email: dca@dca.ca.gov.
                </p>

                <hr />

                <h2 className="font-semibold text-left ">
                    10. Contact Us
                </h2>
                <p>
                    If you have questions or concerns about this Privacy Policy, please contact us:
                </p>
                <ul>
                    <li>
                         Email: <a href="mailto:support@uchooseit.us" className="font-semibold underline underline-offset-2 ">support@uchooseit.us</a>
                    </li>
                    <li>
                        Website: <a href="https://www.uchooseit.us" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 ">https://www.uchooseit.us</a>
                    </li>
                </ul>
                <hr />

                <p>
                    At Uchooseit.us, your privacy matters. We collect only what we need to deliver your membership benefits, process payments securely, and help you save. You’re always in control of your information.
                </p>
            </div>
        </Modal>
    </>
  )
}
