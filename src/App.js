import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Promo from "./components/Promo/Promo";
import Catalog from "./components/catalog/Catalog";
import Footer from "./components/footer/footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Promo />
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;
