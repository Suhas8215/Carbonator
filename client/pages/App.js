// pages/_app.js

import '..src/styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Render the component for the current page
}

export default MyApp;


