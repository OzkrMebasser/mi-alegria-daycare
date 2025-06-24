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
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-1.jpeg?alt=media&token=b3c8f14b-7a15-43f9-a591-a344eac4c154",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-2.png?alt=media&token=a95b08c4-16bd-492c-80ca-5e5ff9f61a05",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-3.png?alt=media&token=83fd0468-0616-421e-8aaf-d7da85bf0a9a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-4.jpeg?alt=media&token=13d6f8f8-b0f7-494f-82b8-328d7f5cbb6f",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-5.png?alt=media&token=cf51c0f3-eb58-4c7a-b845-ca3ddfe174c9",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-6.png?alt=media&token=aa2a46e1-4b71-4153-8af1-785aeb9738ec",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-7.png?alt=media&token=2b8d733d-1172-4427-8085-cc59a9ea5744",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-8.jpeg?alt=media&token=2dbdddde-079c-4b32-a5c8-06df93abd293",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-9.jpeg?alt=media&token=a7d00062-c525-4307-afe0-72d532d3ea3b",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-10.jpeg?alt=media&token=d67f6813-9844-4269-a6b4-128463a841ed",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-11.png?alt=media&token=d8e02dea-4b70-4646-a460-68081f93e3d5",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-12.jpeg?alt=media&token=4a328915-e222-4979-b0fc-f4f7cc9d8afb",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-13.jpeg?alt=media&token=6ee1aef6-622d-4f40-8b85-0198d2b8bb52",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-14.png?alt=media&token=7b6b8e9d-9602-4ce5-8d9c-fcd6ec15ca1d",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-15.jpeg?alt=media&token=7117d1cd-fe05-4cf2-ad81-22f931f67abf",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-16.jpeg?alt=media&token=42f83b5b-416c-4f8b-ab1a-61f7fb9d0a51",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-17.jpeg?alt=media&token=f7aa1f23-4b98-4a44-954d-b6efcbc8ac8a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-18.png?alt=media&token=ddc8d9ef-d694-4923-941a-e8d8df3b3fa7",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-19.jpeg?alt=media&token=67edee7d-e54c-4ef4-9376-9e902eec157a",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-20.jpeg?alt=media&token=8580205e-fafd-4467-8bcc-1f1257b88732",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-21.png?alt=media&token=c24da591-b38e-4089-a010-2bce753a82e7",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-22.png?alt=media&token=d771829b-6e9a-439f-8baf-1edd38e3dc90",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-23.png?alt=media&token=b2a62437-aceb-4787-835b-3424973016d1",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-24.png?alt=media&token=0490d4e6-375a-4ae0-9248-da9198ff861e",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-25.jpeg?alt=media&token=06bc35af-2928-4ca4-992f-f85492b6de85",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-26.jpeg?alt=media&token=34931061-73aa-4f34-9c09-113972cea22b",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-27.jpeg?alt=media&token=c076e5fc-b022-4661-af3a-f1c30f853e83",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-28.jpeg?alt=media&token=f15da9e7-f5c9-4c89-aa22-0f1ca4208164",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-29.png?alt=media&token=023c87db-a17e-45d8-b766-0d9d9ac62ab8",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-30.png?alt=media&token=1d38f310-361a-49aa-8ce7-7fd988b932d5",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-31.png?alt=media&token=cbe3bbfe-b1f6-42da-82f3-ae6bd7790754",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-32.png?alt=media&token=32d9c8cc-ebea-4947-9edb-b675fbb48ddc",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-33.png?alt=media&token=7fe3ba2e-dbf7-48f4-aa5a-1ccab119f794",
  "https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/cubeSliderImgs%2Fcube-images-mi-alegria-daycare-34.jpeg?alt=media&token=e46259ee-5ea1-4c02-a9a4-290977c34c8f",
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
