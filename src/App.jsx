import Footer from "./components/LayoutComponents/Footer";
import Main from "./components/LayoutComponents/Main";
import Header from "./components/LayoutComponents/Header";
import MovieProvider from "./contexts/MovieContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Main />
        <Footer />
      </MovieProvider>
    </>
  );
}
