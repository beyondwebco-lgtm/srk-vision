"use client";

import React, { useState } from "react";
import { STUDIO_INFO } from "@/data/content";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";

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

                <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-[#E8CDB4]/60">
                  <MapPin className="w-5 h-5 text-[#6B1E35] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#CE986C] font-bold block">
                      Studio Address
                    </span>
                    <span className="text-xs text-[#171717] leading-relaxed">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </div>

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
      </div>
    </div>
  );
}
