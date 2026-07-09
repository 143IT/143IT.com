import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — 143IT",
  description: "143IT Terms of Service. Read our terms and conditions for using our website and services.",
};

const effectiveDate = "July 9, 2026";

export default function TermsOfServicePage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="text-xl text-text/80">
            Last Updated: {effectiveDate}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose-blog prose prose-invert max-w-none">
            <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8 md:p-12 space-y-8 text-text/80">
              
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  1. Agreement to Terms
                </h2>
                <p>
                  By accessing or using the 143IT website ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Your continued use of the Website after any such modifications constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  2. Use of the Website
                </h2>
                
                <h3 className="text-xl font-heading font-bold mb-3 mt-6">
                  2.1 Permitted Use
                </h3>
                <p>You may use our Website for lawful purposes only. You agree to use the Website in accordance with all applicable laws and regulations.</p>

                <h3 className="text-xl font-heading font-bold mb-3 mt-6">
                  2.2 Prohibited Activities
                </h3>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful, offensive, or illegal content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Website or servers</li>
                  <li>Use automated systems to access the Website without permission</li>
                  <li>Copy, modify, or distribute content without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  3. Intellectual Property
                </h2>
                <p>
                  All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of 143IT or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from this Website without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  4. User Content
                </h2>
                <p>
                  If you submit, post, or transmit any content through our Website (including comments, feedback, or other materials), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content.
                </p>
                <p>
                  You represent and warrant that you own or have the right to grant the license described above and that your content does not violate any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  5. Services and Information
                </h2>
                <p>
                  The information and services provided on this Website are for informational purposes only. We make no warranties or representations about the accuracy, completeness, or suitability of the information provided.
                </p>
                <p>
                  Any services described on this Website are subject to separate service agreements. The information on this Website does not constitute a binding offer or contract unless explicitly stated.
                </p>
                <p>
                  Azure VM Manager product demos, assisted trials, and paid product use may be subject to additional written terms, order forms, data-processing terms, acceptable-use requirements, and Azure access approvals. Website content does not create a production support SLA, uptime guarantee, service-credit right, or paid product subscription unless those commitments are included in a separate agreement signed or otherwise accepted by 143IT.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  6. Azure VM Manager Demo Requests
                </h2>
                <p>
                  Demo-request forms are intended for business inquiries. You agree not to submit passwords, private keys, client secrets, regulated data, confidential customer records, or other sensitive information through public website forms.
                </p>
                <p>
                  Submitting a demo request does not guarantee access to an assisted trial. 143IT may review eligibility, including business email use and active Azure subscription confirmation, before approving a trial.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  7. Automated Azure Actions
                </h2>
                <p>
                  Azure VM Manager is intended to help request, track, and audit Azure virtual machine operations. Any production use should be configured with customer-approved Azure access, appropriate authorization, and operational review. Customers remain responsible for validating requested actions, Azure costs, subscription permissions, and compliance with their internal policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  8. Disclaimer of Warranties
                </h2>
                <p>
                  THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Website will be uninterrupted, error-free, or free from viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  9. Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, 143IT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE WEBSITE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  10. Indemnification
                </h2>
                <p>
                  You agree to indemnify, defend, and hold harmless 143IT and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of the Website or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  11. Third-Party Links
                </h2>
                <p>
                  Our Website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party sites is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  12. Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend your access to the Website at any time, without prior notice, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Website will immediately cease, and we may delete or remove any content you have submitted.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  13. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Website shall be resolved in the appropriate courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  14. Severability
                </h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  15. Entire Agreement
                </h2>
                <p>
                  These Terms constitute the entire agreement between you and 143IT regarding your use of the Website and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  16. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:legal@143it.com" className="text-accent-1 hover:text-ctaHover">legal@143it.com</a></p>
                  <p><strong>General Contact:</strong> <a href="mailto:support@143it.com" className="text-accent-1 hover:text-ctaHover">support@143it.com</a></p>
                  <p><strong>Company:</strong> 143IT</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
