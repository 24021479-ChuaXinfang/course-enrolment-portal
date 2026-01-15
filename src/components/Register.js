import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef =useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: {name: nameRef.current.value ,email: emailRef.current.value, course: courseRef.current.value}});
  }

  return (
    <div className="container">
      <h1>SOI Registration Form</h1>
      <p>
        Interested in our courses? Please fill in this form.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>Course Interest:</label>
        <select ref={courseRef}>
          <option>[R13] Applied AI & Analytics</option>
          <option>[R55] Cybersecurity & Digital Forensics</option>
          <option>[R12] Enterprise Cloud Computing & Management</option>
          <option>[R18] Financial Technology</option>
          <option>[R47] Information Technology</option>
          <option>[R58] Common ICT Programme</option>
        </select>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
