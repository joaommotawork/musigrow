import { createRoot } from "react-dom/client";
export const mount = (el: HTMLElement) => createRoot(el).render(null);
