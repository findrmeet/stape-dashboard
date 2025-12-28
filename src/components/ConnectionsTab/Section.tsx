export const Section = ({
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
      <div className="primary-card-header">
        <h3 className="py-2 text-sm font-medium text-white sm:px-5">{title}</h3>
      </div>

      <div className="py-3 sm:p-5">
        <p className="mb-5 max-w-4xl text-sm text-neutral-400">{description}</p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </div>
  );
};
