/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import { useState } from "react";
import axios from "axios";
import Navvbar from "../../components/navbar/Navvbar";
import Footer from "../../components/footer/Footer";
import Swal from "sweetalert2";


function AddArticle() {
    const [articleData, setarticleData] = useState([]);

    const formDataHandler=(e,propertyName)=>{
        setarticleData({...articleData,[propertyName] : e.target.value})
    }
    const resetFormData = () => {
        setarticleData({
          title: "",
          description: "",
          image: "",
          writer: "",
          category: "",
          time: "",
        });
      };
    const submitHandler=(e)=>{
        axios
        .post("http://localhost/react/api/articles/", articleData)
        .then((response) => {
          // eslint-disable-next-line eqeqeq
          if (response.status === 200 && articleData != '') {
            Swal.fire({
              title: "مقاله با موفقیت ساخته شد",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          if (error.status != 201) {
            console.log(error);
          }
          Swal.fire({
            title: "مقاله با موفقیت ساخته نشد",
            icon: "error",
          });
        });
      resetFormData();
    }
    
      
    
  return (
    <>
    <Navvbar/>
      <div className="text-center my-3">
        <h2 className="lalezar border-bottom border-black border-2 d-inline-block">
          ساخت مقاله جدید
        </h2>
      </div>
      <div id="add-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'title')} required autoComplete="off" className="mb-2" type="text" placeholder="عنوان" />

            <Form.Label>دسته بندی مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'category')} required autoComplete='off' className="mb-2" type="text" placeholder="دسته بندی" />

            <Form.Label>توضیحات مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'description')} required autoComplete="off" className="mb-2" type="text" placeholder="توضیحات" />

            <Form.Label>نویسنده نقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'writer')} required autoComplete="off" className="mb-2" type="text" placeholder="نویسنده" />

            <Form.Label>لینک عکس مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'image')} required autoComplete="off" className="mb-2" type="text" placeholder="عکس مقاله" />

            <Form.Label>زمان مطالعه مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>formDataHandler(e,'time')} required autoComplete="off" className="mb-2" type="text" placeholder="زمان مطالعه" />

          </Form.Group>

          <Button onClick={submitHandler} className="w-100" variant="primary" type="button">
            ثبت مقاله
          </Button>
        </Form>
      </div>
      <Footer/>
     
    </>
  );
}

export default AddArticle;
