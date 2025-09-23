import { useState } from "react";
import Modal from "../components/Modal";

export default function TermsAndConditions() {
  const [open, setopen] = useState(false);

  return (
    <>
      <button
        className="border-none cursor-pointer "
        onClick={() => {
          setopen(true);
        }}
      >
        Terms And Conditions
      </button>
      <Modal
        isOpen={open}
        onClose={() => {
          setopen(false);
        }}
      >
        <div className="relative flex flex-col justify-stretch items-stretch gap-y-5 w-full h-full overflow-y-auto list pb-8">
          <h2 className="font-semibold text-left">
            Terms &amp; Conditions
            <br />
            Last Revised: September 8, 2025
          </h2>

          <div>
            <p>
              Welcome to Uchooseit.us (the “Website”). These Terms and
              Conditions (the “Terms” or the “Agreement”) form a legal agreement
              between Uchooseit.us LLC (“Uchooseit.us,” “we,” “us,” or “our”)
              and you (“you,” “your,” or “Customer”). By accessing, registering,
              or purchasing a membership through the Website, you agree to be
              bound by these Terms. If you do not agree, do not use the Website
              or services.
            </p>

            <p>
              We may update these Terms periodically. Changes will be posted
              with an updated Last Revised date. Your continued use of the
              Website constitutes acceptance of any changes.
            </p>
          </div>

          <h2 className="font-semibold text-left">
            1. Electronic Agreement &amp; Consent to Do Business Electronically
          </h2>
          <div>
            <p>
              By clicking “Submit,” “Order Now,” “Confirm Order,” or similar,
              you:
            </p>
            <ul>
              <li>agree to these Terms;</li>
              <li>
                authorize recurring charges to the payment method you provide
                (where applicable); and
              </li>
              <li>
                consent to receive communications electronically as described in
                Section 17.
              </li>
            </ul>
            <p>We recommend you print or save a copy for your records.</p>
          </div>

          <h2 className="font-semibold text-left">2. Pricing, Taxes &amp; Order Summary</h2>
          <div>
            <p>
              Before checkout, we display the total amount due, including
              membership price, applicable discounts, and any required
              taxes/fees based on the laws of your state. Sales tax may apply as
              required by law.
            </p>
          </div>

          <h2 className="font-semibold text-left">3. Service Description (Membership Benefits)</h2>
          <div>
            <p>
              Your Uchooseit.us membership provides access to curated savings
              across four categories in the U.S.:
            </p>
            <ul>
              <li>
                <strong>Shopping (Retail &amp; Services)</strong> — clothing,
                tech, auto, home, groceries, health/beauty, office, and more.
              </li>
              <li>
                <strong>Dining</strong> — casual &amp; fine dining, fast food,
                pizza, catering, etc.
              </li>
              <li>
                <strong>Entertainment</strong> — parks &amp; tickets,
                attractions, movies, events, recreation.
              </li>
              <li>
                <strong>Travel</strong> — hotels, cars, flights, and related
                services.
              </li>
            </ul>
            <p>
              Benefits are provided through participating third-party merchants
              and platforms. Uchooseit.us is not the seller, merchant, travel
              agency, or provider of the underlying goods/services—you redeem
              offers directly with participating merchants or platforms under
              their terms and availability.
            </p>
            <p>
              For assistance, contact{" "}
              <a href="mailto:support@uchooseit.us">support@uchooseit.us</a> or
              our toll-free line <span>(888) 556-2393</span>.
            </p>
          </div>

          <h2 className="font-semibold text-left">4. Eligibility &amp; Account Responsibility</h2>
          <div>
            <p>
              You must be 18+ and reside in the U.S. (or have legal capacity in
              your jurisdiction). Membership is for personal, non-commercial use
              by you and members of your immediate household living at the same
              address. You are responsible for safeguarding your login
              credentials and any activity under your account. Notify us
              immediately of unauthorized use.
            </p>
          </div>

          <h2 className="font-semibold text-left">5. Fees &amp; Plan Terms</h2>
          <div>
            <p>Public price: $47.99/year (USD).</p>
            <p>
              Promotions: Valid promo/referral codes may offer discounted
              pricing as displayed at checkout.
            </p>
            <p>
              Prices and available plans are subject to change for future terms
              (we’ll notify you of any renewal price change—see Section 6).
            </p>
            <p>Charges appear as Uchooseit.us (or our payment processor).</p>
          </div>

          <h2 className="font-semibold text-left">6. Auto-Renewal</h2>
          <div>
            <p>
              Your membership renews automatically each year to the payment
              method on file at the then-current annual price, unless you cancel
              before the renewal date. We will notify you if the renewal price
              changes. You can manage or cancel your membership as explained in
              Section 7.
            </p>
          </div>

          <h2 className="font-semibold text-left">7. Cancellations &amp; 7-Day Money-Back Guarantee</h2>
          <div>
            <p>
              Cancel anytime before your renewal date to avoid future charges.
            </p>
            <p>
              New purchases: you may request a full refund within 7 days of the
              initial purchase, provided you have not misused the service or
              violated these Terms.
            </p>

            <p>
              <strong>How to cancel:</strong>
            </p>
            <ul>
              <li>
                Online through your account portal:{" "}
                <a href="https://uchooseitus.recurly.com/account/create_account">
                  https://uchooseitus.recurly.com/account/create_account
                </a>
              </li>
              <li>
                Or by emailing{" "}
                <a href="mailto:support@uchooseit.us">support@uchooseit.us</a>{" "}
                with your full name, email address, and Member ID.
              </li>
            </ul>

            <p>
              If we are unable to bill your payment method, we may suspend or
              terminate your access until payment is resolved.
            </p>
          </div>

          <h2 className="font-semibold text-left">8. Transparency App &amp; Partner Access</h2>
          <div>
            <p>
              Only companies or individuals participating in our Affiliate
              Program may access limited real-time sales data related solely to
              their participation in the Revenue Sharing model. Access is
              read-only and does not include personal data of other members. We
              reserve the right to audit, limit, suspend, or revoke access to
              protect privacy and platform integrity.
            </p>
          </div>

          <h2 className="font-semibold text-left">9. Third-Party Merchants &amp; Offers</h2>
          <div>
            <p>
              Participating merchants/vendors (“Vendors”) operate independently.
              Their prices, inventory, eligibility, blackout dates, locations,
              and terms may change without notice. Coupon/offer validity is
              determined by the Vendor. Orders, returns, fulfillment, customer
              service, and disputes for third-party goods/services are between
              you and the Vendor under the Vendor’s terms and privacy policy.
            </p>
          </div>

          <h2 className="font-semibold text-left">10. Billing Issues</h2>
          <div>
            <p>
              If you believe you were billed in error, contact{" "}
              <a href="mailto:support@uchooseit.us">support@uchooseit.us</a>{" "}
              promptly. Please notify us within 30 days of the charge’s
              appearance; otherwise, the charge may be deemed accepted.
            </p>
          </div>

          <h2 className="font-semibold text-left">11. Prohibited Conduct</h2>
          <div>
            <p>You agree not to:</p>
            <ul>
              <li>
                misuse, resell, or commercially exploit membership benefits;
              </li>
              <li>
                scrape, copy, or reverse-engineer the Website or Transparency
                App;
              </li>
              <li>upload malware or interfere with security or operation;</li>
              <li>attempt to access data you’re not authorized to view;</li>
              <li>engage in fraud, abuse, or unlawful activity.</li>
            </ul>
            <p>We may suspend or terminate your account for violations.</p>
          </div>

          <h2 className="font-semibold text-left">12. Confidentiality &amp; Third-Party Platforms</h2>
          <div>
            <p>
              All information, content, and software provided through the
              Uchooseit.us membership program remain the sole and exclusive
              property of Uchooseit.us LLC. You may not reproduce, distribute,
              or use such materials beyond personal membership use without prior
              written consent.
            </p>

            <p>
              Additionally, please note that access to discounts and offers is
              provided through our technology partner Access VG, LLC dba Access
              Development, via:
            </p>
            <ul>
              <li>
                Web platform:{" "}
                <a href="https://uchooseitus.enjoymydeals.com/">
                  https://uchooseitus.enjoymydeals.com/
                </a>
              </li>
              <li>Mobile application: My Deals App</li>
            </ul>
            <p>
              These platforms are developed and operated by Access VG, LLC.
              Their Terms of Use, Privacy Policy, Consent Preferences, Contact
              Information, and FAQs apply when using the technology platform.
            </p>
          </div>

          <h2 className="font-semibold text-left">13. Intellectual Property Rights</h2>
          <div>
            <p>
              All content on this Website, including text, images, designs,
              logos, and software, is the property of Uchooseit.us LLC or its
              partners and is protected by copyright and other intellectual
              property laws. You may use this content only for your personal,
              non-commercial purposes. Any other use—such as copying,
              distributing, or modifying the materials—without our prior written
              permission is not allowed.
            </p>
          </div>

          <h2 className="font-semibold text-left">14. Limitation of Liability</h2>
          <div>
            <p>
              To the fullest extent permitted by law, Uchooseit.us LLC and its
              affiliates will not be liable for any indirect, incidental,
              consequential, special, exemplary, or punitive damages, or lost
              profits/revenue/data, arising from or related to your use of the
              membership, Website, or third-party offers. Our total liability
              for any claim shall not exceed the membership fees you paid to
              Uchooseit.us for the then-current term.
            </p>

            <p>
              Some jurisdictions do not allow certain limitations of liability.
              In those places, parts of this section may not apply to you. This
              means that if the law where you live gives you specific consumer
              rights that cannot be waived or limited by contract, those rights
              will remain in full effect and nothing in these Terms will reduce
              them.
            </p>
          </div>

          <h2 className="font-semibold text-left">15. Indemnification</h2>
          <div>
            <p>
              You agree to defend, indemnify, and hold harmless Uchooseit.us
              LLC, its officers, directors, employees, agents, and affiliates
              from any claims, losses, liabilities, damages, costs, and expenses
              (including reasonable attorneys’ fees) arising out of your: (a)
              misuse of the Website/membership; (b) violation of these Terms; or
              (c) violation of any law or third-party rights.
            </p>
          </div>

          <h2 className="font-semibold text-left">16. Modifications, Availability &amp; Technical Issues</h2>
          <div>
            <p>
              We may modify or discontinue any feature, merchant, or promotion
              at any time. We do not warrant that the Website or Transparency
              App will be uninterrupted, secure, or free of errors or viruses.
              You are responsible for implementing adequate safeguards (e.g.,
              anti-virus).
            </p>
          </div>

          <h2 className="font-semibold text-left">17. Electronic Communications</h2>
          <div>
            <p>
              You consent to receive communications electronically (email,
              in-app, or Website notices) about your membership, transactions,
              policy updates, and legally required disclosures. You may update
              your contact information or withdraw consent by contacting{" "}
              <a href="mailto:support@uchooseit.us">support@uchooseit.us</a>{" "}
              (withdrawal may limit service availability).
            </p>
          </div>

          <h2 className="font-semibold text-left">18. Termination</h2>
          <div>
            <p>
              We may terminate or suspend your access for any breach, fraud,
              non-payment, or to protect the platform or other users. You may
              terminate by canceling per Section 7. Sections that by nature
              should survive termination (e.g., IP, disclaimers, limitations,
              indemnity) will survive.
            </p>
          </div>

          <h2 className="font-semibold text-left">19. Fraud Prevention</h2>
          <div>
            <p>
              We may investigate suspected fraud and cooperate with law
              enforcement. We may cancel or delay orders for verification and
              record technical identifiers (e.g., IP, time/date) as part of our
              fraud-prevention efforts.
            </p>
          </div>

          <h2 className="font-semibold text-left">20. Intellectual Property Rights</h2>
          <div>
            <p>
              All content on this Website, including text, images, designs,
              logos, and software, is the property of Uchooseit.us LLC or its
              partners and is protected by copyright and other intellectual
              property laws. You may use this content only for your personal,
              non-commercial purposes. Any other use—such as copying,
              distributing, or modifying the materials—without our prior written
              permission is not allowed.
            </p>
          </div>

          <h2 className="font-semibold text-left">21. Miscellaneous</h2>
          <div>
            <p>
              <strong>Governing Law &amp; Venue:</strong> These Terms are
              governed by the laws of the State of Florida, U.S.A.. Any disputes
              must be resolved exclusively in the state or federal courts
              located in Miami-Dade County, Florida.
            </p>

            <p>
              <strong>Assignment:</strong> Uchooseit.us may assign or transfer
              this Agreement (for example, in a merger or acquisition). You may
              not transfer your rights or obligations without our written
              consent.
            </p>

            <p>
              <strong>Severability:</strong> If any part of these Terms is found
              invalid or unenforceable, the rest will remain in full effect.
            </p>

            <p>
              <strong>Attorneys’ Fees:</strong> If there is a legal dispute, the
              prevailing party may recover reasonable attorneys’ fees and costs.
            </p>

            <p>
              <strong>No Waiver:</strong> If we do not enforce a provision at
              any time, it does not mean we waive our right to enforce it later.
            </p>

            <p>
              <strong>Headings:</strong> Section titles are for convenience only
              and do not affect interpretation.
            </p>

            <p>
              <strong>Modifications:</strong> We may update these Terms from
              time to time by posting a revised version on the Website.
              Continued use of the Website or Services after changes means you
              accept the updated Terms. For material changes (like pricing or
              cancellation rights), we will provide notice by email or through
              your account.
            </p>

            <p>
              <strong>Entire Agreement:</strong> These Terms represent the
              entire agreement between you and Uchooseit.us and replace any
              prior agreements about your membership and use of the Website.
            </p>
          </div>

          <h2 className="font-semibold text-left">Contact</h2>
          <div>
            <p>Uchooseit.us LLC</p>
            <p>
              Email: <a href="mailto:support@uchooseit.us">support@uchooseit.us</a>
            </p>
            <p>
              Web <a href="https://www.uchooseit.us">https://www.uchooseit.us</a>
            </p>
            <p>© 2025 Uchooseit.us LLC. All rights reserved.</p>
          </div>
        </div>
      </Modal>
    </>
  );
}
