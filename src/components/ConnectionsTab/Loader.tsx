export const Loader = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-neutral-700" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-white border-t-transparent" />
        </div>

        <p className="text-sm text-neutral-400">Loading connections...</p>
      </div>
    </div>
  );
};
