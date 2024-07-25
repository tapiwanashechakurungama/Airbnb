import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import "./assets/bootstrap/css/bootstrap.min.css"
import Cards from "./cards/Card"
import Image1 from "./assets/images/GroupHeader.png"

const App = () => {
  return (
    <div className="vin">
      <Navbar />
      <div className="bannerImg">
        <img className="banner-img" src={Image1} alt="img" />
      </div>
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
      <Cards />
    </div>
  );
}

export default App
