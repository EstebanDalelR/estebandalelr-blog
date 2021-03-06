export default {
  repository: 'https://github.com/EstebanDalelR/estebandalelr-blog',
  titleSuffix: ' – Blog',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        Esteban Dalel R
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        I make good software and tell bad jokes
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#be3336" />
      <meta name="theme-color" content="#be3336" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Esteban Dalel R | Blog" />
      <meta name="author" content="Esteban Dalel R" /> 
      <meta name="image" property="og:image" content="https://blog.estebandalelr.co/estebandalelr-square.jpg" />
      <meta name="description" property="og:description" content="I make good software and tell bad jokes. Here are my thoughts. All opinions are mine. Always open to discussion." />
      <meta name="og:title" content="Esteban Dalel R | Blog" />
      <meta name="og:description" content="I make good software and tell bad jokes. Here are my thoughts. All opinions are mine. Always open to discussion." />
      <meta name="og:image" content="https://blog.estebandalelr.co/estebandalelr-square.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://blog.estebandalelr.co/estebandalelr-square.jpg"
      />
      <meta name="twitter:site:domain" content="estebandalelr.co" />
      <meta name="twitter:url" content="https://estebandalelr.co" />
      <meta name="apple-mobile-web-app-title" content="Esteban Dalel R" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>
  <p>By <a href="https://estebandalelr.co">Esteban Dalel R</a>, using Nextra.</p>
  <p>Found an error? <a href="https://twitter.com/estebandalelr">Send me a tweet</a></p>
  </>
}
