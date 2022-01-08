import axios from "axios";

export const fetchImagesData = async (numImages: number) => {
  const nasaApiUrl = `https://api.nasa.gov/planetary/apod?count=${numImages}&api_key=RUdo86AMUyp7i0GyERvlx866wMXBeyc2BvpxnaHr`;

  const { data } = await axios.get(nasaApiUrl);

  const imagesList = data.map((currentData: any) => {
    return {
      title: currentData.title,
      date: currentData.date,
      url: currentData.url,
      hdurl: currentData.hdurl,
      explanation: currentData.explanation,
      media_type: currentData.media_type,
    };
  });

  return imagesList;
};
