import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return ( 
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="pink" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,176C672,160,768,160,864,181.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <Container fluid className="pb-4 px-md-5" style={{backgroundColor:'pink',marginTop:'-25px'}}>
                <Row className="px-lg-3 mx-lg-3 align-items-center ">
                    <Col md={7}>
                        <h2 className="lalezar">رسالت نکست وان کد</h2>
                        <p>نکست وان کد با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید.</p>
                    </Col>
                    <Col md={5} className="text-end"><img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="" /></Col>
                </Row>
            </Container>
        </>
     );
}

export default Footer;