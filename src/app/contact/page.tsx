"use client";

import React, { useState } from "react";
import { STUDIO_INFO } from "@/data/content";
import { Phone, Mail, MapPin, Send, CheckCircle2, Plus, Minus } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

const FAQS = [
  {
    question: "What is the turnaround time for colour correction?",
    answer:
      "Delivery time depends on the event, number of photographs and project requirements. Typically, we complete and deliver an entire wedding colour correction project within one week.",
  },
  {
    question: "How will I receive my edited photographs?",
    answer:
      "We provide final outputs in whichever format is most convenient for you. You can share RAW files or your Lightroom catalogue, and we will return the professionally edited catalogue or processed images through a Google Drive link.\n\nWe also offer logo and watermark integration and can upload the final photographs directly to your website if required.",
  },
  {
    question: "Can I request a sample edit before placing an order?",
    answer:
      "Yes! We provide up to two sample images for colour correction and a sample for high-end retouching.\n\nSince every photographer has a unique shooting and lighting style, we recommend testing our editing quality using your own photographs before placing a complete order.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "An advance payment is mandatory to confirm every order. The remaining balance is payable upon completion of the project.",
  },
  {
    question: "Can I request revisions to my editing or album design?",
    answer:
      "Absolutely. We provide a PDF preview for album design projects after completing the initial colour correction.\n\nYou can review the design and request necessary changes. Once approved, we complete the final refinements, including skin smoothing, shadow correction and other necessary adjustments, before delivering the final output.",
  },
  {
    question: "Do you offer discounts for regular clients?",
    answer:
      "Yes! We offer special discounts and customized pricing for photographers, studios, recurring clients and businesses that provide regular projects.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const directWhatsAppUrl = `https://wa.me/917032424878?text=Hello%20SRK%20Visions,%20I%20would%20like%20to%20get%20in%20touch%20regarding%20photo%20editing%20services.`;

  return (
    <div className="pt-28 md:pt-36 bg-[#F8F5F0] text-[#727272] min-h-screen">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold">
            DIRECT COMMUNICATION
          </span>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-[46px] font-bold text-[#6B1E35] tracking-wide mt-2 uppercase">
            Contact SRK Visions
          </h1>
          <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Details Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-[#F5EEE5] p-8 rounded-[24px] border border-[#E8CDB4] shadow-sm space-y-6">
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#6B1E35]">
                Studio Details
              </h2>

              <div className="flex flex-col space-y-4 text-sm font-medium">
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60 hover:border-[#6B1E35] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#6B1E35] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CE986C] font-bold block">
                      Phone Call
                    </span>
                    <span className="text-[#171717]">
                      {STUDIO_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60 hover:border-[#25D366] transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] text-white font-bold">W</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-bold block">
                      WhatsApp Chat
                    </span>
                    <span className="text-[#171717]">
                      +91 70324 24878 (Instant Response)
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60 hover:border-[#6B1E35] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#6B1E35] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CE986C] font-bold block">
                      Email Address
                    </span>
                    <span className="text-[#171717]">
                      {STUDIO_INFO.email}
                    </span>
                  </div>
                </a>

                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60 hover:border-[#6B1E35] transition-colors group cursor-pointer"
                  title="Click to view location on Google Maps"
                >
                  <MapPin className="w-5 h-5 text-[#6B1E35] shrink-0 mt-0.5 group-hover:text-[#CE986C] transition-colors" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CE986C] font-bold block">
                      Studio Address (View on Google Maps)
                    </span>
                    <span className="text-xs text-[#171717] leading-relaxed group-hover:text-[#6B1E35] transition-colors">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </a>

                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60 hover:border-[#6B1E35] transition-colors"
                >
                  <InstagramIcon className="w-5 h-5 text-[#6B1E35] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CE986C] font-bold block">
                      Instagram Profile
                    </span>
                    <span className="text-[#171717]">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#F5EEE5] p-8 sm:p-10 rounded-[24px] border border-[#E8CDB4] shadow-sm">
            <h2 className="font-cinzel text-2xl font-bold text-[#6B1E35] mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[#727272] mb-6 font-medium">
              We respond promptly to all photographer, studio, and agency briefs.
            </p>

            {submitted ? (
              <div className="p-8 bg-white rounded-2xl border border-[#CE986C] text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#25D366] mx-auto" />
                <h3 className="font-cinzel text-2xl font-bold text-[#6B1E35]">
                  Message Received
                </h3>
                <p className="text-sm text-[#727272] max-w-md mx-auto">
                  Thank you for reaching out. We will review your message and reply shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#6B1E35] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rahul"
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
                      placeholder="e.g. rahul@studio.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                      Phone / WhatsApp *
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
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Wedding photo editing"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#6B1E35] font-bold mb-1.5">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your requirements, image quantity, deadline..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8CDB4] text-sm focus:outline-none focus:border-[#6B1E35]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#6B1E35] hover:bg-[#843B43] text-white text-xs font-quicksand font-bold uppercase tracking-wider shadow-sm transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    <span>{isSubmitting ? "Sending..." : "Submit Enquiry"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps Location Section */}
        <div className="mt-14 pt-10 border-t border-[#E8CDB4]/70">
          <div className="bg-[#F5EEE5] p-6 sm:p-8 rounded-[24px] border border-[#E8CDB4] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold block mb-1">
                  STUDIO LOCATION
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#6B1E35]">
                  Find Our Creative Studio
                </h2>
                <p className="font-quicksand text-xs sm:text-sm text-[#727272] font-medium mt-1">
                  {STUDIO_INFO.address}
                </p>
              </div>

              {/* Get Directions Button */}
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-full bg-[#CE986C] hover:bg-[#b8855b] text-white text-xs sm:text-sm font-quicksand font-bold uppercase tracking-wider shadow-sm transition-all duration-300 hover:scale-[1.02] shrink-0 self-start sm:self-center"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Responsive Google Maps Iframe: 100% width, ~400px desktop, ~300px mobile */}
            <div className="w-full h-[300px] md:h-[400px] rounded-[18px] border border-[#E8CDB4] overflow-hidden shadow-inner bg-[#EDE9E2]">
              <iframe
                src="https://maps.google.com/maps?q=SRK+Visions,+Brahman+Wadi,+Begumpet,+Hyderabad,+Telangana+500016&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SRK Visions Creative Studio Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Common Questions — FAQ Accordion Section */}
        <div className="mt-16 pt-12 border-t border-[#E8CDB4]/70">
          <div className="max-w-[1000px] mx-auto">
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#CE986C] font-semibold block mb-2">
                Common Questions
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B1E35] tracking-wide uppercase">
                Questions, Answered
              </h2>
              <div className="w-16 h-[2px] bg-[#CE986C] mx-auto mt-4" />
            </div>

            {/* Accordion Container */}
            <div className="divide-y divide-[#E8CDB4] border-y border-[#E8CDB4] bg-[#F5EEE5]/60 rounded-2xl overflow-hidden">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="transition-colors duration-200 hover:bg-[#F5EEE5]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                      className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1E35] focus-visible:ring-inset transition-colors"
                    >
                      <span className="font-cinzel font-semibold text-base sm:text-lg text-[#6B1E35] pr-6">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-8 h-8 rounded-full border border-[#CE986C]/40 flex items-center justify-center text-[#6B1E35] bg-white/70 transition-all duration-300">
                        {isOpen ? (
                          <Minus className="w-4 h-4 text-[#6B1E35]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#CE986C]" />
                        )}
                      </span>
                    </button>
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#727272] font-quicksand leading-relaxed space-y-3">
                          {faq.answer.split("\n\n").map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
