import {
    Box,
    Button,
    Circle,
    Code,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    List,
    ListItem,
    Stack,
    Text,
} from "@chakra-ui/react";
import { InfoCard } from "components/pages/index/InfoCard";
import {
    Blue,
    Gray,
    Green,
    Red,
    Yellow,
} from "components/pages/index/TerminalColors";
import { TitleButton } from "components/pages/index/TitleButton";
import { FaTerminal, FaRegFileCode, FaConnectdevelop } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Scalar</title>
                <link rel="icon" href="/database-line.svg" />
            </Head>

            <main>
                <Box h={2} w="100%" bg="green.400" />

                <List display="flex" flexDir="row">
                    <ListItem m={4}>
                        <Button
                            leftIcon={<FaConnectdevelop />}
                            as="a"
                            bg="white"
                            borderRadius={2}
                            cursor="pointer"
                            _hover={{
                                borderColor: "green.400",
                            }}
                        >
                            Scalar API
                        </Button>
                    </ListItem>
                    <ListItem m={4}>
                        <Button
                            leftIcon={<FaRegFileCode />}
                            as="a"
                            bg="white"
                            borderRadius={2}
                            cursor="pointer"
                            _hover={{
                                borderColor: "green.400",
                            }}
                        >
                            Scalar Wrapper Script
                        </Button>
                    </ListItem>
                    <ListItem m={4}>
                        <Button
                            leftIcon={<FaTerminal />}
                            as="a"
                            bg="white"
                            borderRadius={2}
                            cursor="pointer"
                            _hover={{
                                textColor: "green.600",
                            }}
                        >
                            Scalar CLI
                        </Button>
                    </ListItem>
                </List>

                <Flex
                    flexDir="row"
                    alignItems="center"
                    justifyContent="center"
                    py={[null, 6, 16]}
                    borderBottom="1px"
                    borderBottomColor="gray.100"
                    flexWrap="wrap"
                >
                    <Container w="max-content" m={5}>
                        <Heading as="h1" fontSize="6xl">
                            Scalar
                        </Heading>

                        <Text mb={2} fontSize="lg" maxW="37ch">
                            A non-opiniated and easy to use solution to
                            normalize your database columns.
                        </Text>

                        <Stack spacing={2}>
                            <TitleButton href="getting-started" bg="green.400">
                                Get Started
                            </TitleButton>
                            <TitleButton href="" bg="#6B7280">
                                Fork me on Github
                            </TitleButton>
                        </Stack>
                    </Container>

                    <Container m={5}>
                        <HStack
                            h={12}
                            bg="gray.900"
                            alignItems="center"
                            pl="4"
                            roundedTop={2}
                        >
                            <Circle w={3} h={3} bg="red.400" />
                            <Circle w={3} h={3} bg="yellow.400" />
                            <Circle w={3} h={3} bg="green.400" />
                        </HStack>

                        <Container p={2} h={52} bg="gray.800" roundedBottom={2}>
                            <Code bg="transparent" textColor="white">
                                $ scalar <Green>input.csv</Green>{" "}
                                <Gray>--output processed.csv</Gray>{" "}
                                <Red>--delimiter</Red> <Yellow>","</Yellow>{" "}
                                <Red>--delimiter</Red> <Yellow>" "</Yellow>{" "}
                                <Blue>--column</Blue>{" "}
                                <Yellow>my_col_one</Yellow>{" "}
                                <Blue>--column</Blue>{" "}
                                <Yellow>my_col_two</Yellow> <br />
                                Normalizing your data... <br />
                                Computing rows... (21/360 rows) <br />
                                Finished processing 360 rows into processed.csv
                                <br />
                            </Code>
                        </Container>
                    </Container>
                </Flex>

                <Container mx={0} px={5} maxW="100%">
                    <Heading
                        as="h2"
                        fontWeight="bold"
                        textAlign="center"
                        fontSize="4xl"
                        mt={[null, 6, 16]}
                    >
                        Column Normalization Made Easy
                    </Heading>

                    <Flex flexDir="row" flexWrap="wrap" justifyContent="center">
                        <InfoCard title="Reusable" iconPath="/json.svg">
                            Tailor Transit to each of your projects. Lorem are
                            not available for.
                        </InfoCard>
                        <InfoCard title="Disposable" iconPath="/trash.svg">
                            Tailor Transit to each of your projects. Lorem are
                            not available for.
                        </InfoCard>
                        <InfoCard title="Customizable" iconPath="/json.svg">
                            Tailor Transit to each of your projects. Lorem are
                            not available for.
                        </InfoCard>
                    </Flex>
                </Container>

                <Flex
                    flexDir="column"
                    my={15}
                    px={8}
                    bg="gray.50"
                    alignItems="center"
                    py={[null, 6, 16]}
                >
                    <Heading textAlign="center">
                        Trusted by the Developer Community
                    </Heading>

                    <Grid
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        gap={12}
                        my={12}
                    >
                        <GridItem>
                            <Heading>
                                <Green>24K</Green> Downloads
                            </Heading>
                            <Text>Lots of downloads.</Text>
                        </GridItem>
                        <GridItem>
                            <Heading>24K Objects</Heading>
                        </GridItem>
                        <GridItem>
                            <Heading>24K Objects</Heading>
                        </GridItem>
                        <GridItem>
                            <Heading>24K Objects</Heading>
                        </GridItem>
                    </Grid>
                </Flex>
            </main>
        </div>
    );
}
