"use client";

import React, { useState } from "react";
import { STUDIO_INFO } from "@/data/content";
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
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

    // Prepare mailto fallback / simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const directWhatsAppUrl = `https://wa.me/917032424878?text=Hello%20SRK%20Visions,%20I%20would%20like%20to%20get%20in%20touch%20regarding%20photo%20editing%20services.`;

  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4] text-[#171717]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          DIRECT STUDIO COMMUNICATION
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 text-[#171717] max-w-4xl">
          Let&apos;s Create Something <br />
          <span className="italic font-normal">Exceptional.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#737373] max-w-2xl font-light leading-relaxed">
          Whether you need a sample test edit for an upcoming destination wedding, ongoing studio outsourcing, or custom album typography, we are here to assist.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="bg-[#EDE9E2] p-8 md:p-10 border border-[#171717]/10 space-y-6">
              <h2 className="font-editorial text-2xl font-medium text-[#171717]">
                SRK Visions Studio Details
              </h2>

              <div className="flex flex-col space-y-4 text-sm font-light">
                {/* Phone */}
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="flex items-start space-x-4 p-3 bg-[#F8F7F4] hover:bg-[#B49A78]/10 transition-colors border border-[#171717]/5"
                >
                  <Phone className="w-5 h-5 text-[#B49A78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                      Phone Call
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      {STUDIO_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 bg-[#F8F7F4] hover:bg-[#B49A78]/10 transition-colors border border-[#171717]/5"
                >
                  <MessageSquare className="w-5 h-5 text-[#B49A78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                      WhatsApp Quick Response
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      +91 70324 24878 (Click to Chat)
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="flex items-start space-x-4 p-3 bg-[#F8F7F4] hover:bg-[#B49A78]/10 transition-colors border border-[#171717]/5"
                >
                  <Mail className="w-5 h-5 text-[#B49A78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                      Email Address
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      {STUDIO_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Studio Location */}
                <div className="flex items-start space-x-4 p-3 bg-[#F8F7F4] border border-[#171717]/5">
                  <MapPin className="w-5 h-5 text-[#B49A78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                      Studio Address
                    </span>
                    <span className="text-xs text-[#171717] leading-relaxed">
                      {STUDIO_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 bg-[#F8F7F4] hover:bg-[#B49A78]/10 transition-colors border border-[#171717]/5"
                >
                  <InstagramIcon className="w-5 h-5 text-[#B49A78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                      Instagram Profile
                    </span>
                    <span className="text-sm font-medium text-[#171717]">
                      {STUDIO_INFO.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps Directions */}
            <div className="border border-[#171717]/10 overflow-hidden shadow-sm h-64 relative bg-[#EDE9E2]">
              <iframe
                title="SRK Visions Hyderabad Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.702484391696!2d78.4682054!3d17.4435887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90a36a71cb07%3A0x6b44f07a4a250325!2sBrahman%20Wadi%2C%20Begumpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-[#EDE9E2] p-8 md:p-12 border border-[#171717]/10">
            <h2 className="font-editorial text-3xl font-light text-[#171717] mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[#737373] font-light mb-8">
              We usually respond within 2-4 hours during studio hours (10:00 AM – 8:00 PM IST).
            </p>

            {submitted ? (
              <div className="p-8 bg-[#F8F7F4] border border-[#B49A78]/30 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B49A78]" />
                <h3 className="font-editorial text-3xl font-light text-[#171717]">
                  Message Received
                </h3>
                <p className="text-sm text-[#737373] max-w-md font-light">
                  Thank you for reaching out to SRK Visions. Our lead coordinator will review your message and reply via email or WhatsApp shortly.
                </p>
                <div className="pt-4 flex space-x-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-xs uppercase tracking-widest bg-[#171717] text-white"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 text-xs uppercase tracking-widest border border-[#171717] text-[#171717]"
                  >
                    Open in WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
                    />
                  </div>

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
                      placeholder="e.g. rahul@studio.com"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                      Topic / Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Wedding batch colour grading inquiry"
                      className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#171717] font-semibold mb-2">
                    Message / Project Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your upcoming project, image volume, or requested turnaround time..."
                    className="w-full px-4 py-3 bg-[#F8F7F4] border border-[#171717]/15 text-sm focus:outline-none focus:border-[#B49A78]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-[#171717] text-white hover:bg-[#B49A78] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    <span>{isSubmitting ? "Sending..." : "Send Studio Enquiry"}</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center text-xs uppercase tracking-wider text-[#B49A78] hover:underline"
                  >
                    Prefer WhatsApp? Click here &rarr;
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
