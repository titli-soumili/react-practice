import React, { Component } from "react";

//== import components ==//
import Counter from "./components/setState/Counter";
import Greet from "./components/destructuringProps/Greet";
import FunctionClick from "./components/eventHandling/FunctionClick";
import ClassClick from "./components/eventHandling/ClassClick";
import EventBind from "./components/bindingEventHandlers/EventBind";
import ParentComponent from "./components/methodsAsProps/ParentComponent";
//== import components ==//

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Greet name="Danial" heroName="Harry"/> */}
        <Counter/>
      </div>
    );
  }
}

export default App;
