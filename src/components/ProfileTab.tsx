import TextInput from "../form/TextInput";
import PrimaryButton from "./PrimaryButton";

export default function ProfileTab() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
      {/* LEFT COLUMN */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-[#0E0F14] p-6">
          <h2 className="mb-4 text-lg font-semibold">Profile details</h2>

          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/10" />

            <div className="space-y-1 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span>✉</span>
                rmasumreja@gmail.com
              </div>

              <p className="text-xs text-white/50">
                Account created: Oct 20, 2023
              </p>
              <p className="text-xs text-white/50">
                Account shared:{" "}
                <span className="text-white/80">with one Signaly user</span>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0E0F14] p-6">
          <h2 className="mb-6 text-lg font-semibold">Change email</h2>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TextInput placeholder="Enter new email..." />
            <TextInput placeholder="Enter your current password..." />
          </div>

          <div className="mt-6 flex justify-end">
            <PrimaryButton>Update</PrimaryButton>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="rounded-2xl border border-white/10 bg-[#0E0F14] p-6">
        <h2 className="mb-6 text-lg font-semibold">Profile settings</h2>

        <div className="mb-6">
          <p className="mb-3 text-sm">Avatar</p>

          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-full bg-white/10" />
            <p className="text-xs text-white/40">
              We support PNGs, JPEGs and JPG under 2 MB
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <TextInput placeholder="Enter first name..." />
          <TextInput placeholder="Enter last name..." />
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-sm text-white/60">
          Data processing agreement
        </div>

        <div className="mt-6 flex justify-end">
          <PrimaryButton>Update</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
