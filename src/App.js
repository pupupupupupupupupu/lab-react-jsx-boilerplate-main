import "./App.css";
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};

function App() {
  // code here
  let imagedata = imageData();
  return (
    <div className="App">
      <h1>Kalvium gallery</h1>

      <div className="image">
        <img src={imagedata[0].img} alt="b1"/>
        <img src={imagedata[1].img} alt="b2"/>
      </div>

      <div className="image">
        <img src={imagedata[2].img} alt="b3"/>
        <img src={imagedata[3].img} alt="b4"/>
      </div>
    </div>
  );
}


export default App;
