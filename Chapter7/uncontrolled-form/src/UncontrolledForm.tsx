import { useState, ChangeEvent, MouseEvent } from "react";

const UncontrolledForm = () => {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setValue({ ...values, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} />
      <input type="text" name="lastName" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default UncontrolledForm;
