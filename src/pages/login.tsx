import { Link } from "react-router-dom";

export default function Login() {
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

    <div className="form">
    <h2 className="center">Member Login</h2>
        <form action="">
            <div className="input-field">
                <label htmlFor="">
                    Username
                </label>
                <input type="text" />
            </div>
            <p style={{float:"right"}}>Forgot password?</p>
            <br />
            <div className="input-field">
                <label htmlFor="">
                    Password
                </label>
                <input type="password" />
            </div>
           
            <div style={{display:"flex", width:"150px"}} className="input-field">
                <input style={{width:"50px"}} type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>

            </div>

            <button className="btn">Login</button>

            <p>Don't have an account? <Link to={"/registration-form"} style={{color:"#1E345D", fontWeight:"bold"}}>click here</Link> to register</p>
        </form>
    </div>

    </div>
  );
}
