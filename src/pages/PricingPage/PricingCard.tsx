import { LucideCheck, X } from "lucide-react";
import PrimaryModal from "../../components/PrimaryModal";

export function PricingCard({
  title,
  badge,
  price,
  subtitle,
  description,
  features,
  highlighted = false,
  active = false,
  setActive,
}: {
  title: string;
  badge?: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <div className={`relative ${highlighted ? "card-wrapper" : ""}`}>
        {/* Outer container for non-highlighted cards */}
        <section
          className={`relative rounded-2xl p-6 flex flex-col justify-between  ${
            highlighted
              ? "card-content"
              : "border border-[#1F222A] bg-linear-to-b from-[#0E0F14] to-black"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">{title}</h3>
              {badge && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#E11D48] text-white">
                  {badge}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-end gap-1">
              <p className="text-4xl font-semibold">{price}</p>
              <p className="text-sm text-neutral-500">{subtitle}</p>
            </div>

            <p className="mt-4 text-sm text-neutral-500">{description}</p>

            <button
              className={`mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition cursor-pointer ${
                highlighted
                  ? "bg-white text-black"
                  : "bg-[#0E0F14] border border-[#26272F] text-white"
              }`}
              onClick={() => setActive(true)}
            >
              Get Start Now
            </button>

            <div className="mt-8">
              <h4 className="text-sm font-medium mb-4">Included Features:</h4>
              <ul className="space-y-3">
                {features?.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-white">
                      <LucideCheck size={20} />
                    </span>
                    <p className="text-gray-300">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <PrimaryModal active={active} setActive={setActive}>
        <div className="relative w-full max-w-xl rounded-2xl  bg-linear-to-b from-[#0E0F14] to-[#07080C]  text-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#26272F]">
            <h2 className="text-base font-medium">Purchase summery</h2>
            <button
              className="text-neutral-500 hover:text-white transition cursor-pointer"
              aria-label="Close modal"
              onClick={() => setActive(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Subscription */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-neutral-500">
              <span>Subscription Name :</span>
              <span className="text-white">Pro Plan</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-500">Total due today :</span>
              <span className="text-lg font-semibold">$ 400 USD</span>
            </div>
          </div>

          {/* Pay Button */}
          <button className="mt-6 w-full rounded-lg bg-[#EEF1FF] py-3 text-sm font-medium text-black hover:bg-white transition cursor-pointer">
            Pay Now
          </button>

          {/* Next payment */}
          <div className="mt-6 flex justify-between text-sm">
            <span className="text-neutral-500">Next payment date :</span>
            <span className="text-white">November 17, 2026</span>
          </div>

          {/* Include task */}
          <div className="mt-6 border-t border-[#26272F] pt-4">
            <p className="text-sm font-medium">Include task</p>
            <p className="mt-1 text-xs text-neutral-500">
              Your Free plan includes 100 task per month.
            </p>
          </div>

          {/* Sales final */}
          <div className="mt-6 border-t border-[#26272F] pt-4">
            <p className="text-sm font-medium">All sales final</p>
            <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
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
            <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
              Proceeding by selecting the button above will enroll you in a
              recurring subscription plan. Signaly will charge your payment
              method this amount yearly plus applicable taxes, minus any
              discounts or credits.
            </p>
          </div>

          {/* Footer links */}
          <div className="mt-6 flex gap-4 text-xs text-neutral-500">
            <a href="#" className="underline hover:text-white">
              Privacy policy
            </a>
            <a href="#" className="underline hover:text-white">
              Terms of service
            </a>
          </div>
        </div>
      </PrimaryModal>
    </>
  );
}
