import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "./SwiperButtons.css";
import { useSwiper } from "swiper/react";

function SwiperButtons() {
  const swiperEvent = useSwiper();
  return (
    <>
      <div className="swiperTopSection">
        <div className="swiperTopSectionTitle">
          <h1 className="lalezar border-bottom d-inline-block border-black border-2">
            جدیدترین مقالات
          </h1>
        </div>
        <div className="swiperbuttonContainer">
          <button onClick={() => swiperEvent.slideNext()} className="button-47">
            <span className="text">
              <MdNavigateNext size={40} />
            </span>
          </button>

          <button onClick={() => swiperEvent.slidePrev()} className="button-47">
            <span className="text">
              <GrFormPrevious size={40} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default SwiperButtons;
