interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest} // here you can pass any other props
      className={`bg-info-base border-gray-base cursor-pointer rounded-lg border px-2 py-1.5 text-center transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] ${rest.className || ""}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

{
  /*
==================== EXAMPLES =====================

 <PrimaryButton onClick={() => console.log("Clicked!")}>
    Click Me
</PrimaryButton>


<PrimaryButton className="w-full" onClick={submitForm}>
  Submit
</PrimaryButton> 
*/
}
