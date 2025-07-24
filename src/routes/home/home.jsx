import "./home.css";
import Navbar from "../../components/navbar/navbar";
import image from "../../assets/home image 1.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="title-card">
        <h1 className="intro-title">Innovative Solutions Crafted by Experts</h1>
        <p className="intro-text">
          Welcome to JRCode, where technology meets creativity. Discover our
          diverse skills and innovative projects that push boundries and solve
          real world problems
        </p>
        <div className="header-btns">
          <a className="btn-explore" href="/jrcode/contact">
            Explore
          </a>
          <a className="btn-contact" href="/jrcode/contact">
            Contact
          </a>
        </div>
      </div>
      <img className="img1" src={image} />
      <div className="section-1">
        <div className="section-1-header">
          <h3 className="section-1-title">
            Unlock Your Digital Potential with Our Expertise
          </h3>
          <p className="section-1-subtitle">
            Our team specialises in creating dynamic web applications and mobile
            solutions tailored to your needs. we leverage cutting-edge
            technologies to deliveer software solutions that drive results.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
