import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const form = useForm();
  console.log(form);

  const [person, setPerson] = useState({ name: "", age: 0 });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) =>
            setPerson({ ...person, age: parseInt(e.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
