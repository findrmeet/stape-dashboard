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
  const [active, setActive] = useState<boolean>(false);

  return (
    <section className="bg-black px-6 text-white">
      {/* Header */}
      <div className="mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#26272F] bg-[#0E0F14] px-4 py-1.5 text-xs text-gray-300">
          <LucideGem size={16} />
          <p>Our Pricing</p>
        </div>

        <h1 className="mt-6 text-4xl font-semibold md:text-5xl">
          Simple pricing for every business
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400">
          Start free, upgrade anytime. Transparent plans designed for individuals, teams, and
          enterprises.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center gap-1 rounded-lg border border-[#26272F] bg-[#0E0F14] p-1">
          <button
            onClick={togglePriceToMonthly}
            className={`cursor-pointer rounded-md px-4 py-2 text-sm transition ${
              billing === "monthly" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={togglePriceToAnnually}
            className={`cursor-pointer rounded-md px-4 py-2 text-sm transition ${
              billing === "annually" ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {PRICING_PLANS?.map((plan) => {
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
