import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  const loginHandler = ({ lastname, firstname, password }) => {
    console.log("lastname: " + lastname);
    console.log("firstname: " + firstname);
    console.log("password: " + password);
  };

  return (
    <div className="App">
      <FormComponent loginHandler={loginHandler} />
    </div>
  );
}

export default App;
