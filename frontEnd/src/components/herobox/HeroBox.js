import CountUp from "react-countup";
import './HeroBox.css'

function HeroBox({title,count,children}) {
  return (
    <>
      <div className="heroBoxContainer">
        <div className="heroBoxHeader">
          {children}
          <b className="heroBoxTitle">{title}</b>
        </div>
        <p className="heroBoxCount text-center fw-bold" >
        <CountUp className="fs-4"
            start={0} 
            end={count}
            duration={3} 
            separator="" 
            delay={0.5} 
        />
        </p>
      </div>
    </>
  );
}

export default HeroBox;
