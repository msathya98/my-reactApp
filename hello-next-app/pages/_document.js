import Document, {Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
        <meta name="description" content="my first NextJs web-page"></meta>
        <meta name="keywords" content="next react html"></meta>
        <meta name="author" content="Sathya M"></meta>
        <link rel="stylesheet" href="/static.styles.css"></link>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>

    </head>
    <body>
        <Head />
        <Main /> 
        <NextScript />
        
    </body>

    </html>
        )
    }
}

export default MyDocument;
