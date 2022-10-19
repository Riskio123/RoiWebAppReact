/**
 * /*!
 *
 * =========================================================
 * Black Dashboard React v1.2.1
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/black-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)
 *
 * Coded by Creative Tim
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

import React from "react";
import { Link } from "react-router-dom";
import routes from "./Strumenti-Dasboards/strumentiRoutes";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

function Strumenti() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">100 Awesome Nucleo Icons</h5>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {routes.map((prop, key) => {
                    console.log(prop);
                    if (prop.redirect) return null;
                    return (
                      <Col
                        className="font-icon-list col-xs-6 col-xs-6"
                        lg="2"
                        md="3"
                        sm="4"
                        key={key}
                      >
                        <Link to={prop.layout + prop.path}>
                          <div className="font-icon-detail">
                            <p>{prop.name}</p>
                          </div>
                        </Link>
                      </Col>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Strumenti;
