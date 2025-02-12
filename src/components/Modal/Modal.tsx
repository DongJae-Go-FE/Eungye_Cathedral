"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
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
      className="rounded-lg backdrop:bg-[rgba(0,0,0,0.8)]"
      onClose={() => back()}
      onClick={handleClick}
      ref={modalRef}
    >
      {children}
    </dialog>,
    document.body,
  );
};

export default Modal;
