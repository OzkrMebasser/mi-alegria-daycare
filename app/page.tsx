"use client";
import Home from "./home/Home";
import HeroImgSlider from "@/components/HeroImgSlider";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-1.jpg?alt=media&token=eb044a76-2304-4b50-b949-edcb215f3a1a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-2.jpeg?alt=media&token=d98bebe1-5b80-47a5-84e2-088ace5fac96",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-3.jpeg?alt=media&token=5b88fcc5-d81a-4e76-98a8-864e5a50c255",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-4.jpeg?alt=media&token=65c17769-9763-4976-bba4-b012c9e4d953",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-5.jpeg?alt=media&token=c2259dc9-6fac-4675-bf32-9194c192ecd7",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-6.jpeg?alt=media&token=9dfb06b9-57cf-497a-99ec-31d648b654c9",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-7.jpeg?alt=media&token=eac98b4a-1452-48ec-bdf0-b75ebe6913b2",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/hero-images%2Fhero-images-mialegriadaycare-8.jpeg?alt=media&token=3fe17e6f-11c4-4ccc-9444-94ee41abfb78",
];
const page = () => {
  return (
    <>
      {/* <Home /> */}
      <Home />
      {/* <HeroImgSlider/> */}
      <HeroImgSlider images={images} />
    </>
  );
};

export default page;
