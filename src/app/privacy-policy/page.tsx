import type { Metadata } from "next";
import Link from "next/link";
import { STUDIO_INFO } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy — SRK Visions",
  description:
    "Privacy and client data confidentiality policies of SRK Visions creative studio in Hyderabad, India.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4] text-[#171717]">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-12 pb-24 space-y-8 font-light">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          LEGAL & CLIENT CONFIDENTIALITY
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl font-light tracking-tight text-[#171717]">
          Privacy & Confidentiality Policy
        </h1>
        <p className="text-xs text-[#737373] uppercase tracking-wider">
          Effective Date: January 1, 2026 · Studio Location: Hyderabad, India
        </p>

        <div className="space-y-6 text-sm text-[#737373] leading-relaxed pt-4 border-t border-[#171717]/10">
          <section className="space-y-3">
            <h2 className="font-editorial text-2xl font-medium text-[#171717]">
              1. Non-Disclosure & Image Confidentiality
            </h2>
            <p>
              At SRK Visions, we recognize that wedding, commercial, and private portrait photography requires strict confidentiality. All raw images, Lightroom catalogs, drive links, and project files provided to us remain 100% confidential. We will never publish, share, or showcase client photographs in our portfolio without explicit, written prior consent from the hiring photographer or studio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl font-medium text-[#171717]">
              2. Information We Collect
            </h2>
            <p>
              When you enquire or place an order through our website, we collect your name, email address, telephone/WhatsApp contact, studio name, and project specifications. This data is strictly used for the execution of post-production contracts, milestone coordination, and invoice delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl font-medium text-[#171717]">
              3. Data Retention & File Deletion
            </h2>
            <p>
              We maintain project backups on encrypted storage for thirty (30) calendar days after final client delivery to accommodate requested revisions. Following this period, raw and intermediate editing files are purged from our working servers unless an ongoing archiving agreement is established.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-editorial text-2xl font-medium text-[#171717]">
              4. Contact & Inquiries
            </h2>
            <p>
              If you have any questions regarding your data privacy or wish to request file deletion, contact our lead coordinator:
            </p>
            <div className="p-4 bg-[#EDE9E2] text-xs text-[#171717] space-y-1">
              <p><strong>Studio:</strong> {STUDIO_INFO.name}</p>
              <p><strong>Email:</strong> {STUDIO_INFO.email}</p>
              <p><strong>Phone:</strong> {STUDIO_INFO.phoneFormatted}</p>
              <p><strong>Address:</strong> {STUDIO_INFO.address}</p>
            </div>
          </section>

          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center text-xs uppercase tracking-widest text-[#B49A78] hover:underline"
            >
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
