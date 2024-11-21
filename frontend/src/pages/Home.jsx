import ProtectedRoute from "../components/ProtectedRoute"
import "../styles/Home.css"
import InfoBox from "../components/InfoBox.jsx"

function Home() {
  const  description = `Here you can find all things related to the vault club! We are now currently located in Rochester, NY. Here to give kids the opportunity to jump higher and provide all necessary resources such as poles, drills and coaching. We believe an athlete should never be held back by not having the proper equipment or coaching.\n\n
          At NSVC we keep the training sessions small, emphasizing safety and technique. Taking the time to break down each aspect of the vault, from the approach to when you come off the pole and each step in-between.\n\n
          The drills we use are not just for the advanced vaulter. They are for every vaulter.  All are welcomed at NSVC.
          There are many different types of vaulters and there are many different ways to vault. Each student athlete is unique and is coached as such.
          Sign up today! `
    return (
      <div class="page-container">
      <InfoBox 
        title="Welcome to Next Step Vault Club!" 
        description={description} 
        img="https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q="
      />
      <InfoBox/>
      <InfoBox/>
      <InfoBox/>
      </div>
    )
}

export default Home
