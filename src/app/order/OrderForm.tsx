"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES, STUDIO_INFO } from "@/data/content";
import { CheckCircle2, MessageSquare, Send, Sparkles, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

function OrderFormContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "India",
    services: initialService ? [initialService] : [] as string[],
    imageCount: "100-300 Images",
    deliveryDate: "",
    editingStyle: "Warm, Timeless Editorial",
    driveLink: "",
    additionalNotes: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleServiceToggle = (slug: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(slug);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== slug) };
      } else {
        return { ...prev, services: [...prev.services, slug] };
      }
    });
  };

  const constructWhatsAppMessage = () => {
    const selectedTitles = formData.services
      .map((slug) => SERVICES.find((s) => s.slug === slug)?.title || slug)
      .join(", ");

    const text = `*New Project Order - SRK Visions*
---------------------------------
*Client:* ${formData.fullName}
*Studio:* ${formData.companyName || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Country:* ${formData.country}
*Services:* ${selectedTitles || "General Editing"}
*Image Count:* ${formData.imageCount}
*Required By:* ${formData.deliveryDate || "Standard"}
*Style:* ${formData.editingStyle}
*Drive Link:* ${formData.driveLink || "Will send separately"}
*Notes:* ${formData.additionalNotes || "None"}
---------------------------------`;

    return `https://wa.me/917032424878?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.consent) {
      setErrorMsg("Please accept the privacy terms to submit your project brief.");
      return;
    }

    if (formData.services.length === 0) {
      setErrorMsg("Please select at least one post-production service.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Post to our API route
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send order brief. You can still submit directly via WhatsApp!");
      }

      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti for premium UX
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B49A78", "#171717", "#EDE9E2"],
        });
      } catch {
        // Confetti non-fatal
      }
    } catch (err: unknown) {
      setIsSubmitting(false);
      // In case server mail isn't configured, we still allow immediate seamless WhatsApp transmission
      setSubmitted(true);
      console.warn("Server email fallback trigger:", err);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#EDE9E2] p-8 md:p-16 border border-[#171717]/10 max-w-3xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#171717] text-[#B49A78] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold block">
          Order Specification Received
        </span>

        <h2 className="font-editorial text-4xl sm:text-5xl font-light text-[#171717]">
          Thank You, {formData.fullName}.
        </h2>

        <p className="text-base text-[#737373] font-light max-w-lg mx-auto leading-relaxed">
          Your project brief has been logged. Our studio lead in Hyderabad will inspect your specifications and drive links and respond to {formData.email} promptly.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={constructWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-[#B49A78]" />
            <span>Confirm Instant Delivery via WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold border border-[#171717]/30 text-[#171717] hover:border-[#171717]"
          >
            Submit Another Project
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Form Card */}
      <div className="lg:col-span-8 bg-[#EDE9E2] p-8 md:p-12 border border-[#171717]/10">
        <h2 className="font-editorial text-3xl font-light text-[#171717] mb-2">
          Project Specification Form
        </h2>
        <p className="text-xs text-[#737373] font-light mb-8">
          Please fill out the details below. Required fields are marked with an asterisk (*).
        </p>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Client & Studio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="e.g. Vikramaditya Rao"
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Studio / Company Name (Optional)
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
                placeholder="e.g. Rao Photography Studios"
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="client@studio.com"
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 70324 24878"
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Country *
              </label>
              <input
                type="text"
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                placeholder="India / USA / UK / UAE"
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>
          </div>

          {/* Multi-select Services */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
              Required Services (Select one or multiple) *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {SERVICES.map((s) => {
                const selected = formData.services.includes(s.slug);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => handleServiceToggle(s.slug)}
                    className={`p-3.5 text-left border transition-all duration-200 flex items-center justify-between ${
                      selected
                        ? "bg-[#171717] text-white border-[#171717]"
                        : "bg-[#F8F7F4] text-[#171717] border-[#171717]/15 hover:border-[#171717]/40"
                    }`}
                  >
                    <span className="text-xs tracking-wider">{s.title}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-mono ${
                        selected
                          ? "bg-[#B49A78] text-white"
                          : "text-[#737373] bg-[#EDE9E2]"
                      }`}
                    >
                      {selected ? "Selected" : "Add"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Image Volume & Delivery Date */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Approximate Image Count
              </label>
              <select
                value={formData.imageCount}
                onChange={(e) =>
                  setFormData({ ...formData, imageCount: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              >
                <option>1 – 15 Images (Hero / Flagship Portraits)</option>
                <option>16 – 100 Images (Editorial / Commercial)</option>
                <option>100 – 300 Images (Standard Event)</option>
                <option>300 – 800 Images (Single Wedding Day)</option>
                <option>800 – 2,000+ Images (Multi-Day Wedding Collection)</option>
                <option>Album Spread (20 – 60 Pages)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Required Delivery Date
              </label>
              <input
                type="date"
                value={formData.deliveryDate}
                onChange={(e) =>
                  setFormData({ ...formData, deliveryDate: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                Preferred Editing Style
              </label>
              <select
                value={formData.editingStyle}
                onChange={(e) =>
                  setFormData({ ...formData, editingStyle: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
              >
                <option>Warm, Timeless Editorial (SRK Signature)</option>
                <option>True-to-Life Natural & Crisp</option>
                <option>Muted Film / Fine-Art Grain</option>
                <option>High-Glamour / Beauty Polish</option>
                <option>Custom Style (Reference Provided in Link)</option>
              </select>
            </div>
          </div>

          {/* Cloud Storage Link */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-1">
              Google Drive / Dropbox / WeTransfer Link (Optional)
            </label>
            <span className="text-[11px] text-[#737373] block mb-2">
              Share a folder containing your RAW/TIFF selection or sample references with viewing permissions.
            </span>
            <input
              type="url"
              value={formData.driveLink}
              onChange={(e) =>
                setFormData({ ...formData, driveLink: e.target.value })
              }
              placeholder="https://drive.google.com/drive/folders/..."
              className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
              Additional Instructions / Style Notes
            </label>
            <textarea
              rows={4}
              value={formData.additionalNotes}
              onChange={(e) =>
                setFormData({ ...formData, additionalNotes: e.target.value })
              }
              placeholder="Specify skin tones, camera models, aspect ratio requirements, or print lab dimensions..."
              className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className="mt-1 w-4 h-4 accent-[#171717]"
            />
            <label
              htmlFor="privacyConsent"
              className="text-xs text-[#737373] leading-relaxed cursor-pointer"
            >
              I consent to SRK Visions reviewing my project details and contacting me regarding this project enquiry in accordance with the studio&apos;s privacy policy.
            </label>
          </div>

          {/* Submit Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Order"}</span>
            </button>

            <a
              href={constructWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs uppercase tracking-widest text-[#B49A78] hover:underline"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Instant WhatsApp Submission Alternative</span>
            </a>
          </div>
        </form>
      </div>

      {/* Info Sidebar */}
      <div className="lg:col-span-4 flex flex-col space-y-6">
        <div className="bg-[#111111] text-white p-8 space-y-6">
          <div className="flex items-center space-x-2 text-[#B49A78]">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold">
              The SRK Standard
            </span>
          </div>

          <h3 className="font-editorial text-2xl font-light text-[#EDE9E2]">
            What happens after you submit?
          </h3>

          <ol className="space-y-4 text-xs text-neutral-300 font-light leading-relaxed list-decimal list-inside">
            <li>
              <strong className="text-white">Brief Review:</strong> A senior colorist reviews your references and drive link.
            </li>
            <li>
              <strong className="text-white">Sample Calibration:</strong> We verify camera color profiles and provide 2-3 sample test frames if required.
            </li>
            <li>
              <strong className="text-white">Full Batch Production:</strong> Once approved, the entire gallery enters production.
            </li>
            <li>
              <strong className="text-white">Art Director Recheck:</strong> Independent QC review before final cloud delivery.
            </li>
          </ol>
        </div>

        <div className="bg-[#EDE9E2] p-8 border border-[#171717]/10 space-y-4 text-xs text-[#737373]">
          <p className="font-semibold uppercase tracking-wider text-[#171717]">
            Direct Inquiries & Questions
          </p>
          <p>
            Phone / WhatsApp:{" "}
            <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="text-[#171717] font-medium">
              {STUDIO_INFO.phoneFormatted}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#171717] font-medium">
              {STUDIO_INFO.email}
            </a>
          </p>
          <p>
            Studio Base: Begumpet, Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderForm() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs uppercase tracking-widest text-[#737373]">Loading Order Form...</div>}>
      <OrderFormContent />
    </Suspense>
  );
}
