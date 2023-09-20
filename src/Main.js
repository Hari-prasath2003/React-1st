import React from "react";
import Image from "react-bootstrap/Image";
import img from "../src/New folder/img.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Main = () => {
  return (
    <div id="about">
      <Container fluid>
        <Row>
          <Col md={6}>
            <h1>About us</h1>

            <p>
              What are the 4 types of electric vehicles? TYPES OF ELECTRIC
              VEHICLES System Architecture of 4 types of electric cars is as
              follows: Battery Electric Vehicles (BEVs) BEVs are also known as
              All-Electric Vehicles (AEV). ... Hybrid Electric Vehicle (HEV):
              HEVs are also known as series hybrid or parallel hybrid. ...
              Plug-in Hybrid Electric Vehicle (PHEV): ... Fuel Cell Electric
              Vehicle(FCEV):
            </p>
          </Col>
          <Col md={6}>
            <Image src={img} fluid className="img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
