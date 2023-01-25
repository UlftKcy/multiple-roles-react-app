import { useState } from "react"

export const useLocalStorage = () => {
    const [value, setValue] = useState(null);

    const setItem = (key, item) => {
        localStorage.setItem(key, JSON.stringify(item))
        setValue(item)
    };

    const getItem = (key) => {
        const item = JSON.parse(localStorage.getItem(key));
        setValue(item);
        return item;
    }

    const removeItem = (key) => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return { value, setItem, getItem, removeItem };
}