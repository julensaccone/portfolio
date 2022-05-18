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
import githubLogo from "./images/github_icon.svg";
import gmailLogo from "./images/gmail_icon.svg";
import { SiGmail } from "react-icons/si";
import pdf from "./files/JulenSaccone_CV.pdf";
import optimalHeapsort from "./images/optimalHeapsort.png";

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
    let docElem = document.documentElement,
      docBody = document.body,
      scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
      scrollBottom =
        (docElem["scrollHeight"] || docBody["scrollHeight"]) -
        window.innerHeight,
      scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
    console.log(scrollPercent);

    document
      .getElementById("progress-bar")
      .style.setProperty("--scrollAmount", scrollPercent);

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
      <div id='progress-bar' className='progress-bar'></div>
      {/* <div className='nav-side-bar'>
        <a className='circle'>.</a>
        <a className='circle'>.</a>
        <a className='circle'>.</a>
      </div> */}
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
                    <img className='flags' src={italy} />
                    <p>Italian</p>
                  </li>
                  <li>
                    <img className='flags' src={spain} />
                    <p>Spanish</p>
                  </li>
                  <li>
                    <img className='flags' src={uk} />
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
              imagePath={optimalHeapsort}
              cardTitle='Research on sorting algorithms'
              cardText='implementation in C++ of Optimal Heapsort, which is a more efficient version of the famous sorting algorithm Heapsort. '
            />

            <Card
              link='https://github.com/julensaccone/apple_web_site_react'
              imagePath={appleRemakeProject}
              cardTitle='Apple website'
              cardText='A remake of apple website but using React.'
            />
            <Card
              imagePath={parallax}
              cardTitle='Parallax website'
              cardText='making a website with a parallax effect using CSS only.'
            />
          </div>
        </div>
      </Insertion>
      <Insertion
        id='Contact'
        type={3}
        height='7rem'
        color='dark'
        padding='1rem'
      >
        <div className='container container4 active'>
          <h3 className='contacts'>Contacts</h3>

          <div className='wrapper'>
            <a
              href={pdf}
              target='_blank'
              rel='noopener noreferrer'
              className='button'
            >
              <div className='icon'>
                <i class='fa-solid fa-file-pdf'></i>
              </div>
              <span>Resume</span>
            </a>
            <div className='button'>
              <div className='icon'>
                <i className='fa-brands fa-linkedin fa-lg'></i>
              </div>
              <span>LinkedIn</span>
            </div>
            <a
              href='mailto:julen.saccone@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='button'
            >
              <div className='icon'>
                <i className='fa-solid fa-envelope fa-lg'></i>
              </div>
              <span>Gmail</span>
            </a>
            <a
              href='https://github.com/julensaccone'
              target='_blank'
              rel='noopener noreferrer'
              className='button'
            >
              <div className='icon'>
                <i className='fab fa-github'></i>
              </div>
              <span>Github</span>
            </a>
          </div>
        </div>
        <form className='form-mail'>
          <label>Object</label>
          <input placeholder='Object'></input>
          <label>Content</label>
          <input placeholder='content'></input>
        </form>
      </Insertion>
    </>
  );
}

const Social = ({ icon, name, iconName }) => {
  return (
    <button className='button'>
      <div className='icon'>
        <img src={icon} alt='logo' />
      </div>
      <span>{name}</span>
    </button>
  );
};
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

const Card = ({ link, imagePath, cardTitle, cardText }) => {
  return (
    <div className='card'>
      <img src={imagePath} />
      <div className='card-description'>
        <h5>{cardTitle}</h5>
        <p>{cardText}</p>
        <a
          onClick={() => {
            if (!link) {
              window.alert("Still working on it...");
            }
          }}
          href={link}
          target='_blank'
        >
          Open Project
        </a>
      </div>
    </div>
  );
};

export default Homepage;
