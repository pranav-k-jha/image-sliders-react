import car1 from "./imgs/car-1.jpg";
import car2 from "./imgs/car-2.jpg";
import car3 from "./imgs/car-3.jpg";
import car4 from "./imgs/car-4.jpg";
import car5 from "./imgs/car-5.jpg";
import ImageSlider from "./ImageSlider";

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
];

const App = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{fontSize: "4rem"}}>Link to next section</a>
    </div>
  );
};

export default App;
