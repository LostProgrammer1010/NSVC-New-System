import ProtectedRoute from "../components/ProtectedRoute"
import "../styles/Home.css"
import Footer from "../components/Footer.jsx"
import video from "../assets/sample.mp4"


function Home() {

  function pauseVieo() {
    var video = document.getElementById("myVideo");
    video.pause();
  }

    return (
      <div class="home-page-container">

        <video autoplay="true" muted="true" loop="true" id="myVideo">
          <source src={video} type="video/mp4"/>
        </video>
        <div className="overlay">
        <h1 class="title">Welcome to Next Step Vault Club!</h1>
        <div class="info-container">
          <h1 class="title">Vaulting!</h1>
          <div class="content-container">
            <p class="description">
            </p>
          </div>
        </div>
         <div class="info-container">
          <h1 class="title">Drills!</h1>
          <div class="content-container">
            <p class="description">
              <br/><br/>
            </p>
          </div>
        </div>
          <div class="info-container">
          <h1 class="title">Weight Lifting!</h1>
          <div class="content-container">
            <p class="description">
              <br/><br/>
            </p>
          </div>
        </div>
        <Footer/>
        </div>

      </div>
    )
}


export default Home
