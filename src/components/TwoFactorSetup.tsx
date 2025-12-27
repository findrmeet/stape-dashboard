import React from "react";
import TextInput from "../form/TextInput";
import PrimaryButton from "./PrimaryButton";

const TwoFactorSetup: React.FC = () => {
  return (
    <section className="primary-card">
      <p className="mt-4">1. Install an authenticator app on your mobile device</p>
      <p className="mt-6">2. Scan the following QR code in your authenticator app</p>

      <img src="qr.png" alt="QR Code" className="mt-4 object-contain" />
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <label>3. Enter your Signaly account password</label>
          <TextInput placeholder="Enter your stape accoun password..." className="mt-2" />
        </div>
        <div className="flex-1">
          <label>4. Enter the code from your authenticator app</label>
          <TextInput placeholder="Enter authenticator code..." className="mt-2" />
        </div>
      </div>
      <div className="primary-card-footer mt-4 flex justify-end">
        <PrimaryButton className="bg-primary-base w-full cursor-pointer text-black sm:w-44">
          Configure
        </PrimaryButton>
      </div>
    </section>
  );
};

export default TwoFactorSetup;
