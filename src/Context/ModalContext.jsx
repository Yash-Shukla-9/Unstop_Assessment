import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ modal, setModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
