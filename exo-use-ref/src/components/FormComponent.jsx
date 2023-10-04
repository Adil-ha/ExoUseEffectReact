import { useRef } from "react";

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
  };

  return (
    <>
      <form action="#" onSubmit={submitHandler}>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" ref={lastnameInputReference} />
        </div>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" ref={firstnameInputReference} />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input type="Password" id="Password" ref={PasswordInputReference} />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormComponent;
