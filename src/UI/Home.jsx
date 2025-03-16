import News from "../components/News";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <main style={{ margin: "1rem", padding: "0.5rem" }}>
        <News />
      </main>
    </>
  );
}

export default Home;
