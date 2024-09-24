import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import SwiperButtons from "../swiperButtons/SwiperButtons";
import CourseItem from "../courseItem/CourseItem";

function SwiperCourses({ courses }) {
  return (
    <>
      <Container className="">
        <Swiper
          breakpoints={{
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="mySwiper p-2"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseItem {...course} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </>
  );
}

export default SwiperCourses;
