"use client";

import { ArrowDownToLine, ChevronRight } from "lucide-react";

type LogRecord = {
  id: string;
  date: string;
  status: number;
  eventType: string;
  client: string;
  requestUrl: string;
};

const fakeLogs: LogRecord[] = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  date: "14/11/2025, 16:56:02",
  status: 200,
  eventType: "Page View",
  client: "GA4",
  requestUrl: "https://e2server.indigomoroccotours.com/g/collect?v=2&tid=G-EG76DD",
}));

export default function LogsTable() {
  return (
    <div className="primary-card mt-4 overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="primary-card-header flex items-center justify-between">
        <p className="text-sm text-neutral-400">
          Showing 98 records{" "}
          <span className="text-neutral-500">
            Received logs cover 100% of your selected time range
          </span>
        </p>

        <button className="flex items-center gap-2 text-sm text-white hover:opacity-80">
          <ArrowDownToLine size={16} />
          Download as CSV
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[#22252E] text-neutral-400">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Event type</th>
              <th className="px-6 py-3">Client</th>
              <th className="px-6 py-3">Request URL</th>
              <th className="w-12"></th>
            </tr>
          </thead>

          <tbody>
            {fakeLogs.map((log) => (
              <tr key={log.id} className="border-b border-[#22252E] last:border-0">
                <td className="px-6 py-4 text-neutral-300">{log.date}</td>
                <td className="px-6 py-4 text-neutral-300">{log.status}</td>
                <td className="px-6 py-4 text-neutral-300">{log.eventType}</td>
                <td className="px-6 py-4 text-neutral-300">{log.client}</td>
                <td className="max-w-md truncate px-6 py-4 text-neutral-300">{log.requestUrl}</td>
                <td className="px-4 text-neutral-400">
                  <ChevronRight />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
