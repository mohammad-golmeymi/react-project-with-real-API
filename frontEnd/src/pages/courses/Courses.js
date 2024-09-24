/* eslint-disable eqeqeq */
import Navvbar from "../../components/navbar/Navvbar";
import Footer from "../../components/footer/Footer";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Courses.css";
import {
  Col,
  Container,
  Row,
  Accordion,
  Form,
  Alert,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import CourseItem from "../../components/courseItem/CourseItem";
function Courses() {
  const [courses, setcourses] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [category, setcategory] = useState("");
  const [state, setstate] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const inputValue = useRef();

  useEffect(() => {
    if (sortType == "earliest") {
      getSortType("id", "desc");
    } else if (sortType == "latest") {
      getSortType("id", "asc");
    } else if (sortType == "expensive") {
      getSortType("mainprice", "desc");
    } else if (sortType == "cheap") {
      getSortType("mainPrice", "asc");
    }
  }, [sortType]);

  useEffect(() => {
    if (category == "frontend") {
      getCourseByCategory("فرانت اند");
    } else if (category == "backend") {
      getCourseByCategory("بک اند");
    }
  }, [category]);

  useEffect(() => {
    if (state == "completed") {
      getCourseByState("completed");
    } else if (state == "recording") {
      getCourseByState("recording");
    }
    else if(state == "presell"){
        getCourseByState("presell");
    }
  }, [state]);

  const radioHandler = (e) => {
    setSortType(e.target.id);
  };

  const courseListHandler = () => {
    inputValue.current.value = "";
    getSortType('id','desc');
    setSortType('earliest')
    setstate('');
    setcategory('')

  };
  const categoryCheckboxHandler = (e) => {
    setcategory(e.target.value);
  };
  const stateCheckboxHandler = (e) => {
    setstate(e.target.value);
    
  };

  const getCourseByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setcourses(response.data.data));
  };
  const getCourseByState = (state) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${state}`)
      .then((response) => setcourses(response.data.data));
  };
  const getSortType = (column, order) => {
    axios
      .get(
        `http://localhost/react/api/courses/?column=${column}&order=${order}`
      )
      .then((response) => setcourses(response.data.data));
  };
  const searchBtnHandler = (e) => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchKeyword}&column=${e.target.id}`
      )
      .then((response) => setcourses(response.data.data));
  };

  return (
    <>
      <Navvbar />
      <Container>
        <div className="searchSection">
          <h1
            on
            onClick={courseListHandler}
            className="my-3 lalezar border-bottom d-inline-block border-black border-2"
          >
            لیست دوره ها
          </h1>
          <div className="searchInputContainer">
            <input
              ref={inputValue}
              type="text"
              className="searchInput"
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
            <DropdownButton
              className="searchButton fw-bold"
              id="dropdown-basic-button"
              title="جستجو بر اساس"
            >
              <Dropdown.Item
                onClick={searchBtnHandler}
                id="teacher"
                className=""
                href="#/action-1"
              >
                مدرس
              </Dropdown.Item>
              <Dropdown.Item
                onClick={searchBtnHandler}
                id="title"
                className=""
                href="#/action-2"
              >
                عنوان مقاله
              </Dropdown.Item>
              <Dropdown.Item
                onClick={searchBtnHandler}
                id="category"
                className=""
                href="#/action-3"
              >
                دسته بندی
              </Dropdown.Item>
              <Dropdown.Item
                onClick={searchBtnHandler}
                id="description"
                className=""
                href="#/action-4"
              >
                متن
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <Row>
          <Col sm={12} lg={3}>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                     
                      type="radio"
                      id="earliest"
                      label="جدید ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      label="قدیمی ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="expensive"
                      label="گران ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheap"
                      label="ارزان ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <div className="filterWrapper">
                <div className="filterIcon">
                  <MdCategory />
                  <b>دسته بندی</b>
                </div>
                <Form>
                  <Form.Check
                    type="checkbox"
                    value="frontend"
                    label="فرانت اند"
                    checked={category == "frontend" ? true : false}
                    onChange={categoryCheckboxHandler}
                  />
                  <Form.Check
                    type="checkbox"
                    value="backend"
                    label="بک اند"
                    checked={category == "backend" ? true : false}
                    onChange={categoryCheckboxHandler}
                  />
                </Form>
              </div>
              <div className="stateWrapper ">
                <div className="stateIcon">
                  <MdCategory />
                  <b >وضعیت دوره</b>
                </div>
                <Form>
                  <Form.Check
                    type="switch"
                    value="completed"
                    label="تکمیل شده"
                    onChange={stateCheckboxHandler}
                    checked={state == "completed" ? true : false}
                   
                  />
                  <Form.Check
                    type="switch"
                    value="recording"
                    label="درحال ضبط"
                    onChange={stateCheckboxHandler}
                    checked={state == "recording" ? true : false}
                  
                  />
                  <Form.Check
                    type="switch"
                    value="presell"
                    label="پیش فروش"
                    onChange={stateCheckboxHandler}
                    checked={state == "presell" ? true : false}
                  
                  />
                </Form>
              </div>
            </Accordion>
          </Col>
          <Col sm={12} lg={9}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4">
              {courses.map((article) => (
                <Col key={article.id}>
                  <CourseItem {...article} />
                </Col>
              ))}
            </Row>
            {courses.length == 0 && (
              <Alert className="mt-4 p-4 text-center fs-3" variant="warning">
                مقاله ای یافت نشد!!!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Courses;
