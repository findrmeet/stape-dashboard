// React + TypeScript + Tailwind pixel-perfect implementation
// Based on provided design

import { Shield } from "lucide-react";

export default function SecurityTab() {
  return (
    <div className="text-white">
      <div className="mx-auto space-y-6">
        <div className="flex items-center justify-between rounded-2xl bg-[#0C0F14] p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#11151C] p-3">
              <Shield size={20} />
            </div>
            <div>
              <h3 className="font-semibold">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-400">
                Increase the security of your account by activating the two-factor authorisation
                option. To do this you can use any of the 2FA applications such as Google
                Authenticator, Authy, etc.
              </p>
            </div>
          </div>
          <button className="rounded-lg bg-[#E9EEFF] px-6 py-2 text-black">Configure</button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4 rounded-2xl bg-[#0C0F14] p-6">
            <h3 className="font-semibold">Change password</h3>
            <div>
              <label className="text-sm">Current password *</label>
              <input
                className="mt-1 w-full rounded-lg border border-[#1C2230] bg-[#07090D] p-3"
                placeholder="Enter your current password..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
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
            <div className="flex justify-end">
              <button className="rounded-lg border border-[#1C2230] px-6 py-2 text-gray-400">
                Update
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-[#0C0F14] p-6">
            <div>
              <h3 className="font-semibold">Single Sing-On (SSO)</h3>
              <p className="mt-2 text-sm text-gray-400">
                Increase the security of your account by activating the two-factor authorisation
                option. To do this you can use any of the 2FA applications such as Google
                Authenticator, Authy, etc.
              </p>
            </div>
            <button className="self-end rounded-lg border border-[#1C2230] px-6 py-2 text-gray-400">
              Request SSO
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-[#0C0F14] p-6">
          <h3 className="mb-4 font-semibold">Activity history</h3>
          <table className="w-full text-sm">
            <thead className="border-b border-[#1C2230] text-gray-400">
              <tr>
                {["EVENT", "SOURCE", "IP", "COUNTRY", "DATE AND TIME"].map((h) => (
                  <th key={h} className="py-3 text-left">
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
    </div>
  );
}
