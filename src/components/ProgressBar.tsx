import React from "react";

interface ProgressBarProps {
  progress: number; // 0 - 100
  height?: string; // optional, default h-2
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = "h-3",
}) => {
  return (
    <div
      className={`w-full bg-info-base ${height} rounded-full overflow-hidden`}
    >
      <div
        className="bg-linear-to-r from-[#717171] to-white h-full rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

// ============ EXAMPLE ===============
// <ProgressBar progress={70} /> {/* 70% filled */ }
// <ProgressBar progress={40} height="h-3" /> {/* taller bar */ }
