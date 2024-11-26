import "../styles/Staff.css"
import "../styles/Home.css"
import crane from "../assets/Nate Crane.jpg"
import Footer from "../components/Footer.jsx"


function Staff() {


    return (
        <>
        <div class="home-page-container">
            <div class="info-container">
                <h1 class="title">Alex Curran</h1>
                <div class="content-container">
                <p class="description">
                    Breaks his knee before even jumping at beach vault
                </p>
                <img src="https://images.squarespace-cdn.com/content/v1/59397d0a17bffca5cc3f542f/4d6f1ca5-74a1-441e-a111-57c92bd620eb/Alexvault.png?format=2500w"/>
            </div>
            
        </div>
        <div class="info-container">
                <h1 class="title">Nathan Cranen</h1>
                <div class="content-container">
                <p class="description">
                    Pole Vault with a bend arm but preaches a straigh bottom arm
                </p>
                <img src={crane}/>
            </div>
            
        </div>
       <Footer/>
      </div>
      </>
    )
}
export default Staff;