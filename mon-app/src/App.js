import logo from "./logo.svg";
import "./App.css";
import "../src/style.css"
import imageInSrc from "../src/imageInSrc.jpg"

function App() {
  
  return (
    <div className="App">
      <div >
        <h1 className="title red">Karama Mrakben</h1>
        <img src={imageInSrc} style={{maxWidth:'100px'}}/>
        <img src="/imageInPublic.jpg" style={{maxWidth:'179px'}} />
      </div>
      <video
        type="video/WEBM"
        width="320"
        height="240"
        controls>
           <source src="myVideo.WEBM" type="video/WEBM"/>
        </video>
      
    </div>
  );
}

export default App;
