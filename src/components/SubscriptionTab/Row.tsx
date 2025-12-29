type RowProps = {
  label: string;
  value: string;
};

export function Row({ label, value }: RowProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <span className="text-sm text-[#9CA3AF]">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}
