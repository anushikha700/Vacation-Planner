import "./App.css";

import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import First from "./components/First";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <First imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Wanna explore thrilling locations"}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Packup up your bag with millions of memories"}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default App;
