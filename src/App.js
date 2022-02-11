import { Header } from "./Components/Header";
import { Manifesto } from "./Components/Manifesto";
import { NFTMint } from "./Components/NFTMint";
import { FAQ } from "./Components/FAQ";
import { Roadmap } from "./Components/Roadmap";
import { Join } from "./Components/Join";

import "./Styles/reset.css";
import "./Styles/main.css";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Manifesto />
      <NFTMint />
      <FAQ />
      <Roadmap />
      <Join />
      <Footer />
    </>
  );
}

export default App;
