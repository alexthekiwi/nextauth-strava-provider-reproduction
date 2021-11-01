import { SessionProvider } from "next-auth/react";
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider
            session={pageProps.session}
            refetchInterval={5 * 60}
        >
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
