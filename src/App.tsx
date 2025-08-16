import Browser from "./components/Browser.tsx";
import CommentSection from "./components/CommentSection.tsx";
import Header from "./components/Header.tsx";
import Landing from "./components/Landing.tsx";
import NewArrival from "./components/NewArrival.tsx";
import NewSeller from "./components/NewSeller.tsx";
import Subscribe from "@/components/Subscribe.tsx";
import Footer from "@/components/Footer.tsx";
const App = () => {
  return (
    <>
      <Header />
      <Landing />
      <NewArrival />
      <NewSeller />
      <Browser />

      <CommentSection />

        <Footer />
    </>
  );
};

export default App;
