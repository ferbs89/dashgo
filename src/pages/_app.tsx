import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>dashgo.</title>
			</Head>

			<QueryClientProvider client={queryClient}>
				<ChakraProvider theme={theme}>
					<SidebarDrawerProvider>
						<Component {...pageProps} />
					</SidebarDrawerProvider>
				</ChakraProvider>

				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	)
}

export default MyApp;
