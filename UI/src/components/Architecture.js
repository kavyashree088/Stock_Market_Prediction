import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import image from "../Images/Updated_System _Architecture.jpg";

export default class Architecture extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3 class="heading">System Architecture</h3>
          </Row>

          <div style={{ marginTop: "20px" }}>
            <Row>
              <Col sm={7}>
                <Image
                  width="600px"
                  height="400px"
                  style={{ border: "1px solid #0055a2", padding: "5px" }}
                  src={image}
                ></Image>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <p>Stock prediction model is divided into three modules: ​</p>
                  <p>1. Stock prediction using time series stock data</p>
                  <p>2. Stock prediction using news impact analysis​</p>
                  <p>3. Concept drift detection and adaption.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
