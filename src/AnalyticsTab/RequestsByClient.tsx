import { Section } from "./Section";

type RequestRow = {
  name: string;
  total: number;
  adBlock: string;
  tp: string;
};

const ga4Requests: RequestRow[] = [
  { name: "AddShippingInfo", total: 557, adBlock: "0%", tp: "44.02%" },
  { name: "AddToCart", total: 7251, adBlock: "0%", tp: "48.23%" },
  { name: "BeginCheckout", total: 725, adBlock: "0%", tp: "44.02%" },
  { name: "Other", total: 25683, adBlock: "0%", tp: "44.58%" },
  { name: "PageView", total: 41892, adBlock: "0%", tp: "52.41%" },
  { name: "Purchase", total: 514, adBlock: "0%", tp: "78.71%" },
  { name: "ViewItem", total: 22458, adBlock: "0%", tp: "55.69%" },
];

const otherRequests: RequestRow[] = [{ name: "Other", total: 28165, adBlock: "0%", tp: "61.25%" }];

export default function RequestsByClient({ hasData }: { hasData: boolean }) {
  if (!hasData) {
    return (
      <div className="primary-card">
        <h1 className="primary-card-header text-primary-muted text-lg font-semibold">
          Requests by client
        </h1>
        <p className="py-20 text-center text-sm text-neutral-500">
          Nothing to show, nothing to see
        </p>
      </div>
    );
  }

  return (
    <div className="primary-card space-y-10">
      <h1 className="primary-card-header text-lg font-semibold text-white">Requests by client</h1>

      {/* GA4 Section */}
      <Section
        title="GA4 requests"
        description="The breakdown of total requests and the percentage of requests impacted by ad blockers and tracking preventions (TP), categorized by event type, that were claimed by GA4 Client in server Google Tag Manager."
        rows={ga4Requests}
      />

      {/* Other Requests */}
      <Section
        title="Other requests"
        description="The breakdown of total requests and the percentage of requests impacted by ad blockers and tracking preventions (TP), categorized by event type, that were claimed by clients other than GA4 and Data Client."
        rows={otherRequests}
      />
    </div>
  );
}
