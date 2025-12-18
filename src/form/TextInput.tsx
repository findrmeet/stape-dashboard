type TextInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const baseInputClass =
  "w-full py-3 bg-[#111318] border border-[#26272F] rounded-xl px-4 text-sm focus:outline-none";

const TextInput = ({ className = "", ...props }: TextInputProps) => {
  return (
    <input
      {...props}
      className={`${baseInputClass} text-white placeholder-[#888888] ${className}`}
    />
  );
};

export default TextInput;
