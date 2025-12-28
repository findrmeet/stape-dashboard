import SecondaryButton from "./SecondaryButton";
import TextInput from "../form/TextInput";

export default function StoreTab() {
  return (
    <div className="primary-card mt-4 rounded-2xl shadow-inner">
      {/* Header */}
      <div className="primary-card-header flex flex-col gap-4 p-4 sm:p-6">
        <p className="max-w-3xl text-sm text-neutral-400">
          A scalable NoSQL database that provides near-instantaneous read/write and sync functions
          of data in an sGTM container.{" "}
          <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
            Learn more
          </span>
        </p>

        {/* Search Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <TextInput placeholder="Search in documents" className="w-full sm:w-48" />

          <TextInput placeholder="Enter name" className="w-full sm:w-64" />

          <div className="flex gap-3">
            <SecondaryButton className="h-11 flex-1 cursor-pointer rounded-xl bg-[#EEF2FF] px-6 text-sm text-black shadow-lg hover:bg-white sm:flex-none sm:px-10">
              Search
            </SecondaryButton>

            <SecondaryButton className="border-gray-base hover:border-gray-base h-11 flex-1 cursor-pointer rounded-xl border bg-transparent px-6 text-sm text-neutral-300 sm:flex-none sm:px-10">
              Reset
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-104 flex-col sm:flex-row">
        {/* Mobile Actions */}
        <div className="border-gray-base flex justify-between border-b p-4 text-sm sm:hidden">
          <button className="cursor-pointer text-white hover:opacity-80">+Add document</button>
          <button className="cursor-pointer text-neutral-400 hover:text-white">Upload CSV</button>
        </div>

        {/* Left panel (Desktop only) */}
        <div className="border-gray-base hidden w-72 border-r p-6 sm:block">
          <div className="flex flex-col gap-4 text-sm">
            <button className="cursor-pointer text-left text-white hover:opacity-80">
              + Add document
            </button>
            <button className="cursor-pointer text-left text-neutral-400 hover:text-white">
              Upload CSV
            </button>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex flex-1 items-center justify-center px-4 text-sm text-neutral-500">
          <p>Nothing to show, nothing to see</p>
        </div>
      </div>
    </div>
  );
}
