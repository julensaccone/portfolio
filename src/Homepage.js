import "./Homepage.scss";
import Navbar from "./Components/Navbar/Navbar";
import Insertion from "./Components/Insertions/Insertion";
import { HiArrowCircleUp } from "react-icons/hi";
import { IconContext } from "react-icons";
import profilePic from "./images/profile-pic.jpg";
import htmlLogo from "./images/HTML5_logo.png";
import CSSLogo from "./images/CSS3_logo.svg";
import JavaScriptLogo from "./images/JavaScript_logo.png";
import ReactLogo from "./images/React_logo.png";
import italy from "./images/italy.png";
import spain from "./images/spain.png";
import uk from "./images/uk.png";
import appleRemakeProject from "./images/apple_website_remake.png";
import parallax from "./images/parallax_background1.jpg";

function Homepage() {
  //Get the button
  window.onload = function () {
    const parallax = document.getElementById("Skills");
    console.log(parallax);
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener("scroll", function () {
      let offset = window.pageYOffset;
      console.log("Offset: " + offset);
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  };

  function reveal() {
    var container1 = document.querySelectorAll(".container");
    for (var i = 0; i < container1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = container1[i].getBoundingClientRect().top;
      var elementVisible = 300;
      if (elementTop < windowHeight - elementVisible) {
        container1[i].classList.add("active");
      } else {
        container1[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <Navbar />
      <Insertion id='parallax' type={1} color='dark'>
        <div className='heading'>
          <div className='greetings'>
            <h1 className='introduction fade-in'>Hi, I'm</h1>
            <div className='title'>
              <h1 className='J'>J</h1>
              <h1 className='first-name fade-in'>ulen</h1>
              <h1 className='S'>S</h1>
              <h1 className='last-name fade-in'>accone</h1>
            </div>
          </div>
          <div className='profile-image-container'></div>
        </div>
      </Insertion>
      <a href='#' id='back-to-top' className='back-to-top'>
        <IconContext.Provider value={{ color: "#ffc800", size: "5rem" }}>
          <HiArrowCircleUp />
        </IconContext.Provider>
      </a>
      <Insertion id='About_me' height='80rem' color='light'>
        <div className='container container1'>
          <h3>About me</h3>
          <div className='description'>
            <div className='circle-image'>
              <img src={profilePic} />
            </div>
            <section className='content'>
              <article>
                Hello there, this is Julen. I'm based in Milan and I'm half
                italian and half spanish (basque country actually). I just
                graduated at University of Milan (Italy) and after that I
                focused on front end web developing.
              </article>
              <div className='list languages'>
                <h4>Languages =</h4>
                <ul>
                  <li>
                    <img class='flags' src={italy} />
                    <p>Italian</p>
                  </li>
                  <li>
                    <img class='flags' src={spain} />
                    <p>Spanish</p>
                  </li>
                  <li>
                    <img class='flags' src={uk} />
                    <p>English</p>
                  </li>
                </ul>
              </div>
              <div className='list hobbies'>
                <h4>Hobbies =</h4>
                <ul>
                  <li>Sport: Football, Gym</li>
                  <li>Art: Music, Drawing, Photography, Cinema</li>
                  <li>Gaming</li>
                  <li>Travel</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Insertion>
      <Insertion id='Skills' type={2} height='50rem' color='dark'>
        <div className='container container2'>
          <h3 className='container-title'>Skills</h3>
          <div className='skill-list'>
            <Skill skill='HTML' pathImage={htmlLogo} />
            <Skill skill='CSS' pathImage={CSSLogo} />
            <Skill skill='JavaScript' pathImage={JavaScriptLogo} />
            <Skill skill='React' pathImage={ReactLogo} />
          </div>
          <div className='other-skills'>
            <h5>Other skills: </h5>
            <div className='list-other-skills'>
              <div className='secondary-skill'>C</div>
              <div className='secondary-skill'>C++</div>
              <div className='secondary-skill'>Java</div>
              <div className='secondary-skill'>Python</div>
              <div className='secondary-skill'>MySQL</div>
              <div className='secondary-skill'>PHP</div>
            </div>
          </div>
        </div>
      </Insertion>
      <Insertion id='Projects' height='50rem' color='light'>
        <div className='container container3'>
          <h3>Projects</h3>
          <div className='cards'>
            <Card
              imagePath={appleRemakeProject}
              cardTitle='Apple website'
              cardText='A remake of apple website but using React.'
            />
            <Card
              imagePath={parallax}
              cardTitle='Parallax website'
              cardText='making a website with a parallax effect using CSS only.'
            />
            <Card />
          </div>
        </div>
      </Insertion>
      <Insertion id='Contact' type={3} height='40rem' color='dark'>
        <div className='container'>
          <h3>Contacts</h3>
        </div>
      </Insertion>
    </>
  );
}

const Skill = ({ skill, style, pathImage }) => {
  return (
    <div className='skill' style={style}>
      <div className='skill-circle-image'>
        <img className='skill-image' src={pathImage} />
      </div>
      <h2 className='skill-title'>{skill}</h2>
    </div>
  );
};

const Card = ({ imagePath, cardTitle, cardText }) => {
  return (
    <div className='card'>
      <img src={imagePath} />
      <div className='card-description'>
        <h5>{cardTitle}</h5>
        <p>{cardText}</p>
        <a href='#'>Open Project</a>
      </div>
    </div>
  );
};

export default Homepage;
