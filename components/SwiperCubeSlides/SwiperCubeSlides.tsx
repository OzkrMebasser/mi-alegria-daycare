import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// Import required modules
import { EffectCube, Pagination } from "swiper/modules";

// Definir los tipos para las imágenes
interface ImageSlideProps {
  src: string;
  alt: string;
}

// Array con las URLs de las imágenes
const imageUrls = [
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-1.jpeg?alt=media&token=bd603870-119b-447d-bdc0-0f6616e1f798",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-2.jpeg?alt=media&token=17dc10c2-beec-4314-bf37-4b70ffcec5c1",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-3.jpeg?alt=media&token=6d18c24d-6f67-4955-bd4d-e54f69c6c17d",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-4.jpeg?alt=media&token=a408243e-0e66-46d4-b071-88b703f37759",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-5.jpeg?alt=media&token=6ee652a4-04e7-4953-817b-1189a24cae2e",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-6.jpeg?alt=media&token=14852ae1-49d0-4910-b355-e72c683c1c2e",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-7.jpeg?alt=media&token=8277dc66-a370-4d5d-8f9d-b4318acaa65f",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-8.jpeg?alt=media&token=a0f406b9-a34e-4b74-acb2-577686f1210b",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-9.jpeg?alt=media&token=da0001a0-c179-4194-a7ae-0ce5eb32ffcf",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-10.jpeg?alt=media&token=769f1330-5554-4c3e-964c-bc87344513e7",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-11.jpeg?alt=media&token=d53ec092-dcbe-4e44-a173-682079903795",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-12.jpeg?alt=media&token=11cb1d0f-4bb1-4e84-93aa-dbdd8289abb4",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-13.jpeg?alt=media&token=a75e4cac-9d8b-4bc5-b8ce-d5177a33357a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-14.jpeg?alt=media&token=c041fc56-1930-4687-a525-1e4a4936d23d",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-15.jpeg?alt=media&token=fcf7b66e-6ffa-4909-b7d8-5526a0991b15",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-16.jpeg?alt=media&token=85e3bcfa-5998-406e-8b5d-60913cb5c92d",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-17.jpeg?alt=media&token=54dff732-bf06-461e-8ebb-9b06c37be5b0",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-18.jpeg?alt=media&token=67dbaad0-df95-4eb0-94cc-d1056832df97",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-18.jpeg?alt=media&token=67dbaad0-df95-4eb0-94cc-d1056832df97",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-19.jpeg?alt=media&token=fc134e49-df97-4840-a314-4b5c0be73d47",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-20.jpeg?alt=media&token=bedccead-2276-4266-ae7a-b916806bdd7b",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-21.jpeg?alt=media&token=f2a42f87-55c3-41cf-9b0e-2649a447e5d8",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-22.jpeg?alt=media&token=b74483e9-4d1f-4495-bb0c-49e4be711bc3",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-23.jpeg?alt=media&token=a0c88ada-5ff7-4dd3-9038-0115dcbe4e49",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-24.jpeg?alt=media&token=35d0b767-15c4-4bb0-a3d7-fbad5b4d1a25",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-25.jpeg?alt=media&token=aca10ea0-b96d-4f6f-8fb9-39281481462e",
];

const ImageSlide: React.FC<ImageSlideProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover shadow-md rounded-lg"
    />
  );
};

const SwiperCubeSlides: React.FC = () => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="w-[300px] h-[280px] lg:w-full lg:h-full mx-auto"
    >
      {/* Usamos map para iterar sobre las imágenes del array */}
      {imageUrls.map((src, index) => (
        <SwiperSlide key={index}>
          <ImageSlide src={src} alt={`Image ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCubeSlides;
