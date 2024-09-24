import { Col, Container, Row } from "react-bootstrap";
import mypic from "../../assets/images/hero.svg";
import "./Hero.css";
import HeroBox from "../herobox/HeroBox";
import { FaUserAlt, FaCode } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="my-5 gy-4 align-items-center  row-cols-1 row-cols-lg-2">
            <Col data-aos="zoom-in" className="text-center">
              <img className="img-fluid heroImg" src={mypic} alt="pic" />
            </Col>
            <Col data-aos="zoom-in ">
              <h1 className="lalezar text-center py-3 mb-4">
                آمارها باعث افتخار ما هستند
              </h1>
              <Row>
                <Col>
                  <HeroBox title="تعداد دانشجو" count="3500">
                    {" "}
                    <FaUserAlt size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد مقاله" count="680">
                    <MdArticle size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد دوره" count="21">
                    <ImBooks size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="پروژه موفق" count="16">
                    <FaCode size="40px" />
                  </HeroBox>
                </Col>
              </Row>
              <p className="startLearning">
                <b>شروع آموزش</b>
                <BsFillSkipStartFill size={"40px"} />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Hero;
