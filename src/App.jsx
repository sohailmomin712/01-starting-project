import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import Header from "./components/Header/Header";
import { User } from "./User";
import { useState } from "react";
// import componentsImg from "./assets/components.png";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  const handleSelect = (selectedButton) => {
    //selectedbutton => "components","jsx","props","state"
    //custom identifier=>selectedButton

    // console.log(selectedButton); 
    // custom parameter
    
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  };
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      {/* <User/> */}
      <section id="core-concepts">
        <h2 style={{ textAlign: "center" }}>Core Concepts</h2>
        <ul>
          <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* ('components') is string identifier */}
          {/* it is used to define a funtion that should be execued upon an event but you also want to control how its going to be called and which arguments are going to be passed to it */}
          <TabButton onSelect={() => handleSelect("components")}>
            Components
          </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          {/* <TabButton label="Components"></TabButton> */}
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {selectedTopic}
      </section>
    </div>
  );
}

export default App;
