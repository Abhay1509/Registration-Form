import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted,setSubmitted] = useState<Boolean>(false);
  const [valid,setValid] = useState(false);

  const handleFirstNameInputChange = (event: any) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event: any) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleEmailInputChange = (event: any) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid? <div className="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          className="form-field"
          placeholder="First Name"
          name="firstName"
          value={values.firstName} 
          />
          {submitted && !values.firstName ? <span>Please enter a first name</span>: null}
        <input
          onChange={handleLastNameInputChange}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          />
          {submitted && !values.lastName ? <span>Please enter a last name</span>: null}
        <input
          onChange={handleEmailInputChange}
          className="form-field"
          placeholder="Email"
          name="email"
          value={values.email}
        />
        {submitted && !values.email ? <span>Please enter an Email</span>: null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
