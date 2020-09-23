import React from "react";
import  { Container, Row, Col }  from "reactstrap";
import './team.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {
  return (
    <Container className="mt-5 mb-5" id="team">
      <Row className="justify-content-center">
        <Col className="col-md-7 text-center">
          <h1 className="mb-3">Experienced & Professional Team</h1>
          <h6 className="subtitle mb-5">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
        </Col>
      </Row>
      <Row>
        <Col className="col-lg-3">
          <Row>
            <Col className="col-md-12">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
            </Col>
            <Col className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-3">
          <Row>
            <Col className="col-md-12">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
            </Col>
            <Col className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-3">
          <Row>
            <Col className="col-md-12">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
            </Col>
            <Col className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-3">
          <Row>
            <Col className="col-md-12">
              <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg" alt="wrapkit" className="img-fluid rounded-circle" />
            </Col>
            <Col className="col-md-12 text-center">
              <div className="pt-2">
                <h5 className="mt-4 font-weight-medium mb-0">Michael Doe</h5>
                <h6 className="subtitle mb-3">Property Specialist</h6>
                <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'facebook']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                  <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
