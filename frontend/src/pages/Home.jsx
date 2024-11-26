import ProtectedRoute from "../components/ProtectedRoute"
import "../styles/Home.css"
import Footer from "../components/Footer.jsx"


function Home() {
    return (
      <div class="home-page-container">
        <div class="info-container">
          <h1 class="title">Welcome to Next Step Vault Club!</h1>
          <div class="content-container">
            <p class="description">
              Here you can find all things related to the vault club! We are now currently located in Rochester, NY. Here to give kids the opportunity to jump higher and provide all necessary resources such as poles, drills and coaching. We believe an athlete should never be held back by not having the proper equipment or coaching.<br/><br/>
              At NSVC we keep the training sessions small, emphasizing safety and technique. Taking the time to break down each aspect of the vault, from the approach to when you come off the pole and each step in-between.<br/><br/>  
              The drills we use are not just for the advanced vaulter. They are for every vaulter.  All are welcomed at NSVC.<br/><br/>
              There are many different types of vaulters and there are many different ways to vault. Each student athlete is unique and is coached as such.<br/><br/>  
            </p>
            <img src="https://images.squarespace-cdn.com/content/v1/59397d0a17bffca5cc3f542f/f3bd50ea-357a-4051-a454-4ed03860ac8c/IMG_1472.JPG?format=750w"/>
          </div>
        </div>
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
    )
}


export default Home
