import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import lstm1 from "../Images/LSTM_Stock.png";
import lstm2 from "../Images/LSTM_Stock_News.png";
import lstm3 from "../Images/LSTM_Actual.png";
import lstm4 from "../Images/LSTM_previous.png";
import lstm5 from "../Images/LSTM_Cross_validation.png";
export default class LSTM extends Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="apple"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
          }}
        >
          <Tab
            eventKey="apple"
            title="Apple"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Long Short Term Memory (LSTM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using stock price data only</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock price prediction using stock price data and news
                    data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock price prediction using actual values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Stock price prediction using predicted values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>5. Stock price prediction using cross validation</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="amd"
            title="AMD"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Long Short Term Memory (LSTM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using stock price data only</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock price prediction using stock price data and news
                    data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock price prediction using actual values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Stock price prediction using predicted values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>5. Stock price prediction using cross validation</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="tesla"
            title="Tesla"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Long Short Term Memory (LSTM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using stock price data only</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock price prediction using stock price data and news
                    data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock price prediction using actual values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Stock price prediction using predicted values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>5. Stock price prediction using cross validation</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="dis"
            title="Disney"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Long Short Term Memory (LSTM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using stock price data only</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock price prediction using stock price data and news
                    data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock price prediction using actual values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Stock price prediction using predicted values</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>5. Stock price prediction using cross validation</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lstm5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Window Length: 60 </p>
                      <p>b. Train-Test split: 80/20</p>
                      <p>
                        c. 2 hidden layers, 2 dense layers, 2 activation layers
                      </p>
                      <p>d. Optimizer: Adam</p>
                      <p>e. Loss function: MSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
