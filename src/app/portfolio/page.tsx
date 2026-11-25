import PortfolioBeforeAfter from "@/components/PortfolioBeforeAfter";

export default function PortfolioPage() {
  return (
    <div className="pt-20 md:pt-28 bg-[#F8F5F0] text-[#727272] min-h-screen">
      {/* Interactive Before & After comparison showcase */}
      <PortfolioBeforeAfter />
    </div>
  );
}
