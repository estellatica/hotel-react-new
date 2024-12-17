// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Mengimpor Bootstrap CSS
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
