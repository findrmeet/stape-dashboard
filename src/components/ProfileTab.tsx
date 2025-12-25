import TextInput from "../form/TextInput";
import SecondaryButton from "./SecondaryButton";

export default function ProfileTab() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* LEFT */}
      <div className="space-y-5">
        <div className="primary-card">
          <h2 className="text-lg font-semibold mb-4 primary-card-header">
            Profile details
          </h2>

          <div className="flex gap-5 items-center">
            <img
              className="h-20 w-20 rounded-xl overflow-hidden"
              src="./profile.png"
            />

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                ✉ rmasumreja@gmail.com
              </div>

              <p className="text-neutral-400">
                Account created: <span>Oct 20, 2023</span>
              </p>
              <p className="text-neutral-400">
                Account shared: <span>with one Signaly user</span>
              </p>
            </div>
          </div>
        </div>

        <div className="primary-card">
          <h2 className="text-lg font-semibold mb-6 primary-card-header">
            Change email
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <TextInput placeholder="Enter new email..." />
            <TextInput placeholder="Enter your current password..." />
          </div>

          <div className="flex justify-end primary-card-footer mt-6">
            <SecondaryButton className="w-50 h-12 cursor-pointer">
              Update
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="primary-card">
        <h2 className="text-lg font-semibold mb-4 primary-card-header">
          Profile settings
        </h2>

        <div className="mb-4">
          <p className="mb-3">Avatar</p>

          <div className="flex items-center gap-4">
            <img
              className="h-20 w-20 rounded-xl overflow-hidden"
              src="./profile.png"
            />
            <p className="text-sm text-neutral-500">
              We support PNGs, JPEGs and JPG under 2 MB
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <label>First Name *</label>
          <label>Last Name *</label>
          <TextInput placeholder="Enter first name..." />
          <TextInput placeholder="Enter last name..." />
        </div>

        <div className="text-sm pt-4">Data processing agreement</div>

        <div className="flex justify-end mt-6 primary-card-footer">
          <SecondaryButton className="w-50 h-12 cursor-pointer">
            Update
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
