import { LucideCheck } from "lucide-react";

export function PricingCard({
  title,
  badge,
  price,
  subtitle,
  description,
  features,
  highlighted = false,
}: {
  title: string;
  badge?: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <section
      className={`relative rounded-2xl border p-6 flex flex-col justify-between bg-linear-to-b from-[#0E0F14] to-black ${
        highlighted
          ? "border-gray-500 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]"
          : "border-[#1F222A]"
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
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>

        <p className="mt-4 text-sm text-gray-400">{description}</p>

        <button
          className={`mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition cursor-pointer ${
            highlighted
              ? "bg-white text-black"
              : "bg-[#0E0F14] border border-[#26272F] text-white"
          }`}
        >
          Get Start Now
        </button>

        <div className="mt-8">
          <h4 className="text-sm font-medium mb-4">Included Features:</h4>
          <ul className="space-y-3">
            {features.map((item) => (
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
  );
}
