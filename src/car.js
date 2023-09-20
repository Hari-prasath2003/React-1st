import React from "react";
import Image from "react-bootstrap/Image";
import img4 from "../src/New folder/img4.jpg";
import img5 from "../src/New folder/img5.jpg";
import img6 from "../src/New folder/img6.jpg";
import img7 from "../src/New folder/img7.jpg";
import img8 from "../src/New folder/img8.jpg";
import img9 from "../src/New folder/img9.jpg";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const car = () => {
  return (
    <div>
      <h2 className="he">Cars</h2>
      <div className="h">
        <h4>
          EV cars in India are quickly gaining popularity, thanks to their low
          carbon emissions, reduced noise pollution, and impressive fuel
          efficiency. Looking for an eco-friendly mode of transportation that's
          both affordable and efficient? Some of the popular battery-powered
          cars include the Tata Nexon EV (Rs. 14.74 Lakh), MG Comet EV (Rs. 7.98
          Lakh) and Tata Tiago EV (Rs. 8.69 Lakh). According to the current
          electric car prices in India, these lie in the range of 7.98 Lakh to
          1.95 Crore. While some electric vehicles can be on the pricier side,
          there are also plenty of affordable options available, such as MG
          Comet EV, which is the cheapest electric car in India. The electric
          car price in India for the upcoming Tata Altroz EV is estimated to be
          between Rs. Rs. 12.00 - 15.00 Lakh. We have put together a list of
          some of the best electric cars in India here - check out the latest
          prices, images, reviews & specifications of these electric cars in
          2023.
        </h4>
      </div>
      <Container id="tour">
        <Row>
          <Col md={6}>
            <Image src={img4} fluid className="ig" />
            <h2></h2>
          </Col>
          <Col md={6}>
            <Image src={img5} fluid className="ig" />
            <h2> </h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={img6} fluid className="ig" />
            <h2></h2>
          </Col>
          <Col md={6}>
            <Image src={img7} fluid className="ig" />
            <h2> </h2>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Image src={img8} fluid className="ig" />
            <h2></h2>
          </Col>
          <Col md={6}>
            <Image src={img9} fluid className="ig" />
            <h2> </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default car;
