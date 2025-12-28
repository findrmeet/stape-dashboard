"use client";

import { Card } from "./Card";
import { Section } from "./Section";

export default function ConnectionsTab() {
  return (
    <div className="mt-4 space-y-6">
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
          auth
        />

        <Card
          logo="/google-sheets.png"
          title="Google Sheets"
          description="Read/Write data from sGTM to Google Sheets."
          primary="Sign in"
          auth
        />

        <Card
          logo="/google-ads.png"
          title="Google Ads"
          description="Embrace the power of Offline Conversions."
          primary="Sign in"
          auth
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
