import CoreConcept from "./CoreConcept";
import Header from "./Header";
import { User } from "./User";
import componentsImg from "./assets/components.png";
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* <User/> */}
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="The core UI building block."
            image={componentsImg}
          />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
      </section>
    </div>
  );
}

export default App;
