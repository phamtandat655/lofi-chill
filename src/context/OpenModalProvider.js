import { createContext, useContext, useState } from 'react';

const ModalProvider = createContext();

function OpenModalProvider({ children }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return <ModalProvider.Provider value={{ isOpenModal, setIsOpenModal }}>{children}</ModalProvider.Provider>;
}

export default OpenModalProvider;

export const UseOpenModal = () => {
    return useContext(ModalProvider);
};
