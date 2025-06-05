import Footer from "./components/LayoutComponents/Footer";
import Main from "./components/LayoutComponents/Main";
import Header from "./components/LayoutComponents/Header";
import MediaProvider from "./contexts/MediaContext";

export default function App() {
  return (
    <>
      <MediaProvider>
        <Header />
        <Main />
        <Footer />
      </MediaProvider>
    </>
  );
}
