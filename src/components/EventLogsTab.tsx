"use client";

import SecondaryButton from "./SecondaryButton";
import TextInput from "../form/TextInput";

export default function EventLogsTab() {
  return (
    <div className="mt-4 rounded-2xl border border-[#22252E] bg-linear-to-b from-[#0B0D12] to-[#07090D] shadow-inner">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#22252E] p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm text-neutral-400">
          Request logs display the requests sent by the server to Facebook, TikTok, and other
          platforms. This only works if you use Signaly tags for these platforms. Logs are available
          only for the last 3 days.{" "}
          <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
            Upgrade to Business
          </span>{" "}
          to see 10 days logs.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <span className="cursor-pointer text-neutral-400 hover:text-white">Access Logs</span>
          <span className="font-medium text-white">Request Logs</span>
          <span className="cursor-pointer text-neutral-400 hover:text-white">Response Logs</span>
          <span className="cursor-pointer text-neutral-400 hover:text-white">Other Logs</span>
        </div>
      </div>

      {/* Filters */}
      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-5">
        <TextInput defaultValue="07/10/2025" />
        <TextInput defaultValue="00:00" />
        <TextInput defaultValue="24:00" />
        <TextInput placeholder="Platform" />
        <TextInput placeholder="Event type" />
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 border-t border-[#22252E] p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-neutral-500">Date and time are in UTC format</p>

        <SecondaryButton className="h-11 rounded-xl bg-[#EEF2FF] px-6 text-sm text-black shadow-lg hover:bg-white">
          Show logs
        </SecondaryButton>
      </div>
    </div>
  );
}
