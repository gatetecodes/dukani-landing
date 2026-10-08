import Link from "next/link";
import { Trash2, Smartphone, Mail, ArrowLeft, ListChecks } from "lucide-react";

export const metadata = {
  title: "Delete Your Account | Dukani",
  description:
    "How to permanently delete your Dukani account and all associated data — from inside the app or by request, without reinstalling.",
};

export default function DeleteAccount() {
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

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 pt-28 pb-20 space-y-8">
        {/* Header */}
        <div className="border-b border-secondary-300 pb-6">
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary flex items-center gap-1.5">
            <Trash2 className="w-4 h-4 text-primary" />
            Account &amp; Data Deletion
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight mt-2">
            Delete your Dukani account
          </h1>
          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
            You can permanently delete your Dukani account and all of its data at any time. Choose
            whichever option is easiest for you.
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-neutral-600">
          {/* Option 1: In the app */}
          <section className="space-y-3 p-5 rounded-2xl bg-white border border-secondary-300 shadow-sm">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary-600" />
              Option 1 — Delete from the app
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Open Dukani and sign in.</li>
              <li>Go to <strong>Settings</strong> (the gear icon).</li>
              <li>Scroll to <strong>Danger zone</strong> and tap <strong>Delete account</strong>.</li>
              <li>Enter your <strong>PIN</strong> to confirm.</li>
            </ol>
            <p className="text-xs text-neutral-500">
              Your account and data are deleted immediately, and you are signed out on the device.
            </p>
          </section>

          {/* Option 2: By request */}
          <section className="space-y-3 p-5 rounded-2xl bg-white border border-secondary-300 shadow-sm">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary-600" />
              Option 2 — Request deletion (no app needed)
            </h2>
            <p className="text-xs sm:text-sm">
              If you can&apos;t access the app, email{" "}
              <a
                href="mailto:support@getdukani.com?subject=Delete%20my%20Dukani%20account"
                className="text-primary font-semibold hover:underline"
              >
                support@getdukani.com
              </a>{" "}
              from the email address or phone number on your account, with the subject
              &quot;Delete my account.&quot; Please include your shop name and the phone number you
              use to sign in so we can verify your identity.
            </p>
            <p className="text-xs text-neutral-500">
              We verify ownership and permanently delete your account within 30 days of the request.
            </p>
            <a
              href="mailto:support@getdukani.com?subject=Delete%20my%20Dukani%20account&body=Shop%20name%3A%0APhone%20number%20on%20account%3A%0A%0APlease%20permanently%20delete%20my%20Dukani%20account%20and%20all%20its%20data."
              className="inline-flex items-center gap-2 mt-1 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl shadow-md shadow-primary-500/15 hover:bg-primary-600 transition-all"
            >
              <Mail className="w-4 h-4" />
              Email a deletion request
            </a>
          </section>

          {/* What gets deleted */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
              <ListChecks className="w-4 h-4 text-neutral-800" />
              What gets deleted
            </h2>
            <p className="text-xs sm:text-sm">
              Deleting your account is <strong>permanent and cannot be undone</strong>. We remove
              your shop and everything linked to it from our systems, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>your account profile (name, phone number, email, and hashed PIN);</li>
              <li>your products, categories, prices, stock, and expiry/batch records;</li>
              <li>your sales, receipts, and inventory history;</li>
              <li>your customers and the credit/debt balances you tracked;</li>
              <li>any product photos you uploaded;</li>
              <li>your sign-in sessions across all devices.</li>
            </ul>
            <p className="text-xs text-neutral-500">
              Data stored only on your device is removed when you delete your account or uninstall
              the app. We may retain limited records where required by law.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-secondary-300">
            <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-neutral-800" />
              Need help?
            </h2>
            <p className="text-xs sm:text-sm">
              Contact us any time at{" "}
              <a href="mailto:support@getdukani.com" className="text-primary font-semibold hover:underline">
                support@getdukani.com
              </a>
              . See our{" "}
              <Link href="/privacy-policy" className="text-primary font-semibold hover:underline">
                Privacy Policy
              </Link>{" "}
              for how we handle your data.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-12 bg-neutral-900 text-neutral-400 text-xs text-center border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Dukani. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home Page
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
