import { Link } from "react-router-dom";
import bannerLogo from "../assets/bg.jpg";

export default function Home() {

  return (
    <div>
      <div className="navbar">
        <div className="brand bold">
          USA <span style={{color:"red"}}>Grant</span>  Application
        </div>

        <div className="nav-option">
          <Link to={"login"}>Member Login</Link>
        </div>
      </div>

      <div className="container1">
        <div className="container1_foreground"></div>
        <div className="container1-flex">
          <div className="container1-flex1">
            <div className="big-heading">Applications are NOW Available!</div>

            <p
              style={{ margin: "20px 0 30px 0" }}
              className="size23 line-height"
            >
              Each year <span className="bold">billions</span> of dollars are
              awarded to individuals and businesses in the form of grants and
              other types of funding.{" "}
              <span className="bold">Apply for YOUR piece today!</span>
            </p>

            <p style={{ margin: "20px 0 30px 0" }} className="size23">
              <span className="bold">Let's get started!</span> Select your type
              of funding:
            </p>

            <div className="plans">
              <div className="plan-item">
               
                <p> <i className="fa-solid fa-briefcase"></i> Business</p>
              </div>
              <div className="plan-item">
               
                <p><i className="fa-solid fa-money-bill"></i> Personal</p>
              </div>
              <div className="plan-item">
                <p><i className="fa-solid fa-people-arrows"></i> Community</p>
              </div>
              <div className="plan-item">
                <p><i className="fa-solid fa-graduation-cap"></i> Education</p>
              </div>
              <div className="plan-item">
                <p><i className="fa-solid fa-house"></i> Real Estate</p>
              </div>
            </div>
          </div>
          <div className="container1-flex2">
            <img src={bannerLogo} alt="" />
          </div>
        </div>
      </div>

      <div className="container2">
        <p className="sub-heading">Here's how it works</p>

        <p style={{ padding: "0 20px" }}>
          USA Funding Applications is an online funding application system that
          gives you access to over 30,000 APPLICATION SOURCES, including GRANTS
        </p>

        <div className="plans">
          <div style={{ width: "50%" }}>
            <div className="plan-item">
              <div className="icon"><i className="fa-regular fa-file"></i></div>
              <p className="bold">REGISTER</p>
              <p>Easy to fill out. Your information is secure</p>
            </div>
            <div className="plan-item">
              <div className="icon"><i className="fa-solid fa-book"></i></div>
              <p className="bold">RESEARCH</p>
              <p>
                We provide the application sources and teach you how to apply
              </p>
            </div>
            <div className="plan-item">
              <div className="icon"><i className="fa-solid fa-money-bill"></i></div>
              <p className="bold">APPLY</p>
              <p>
                There is no limit to the number of grants and other sources you
                can apply to.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container3 sub-heading">
        <p>What people are saying</p>
      </div> */}

      <div className="container4">
        <p className="sub-heading">Where does the money come from?</p>
        <p>
          It has become widely understood that American corporate giving
          programs, foundations, and other charitable institutions, individuals,
          and other organizations donate billions of dollars in free money each
          year. We read every day about massive sums of funding being provided
          to businesses and individuals like you to help them achieve their
          goals and objectives, yet many of these people will not tell you HOW
          or WHERE they obtained this funding. Don't sit around waiting to hear
          about these immense assets; instead, find out for yourself with USA
          Funding Applications.
        </p>

        <p>
          Many funding alternatives are available for projects and businesses to
          cover ordinary operating expenses and additional capital costs, such
          as a new building or large pieces of equipment.{" "}
        </p>

        <Link to={"/registration-form"}>
          <div className="btn">Start the Application Process Today</div>
        </Link>
      </div>

      <div className="container5">
        <div className="container5_item">
          <p>
            "Groups to help low-income residents in Silcon Valley get $934,000"
          </p>
          <img src="" alt="" />
        </div>
        <div className="container5_item">
          <p>"Sprint's New Community Programs to Award...more than $50,000"</p>
          <img src="" alt="" />
        </div>
        <div className="container5_item">
          <p>"Funding as a Business Model: Win-Win.."</p>
          <img src="" alt="" />
        </div>
      </div>

      <div className="container6">
        <p className="center">
          Here are the FUNDING CATEGORIES you'll have access to with over 20,000
          APPLICATIONS to apply to!
        </p>
        <div className="container6_container">
          <div className="container6_item">
            <div className="icon"></div>
            <p>Business</p>
            <p>100,122 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Community Assistance</p>
            <p>14,022 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Education</p>
            <p>3,920 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Home Buyers</p>
            <p>1,920 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Home Repairs</p>
            <p>122 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Non-Profit</p>
            <p>16,605 Applications</p>
          </div>
          <div className="container6_item">
            <div className="icon"></div>
            <p>Personal Assistance</p>
            <p>9,340 Applications</p>
          </div>
        </div>
      </div>

      <div className="container7">
        <p>We've recently added the following number of applications:</p>

        <p>
          Last <span className="bold">7</span> Days:{" "}
          <span className="bold">2,394</span> new applications
        </p>
        <p>
          Last <span className="bold">30</span> Days:{" "}
          <span className="bold">12,062</span> new applications
        </p>
        <p>
          Last <span className="bold">90</span> Days:{" "}
          <span className="bold">50,189</span> new applications
        </p>
        <p></p>
        <p></p>
      </div>

      <div className="container8 off-white">
        <p>Get your piece of the funding pie.</p>

        <p>Regarding your current financial status, don't worry. </p>

        <div className="flex-center">
        <Link to={"/registration-form"}>
            {" "}
            <div className="btn">Start the Application Process Now</div>{" "}
          </Link>
        </div>

        <p className="bold">
          Don't wait. The money you need may be given to your neighbor, if they
          qualify!
        </p>
      </div>

      <div className="container9">
        <p>Sign up today!</p>

        <p>
          Don't wait. The money you need may be given to your neighbor, if they
          qualify!
        </p>

        <div className="flex-center">
        <Link to={"/registration-form"}>
            <div className="btn">Start the Application Process today</div>{" "}
          </Link>
        </div>
      </div>

      <div className="footer">
        <div className="links">
          <a href=""> Home</a>
          <Link to={"login"}>Login</Link>
          <a href="">Terms</a>
          <a href="">Privacy Policy</a> <br />
          <p>Contact us</p>
          <Link to={"https://wa.link/z12cbp"}>+1 (276) 257-7386</Link> <br />
          <Link to={"https://wa.link/z8rlyz"}> +1 (346) 810-0725</Link>
        </div>

        <p>Copyright 2024 USA Funding Applications</p>

        <hr />
        <p>
          USA Funding Applications is not a government agency and is not
          affiliated with the United States Government or any other funding
          agency. USA Grant Applications supplies training materials on how to
          apply for funding as well as resources on where to apply.
        </p>
      </div>
    </div>
  );
}
