
import logo from "../../assets/images/logo.gif"
import "../About/styles.css";

function About() {
    return (
        <section id="about-page">
          <div className="top">
            <div className="about-left">
                some kind of image
            </div>
            <div className="about-right">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="bottom">
            <div className="hours">
                <h4>Business Hours</h4>
                <p>Monday - Sunday, 9 a.m-7 p.m.</p>
            </div>
            <div className="payment-options">
                <h4>Payment Options</h4>
                <ul>
                    <li>Cash</li>
                    <li>Credit/Debit</li>
                    <li>Venmo</li>
                </ul>
            </div>
          </div>
          <img src={logo} style={{width: "20%"}}/>
        </section>
    );
};

export default About;