import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import PrimaryButton from "./PrimaryButton";

/* -----------------------------
   Types
--------------------------------*/

type NotificationItem = {
  id: string;
  title: string;
  description: string;
};

/* -----------------------------
   Data
--------------------------------*/

const essentialNotifications: NotificationItem[] = [
  {
    id: "account_billing",
    title: "Account & Billing",
    description:
      "Automatically receive important account-related emails (e.g. password resets, payment notifications, product statuses).",
  },
];

const marketingNotifications: NotificationItem[] = [
  {
    id: "product_news",
    title: "New Features & Product News",
    description:
      "Get notified about our latest product launches, features, improvements, and major update.",
  },
  {
    id: "offers_tips",
    title: "Exclusive Offers & Tips",
    description:
      "Get notified about our latest product launches, features, improvements, and major update.",
  },
  {
    id: "event_invites",
    title: "Event Invitations",
    description:
      "Get notified about our latest product launches, features, improvements, and major update.",
  },
  {
    id: "signaly_digest",
    title: "Signaly Digest",
    description:
      "Get notified about our latest product launches, features, improvements, and major update.",
  },
];

/* -----------------------------
   Component
--------------------------------*/

const NotificationsTab: React.FC = () => {
  const [state, setState] = useState<Record<string, boolean>>({
    account_billing: true,
    product_news: true,
    offers_tips: true,
    event_invites: true,
    signaly_digest: true,
  });

  const updateValue = (id: string, value: boolean) => {
    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Essential */}
      <div className="primary-card p-0">
        <div className="primary-card-header px-6 py-5">
          <h3 className="text-base font-semibold">Essential notifications</h3>
        </div>

        <div className="space-y-6 p-6">
          {essentialNotifications?.map((item) => (
            <div key={item.id} className="space-y-1">
              <Checkbox
                label={item.title}
                checked={state[item.id]}
                onChange={(value) => updateValue(item.id, value)}
              />

              <p className="ml-9 text-xs leading-relaxed text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing */}
      <div className="primary-card p-0">
        <div className="primary-card-header px-6 py-5">
          <h3 className="text-base font-semibold">Marketing preferences</h3>
        </div>

        <div className="space-y-6 p-6">
          {marketingNotifications?.map((item) => (
            <div key={item.id} className="space-y-1">
              <Checkbox
                label={item.title}
                checked={state[item.id]}
                onChange={(value) => updateValue(item.id, value)}
              />

              <p className="ml-9 text-xs leading-relaxed text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="primary-card-footer flex justify-end">
          <PrimaryButton className="bg-primary-base w-full cursor-pointer text-black sm:w-44">
            Update
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
