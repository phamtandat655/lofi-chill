import { createContext, useContext, useState } from 'react';

const GifProvider = createContext();

function GlobalGifProvider({ children }) {
    const [gif, setGif] = useState('Forest1');

    return <GifProvider.Provider value={{ gif, setGif }}>{children}</GifProvider.Provider>;
}

export default GlobalGifProvider;

export const UseGif = () => {
    return useContext(GifProvider);
};
