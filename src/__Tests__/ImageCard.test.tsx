import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImageCard from "../Components/ImageCard/ImageCard";

// this is testing if the ImageCard component is being generated properly
test("<ImageCard /> renders the correct content", () => {
  const currentImage = {
    date: "2000-09-18",
    explanation:
      "Last Monday the crew of Space Shuttle Atlantis took in this view as they approached the developing International Space Station (ISS).   From top to bottom, the astronauts saw a station currently consisting of the Progress supply module, the Zvezda service module, the Zarya cargo module, and the Unity connecting module.  Never before had astronauts seen the station since the remote-controlled additions of Progress and Zvezda.  Energy collecting flat solar panels can be seen extending from some of the modules.  Soon after this picture was taken, Atlantis docked with the ISS at the Unity end.  The astronauts have worked hard unloading supplies, installing and testing equipment, and even planning to reboost the floating space station to a higher orbit.  The Shuttle and its entire crew are scheduled to return to Earth Wednesday.   The Space Shuttle Discovery is then scheduled to visit the ISS in two weeks.",
    hdurl: "https://apod.nasa.gov/apod/image/0009/iss_sts106_big.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Approaching the International Space Station",
    url: "https://apod.nasa.gov/apod/image/0009/iss_sts106.jpg",
  };

  render(<ImageCard currentImage={currentImage} />);

  // check if the rendered ImageCard contains the correct content
  expect(screen.getByText(/2000-09-18/)).toBeInTheDocument();
  expect(
    screen.getByText(/Approaching the International Space Station/)
  ).toBeInTheDocument();
});
