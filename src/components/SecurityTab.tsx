import { Lock } from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import TextInput from "../form/TextInput";
import { useState } from "react";
import TwoFactorSetup from "./TwoFactorSetup";

/* -----------------------------
   Type Declarations
--------------------------------*/

type ActivityHistoryRecord = {
  id: string;
  event: string;
  source: string;
  ipAddress: string;
  country: string;
  dateTime: string;
};

type TableHeader = "EVENT" | "SOURCE" | "IP" | "COUNTRY" | "DATE AND TIME";

/* -----------------------------
   Fake Activity History Data
--------------------------------*/
const activityHistoryData: ActivityHistoryRecord[] = [
  {
    id: "act-001",
    event: "Login",
    source: "Chrome 141 on Windows 10",
    ipAddress: "172.68.163.168",
    country: "Bangladesh",
    dateTime: "10/15/2025, 11:03:57 PM",
  },
  {
    id: "act-002",
    event: "Password Change",
    source: "Firefox 120 on Windows 11",
    ipAddress: "203.190.12.45",
    country: "India",
    dateTime: "10/14/2025, 6:18:42 PM",
  },
  {
    id: "act-003",
    event: "Login",
    source: "Safari 17 on macOS",
    ipAddress: "192.168.1.23",
    country: "USA",
    dateTime: "10/13/2025, 9:44:10 AM",
  },
  {
    id: "act-004",
    event: "Logout",
    source: "Chrome 141 on Windows 10",
    ipAddress: "172.68.163.168",
    country: "Bangladesh",
    dateTime: "10/12/2025, 10:02:31 PM",
  },
  {
    id: "act-005",
    event: "Two-Factor Enabled",
    source: "Edge 119 on Windows 10",
    ipAddress: "103.89.22.91",
    country: "Bangladesh",
    dateTime: "10/11/2025, 8:15:19 PM",
  },
  {
    id: "act-006",
    event: "Login",
    source: "Chrome 141 on Android",
    ipAddress: "45.251.78.11",
    country: "Bangladesh",
    dateTime: "10/10/2025, 7:03:56 AM",
  },
  {
    id: "act-007",
    event: "Session Expired",
    source: "Chrome 141 on Windows 10",
    ipAddress: "172.68.163.168",
    country: "Bangladesh",
    dateTime: "10/09/2025, 11:48:29 PM",
  },
  {
    id: "act-008",
    event: "Login Failed",
    source: "Unknown Device",
    ipAddress: "91.204.190.72",
    country: "Russia",
    dateTime: "10/08/2025, 4:21:02 AM",
  },
  {
    id: "act-009",
    event: "Password Reset",
    source: "Chrome 141 on Windows 10",
    ipAddress: "172.68.163.168",
    country: "Bangladesh",
    dateTime: "10/07/2025, 9:37:45 PM",
  },
];

const tableHeaders: TableHeader[] = ["EVENT", "SOURCE", "IP", "COUNTRY", "DATE AND TIME"];

/* -----------------------------
   Component
--------------------------------*/

export default function SecurityTab() {
  const [showTwoFactor, setShowTwoFactor] = useState<boolean>(false);

  const handleConfigureClick = () => {
    setShowTwoFactor(true);
  };

  if (!showTwoFactor)
    return (
      <section className="text-neutral-500">
        <div className="mx-auto space-y-6">
          {/* 2FA Banner */}
          <div className="primary-card flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-[#26272F] p-1.5">
                <div className="rounded-full bg-[#3A3B44] p-1.5">
                  <div className="rounded-full bg-linear-to-b from-white to-[#FFFFFF]/20 p-1.5 text-white">
                    <Lock />
                  </div>
                </div>
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

            <PrimaryButton
              className="bg-primary-base w-44 cursor-pointer text-black"
              onClick={handleConfigureClick}
            >
              Configure
            </PrimaryButton>
          </div>

          {/* Password + SSO */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Change Password */}
            <div className="primary-card space-y-4 lg:col-span-2">
              <h3 className="primary-card-header font-semibold">Change password</h3>

              <div>
                <label className="text-sm">Current password *</label>
                <TextInput className="mt-1" placeholder="Enter your current password..." />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm">New password *</label>
                  <TextInput className="mt-1" placeholder="Enter new password..." />
                </div>

                <div>
                  <label className="text-sm">New password one more time *</label>
                  <TextInput className="mt-1" placeholder="Confirm new password..." />
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

          <div className="primary-card">
            <h3 className="primary-card-header mb-4 font-semibold">Activity history</h3>

            <div className="relative overflow-hidden">
              <div className="overflow-x-auto px-5 sm:px-6">
                <table className="w-full min-w-175 text-sm">
                  <thead>
                    <tr>
                      {tableHeaders?.map((tableHeader) => (
                        <th
                          key={tableHeader}
                          className="border-gray-base border-b py-3 text-left whitespace-nowrap"
                        >
                          {tableHeader ?? ""}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {activityHistoryData?.map((activityRecord) => (
                      <tr
                        key={activityRecord?.id ?? ""}
                        className="border-b border-[#1C2230] last:border-none"
                      >
                        <td className="py-3 whitespace-nowrap">{activityRecord?.event ?? ""}</td>
                        <td className="whitespace-nowrap">{activityRecord?.source ?? ""}</td>
                        <td className="whitespace-nowrap">{activityRecord?.ipAddress ?? ""}</td>
                        <td className="whitespace-nowrap">{activityRecord?.country ?? ""}</td>
                        <td className="whitespace-nowrap">{activityRecord?.dateTime ?? ""}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  else {
    return <TwoFactorSetup />;
  }
}
