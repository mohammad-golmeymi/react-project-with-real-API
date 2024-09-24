import Card from "react-bootstrap/Card";
import "./CourseItem.css";
import { GiTeacher } from "react-icons/gi";
import { LuDollarSign } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
function CourseItem(props) {
 
 

  return (
    <Card>
      <div className="card-headder">
        <Card.Img className="courseImg" variant="top" src={props.image} />
        <p className="studentContainer">
          <FaUsers className="me-1" size={20} />
          <span>{props.studentCount}</span>
        </p>
      </div>
      <Card.Body>
        <Card.Title className="lalezar">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div>
          <span style={{fontSize:'15px'}}>
            <GiTeacher className="me-1" color="black" />
            مدرس : <span className="">{props.teacher}</span>
          </span>
        </div>
      </Card.Body>
      <Card.Footer>
        <button class="button-48">
          <span class="text">
            <b>ثبت نام دوره</b>
          </span>
        </button>
        
        <span>
        <LuDollarSign />
          {props.mainPrice}
        </span>
      </Card.Footer>
    </Card>
  );
}

export default CourseItem;
