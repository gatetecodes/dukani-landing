import Link from "next/link";
import { Shield, Smartphone, Lock, ArrowLeft, Mail, Trash2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Dukani Stock Management & POS",
  description: "How Dukani handles your account, business data, product photos, and cloud backups — and how to delete your account.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-neutral-800">

      {/* Glassmorphic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 sm:px-12 flex justify-between items-center glass border-b border-secondary-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-sm shadow-md">
            D
          </div>
          <span className="font-extrabold text-lg tracking-tight text-neutral-800">
            Dukani<span className="text-primary-500">.</span>
          </span>
        </Link>

        <Link
          href="/"
          className="px-4 py-1.5 bg-secondary-200 text-neutral-800 text-xs font-bold rounded-xl border border-secondary-300 hover:bg-secondary-300 transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 pt-28 pb-20 space-y-8">

        {/* Document Header */}
        <div className="border-b border-secondary-300 pb-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-primary" />
            Legal Documentation
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-neutral-500 mt-2 font-mono">
            Effective Date: June 11, 2026 | Last Updated: June 11, 2026
          </p>
        </div>

        {/* Legal Text Sections */}
        <div className="space-y-6 text-sm leading-relaxed text-neutral-600">

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">1. Introduction</h2>
            <p>
              Dukani (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the Dukani mobile application (the &quot;App&quot;), a stock management and Point of Sale (POS) app for retailers and local shops. This policy explains what information we collect, how we use it, who we share it with, and the choices you have — including how to delete your account.
            </p>
            <p>
              By creating an account and using Dukani, you agree to the practices described here.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">2. Information We Collect</h2>
            <p>Using Dukani requires an account. We collect:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li><strong>Account &amp; identity:</strong> your phone number (used to sign in and to verify your identity), your name and shop name, an optional email address, your preferred language, and a 4-digit PIN that we store only in hashed (irreversible) form.</li>
              <li><strong>Authentication data:</strong> one-time SMS verification codes (at sign-up and when resetting your PIN) and session tokens that keep you signed in and let you sync across devices. We also store a device identifier to secure your sessions.</li>
              <li><strong>Business data you create:</strong> your products (names, prices, stock levels, categories, and any SKU, barcode, expiry or batch details you enter), sales and receipts, customers (name and optional phone number) and the credit/debt balances you track for them, and inventory movements.</li>
              <li><strong>Product photos (optional):</strong> if you add a photo to a product, you choose an existing image from your device&apos;s photo library. We upload that image to our cloud storage so it appears on your other devices.</li>
            </ul>
            <p className="text-xs">
              Dukani does <strong>not</strong> use your camera, and does not collect location, contacts, or advertising identifiers.
            </p>
          </section>

          {/* Permissions */}
          <section className="space-y-3 p-5 rounded-2xl bg-secondary-100 border border-secondary-200">
            <h2 className="text-lg font-bold text-primary-800 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary-600" />
              3. Device Permissions
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-xs">
              <li>
                <strong>Photos / media:</strong> requested only when you choose to attach a product photo, so you can pick an image from your gallery. We access only the image you select.
              </li>
              <li>
                <strong>Device storage:</strong> used to keep your shop database on the device so the App works fully offline.
              </li>
              <li>
                <strong>Biometrics (optional):</strong> if you turn on fingerprint/face unlock, it is handled entirely by your device&apos;s operating system to unlock the App. Your biometric data never leaves your device and is never sent to us.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">4. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>create and secure your account and verify your phone number;</li>
              <li>provide the App&apos;s features — inventory, sales, receipts, customers and debts, and reports;</li>
              <li>back up your data to the cloud and sync it across your devices;</li>
              <li>keep the service secure, prevent abuse, and fix problems.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">5. Service Providers We Share Data With</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your data, and we do not share it with advertisers. We share the minimum necessary with trusted service providers who process data on our behalf:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li><strong>SMS provider (Twilio):</strong> receives your phone number to deliver the one-time verification codes used at sign-up and PIN reset.</li>
              <li><strong>Cloud hosting &amp; storage:</strong> our hosting provider stores your account, business data, and any product photos so they can be backed up and synced.</li>
            </ul>
            <p className="text-xs">
              We may also disclose information if required by law or to protect the rights, safety, and security of our users and our service.
            </p>
          </section>

          {/* Account deletion */}
          <section className="space-y-3 p-5 rounded-2xl bg-secondary-100 border border-secondary-200">
            <h2 className="text-lg font-bold text-primary-800 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-primary-600" />
              6. Deleting Your Account &amp; Data
            </h2>
            <p>You can delete your account and all of its data at any time:</p>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li><strong>In the App:</strong> go to <strong>Settings → Delete account</strong> and confirm with your PIN.</li>
              <li><strong>On the web (no app needed):</strong> visit <Link href="/delete-account" className="text-primary font-semibold hover:underline">getdukani.com/delete-account</Link>, or email <a href="mailto:support@getdukani.com" className="text-primary font-semibold hover:underline">support@getdukani.com</a> from the phone number or email on your account.</li>
            </ul>
            <p className="text-xs">
              Deleting your account permanently removes your shop and all related data — products, sales, customers, debts, inventory, batches, product photos, and sessions — from our systems. In-app deletion is immediate; emailed requests are completed within 30 days. Data stored locally on your device is removed when you delete your account or uninstall the App. We may retain limited records only where required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-neutral-800" />
              7. Data Security
            </h2>
            <p>
              We encrypt data in transit using HTTPS/TLS, store PINs only as hashes, and keep databases behind secured infrastructure. No method of transmission or storage is 100% secure, but we work to protect your information using industry-standard measures.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">8. Children&apos;s Privacy</h2>
            <p>
              Dukani is a business tool intended for shop owners and is not directed to children under 13. We do not knowingly collect personal information from children. If we learn we have, we will delete it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the &quot;Last Updated&quot; date above.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-secondary-300">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-neutral-800" />
              10. Contact Us
            </h2>
            <p>
              Questions or requests about this policy or your data? Contact us at:
            </p>
            <div className="p-4 bg-canvas rounded-xl border border-secondary-300 font-mono text-xs max-w-max">
              <p>Email: <a href="mailto:support@getdukani.com" className="text-primary font-semibold hover:underline">support@getdukani.com</a></p>
            </div>
          </section>

        </div>
      </main>

      {/* Sub-page Footer */}
      <footer className="py-8 px-6 sm:px-12 bg-neutral-900 text-neutral-400 text-xs text-center border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Dukani. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home Page</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
