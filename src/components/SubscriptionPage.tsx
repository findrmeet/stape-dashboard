import { Zap } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import ProgressBar from "./ProgressBar";
import SecondaryButton from "./SecondaryButton";

const SubscriptionPage = () => {
  return (
    <>
      {/* switching between `subscription` and `billing settings` */}
      <div className="primary-card flex gap-4 mb-6">
        <SecondaryButton className="rounded-2xl! px-10 font-medium ">
          Subscription
        </SecondaryButton>
        <SecondaryButton className="bg-transparent text-neutral-500 px-10 rounded-2xl! font-medium">
          Billing settings
        </SecondaryButton>
      </div>

      {/* subscription card */}
      <div className="primary-card border border-gray-base">
        <div className="primary-card-header flex gap-2 items-center">
          <Zap size={20} />
          Signaly
          <span className="bg-neutral-500 text-xs py-0.5 px-2.5 rounded-sm">
            Free plan
          </span>
        </div>
        <div className="py-6">
          Lorem ipsum dolor sit amet consectetur. Morbi montes ac gravida
          pharetra nulla ullamcorper tempus sapien ultrices. Sed erat augue
          porta morbi lorem. Facilisis nunc ultrices tellus nulla. Lorem ipsum
          dolor sit amet consectetur. Morbi montes ac gravida pharetra nulla
          ullamcorper tempus sapien ultrices. Sed erat augue porta morbi lorem.
          Facilisis nunc ultrices tellus nulla.
        </div>
        <div className="primary-card-footer flex justify-end">
          <PrimaryButton className="bg-[#303032]! px-8 text-sm">
            Upgrade
          </PrimaryButton>
        </div>
      </div>

      {/* title */}
      <h2 className="mt-8 mb-2">Subscriptions</h2>

      {/* subscription card with title bar */}
      <div className="primary-card border border-gray-base">
        <div className="primary-card-header flex gap-2 items-center">
          <Zap size={20} />
          Signaly
          <span className="bg-neutral-500 text-xs py-0.5 px-2.5 rounded-sm">
            Free plan
          </span>
        </div>
        <div className="py-6">
          Lorem ipsum dolor sit amet consectetur. Morbi montes ac gravida
          pharetra nulla ullamcorper tempus sapien ultrices. Sed erat augue
          porta morbi lorem. Facilisis nunc ultrices tellus nulla. Lorem ipsum
          dolor sit amet consectetur. Morbi montes ac gravida pharetra nulla
          ullamcorper tempus sapien ultrices. Sed erat augue porta morbi lorem.
          Facilisis nunc ultrices tellus nulla.
        </div>
        <div className="text-sm flex justify-between mb-2">
          <div>
            Plan task
            <span className="text-[#888888]">
              ( Trial expires Dec 01, 2025 )
            </span>
          </div>
          <div>925 / 2,000</div>
        </div>
        <ProgressBar progress={40} />
        <div className="primary-card-footer flex justify-end gap-4 mt-4">
          <PrimaryButton className="bg-[#303032]! px-8 text-sm">
            Upgrade
          </PrimaryButton>
          <PrimaryButton className="bg-[#EBF0FF]! text-black px-8 text-sm">
            Try Pro for 14 days
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
