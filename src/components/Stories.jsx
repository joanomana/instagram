import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import avatar1 from "../storage/img/avatar1.png";
import avatar2 from "../storage/img/avatar2.png";
import avatar3 from "../storage/img/avatar3.png";
import avatar4 from "../storage/img/avatar4.png";
import avatar5 from "../storage/img/avatar5.png";
const stories = [
  { id: 1, name: "Ruffles", img: avatar1 },
  { id: 2, name: "sabanok...", img: avatar2 },
  { id: 3, name: "blue_bouy", img: avatar3 },
  { id: 4, name: "waggles", img: avatar4 },
  { id: 5, name: "steve.loves", img: avatar5 },
  { id: 6, name: "Juan", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 7, name: "María", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 8, name: "Carlos", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 9, name: "Ana", img: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 10, name: "Pedro", img: "https://randomuser.me/api/portraits/men/5.jpg" },
];

const Stories = () => {
  return (
    <div className="w-full max-w-lg mx-auto py-4">
      <Swiper
        spaceBetween={5}
        slidesPerView="4.5"
        className="flex items-center"
      >
        {stories.map((story,index) => (
          <SwiperSlide key={story.id} className="w-auto">
            <div className="flex flex-col items-center cursor-pointer">
              <div
                className={`
                  ${index === 1 ? "w-20 h-20 border-1 border-green-500 rounded-full p-1":""}
                  ${index >= 2 ?  " rounded-full p-1 w-20 h-20 border-2 border-pink-500":""}`}
              >
                <img
                  src={story.img}
                  alt={story.name}
                  className={` object-cover 
                    ${index === 0 ? "w-30 h-20" : ""}
                    ${index >=1 && index <=5 ? "w-[100px]" : ""}
                    ${index >=5  ? "w-auto h-auto rounded-full" : ""}`}
                />
              </div>
              <span className="text-xs text-gray-700 mt-1">{story.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Stories;
