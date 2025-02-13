"use client";

import { useRouter } from "next/navigation";
import {
  ReactNode,
  useEffect,
  useRef,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";
import { createPortal } from "react-dom";

import Button from "../Button";
import IconButton from "../IconButton";

interface ModalContextType {
  title?: string;
  onClose?: () => void;
}

const ModalContext = createContext<ModalContextType>({});

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="h-[60vh] w-[60vw] px-9 py-6">{children}</div>;
};

const Header: FC = () => {
  const { title, onClose } = useContext(ModalContext);
  return (
    <div className="flex h-12 w-full items-center justify-between">
      <h4 className="text-heading03b">{title}</h4>
      <IconButton type="button" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
            fill="#111"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
            fill="#111"
          />
        </svg>
      </IconButton>
    </div>
  );
};

const Body: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-[calc(100%-112px)] w-full overflow-auto">{children}</div>
  );
};

const Footer: FC = () => {
  const { onClose } = useContext(ModalContext);
  return (
    <div className="flex w-full justify-end pt-4">
      <Button
        type="button"
        size="lg"
        onClick={() => {
          if (onClose) {
            onClose();
          }
        }}
      >
        닫기
      </Button>
    </div>
  );
};

const Modal = ({ children, title }: { children: ReactNode; title: string }) => {
  const { back } = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
      modalRef.current.scrollTo({ top: 0 });
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const target = e.target as Node;
    if (target.nodeName === "DIALOG") {
      back();
    }
  };

  return createPortal(
    <dialog
      className="position-center rounded-lg backdrop:bg-[rgba(0,0,0,0.8)]"
      onClose={() => back()}
      onClick={handleClick}
      ref={modalRef}
    >
      <ModalContext
        value={{
          title: title,
          onClose: () => back(),
        }}
      >
        <Modal.Container>
          <Modal.Header />
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer />
        </Modal.Container>
      </ModalContext>
    </dialog>,
    document.body,
  );
};

export default Modal;

Modal.Container = Container;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
