import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — 143IT",
  description: "143IT Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

const effectiveDate = "July 9, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-accent-1/5 to-transparent">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Privacy Policy</span>
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
                  1. Introduction
                </h2>
                <p>
                  At 143IT ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By using our website, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-heading font-bold mb-3 mt-6">
                  2.1 Information You Provide
                </h3>
                <p>We may collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information provided in contact forms or service inquiries</li>
                  <li>Azure VM Manager demo-request details, such as job role, number of Azure subscriptions, approximate number of virtual machines, active Azure subscription confirmation, and the business challenge you describe</li>
                  <li>Newsletter subscription information</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-heading font-bold mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <p>When you visit our website, we may automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  3. How We Use Your Information
                </h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To evaluate Azure VM Manager demo requests and assisted-trial eligibility</li>
                  <li>To send you newsletters, marketing communications, and updates (with your consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  4. Cookies and Tracking Technologies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  5. Information Sharing and Disclosure
                </h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                  <li><strong>Workflow Automation:</strong> Azure VM Manager demo requests may be routed through n8n or similar workflow tooling so the 143IT team can review and respond</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  6. Product Demo and Trial Data
                </h2>
                <p>
                  Azure VM Manager demo requests are used to understand your environment, schedule a product discussion, and determine whether an assisted trial is appropriate. Please do not submit passwords, client secrets, private keys, confidential tenant data, or sensitive customer records through public website forms.
                </p>
                <p>
                  If you proceed to a product trial or paid product use, additional product-specific data handling terms may apply and should be reviewed in the applicable agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  7. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  8. Your Rights and Choices
                </h2>
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                  <li><strong>Data Portability:</strong> Request transfer of your data</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:privacy@143it.com" className="text-accent-1 hover:text-ctaHover">privacy@143it.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  9. Children's Privacy
                </h2>
                <p>
                  Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  10. Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  11. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-accent-1">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:privacy@143it.com" className="text-accent-1 hover:text-ctaHover">privacy@143it.com</a></p>
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
