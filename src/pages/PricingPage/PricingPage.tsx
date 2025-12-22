import { LucideGem } from "lucide-react";
import { useState } from "react";
import { PricingCard } from "./PricingCard";
import type { BillingCycle, PricingPlan } from "../../types/pricing";
import pricingPlans from "../../data/pricing-plans.json";

const PRICING_PLANS = pricingPlans as PricingPlan[];

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const togglePriceToMonthly = () => {
    setBilling("monthly");
  };
  const togglePriceToAnnually = () => {
    setBilling("annually");
  };
  const [active, setActive] = useState(false);

  return (
    <section className="bg-black text-white px-6">
      {/* Header */}
      <div className="mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#26272F] bg-[#0E0F14] text-xs text-gray-300">
          <LucideGem size={16} />
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
            onClick={togglePriceToMonthly}
            className={`px-4 py-2 text-sm rounded-md transition cursor-pointer ${
              billing === "monthly" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={togglePriceToAnnually}
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
        {PRICING_PLANS.map((plan) => {
          const variant = plan[billing];

          return (
            <PricingCard
              key={plan.id}
              title={variant.title}
              badge={variant.badge}
              highlighted={variant.highlighted}
              price={variant.price}
              subtitle={variant.subtitle}
              description={variant.description}
              features={variant.features}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </div>
    </section>
  );
}
