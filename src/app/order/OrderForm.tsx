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
    phone: "",
    email: "",
    services: initialService ? [initialService] : [] as string[],
    imageCount: "100-300 Photographs",
    deliveryDate: "",
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
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Services:* ${selectedTitles || "General Editing"}
*Photographs:* ${formData.imageCount}
*Delivery Date:* ${formData.deliveryDate || "Standard"}
*Drive / Reference:* ${formData.driveLink || "Will provide separately"}
*Notes:* ${formData.additionalNotes || "None"}
---------------------------------`;

    return `https://wa.me/917032424878?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.consent) {
      setErrorMsg("Please accept the terms to proceed.");
      return;
    }

    if (formData.services.length === 0) {
      setErrorMsg("Please select at least one post-production service.");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#6B1E35", "#CE986C", "#F6EFE6"],
        });
      } catch {
        // Confetti non-critical
      }
    } catch {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F5EEE5] p-8 sm:p-12 md:p-16 rounded-[24px] border border-[#E8CDB4] max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#6B1E35] text-[#CE986C] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold block">
          Order Received
        </span>

        <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#6B1E35]">
          Thank You, {formData.fullName}.
        </h2>

        <p className="font-quicksand text-base text-[#727272] max-w-md mx-auto">
          Your project specifications have been submitted. Our team will review the details and respond to {formData.email} shortly.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={constructWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#25D366] text-white font-quicksand font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#20bd5a]"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Send Details on WhatsApp</span>
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-[#6B1E35] text-[#6B1E35] font-quicksand font-bold text-xs uppercase tracking-wider hover:bg-[#6B1E35] hover:text-white"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      <div className="lg:col-span-8 bg-[#F5EEE5] p-8 sm:p-10 md:p-12 rounded-[24px] border border-[#E8CDB4] shadow-sm">
        <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#6B1E35] mb-2">
          Project Order Details
        </h2>
        <p className="text-xs text-[#727272] mb-6 font-medium">
          Fill in your photography requirements below.
        </p>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="e.g. Arun Sharma"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="arun@studio.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-2">
              Required Services (Select one or multiple) *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => {
                const selected = formData.services.includes(s.slug);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => handleServiceToggle(s.slug)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 flex items-center justify-between ${
                      selected
                        ? "bg-[#6B1E35] text-white border-[#6B1E35]"
                        : "bg-white text-[#727272] border-[#E8CDB4] hover:border-[#6B1E35]"
                    }`}
                  >
                    <span className="text-xs font-quicksand font-bold tracking-wide">
                      {s.title}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        selected
                          ? "bg-[#CE986C] text-white"
                          : "text-[#727272] bg-[#F5EEE5]"
                      }`}
                    >
                      {selected ? "Selected" : "Select"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                Number of Photographs
              </label>
              <select
                value={formData.imageCount}
                onChange={(e) =>
                  setFormData({ ...formData, imageCount: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
              >
                <option>1 – 15 Photographs (Portraits / Hero)</option>
                <option>16 – 100 Photographs</option>
                <option>100 – 300 Photographs</option>
                <option>300 – 800 Photographs</option>
                <option>800 – 2,000+ Photographs (Full Wedding)</option>
                <option>Album Spread (20 – 60 Spreads)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                Required Delivery Date
              </label>
              <input
                type="date"
                value={formData.deliveryDate}
                onChange={(e) =>
                  setFormData({ ...formData, deliveryDate: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1">
              Reference Image / Cloud Storage Link
            </label>
            <input
              type="url"
              value={formData.driveLink}
              onChange={(e) =>
                setFormData({ ...formData, driveLink: e.target.value })
              }
              placeholder="https://drive.google.com/..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
              Additional Requirements
            </label>
            <textarea
              rows={3}
              value={formData.additionalNotes}
              onChange={(e) =>
                setFormData({ ...formData, additionalNotes: e.target.value })
              }
              placeholder="Specific skin tone preferences, camera models, album sizing..."
              className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
            />
          </div>

          <div className="flex items-start space-x-3 pt-1">
            <input
              type="checkbox"
              id="orderConsent"
              required
              checked={formData.consent}
              onChange={(e) =>
                setFormData({ ...formData, consent: e.target.checked })
              }
              className="mt-1 w-4 h-4 accent-[#6B1E35]"
            />
            <label
              htmlFor="orderConsent"
              className="text-xs text-[#727272] leading-relaxed cursor-pointer font-medium"
            >
              I agree to SRK Visions reviewing my project submission and contacting me.
            </label>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#6B1E35] hover:bg-[#843B43] text-white text-xs font-quicksand font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              <Send className="w-3.5 h-3.5 mr-2" />
              <span>{isSubmitting ? "Submitting..." : "Submit Enquiry"}</span>
            </button>

            <a
              href={constructWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-[#CE986C] hover:underline"
            >
              <MessageSquare className="w-4 h-4 mr-1.5" />
              <span>Submit via WhatsApp instead &rarr;</span>
            </a>
          </div>
        </form>
      </div>

      <div className="lg:col-span-4 flex flex-col space-y-6">
        <div className="bg-[#6B1E35] text-white p-8 rounded-[24px] shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-[#CE986C]">
            <Sparkles className="w-5 h-5" />
            <span className="font-cinzel text-xs uppercase tracking-widest font-bold">
              SRK Assurance
            </span>
          </div>

          <h3 className="font-cinzel text-xl font-bold text-white">
            What to expect
          </h3>

          <ul className="space-y-3 text-xs font-quicksand text-white/85 font-medium leading-relaxed">
            <li>✦ Prompt brief analysis and test frame reviews</li>
            <li>✦ Strict confidentiality under NDA</li>
            <li>✦ Two-tier quality check on every frame</li>
            <li>✦ High-resolution cloud handoff</li>
          </ul>
        </div>

        <div className="bg-[#F5EEE5] p-6 rounded-[20px] border border-[#E8CDB4] text-xs text-[#727272] space-y-2">
          <p className="font-bold text-[#6B1E35] uppercase">Direct Studio Support</p>
          <p>Phone: +91 70324 24878</p>
          <p>Email: srkvisions05@gmail.com</p>
          <p>Begumpet, Hyderabad – 500016</p>
        </div>
      </div>
    </div>
  );
}

export default function OrderForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs font-bold text-[#727272]">Loading...</div>}>
      <OrderFormContent />
    </Suspense>
  );
}
