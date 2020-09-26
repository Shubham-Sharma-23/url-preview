import "@styles/base.scss";
import "react-calendar/dist/Calendar.css";
import "rc-slider/assets/index.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
    console.log(metric);
}

export default MyApp;
