import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SwiperArticle.css";
import { Autoplay } from "swiper/modules";
import SwiperButtons from "../swiperButtons/SwiperButtons";
import ArticleItem from "../articleAitem/ArticleItem";

function SwiperArticle({ articles }) {
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
            delay: 3000,
          }}
          modules={[Autoplay]}
          className="mySwiper p-2"
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <ArticleItem {...article} />
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </Container>
    </>
  );
}

export default SwiperArticle;
