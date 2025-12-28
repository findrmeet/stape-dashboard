import PrimaryButton from "../PrimaryButton";

export const Card = ({
  logo,
  title,
  description,
  primary,
  auth = false,
}: {
  logo: string;
  title: string;
  description: string;
  primary: string;
  auth?: boolean;
}) => {
  return (
    <div className="primary-card flex flex-col justify-between rounded-xl">
      <div className="space-y-4 p-5">
        <div className="flex h-10 justify-center">
          <img src={logo} alt={title} className="h-full object-contain" />
        </div>

        <p className="text-center text-sm text-neutral-400">{description}</p>
      </div>

      <div className="mt-6 space-y-3">
        {!auth && (
          <PrimaryButton className="w-full border border-neutral-700 bg-transparent text-neutral-300">
            Learn more
          </PrimaryButton>
        )}

        <PrimaryButton
          className={`w-full ${
            auth
              ? "bg-[#EEF2FF] text-white hover:bg-white hover:text-black"
              : "bg-white text-black hover:bg-white"
          }`}
        >
          {primary}
        </PrimaryButton>
      </div>
    </div>
  );
};
