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
                    <Script data-name="BMC-Widget" data-cfasync="false"
                            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="riquedevbr"
                            data-description="Support me on Buy me a coffee!" data-message="" data-color="var(--chakra-colors-purple-400)"//"#FFDD00"
                            strategy="beforeInteractive"
                            data-position="Right" data-x_margin="18" data-y_margin="18"/>
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
