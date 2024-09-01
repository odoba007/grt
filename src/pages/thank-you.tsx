import { Link } from "react-router-dom";

export default function ThankYou() {
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

    <div className="form" style={{ textAlign:"center" }}>
    
    <h2>Your Application Has Been Submitted Successfully!</h2>
    <br />
    <p>Thank you for your interest. We have received your application and are currently reviewing it. To proceed with your application, please click the <Link style={{color:"blue", textDecoration:"underline"}} to={"https://wa.link/z12cbp"}>link</Link> below to contact one of our agents. They will assist you with the next steps.</p>
<br />
<br />
    <Link className="btn" to={"https://wa.link/z12cbp"}>Click here to Message an Agent</Link>
       
    </div>

    </div>
  );
}
