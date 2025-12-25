import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  removeParent?: () => void;
}

const PrimaryModal = ({ children, active, setActive, removeParent }: Props) => {
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div
      className={`bg-black-solid/30 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ${active ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-300`}
    >
      {active && (
        <div className="bg-black-base border-gray-base relative max-h-[90vh] max-w-[95vw] overflow-y-auto rounded-xl border shadow-lg md:max-w-[90vw]">
          <button
            onClick={() => {
              setActive(false);
              removeParent?.();
            }}
            className="hover:text-primary-muted absolute top-4 right-4 cursor-pointer transition-colors"
          >
            <X />
          </button>

          <div className="min-w-sm p-4">{children}</div>
        </div>
      )}
    </div>
  );
};

export default PrimaryModal;
