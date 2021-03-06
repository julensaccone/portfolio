import './Homepage.scss';
import Navbar from './Components/Navbar/Navbar';
import Insertion from './Components/Insertions/Insertion';
import { HiArrowCircleUp } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import profilePic from './images/profile-pic.jpg';
import htmlLogo from './images/HTML5_logo.png';
import CSSLogo from './images/CSS3_logo.svg';
import JavaScriptLogo from './images/JavaScript_logo.png';
import ReactLogo from './images/React_logo.png';
import italy from './images/italy.png';
import spain from './images/spain.png';
import uk from './images/uk.png';
import appleRemakeProject from './images/apple_website_remake.png';
import parallax from './images/parallax_background1.jpg';
import pdf from './files/JulenSaccone_Resume.pdf';
import optimalHeapsort from './images/optimalHeapsort.png';

let self = '#';

function Homepage() {
  //Get the button
  window.onload = function () {
    const parallax = document.getElementById('Skills');
    console.log(parallax);
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener('scroll', function () {
      let offset = window.pageYOffset;
      console.log('Offset: ' + offset);
      parallax.style.backgroundPositionY = offset * 0.7 + 'px';
    });
  };

  function reveal() {
    var container1 = document.querySelectorAll('.container');
    let docElem = document.documentElement,
      docBody = document.body,
      scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom =
        (docElem['scrollHeight'] || docBody['scrollHeight']) -
        window.innerHeight,
      scrollPercent = (scrollTop / scrollBottom) * 100 + '%';
    console.log(scrollPercent);

    document
      .getElementById('progress-bar')
      .style.setProperty('--scrollAmount', scrollPercent);

    for (var i = 0; i < container1.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = container1[i].getBoundingClientRect().top;
      var elementVisible = 300;
      if (elementTop < windowHeight - elementVisible) {
        container1[i].classList.add('active');
      } else {
        container1[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <>
      <Navbar />
      <div id='progress-bar' className='progress-bar'></div>
      {/* <div className='nav-side-bar'>
        <a className='circle'>.</a>
        <a className='circle'>.</a>
        <a className='circle'>.</a>
      </div> */}
      <Insertion id='parallax' classe='heading' type={1} color='dark'>
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
      <a href={self} id='back-to-top' className='back-to-top'>
        <IconContext.Provider value={{ color: '#ffc800', size: '5rem' }}>
          <HiArrowCircleUp />
        </IconContext.Provider>
      </a>
      <Insertion id='About_me' classe='about-me' height='auto' color='light'>
        <div className='container container1'>
          <h3>About me</h3>
          <div className='description'>
            <div className='circle-image'>
              <img src={profilePic} alt='profilePic' />
            </div>
            {/* <section className='content'> */}
            <article className='content'>
              Hello there, this is Julen. I'm based in Milan and I'm half
              italian and half spanish (basque country actually). I just
              graduated at University of Milan (Italy) and after that I focused
              on front end web developing.
            </article>
            <div className='list array languages'>
              <h4>Languages =</h4>
              <ul className='list-ul'>
                <li className='list-li'>
                  <img className='flags' src={italy} alt='Italian flag' />
                  <p>Italian</p>
                </li>
                <li className='list-li'>
                  <img className='flags' src={spain} alt='Spanish flag' />
                  <p>Spanish</p>
                </li>
                <li className='list-li'>
                  <img className='flags' src={uk} alt='English flag' />
                  <p>English</p>
                </li>
              </ul>
            </div>
            <div className='list object hobbies'>
              <h4>Hobbies =</h4>
              <ul className='list-ul'>
                <li className='list-li'>
                  <div>
                    Sport:
                    <ul>
                      <li>Football</li> <li>Gym</li>
                    </ul>
                  </div>
                </li>
                <li className='list-li'>
                  <div>
                    Art:
                    <ul>
                      <li>Music</li>
                      <li>Drawing</li>
                      <li>Photography</li>
                      <li>Cinema</li>
                    </ul>
                  </div>
                </li>
                <li className='list-li'>Gaming</li>
                <li className='list-li'>Travel</li>
              </ul>
            </div>
          </div>
        </div>
      </Insertion>
      <Insertion id='Skills' classe='skills' type={2} color='dark'>
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
      <Insertion id='Projects' classe='projects' height='auto' color='light'>
        <div className='container container3'>
          <h3>Projects</h3>
          <div className='cards'>
            <Card
              link='https://github.com/julensaccone/optimalHeapsort'
              imagePath={optimalHeapsort}
              cardTitle='Research on sorting algorithms'
              cardText='implementation in C++ of Optimal Heapsort, which is a more efficient version of the famous sorting algorithm Heapsort. '
            />

            <Card
              link='https://github.com/julensaccone/apple_web_site_react'
              link2='https://apple-reactclone-homepage.netlify.app/'
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
        classe='contacts'
        type={3}
        height='auto'
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
            <a
              href='https://www.linkedin.com/in/julensaccone/'
              target='_blank'
              rel='noopener noreferrer'
              className='button'
            >
              <div className='icon'>
                <i className='fa-brands fa-linkedin fa-lg'></i>
              </div>
              <span>LinkedIn</span>
            </a>
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

const Skill = ({ skill, style, pathImage }) => {
  return (
    <div className='skill' style={style}>
      <div className='skill-circle-image'>
        <img className='skill-image' src={pathImage} alt='skill' />
      </div>
      <h2 className='skill-title'>{skill}</h2>
    </div>
  );
};

const Card = ({ link, imagePath, cardTitle, cardText, link2 }) => {
  return (
    <div className='card'>
      <img src={imagePath} alt={link} />
      <div className='card-description'>
        <h5>{cardTitle}</h5>
        <p>{cardText}</p>
        <div
          className='buttons'
          style={{ justifyContent: link2 ? 'space-between' : 'center' }}
        >
          <a
            onClick={() => {
              if (!link) {
                window.alert('Still working on it...');
              }
            }}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            Open Project
          </a>
          {link2 ? (
            <a href={link2} target='_blank' rel='noopener noreferrer'>
              Open Website
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
