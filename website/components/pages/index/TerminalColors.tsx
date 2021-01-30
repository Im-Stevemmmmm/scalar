import { Text } from "@chakra-ui/react";
import { Children } from "utils/children";

const createColor = (style: string) => ({ children }: Children) => (
    <Text as="span" textColor={style}>
        {children}
    </Text>
);

export const Red = createColor("red.400");
export const Green = createColor("green.400");
export const Yellow = createColor("yellow.400");
export const Gray = createColor("gray.400");
export const Blue = createColor("blue.400");
export const Purple = createColor("purple.400");
export const BoldPurple = createColor("purple.400");
