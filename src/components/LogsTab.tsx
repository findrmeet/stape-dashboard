import { useState } from "react";
import SecondaryButton from "./SecondaryButton";
import TextInput from "../form/TextInput";
import LogsTable from "./LogsTable";

type LogView = "access" | "request" | "response" | "other";

export default function LogsTab() {
  const [activeLogView, setActiveLogView] = useState<LogView>("access");
  const [showResults, setShowResults] = useState<boolean>(false);

  const changeLogView = (view: LogView) => {
    setActiveLogView(view);
    setShowResults(false);
  };

  const handleLogViewClick = (view: LogView) => {
    changeLogView(view);
  };

  const showLogs = () => {
    setShowResults(true);
  };

  const descriptions: Record<LogView, string> = {
    access:
      "Access logs show the requests received by your GTM server. When viewing the logs, Request logs and Response logs can be queried if they exist.",
    request:
      "Request logs display the requests sent by the server to Facebook, TikTok, and other platforms. This only works if you use Signaly tags for these platforms.",
    response:
      "Response logs display the response received by the server from Facebook, TikTok, etc. platforms. This only works if you use Signaly tags for these platforms.",
    other: "Logs that we can't categorize. For example, created by Signaly Logger tag.",
  };

  const logViews: LogView[] = ["access", "request", "response", "other"];

  return (
    <>
      <div className="primary-card mt-4 rounded-2xl shadow-inner">
        {/* Header */}
        <div className="primary-card-header flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm text-neutral-400">
            {descriptions[activeLogView]} Logs are available only for the last 3 days.{" "}
            <span className="cursor-pointer text-white underline underline-offset-4 hover:opacity-80">
              Upgrade to Business
            </span>{" "}
            to see 10 days logs.
          </p>

          <div className="flex items-center gap-6 text-sm">
            {logViews.map((view) => {
              const isActive = activeLogView === view;

              return (
                <span
                  key={view}
                  onClick={() => handleLogViewClick(view)}
                  className={`cursor-pointer ${
                    isActive ? "font-medium text-white" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {view === "access"
                    ? "Access Logs"
                    : view === "request"
                      ? "Request Logs"
                      : view === "response"
                        ? "Response Logs"
                        : "Other Logs"}
                </span>
              );
            })}
          </div>
        </div>

        {/* Filters */}
        {activeLogView === "access" && (
          <div className="grid gap-4 py-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-6">
            <TextInput defaultValue="07/10/2025" />
            <TextInput defaultValue="00:00" />
            <TextInput defaultValue="24:00" />
            <TextInput placeholder="Status" />
            <TextInput placeholder="Client" />
            <TextInput placeholder="Event type" />
            <TextInput className="sm:col-span-2 lg:col-span-3" placeholder="Request URL" />
            <TextInput placeholder="Domain name" />
          </div>
        )}

        {activeLogView === "request" && (
          <div className="grid gap-4 py-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-5">
            <TextInput defaultValue="07/10/2025" />
            <TextInput defaultValue="00:00" />
            <TextInput defaultValue="24:00" />
            <TextInput placeholder="Platform" />
            <TextInput placeholder="Event type" />
          </div>
        )}

        {activeLogView === "response" && (
          <div className="grid gap-4 py-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-5">
            <TextInput defaultValue="07/10/2025" />
            <TextInput defaultValue="00:00" />
            <TextInput defaultValue="24:00" />
            <TextInput placeholder="Platform" />
            <TextInput placeholder="Status" />
          </div>
        )}

        {activeLogView === "other" && (
          <div className="grid gap-4 py-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
            <TextInput defaultValue="07/10/2025" />
            <TextInput defaultValue="00:00" />
            <TextInput defaultValue="24:00" />
            <TextInput placeholder="Event type" />
          </div>
        )}

        {/* Footer */}
        <div className="primary-card-footer flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">Date and time are in UTC format</p>

          <SecondaryButton
            onClick={showLogs}
            className="h-11 cursor-pointer rounded-xl bg-[#EEF2FF] px-20 text-sm text-black shadow-lg hover:bg-white"
          >
            Show logs
          </SecondaryButton>
        </div>
      </div>

      {showResults && <LogsTable />}
    </>
  );
}
