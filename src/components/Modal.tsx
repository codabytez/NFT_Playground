import { Add } from "iconsax-react";
import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const modalContent = isOpen ? (
    <>
      <div
        className="fixed inset-0 z-50"
        style={{ backdropFilter: "blur(4.5px)" }}
      ></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{ pointerEvents: "none" }}
        ></div>
        <div
          className="bg-white  min-h-[200px] backdrop-blur-[205px] z-50 overflow-auto max-h-full w-[400px] shadow-[2px_3px_0px_0px_#000] border border-black relative"
          style={{ pointerEvents: "auto" }}
        >
          <div
            className="absolute w-6 h-6 bg-contrast-yellow flex justify-center items-center shadow-[2px_2px_0px_0px_#000] right-5 top-5 hover:bg-brand-purple transition-all duration-300 cursor-pointer group overflow-x-hidden"
            onClick={onClose}
          >
            <Add
              size="16"
              variant="Outline"
              className="text-brand-purple group-hover:text-contrast-yellow rotate-[45deg]"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("root") as Element
    );
  } else {
    return null;
  }
};
