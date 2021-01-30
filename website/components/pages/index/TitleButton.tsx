import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { Children } from "utils/children";

interface TitleButtonProps extends Children {
    bg: string;
    href: string;
}

export const TitleButton = ({ bg, href, children }: TitleButtonProps) => {
    return (
        <NextLink href={href}>
            <Button
                rounded={1}
                bg={bg}
                textColor="white"
                _hover={{
                    filter: "brightness(1.075)",
                }}
            >
                {children}
            </Button>
        </NextLink>
    );
};
