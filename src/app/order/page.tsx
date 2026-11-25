import type { Metadata } from "next";
import OrderForm from "./OrderForm";

export const metadata: Metadata = {
  title: "Order Now — Start Your Photo Post-Production Project",
  description:
    "Commission SRK Visions for wedding colour grading, high-end retouching, image culling, or luxury album design. Submit project specifications and reference drive links.",
};

export default function OrderPage() {
  return (
    <div className="pt-24 md:pt-32 bg-[#F8F7F4] text-[#171717]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B49A78] font-semibold">
          PROJECT COMMISSIONING & INTAKE
        </span>
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mt-2 text-[#171717] max-w-4xl">
          Start Your Project.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#737373] max-w-2xl font-light leading-relaxed">
          Provide your project requirements, target deadlines, and cloud reference links. Our post-production coordinators will review your brief within hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
        <OrderForm />
      </div>
    </div>
  );
}
