import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <head
        dangerouslySetInnerHTML={{ __html: '<!--Website Developed by me, Brendan \nYou can find me at GitHub https://github.com/Brendan-Leal-->' }}
      >
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
