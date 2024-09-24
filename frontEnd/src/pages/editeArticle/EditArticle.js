/* eslint-disable react-hooks/exhaustive-deps */
import Navvbar from "../../components/navbar/Navvbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../../components/footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";



function EditArticle() {
  const articleId = useParams().articleId;
  const navigate=useNavigate();
  const [articleData, setarticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId}`)
      .then((response) => setarticleData(response.data.data[0]));
  }, []);


    const editDataHandler=(e,propertyName)=>{
        setarticleData({...articleData,[propertyName] : e.target.value})
      
    }
    const editHandler=()=>{
        axios.put(`http://localhost/react/api/articles/?id=${articleId}`,articleData);
        Swal.fire({
            title:"مقاله با موفقیت ویرایش شد.",
            timer:1500,
            timerProgressBar:true,
            showConfirmButton:false
          });
          navigate('/')

    }

  return (
    <>
    <Navvbar/>
      <div className="text-center my-3">
        <h3 className="lalezar d-inline-block border-bottom border-2 border-black">
          ویرایش مقاله
        </h3>
      </div>
      <div id="add-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>عنوان مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'title')} value={articleData.title} required autoComplete="off" className="mb-2" type="text" placeholder="عنوان" />

            <Form.Label>دسته بندی مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'category')} required value={articleData.category} autoComplete='off' className="mb-2" type="text" placeholder="دسته بندی" />

            <Form.Label>توضیحات مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'description')} required value={articleData.description} autoComplete="off" className="mb-2" type="text" placeholder="توضیحات" />

            <Form.Label>نویسنده نقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'writter')} required value={articleData.writter} autoComplete="off" className="mb-2" type="text" placeholder="نویسنده" />

            <Form.Label>لینک عکس مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'image')} required value={articleData.image} autoComplete="off" className="mb-2" type="text" placeholder="عکس مقاله" />

            <Form.Label>زمان مطالعه مقاله را وارد کنید</Form.Label>
            <Form.Control onChange={(e)=>editDataHandler(e,'readingTime')} required value={articleData.readingTime} autoComplete="off" className="mb-2" type="text" placeholder="زمان مطالعه" />

          </Form.Group>

          <Button onClick={editHandler} className="w-100" variant="primary" type="button">
            ثبت مقاله
          </Button>
        </Form>
      </div>
      <Footer/>
    </>
  );
}

export default EditArticle;
