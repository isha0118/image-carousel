import React from 'react';
import ImageCarousel from "./imageCarousel.jsx";
const App = () => {
  const urls = [
    "https://images.pexels.com/photos/269255/pexels-photo-269255.jpeg",
    "https://images.pexels.com/photos/355235/pexels-photo-355235.jpeg",
    "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg"
];

  return (
    <div>
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={urls} />
    </div>
  );
};

export default App;