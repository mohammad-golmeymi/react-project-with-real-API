/* eslint-disable eqeqeq */
import Navvbar from "../../components/navbar/Navvbar";
import "./Articles.css";
import Footer from "../../components/footer/Footer";
import ArticleItem from "../../components/articleAitem/ArticleItem";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
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

function Articles() {
  const [articles, setarticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKeyword, setSearchKeyword] = useState("");

  const radioHandler = (e) => {
    setSortType(e.target.id);
  };

  const getSortType = (column, order) => {
    axios
      .get(
        `http://localhost/react/api/articles/?column=${column}&order=${order}`
      )
      .then((response) => setarticles(response.data.data));
  };
  const searchBtnHandler = (e) => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKeyword}&column=${e.target.id}`
      )
      .then((response) => setarticles(response.data.data));
  };
   const articleListHandler = () => {
    getSortType('id','desc');
    inputValue.current.value='' ;
    
   }
   const inputValue = useRef()

  useEffect(() => {
    if (sortType == "earliest") {
      getSortType("id", "desc"); 
    } else if (sortType == "latest") {
      getSortType("id", "asc");
    } else if (sortType == "longest") {
      getSortType("readingTime", "desc");
    } else if (sortType == "shortest") {
      getSortType("readingTime", "asc");
    }
  }, [sortType]);


  return (
    <>
      <Navvbar />
      <Container>
        <div className="searchSection">
          <h1 on onClick={articleListHandler} className="my-3 lalezar border-bottom d-inline-block border-black border-2">
            لیست مقالات
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
                id="writter"
                className=""
                href="#/action-1"
              >
                نویسنده
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
                href="#/action-3"
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
                      id="longest"
                      label="طولانی ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      label="کوتاه ترین"
                      name="sort"
                      onChange={radioHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size="20px" />
                  <b>دسته بندی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} lg={9}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
            {articles.length == 0 && (
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

export default Articles;
