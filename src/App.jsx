import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import Examples from "./components/Examples";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
