import React from "react";

interface ProgressBarProps {
  progress: number; // 0 - 100
  height?: string; // optional, default h-2
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height = "h-3" }) => {
  return (
    <div className={`bg-info-base w-full ${height} overflow-hidden rounded-full`}>
      <div
        className="h-full rounded-full bg-linear-to-r from-[#717171] to-white transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

// ============ EXAMPLE ===============
// <ProgressBar progress={70} /> {/* 70% filled */ }
// <ProgressBar progress={40} height="h-3" /> {/* taller bar */ }
