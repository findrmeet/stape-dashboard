import { Zap } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const BillingSettings = () => {
  return (
    <>
      {/* switching between `subscription` and `billing settings` */}
      <div className="primary-card flex gap-4 mb-6">
        <SecondaryButton className="bg-transparent text-neutral-500 px-10 rounded-2xl! font-medium ">
          Subscription
        </SecondaryButton>
        <SecondaryButton className="rounded-2xl! px-10 font-medium ">
          Billing settings
        </SecondaryButton>
      </div>

      {/* title */}
      <h2 className="font-semibold text-xl mb-4"> Payment information</h2>

      {/* subscription card */}
      <div className="primary-card border border-gray-base bg-transparent!">
        <div className="primary-card-header">
          Add payment method to make purchase and keep your account active.
          <div className="flex flex-wrap gap-2 my-4">
            <img src="visa.png" alt="visa" />
            <img src="mastercard.png" alt="mastercard" />
            <img src="aex.png" alt="american express" />
            <img src="discover.png" alt="discover" />
            <img src="ucb.png" alt="ucb" />
            <img src="paypal.png" alt="paypal" />
          </div>
        </div>
        <div className="primary-card-footer flex justify-end gap-4">
          <PrimaryButton className="bg-[#EBF0FF]! text-black px-8 text-sm font-medium">
            Add payment method
          </PrimaryButton>
        </div>
      </div>

      {/* subscription card */}
      <div className="primary-card border border-gray-base mt-4 bg-transparent!">
        <div className="primary-card-header flex gap-2 items-center font-semibold">
          Invoice information
        </div>
        <div className="py-6">
          Add your company name, email address and Tax ID to invoice receipts.
        </div>
        <div className="primary-card-footer flex justify-end gap-4">
          <PrimaryButton className="bg-[#EBF0FF]! text-black px-8 text-sm font-medium">
            Add payment method
          </PrimaryButton>
        </div>
      </div>

      {/* subscription card */}
      <div className="primary-card border border-gray-base mt-4 bg-transparent!">
        <div className="primary-card-header flex gap-2 items-center font-semibold">
          Invoice history
        </div>
        <div className="py-6 primary-card-footer">
          No invoices have been generated yet.
        </div>
      </div>
    </>
  );
};

export default BillingSettings;
