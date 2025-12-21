import { X } from "lucide-react";

interface PurchaseSummaryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PurchaseSummaryModal({
  open,
  onClose,
}: PurchaseSummaryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-md rounded-2xl border border-[#26272F] bg-linear-to-b from-[#0E0F14] to-[#07080C] p-6 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#26272F]">
          <h2 className="text-base font-medium">Purchase summery</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Subscription */}
        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between text-gray-400">
            <span>Subscription Name :</span>
            <span className="text-white">Pro Plan</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Total due today :</span>
            <span className="text-lg font-semibold">$ 400 USD</span>
          </div>
        </div>

        {/* Pay Button */}
        <button className="mt-6 w-full rounded-lg bg-[#EEF1FF] py-3 text-sm font-medium text-black hover:bg-white transition">
          Pay Now
        </button>

        {/* Next payment */}
        <div className="mt-6 flex justify-between text-sm">
          <span className="text-gray-400">Next payment date :</span>
          <span className="text-white">November 17, 2026</span>
        </div>

        {/* Include task */}
        <div className="mt-6 border-t border-[#26272F] pt-4">
          <p className="text-sm font-medium">Include task</p>
          <p className="mt-1 text-xs text-gray-400">
            Your Free plan includes 100 task per month.
          </p>
        </div>

        {/* Sales final */}
        <div className="mt-6 border-t border-[#26272F] pt-4">
          <p className="text-sm font-medium">All sales final</p>
          <p className="mt-2 text-xs text-gray-400 leading-relaxed">
            Payment for Signaly subscriptions are{" "}
            <span className="text-white underline">non-refundable</span>. You
            can{" "}
            <span className="text-white underline">
              change or cancel your plan
            </span>{" "}
            at any time
          </p>
        </div>

        {/* Auto renew */}
        <div className="mt-6 border-t border-[#26272F] pt-4">
          <p className="text-sm font-medium">Plan auto-renewal</p>
          <p className="mt-2 text-xs text-gray-400 leading-relaxed">
            Proceeding by selecting the button above will enroll you in a
            recurring subscription plan. Signaly will charge your payment method
            this amount yearly plus applicable taxes, minus any discounts or
            credits.
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-6 flex gap-4 text-xs text-gray-400">
          <a href="#" className="underline hover:text-white">
            Privacy policy
          </a>
          <a href="#" className="underline hover:text-white">
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
}
