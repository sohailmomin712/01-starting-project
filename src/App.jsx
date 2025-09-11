import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import Header from "./components/Header/Header";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
import { User } from "./User";
// import componentsImg from "./assets/components.png";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const handleSelect = (selectedButton) => {
    //selectedbutton => "components","jsx","props","state"
    //custom identifier=>selectedButton

    // console.log(selectedButton);
    // custom parameter

    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  };

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

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
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* ('components') is string identifier */}
          {/* it is used to define a funtion that should be execued upon an event but you also want to control how its going to be called and which arguments are going to be passed to it */}
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          {/* <TabButton label="Components"></TabButton> */}
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;
