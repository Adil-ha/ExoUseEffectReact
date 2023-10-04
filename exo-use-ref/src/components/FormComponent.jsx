import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
  const { loginHandler } = props;

  const lastnameInputReference = useRef();
  const firstnameInputReference = useRef();
  const PasswordInputReference = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler({
      lastname: lastnameInputReference.current.value,
      firstname: firstnameInputReference.current.value,
      password: PasswordInputReference.current.value,
    });
    lastnameInputReference.current.value = "";
    firstnameInputReference.current.value = "";
    PasswordInputReference.current.value = "";
  };

  return (
    <>
      <h1>Connexion</h1>
      <form action="#" onSubmit={submitHandler} className="w-25 m-auto">
        <div>
          <label htmlFor="lastname">Lastname: </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            ref={lastnameInputReference}
          />
        </div>
        <div>
          <label htmlFor="firstname">Firstname: </label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            ref={firstnameInputReference}
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            type="Password"
            id="Password"
            className="form-control"
            ref={PasswordInputReference}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
