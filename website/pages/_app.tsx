import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import myTheme from "public/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import "styles/globals.css";

const queryClient = new QueryClient();
const theme = extendTheme(myTheme);

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    );
}
