import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

type Props = {
    styleTags: any
}

export default class MyDocument extends Document<Props> {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )
        const styleTags = sheet.getStyleElement()
        return {...page, styleTags}
    }

    render() {
        return (
            <Html lang='ja'>
                <Head>
                    <meta charSet='utf-8'/>
                    <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet"/>
                    {this.props.styleTags}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}