import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from 'styles/theme'
import Script from "next/script";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="icon" href="favicon.ico"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                {/* 👇 Here's the script */}
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
