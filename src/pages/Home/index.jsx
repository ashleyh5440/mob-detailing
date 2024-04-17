import "../Home/styles.css";
import homeName from "../../assets/images/name.png"
import homeLogo from "../../assets/images/logo.gif";

function Home() {
    return (
        <section id="home-page">
            <div className="home-name">
                <img src={homeName} />
            </div>
            <div className="home-logo">
                <img src={homeLogo} />
            </div>
            <h1>About</h1>
            <div className="about-container">
                <p>1 or 2 sentences about the company.</p>
            </div>
            <h1>Services</h1>
            <div className="services-container">
                <div id="serv-left">
                    <ul>
                        <li>Exterior wash</li>
                        <li>Desalt and deodorize seats, carpets, mats, trunk</li>
                        <li>Interior wipe down</li>
                        <li>Window cleaning</li>
                    </ul>
                </div>
                <div id="serv-right">
                    <ul>
                        <li>Stain removal</li>
                        <li>Stain removal</li>
                        <li>Rim cleaning</li>
                        <li>Buff and compound</li>
                    </ul>
                </div>
            </div>
            <h1>Book an appointment</h1>
            <div className="booking-container">

            </div>
        </section>
    );
};

export default Home;