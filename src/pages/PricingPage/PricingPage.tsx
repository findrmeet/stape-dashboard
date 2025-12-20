import { LucideGem } from "lucide-react";
import { useState } from "react";
import { PricingCard } from "./PricingCard";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

  return (
    <section className=" bg-black text-white px-6 ">
      {/* Header */}
      <div className=" mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#26272F] bg-[#0E0F14] text-xs text-gray-300">
          <span>
            <LucideGem size={16} />
          </span>
          <p>Our Pricing</p>
        </div>

        <h1 className="mt-6 text-4xl md:text-5xl font-semibold">
          Simple pricing for every business
        </h1>

        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          Start free, upgrade anytime. Transparent plans designed for
          individuals, teams, and enterprises.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center gap-1 rounded-lg border border-[#26272F] bg-[#0E0F14] p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 text-sm rounded-md transition cursor-pointer ${
              billing === "monthly" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("annually")}
            className={`px-4 py-2 text-sm rounded-md transition cursor-pointer ${
              billing === "annually" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free */}
        <PricingCard
          title="Free Plan"
          price="$0"
          subtitle="/ month"
          description="Signaly helped us recover 25% more conversions that we were missing before. Our ad spend is finally"
          features={[
            "Track up to 5,000 events / month",
            "1 Website / Store integration",
            "Basic analytics dashboard",
            "Community support",
          ]}
        />

        {/* Pro */}
        <PricingCard
          title="Pro Plan"
          badge="Popular"
          price="$49"
          subtitle="/ month"
          highlighted
          description="Signaly helped us recover 25% more conversions that we were missing before. Our ad spend is finally"
          features={[
            "Unlimited tracked events",
            "Multiple websites & stores integration",
            "Advanced reporting & funnel analysis",
            "Priority email support",
            "Team members (up to 5 users)",
          ]}
        />

        {/* Enterprise */}
        <PricingCard
          title="Enterprise Plan"
          price="Custom"
          subtitle="/ month"
          description="Signaly helped us recover 25% more conversions that we were missing before. Our ad spend is finally"
          features={[
            "Tailored event limits (millions of events)",
            "Dedicated account manager",
            "White-label reporting for agencies",
            "API access & advanced integrations",
            "24/7 premium support",
          ]}
        />
      </div>
    </section>
  );
}
