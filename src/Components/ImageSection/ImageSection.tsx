import React, { useState, useEffect } from "react";
import { fetchImagesData } from "../../Api";
import { CurrentImage } from "../../Interfaces/Interface";

const ImageSection: React.FC = () => {
  const [imagesData, setImagesData] = useState<CurrentImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchImagesData(6);
      setImagesData(data);
      console.log(imagesData);
    };

    fetchData();
  }, []);

  return <div>ImageSection</div>;
};

export default ImageSection;
