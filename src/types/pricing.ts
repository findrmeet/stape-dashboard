export type BillingCycle = "monthly" | "annually";

export type PricingAmount = {
  price: string;
  subtitle: string;
};

export type PricingPlan = {
  title: string;
  badge?: string;
  highlighted?: boolean;
  description: string;
  features: string[];
  pricing: {
    monthly: PricingAmount;
    annually: PricingAmount;
  };
};
