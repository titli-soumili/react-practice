import React, { Component } from "react";

//== import components ==//
import Counter from "./components/setState/Counter";
import Greet from "./components/destructuringProps/Greet";
import FunctionClick from "./components/eventHandling/FunctionClick";
import ClassClick from "./components/eventHandling/ClassClick";
import EventBind from "./components/bindingEventHandlers/EventBind";
import ParentComponent from "./components/methodsAsProps/ParentComponent";
import UserGreetings from "./components/conditionalRendering/UserGreetings";
import NameList from "./components/listRendering/NameList";
import Stylesheet from "./components/stylingAndCssBasics/Stylesheet";
import Inline from "./components/stylingAndCssBasics/Inline";
import CssModules from "./components/stylingAndCssBasics/CssModules";
import './appStyles.css';   //we are naming it as REGULAR CSS
import styles from "./appStyles.module.css";  //we are naming it as MODULE CSS
import Form from "./components/basicsOfFormHandling/Form";
import LifeCycleA from "./components/componentMountingLifecycleMethods/LifeCycleA";
//== import components ==//

class App extends Component {
  render() {
    const allDataStyle = {textAlign: 'center'}
    return (
      <div className="App" style={allDataStyle}>
        <LifeCycleA />
        {/* <Form/> */}

        {/* Here we are using module css for styling. This styling is referrenced the classname using
            "styles" variable and cannot be used in the children components. */}
        {/* <h1 className={styles.success}>Success</h1> */}
        
        {/* Here we are using regular css for styling. Here classes are localy scoped by default. So
          once we import the regular css file here, we can use those classes in any component we want
        */}
        {/* <CssModules/> */}
        
        {/* <Inline/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList/> */}
        {/* <UserGreetings/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <ClassClick/> */}
        {/* <FunctionClick/> */}
        {/* <Greet name="Danial" heroName="Harry"/> */}
        {/* <Counter/> */}
      </div>
    );
  }
}

export default App;
