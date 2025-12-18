interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <button
      {...rest} // here you can pass any other props
      className={`px-4 py-3 rounded-lg bg-primary-base border border-gray-base text-black-solid 
                  text-center transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]
                  ${rest.className || ""}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

{
  /*
==================== EXAMPLES =====================

 <SecondaryButton onClick={() => console.log("Clicked!")}>
    Click Me
</SecondaryButton>


<SecondaryButton className="w-full" onClick={submitForm}>
  Submit
</SecondaryButton> 
*/
}
