import { Button, ListItem } from "@chakra-ui/react";
import { Children } from "utils/children";

interface NavbarItemProps extends Children {
    leftIcon: JSX.Element;
}

export const NavbarItem = ({ leftIcon, children }: NavbarItemProps) => {
    return (
        <ListItem m={4}>
            <Button
                leftIcon={leftIcon}
                as="a"
                bg="white"
                borderRadius={2}
                cursor="pointer"
                _active={null}
                _hover={{ textColor: "green.500" }}
            >
                {children}
            </Button>
        </ListItem>
    );
};
