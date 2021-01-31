import {
    Box,
    Circle,
    Code,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    List,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Review } from "api/api-types";
import { InfoCard } from "components/pages/index/InfoCard";
import { NavbarItem } from "components/pages/index/NavbarItem";
import {
    Blue,
    Gray,
    Green,
    Red,
    Yellow,
} from "components/pages/index/TerminalColors";
import { TitleButton } from "components/pages/index/TitleButton";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FaConnectdevelop, FaRegFileCode, FaTerminal } from "react-icons/fa";

interface HomeProps {
    reviews: Review[];
    repoStars: number;
}

export default function Home({ reviews, repoStars }: HomeProps) {
    return (
        <div>
            <Head>
                <title>Scalar</title>
                <link rel="icon" href="/database-line.svg" />
            </Head>

            <main>
                <Box h={2} bg="green.400" />

                <List
                    display="flex"
                    flexDir="row"
                    borderBottom="1px"
                    borderColor="gray.100"
                    bg="white"
                >
                    <NavbarItem leftIcon={<FaConnectdevelop />}>
                        Scalar API
                    </NavbarItem>
                    <NavbarItem leftIcon={<FaRegFileCode />}>
                        Scalar Wrapper Script
                    </NavbarItem>
                    <NavbarItem leftIcon={<FaTerminal />}>
                        Scalar CLI
                    </NavbarItem>
                </List>

                <Flex
                    flexDir="row"
                    alignItems="center"
                    justifyContent="center"
                    py={[null, 6, 16]}
                    borderBottom="1px"
                    borderBottomColor="gray.100"
                    flexWrap="wrap"
                    backgroundImage={`url("/dot-grid.png")`}
                >
                    <Container w="max-content" m={5}>
                        <Heading as="h1" fontSize="6xl">
                            Scalar
                        </Heading>

                        <Text mb={2} fontSize="lg" maxW="37ch">
                            A non-opiniated easy to use solution to normalize
                            your database columns.
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
                            <Heading fontSize="3xl">
                                <Green>0</Green> {plural("Download", 2)}
                            </Heading>
                        </GridItem>
                        <GridItem>
                            <Heading fontSize="3xl">
                                <Green>{repoStars}</Green> GitHub{" "}
                                {plural("Star", repoStars)}
                            </Heading>
                        </GridItem>
                        <GridItem>
                            <Heading fontSize="3xl">
                                <Green>24K</Green> Downloads
                            </Heading>
                        </GridItem>
                        <GridItem>
                            <Heading fontSize="3xl">
                                <Green>24K</Green> Downloads
                            </Heading>
                        </GridItem>
                    </Grid>
                </Flex>

                <Box mx={0} px={5}>
                    <Heading
                        as="h2"
                        fontWeight="bold"
                        textAlign="center"
                        fontSize="4xl"
                        mt={[null, 6, 16]}
                    >
                        What Developers Have to Say...
                    </Heading>

                    <Flex flexDir="row" flexWrap="wrap" justifyContent="center">
                        {reviews.map((review, i) => (
                            <Box
                                flexGrow={1}
                                minW={300}
                                maxW={500}
                                key={i}
                                p={5}
                                border="1px"
                                borderColor="gray.200"
                                m={5}
                            >
                                <Stack spacing={1}>
                                    <Heading fontSize="xl">
                                        {review.rating}/5
                                    </Heading>

                                    <Heading
                                        as="h3"
                                        fontSize="sm"
                                        textColor="gray.600"
                                    >
                                        by {review.publisher}
                                    </Heading>

                                    <Text>{review.body}</Text>
                                </Stack>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const reviews = await getReviews();
    const repoInformation = await getRepoInformation();

    return {
        props: {
            reviews: reviews as Review[],
            repoStars: repoInformation.stargazers_count as number,
        },
    };
};

const getReviews = async () =>
    await fetch("http://localhost:3000/api/reviews").then(res => res.json());

const getRepoInformation = async () =>
    await fetch("http://api.github.com/repos/Im-Stevemmmmm/transit").then(res =>
        res.json()
    );

const plural = (s: string, n: number) => `${s}${n > 1 ? "s" : ""}`;
