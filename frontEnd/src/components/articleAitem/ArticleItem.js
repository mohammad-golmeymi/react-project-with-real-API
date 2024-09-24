import Card from 'react-bootstrap/Card';
import './ArticleItem.css'
import { FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function ArticleItem(props) {
  return (
    <Card >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className='lalezar'>{props.title}</Card.Title>
        <h6><span >دسته بندی :</span> <span className='fw-bold'>{props.category}</span>   </h6>
        <Card.Text>
         {props.description}
        </Card.Text>
        <span>
            <Link to={`/article/${props.id}`}>
                ادامه مقاله
            </Link>
            <IoMdArrowRoundBack />
        </span>
      </Card.Body>
      <Card.Footer>
        <span>نویسنده : <span className='fw-bold'>{props.writter}</span></span>
        <span>
        <FaRegClock size={15} className='me-1' />
        {props.readingTime} دقیقه

        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;