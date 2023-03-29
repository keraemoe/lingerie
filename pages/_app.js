import Layouts from "@/components/Layouts/Layouts";
import "@/styles/globals.css";
import "@/styles/HeroSlider.css";
import "@/styles/UnderSlider.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}
