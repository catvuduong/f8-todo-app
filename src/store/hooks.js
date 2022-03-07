import { useContext } from "react";
import Content from "./Content";

export const useStore = () => {
    const [state, dispatch] = useContext(Content);
    return [state, dispatch]
}

