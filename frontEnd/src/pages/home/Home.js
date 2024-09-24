import Navvbar from "../../components/navbar/Navvbar";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../components/hero/Hero";
import SwiperArticle from "../../components/swiperArticle/SwiperArticle";
import CourseItem from "../../components/courseItem/CourseItem";
import { Col, Container,Row } from "react-bootstrap";
import SwiperCourses from "../../components/swiperCourse/SwiperCourse";

function Home() {
  const [articles, setarticles] = useState([]);
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=8")
      .then((response) => setarticles(response.data.data));
  
      axios
      .get("http://localhost/react/api/courses/?page=1&limit=6")
      .then((response) => setcourses(response.data.data));
  }, []);


  return (
    <>
      <Navvbar />
      <Hero />
      <SwiperArticle articles={articles} />
      <SwiperCourses courses={courses} />
      <Footer />
    </>
  );
}

export default Home;
