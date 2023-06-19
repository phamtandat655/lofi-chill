import { createContext, useContext, useState } from 'react';
import { Forest1 } from '../assets/backgrounds/default/defaultBg';

const GifProvider = createContext();

function GlobalGifProvider({ children }) {
    const [gif, setGif] = useState(Forest1);

    return <GifProvider.Provider value={{ gif, setGif }}>{children}</GifProvider.Provider>;
}

export default GlobalGifProvider;

export const UseGif = () => {
    return useContext(GifProvider);
};
