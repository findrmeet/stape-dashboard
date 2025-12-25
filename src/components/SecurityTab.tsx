import { Lock } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function SecurityTab() {
  return (
    <section className="text-neutral-500">
      <div className="mx-auto space-y-6">
        {/* 2FA Banner */}
        <div className="primary-card flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full p-2">
              <Lock />
            </div>
            <div>
              <h3 className="font-semibold text-white">Two-Factor Authentication</h3>
              <p className="text-sm">
                Increase the security of your account by activating the two-factor authorisation
                option. To do this you can use any of the 2FA applications such as Google
                Authenticator, Authy, etc.
              </p>
            </div>
          </div>

          <SecondaryButton className="w-50 cursor-pointer">Update</SecondaryButton>
        </div>

        {/* Password + SSO */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Change Password */}
          <div className="primary-card space-y-4 lg:col-span-2">
            <h3 className="primary-card-header font-semibold">Change password</h3>

            <div>
              <label className="text-sm">Current password *</label>
              <input
                className="mt-1 w-full rounded-lg border border-[#1C2230] bg-[#07090D] p-3"
                placeholder="Enter your current password..."
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm">New password *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[#1C2230] bg-[#07090D] p-3"
                  placeholder="Enter new password..."
                />
              </div>
              <div>
                <label className="text-sm">New password one more time *</label>
                <input
                  className="mt-1 w-full rounded-lg border border-[#1C2230] bg-[#07090D] p-3"
                  placeholder="Confirm new password..."
                />
              </div>
            </div>

            <div className="primary-card-footer flex justify-end">
              <PrimaryButton className="w-full px-12 py-2 sm:w-auto">Update</PrimaryButton>
            </div>
          </div>

          {/* SSO */}
          <div className="primary-card flex flex-col justify-between gap-6 rounded-2xl p-5 sm:p-6">
            <div>
              <h3 className="primary-card-header font-semibold">Single Sing-On (SSO)</h3>
              <p className="mt-2 text-sm">
                Increase the security of your account by activating the two-factor authorisation
                option. To do this you can use any of the 2FA applications such as Google
                Authenticator, Authy, etc.
              </p>
            </div>

            <div className="flex justify-end">
              <PrimaryButton className="w-full px-12 py-2 sm:w-auto">Request SSO</PrimaryButton>
            </div>
          </div>
        </div>

        {/* Activity Table */}
        <div className="primary-card overflow-x-auto rounded-2xl p-5 sm:p-6">
          <h3 className="primary-card-header mb-4 font-semibold">Activity history</h3>

          <table className="w-full min-w-175 text-sm">
            <thead>
              <tr>
                {["EVENT", "SOURCE", "IP", "COUNTRY", "DATE AND TIME"].map((h) => (
                  <th key={h} className="border-gray-base border-b py-3 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <tr key={i} className="border-b border-[#1C2230] last:border-none">
                  <td className="py-3">Login</td>
                  <td>Chrome 141 on Windows 10</td>
                  <td>172.68.163.168</td>
                  <td>Bangladesh</td>
                  <td>10/15/2025, 11:03:57 PM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
