import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ImageSection from "../Components/ImageSection/ImageSection";

// this is testing if the ImageSection component is being generated properly
test("<ImageSection /> renders the correct content", () => {
  const imagesList = [
    {
      date: "2000-09-18",
      explanation:
        "Last Monday the crew of Space Shuttle Atlantis took in this view as they approached the developing International Space Station (ISS).   From top to bottom, the astronauts saw a station currently consisting of the Progress supply module, the Zvezda service module, the Zarya cargo module, and the Unity connecting module.  Never before had astronauts seen the station since the remote-controlled additions of Progress and Zvezda.  Energy collecting flat solar panels can be seen extending from some of the modules.  Soon after this picture was taken, Atlantis docked with the ISS at the Unity end.  The astronauts have worked hard unloading supplies, installing and testing equipment, and even planning to reboost the floating space station to a higher orbit.  The Shuttle and its entire crew are scheduled to return to Earth Wednesday.   The Space Shuttle Discovery is then scheduled to visit the ISS in two weeks.",
      hdurl: "https://apod.nasa.gov/apod/image/0009/iss_sts106_big.jpg",
      media_type: "image",
      title: "Approaching the International Space Station",
      url: "https://apod.nasa.gov/apod/image/0009/iss_sts106.jpg",
    },
    {
      date: "2021-05-05",
      explanation: "test text",
      hdurl: "https://apod.nasa.gov/apod/image/0009/iss_sts106_big.jpg",
      media_type: "image",
      title: "STEVE over Copper Harbor",
      url: "https://apod.nasa.gov/apod/image/0009/iss_sts106.jpg",
    },
  ];

  render(<ImageSection imagesList={imagesList} />);

  // check if the rendered ImageSection contains the correct content
  expect(screen.getByText(/2021-05-05/)).toBeInTheDocument();
  expect(
    screen.getByText(/Approaching the International Space Station/)
  ).toBeInTheDocument();
  expect(screen.getByText(/2000-09-18/)).toBeInTheDocument();
  expect(screen.getByText(/STEVE over Copper Harbor/)).toBeInTheDocument();
});
