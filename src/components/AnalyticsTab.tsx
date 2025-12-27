"use client";

import SecondaryButton from "./SecondaryButton";

export default function AnalyticsTab() {
  return (
    <div className="primary-card mt-4 text-center shadow-inner">
      <h2 className="mt-12 text-lg font-medium text-white">Analytics is turned off.</h2>

      <div className="mt-6 flex justify-center">
        <SecondaryButton className="h-11 cursor-pointer rounded-xl bg-[#EEF2FF] px-6 text-sm text-black shadow-lg hover:bg-white">
          Turn on Analytics
        </SecondaryButton>
      </div>

      <p className="mx-auto mt-6 mb-12 max-w-md text-sm text-neutral-400">
        The configuration steps for Signaly Analytics very depending on your sGTM setup.{" "}
        <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
          Learn more
        </span>
      </p>
    </div>
  );
}
