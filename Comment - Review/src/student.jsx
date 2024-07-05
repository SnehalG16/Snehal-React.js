import { useState } from "react";

let initialState = {
  name: "",
  email: "",
  password: "",
  city: "",
  gender: "",
};

const student = () => {
  const [formdata, setformdata] = useState(initialState);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prevFormdata) => ({
      ...prevFormdata,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        margin: "20px 150px",
        border: "2px solid",
      }}
    >
      <h1 style={{ textAlign: "center" }}>FORM</h1>
      <form onSubmit={handlesubmit} style={{ margin: "0 20%" }}>
        <label>NAME :- </label>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={handlechange}
          placeholder="Collect the student's full name."
        />
        <br />
        <br />
        <label>EMAIL :- </label>
        <input
          type="email"
          value={formdata.email}
          name="email"
          onChange={handlechange}
          placeholder="Collect the student's email address"
        />
        <br />
        <br />
        <label>PASSWORD :- </label>
        <input
          type="password"
          value={formdata.password}
          name="password"
          onChange={handlechange}
          placeholder="Collect a password for the student's account."
        />
        <br />
        <br />
        <label>STUDENT SHOULD SELECT THEIR GRADE-</label>
        <select name="city" value={formdata.city} onChange={handlechange}>
          <option value="">Select</option>
          <option value="Freshman">Freshman</option>
          <option value="Sophomore">Sophomore</option>
          <option value="Junior">Junior</option>
          <option value="Senior">Senior</option>
        </select>
        <br />
        <br />
        <div>
          <label>GENDER :- </label>
          <br />
          male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formdata.gender === "male"}
            onChange={handlechange}
          />
          female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formdata.gender === "female"}
            onChange={handlechange}
          />
          other
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formdata.gender === "other"}
            onChange={handlechange}
          />
        </div>
        <br />
        <input
          type="submit"
          style={{ justifyContent: "center", marginLeft: "85px" }}
        />
      </form>
    </div>
  );
};

export default student;
