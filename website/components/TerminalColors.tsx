import { Children } from "utils/children";

const createColor = (style: string) => ({ children }: Children) => (
    <span className={style}>{children}</span>
);

export const Red = createColor("text-red-400");
export const Green = createColor("text-green-400");
export const Yellow = createColor("text-yellow-400");
export const Gray = createColor("text-gray-400");
export const Blue = createColor("text-blue-400");
export const Purple = createColor("text-purple-400");
export const BoldPurple = createColor("font-bold text-purple-400");
