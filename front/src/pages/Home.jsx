import NavBar from "../components/Navbar"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"

function Home(){

  return(
    <>
    <div className="container">
    <NavBar/>
    <MainContent/>
    <Footer/>
    </div>
    </>
  )
}

export default Home