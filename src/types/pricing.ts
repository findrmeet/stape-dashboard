export type BillingCycle = "monthly" | "annually";

export type PricingPlanVariant = {
  title: string;
  description: string;
  price: string;
  subtitle: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
};

export type PricingPlan = {
  id: string;
  monthly: PricingPlanVariant;
  annually: PricingPlanVariant;
};
