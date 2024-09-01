import emailjs from "@emailjs/browser";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Form() {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = React.useRef<HTMLFormElement>(null);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_serviceID,
        import.meta.env.VITE_templateID,
        form.current!,
        import.meta.env.VITE_publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("../thank-you");
        },
        (error) => {
          alert("could not complete your request");
          console.log(error);
          setIsLoading(false);
        }
      );
  }

  return (
    <div>
      <div className="navbar">
        <div className="brand bold">
          USA <span style={{ color: "red" }}>Grant</span> Application
        </div>

        <div className="nav-option">
          <Link to={"/"}>Home</Link>
        </div>
      </div>

      <div style={{ margin: "0 auto" }} className="form">
        <h2 className="center">Registration Form</h2>
        <form action="" ref={form} onSubmit={handleSubmit} method="post">
          <div className="input-field">
            <label htmlFor="">How much money are you going to need?</label>
            <select name="input10" id="">
              <option value="Select...">Select...</option>
              <option value="$500 - $20,000">$500 - $20,000</option>
              <option value="$20,000 - $50,000">$20,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000 or More">$100,000 or More</option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="">First Name</label>
            <input required  type="text" name="input1" />
          </div>

          <div className="input-field">
            <label htmlFor="">Last Name</label>
            <input required  type="text" name="input2" />
          </div>
          <div className="input-field">
            <label htmlFor="">What Email Address Would You Like To Use As Your Username For Your Online Application Account?</label>
            <input required  type="email" name="input3" />
          </div>
          <div className="input-field">
            <label htmlFor="">Phone Number</label>
            <input required  type="tel" name="input4" />
          </div>
          <div className="input-field">
            <label htmlFor="">Employment status</label>
            <select required name="input5" id="">
              <option value="Select...">Select...</option>
              <option value="Employed Full-Time">Employed Full-Time</option>
              <option value="Employed Part-Time">Employed Part-Time</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Disabled">Disabled</option>
              <option value="Retired">Retired</option>
              <option value="Collecting Social Security">
                Collecting Social Security
              </option>
            </select>
          </div>

          <div className="input-field">
            <label htmlFor="">Street Address</label>
            <input required  type="text" name="input6" />
          </div>

          <div className="input-field">
            <label htmlFor="">Zip</label>
            <input required  type="text" name="input7" />
          </div>

          <div className="input-field">
            <label htmlFor="">City</label>
            <input required  type="text" name="input8" />
          </div>

          <div className="input-field">
            <label htmlFor="">State</label>
            <input required  type="text" name="input9" />
          </div>

          <div className="input-field">
            <label htmlFor="">Briefly Describe How You Will Use The Money</label>
            <textarea style={{padding:"10px"}} rows={10} name="input11" id=""></textarea>
            
          </div>

          {
            isLoading?
<button type="button" className="btn">Please wait...</button>
            :
            <button type="submit" className="btn">Submit</button>
          }
          
        </form>
      </div>
    </div>
  );
}
