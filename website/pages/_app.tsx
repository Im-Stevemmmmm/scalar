import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import myTheme from "public/styles/theme";
import "../styles/globals.css";

const theme = extendTheme(myTheme);

export default function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
