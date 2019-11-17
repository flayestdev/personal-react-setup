const React = require("react");
const ReactDOM = require("react-dom");
import Navbar from "./components/navbar";
require("./index.css");

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hi from React</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
