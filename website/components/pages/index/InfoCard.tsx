import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Children } from "utils/children";

interface InfoCardProps extends Children {
    title: string;
    iconPath: string;
}

export const InfoCard = ({ title, iconPath, children }: InfoCardProps) => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            textAlign="center"
            w={64}
            h={48}
            bg="white"
            m={16}
        >
            <VStack spacing={2} mb={2}>
                <Image src={iconPath} width={50} height={50} />
                <Heading fontSize={18}>{title}</Heading>
            </VStack>

            <Text color="gray.700">{children}</Text>
        </Flex>
    );
};
