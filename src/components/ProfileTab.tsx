import TextInput from "../form/TextInput";
import PrimaryButton from "./PrimaryButton";

export default function ProfileTab() {
  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {/* LEFT */}
      <div className="space-y-5">
        <div className="primary-card">
          <h2 className="primary-card-header mb-4 text-lg font-semibold">Profile details</h2>

          <div className="flex items-center gap-5">
            <img className="h-20 w-20 overflow-hidden rounded-xl" src="./profile.png" />

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <p> ✉ rmasumreja@gmail.com</p>
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
          <h2 className="primary-card-header mb-6 text-lg font-semibold">Change email</h2>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <TextInput placeholder="Enter new email..." />
            <TextInput placeholder="Enter your current password..." />
          </div>

          <div className="primary-card-footer mt-6 flex justify-end">
            <PrimaryButton className="bg-primary-base w-44 cursor-pointer text-black">
              Update
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="primary-card">
        <h2 className="primary-card-header mb-4 text-lg font-semibold">Profile settings</h2>

        <div className="mb-4">
          <p className="mb-3">Avatar</p>

          <div className="flex items-center gap-4">
            <img className="h-20 w-20 overflow-hidden rounded-xl" src="./profile.png" />
            <p className="text-sm text-neutral-500">We support PNGs, JPEGs and JPG under 2 MB</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <label>First Name *</label>
          <label>Last Name *</label>
          <TextInput placeholder="Enter first name..." />
          <TextInput placeholder="Enter last name..." />
        </div>

        <div className="pt-4 text-sm">Data processing agreement</div>

        <div className="primary-card-footer mt-6 flex justify-end">
          <PrimaryButton className="bg-primary-base w-44 cursor-pointer text-black">
            Update
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
