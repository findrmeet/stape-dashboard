import { Wallet } from "lucide-react";

export function GradientWallet() {
  return (
    <div className="relative">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="#777777" />
          </linearGradient>
        </defs>
      </svg>

      <Wallet size={96} stroke="url(#icon-gradient)" className="stroke-[1.5]" />
    </div>
  );
}
