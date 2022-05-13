import "./Homepage.scss";
import Navbar from "./Components/Navbar/Navbar";
import Insertion from "./Components/Insertions/Insertion";
import { HiArrowCircleUp } from "react-icons/hi";
import { IconContext } from "react-icons";

function Homepage() {
  //Get the button
  var mybutton = document.getElementById("back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <>
      <Navbar />
      <Insertion type={1} color='dark'>
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
      <a href='#' id='back-to-top' class='back-to-top'>
        <IconContext.Provider value={{ color: "#ffc800", size: "5rem" }}>
          <HiArrowCircleUp />
        </IconContext.Provider>
      </a>
      <Insertion id='About_me' height='50rem' color='light'>
        <div className='container'>
          <h3>About me</h3>
        </div>
      </Insertion>
      <Insertion id='Skills' type={2} height='50rem' color='dark'>
        <div className='container'>
          <h3>Skills</h3>
        </div>
      </Insertion>
      <Insertion id='blank' height='50rem' color='light'>
        <div className='container'>
          <h3>TODO</h3>
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

export default Homepage;
