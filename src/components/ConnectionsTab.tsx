"use client";

import PrimaryButton from "./PrimaryButton";

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="primary-card mb-6 rounded-2xl shadow-inner">
      <div className="border-b border-neutral-800 p-5">
        <h3 className="text-sm font-medium text-white">{title}</h3>
      </div>

      <div className="p-5">
        <p className="mb-5 max-w-4xl text-sm text-neutral-400">{description}</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  logo,
  title,
  description,
  primary,
}: {
  logo: string; // now image path
  title: string;
  description: string;
  primary: string;
}) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#0E1015] p-5">
      <div className="space-y-4">
        <div className="h-10">
          <img src={logo} alt={title} className="h-full object-contain" />
        </div>

        <h4 className="text-lg font-semibold text-white">{title}</h4>

        <p className="text-sm text-neutral-400">{description}</p>
      </div>

      <div className="mt-6 space-y-3">
        <PrimaryButton className="w-full border border-neutral-700 bg-transparent text-neutral-300 hover:border-neutral-500">
          Learn more
        </PrimaryButton>

        <PrimaryButton className="w-full bg-white text-black hover:bg-white">
          {primary}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default function ConnectionsTab() {
  return (
    <div className="mt-4 space-y-6">
      {/* Authentifications */}
      {/* Authentifications */}
      <Section
        title="Authentifications"
        description="Signaly will handle your oAuth tokens for listed platforms."
      >
        <Card
          logo="/microsoft-advertising.png"
          title="Microsoft Advertising"
          description="For setting up the server GTM tag for Microsoft ads."
          primary="Sign in"
        />

        <Card
          logo="/google-sheets.png"
          title="Google Sheets"
          description="Read/Write data from sGTM to Google Sheets."
          primary="Sign in"
        />

        <Card
          logo="/google-ads.png"
          title="Google Ads"
          description="Embrace the power of Offline Conversions."
          primary="Sign in"
        />
      </Section>

      {/* CMS */}
      <Section
        title="CMS"
        description="Enrich your data layer with e-commerce events, extend cookie lifetimes, make your tracking resistant to ad blockers, and send webhooks with Signaly apps."
      >
        <Card
          logo="/shoppify.png"
          title="Shopify"
          description="A fast and easy way to implement server-side tagging for your Shopify store."
          primary="Install"
        />

        <Card
          logo="/wordpress.png"
          title="WordPress"
          description="Effortless setup of server-side tracking on your WordPress site."
          primary="Install"
        />

        <Card
          logo="/magento.png"
          title="Magento"
          description="Seamless integration of web and server Google Tag Manager on Magento."
          primary="Install"
        />

        <Card
          logo="/bigcommerce.png"
          title="BigCommerce"
          description="Quick and easy solution to set up server-side tracking for your BigCommerce site."
          primary="Install"
        />

        <Card
          logo="/wix.png"
          title="Wix"
          description="Straightforward solution to implement server-side tracking on your Wix website."
          primary="Install"
        />

        <Card
          logo="/presta-shop.png"
          title="PrestaShop"
          description="Level-up your PrestaShop store performance with server-side tracking."
          primary="Install"
        />
      </Section>

      {/* CRM */}
      <Section
        title="CRM"
        description="Connect your CRM offline data to your server GTM container and automatically report lead progress as conversion events."
      >
        <Card
          logo="/hubspot.png"
          title="HighLevel"
          description="Track and report CRM data to server GTM for better insights."
          primary="Install"
        />

        <Card
          logo="/zoho-crm.png"
          title="Zoho CRM"
          description="Integrate Zoho CRM with server GTM to track and report conversions."
          primary="Install"
        />

        <Card
          logo="/hubspot.png"
          title="HubSpot"
          description="Report conversions and track HubSpot contacts using server GTM."
          primary="Install"
        />

        <Card
          logo="/pipedrive.png"
          title="Pipedrive"
          description="Track your Pipedrive deals and send conversion data to server GTM."
          primary="Install"
        />

        <Card
          logo="/salesforce.png"
          title="Salesforce"
          description="Track and report Salesforce data as conversions to server GTM."
          primary="Install"
        />
      </Section>
    </div>
  );
}
