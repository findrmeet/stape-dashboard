"use client";

import SecondaryButton from "./SecondaryButton";
import TextInput from "../form/TextInput";

export default function StoreTab() {
  return (
    <div className="primary-card mt-4 rounded-2xl shadow-inner">
      {/* Header */}
      <div className="primary-card-header flex flex-col gap-4">
        <p className="max-w-3xl text-sm text-neutral-400">
          A scalable NoSQL database that provides near-instantaneous read/write and sync functions
          of data in an sGTM container.{" "}
          <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
            Learn more
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="w-48">
            <TextInput placeholder="Search in documents" />
          </div>

          <div className="w-64">
            <TextInput placeholder="Enter name" />
          </div>

          <SecondaryButton className="h-11 rounded-xl bg-[#EEF2FF] px-10 text-sm text-black shadow-lg hover:bg-white">
            Search
          </SecondaryButton>

          <SecondaryButton className="h-11 rounded-xl border border-neutral-700 bg-transparent px-10 text-sm text-neutral-300 hover:border-neutral-500">
            Reset
          </SecondaryButton>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-[420px]">
        {/* Left panel */}
        <div className="border-gray-base w-72 border-r p-6">
          <div className="flex flex-col gap-4 text-sm">
            <button className="text-left text-white hover:opacity-80">+ Add document</button>

            <button className="text-left text-neutral-400 hover:text-white">Upload CSV</button>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex flex-1 items-center justify-center text-sm text-neutral-500">
          Nothing to show, nothing to see
        </div>
      </div>
    </div>
  );
}
