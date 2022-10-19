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

import { PlayerComponent } from "components/ReactPlayer/PlayerComponent";
import React, { useState } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, CardTitle } from "reactstrap";

function Videocorsi() {
  const [topic, setTopic] = useState("Introduzione a ROIBOOSTER™");
  const [video, setVideo] = useState("Benvenuto in ROIBOOSTER™");
  const [linkToView, setLinkToView] = useState([]);

  const linkRoibooster = {
    "Introduzione a ROIBOOSTER™": {
      "Benvenuto in ROIBOOSTER™": "https://player.vimeo.com/video/666861770",
      "Ti parlo di me": "https://player.vimeo.com/video/666861770",
      "Perché funziona ROIBOOSTER™": "https://player.vimeo.com/video/666861770",
      "ROIBOOSTER™ in 15 minuti": "https://player.vimeo.com/video/666861770",
    },
    "Introduzione al Trading": {},
    "Piattaforma MT4": {},
    "Mindset e psicologia": {},
    "Money Management": {},
    "Come leggere i files ROIBOOSTER™": {},
    "Consigli sull'operatività": {},
    "EA ROIBOOSTER™": {},
  };

  const handleClick = argomenti => {
    console.log(argomenti.target.innerHTML);
    setTopic(argomenti.target.innerHTML);
    setLinkToView([]);
    Object.entries(linkRoibooster).map(e => {
      if (e[0] === argomenti.target.innerHTML) {
        Object.entries(e[1]).map((x, i) => {
          setLinkToView(state => [...state, x[1]]);
          return;
        });
      }
    });
    console.log(linkToView);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Videocorsi</CardTitle>
              </CardHeader>
              <CardBody>
                <Row style={{ height: 100 }}>
                  <Col lg="12" md="12" style={{}}>
                    <p style={{ color: "black" }}>
                      SEZIONE RISERVATA AL PUNTEGGIO DELL'UTENTE
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    <UncontrolledDropdown>
                      <DropdownToggle caret data-toggle="dropdown">
                        VIDEOCORSO ROIBOOSTER
                      </DropdownToggle>

                      <DropdownMenu id="myList">
                        {Object.keys(linkRoibooster).map((argomenti, i) => {
                          return (
                            <DropdownItem
                              onClick={handleClick}
                              key={argomenti + i}
                            >
                              {argomenti}
                            </DropdownItem>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col lg="4">
                    <p
                      style={{
                        marginTop: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {topic}
                    </p>
                  </Col>
                </Row>

                <Row>
                  {linkToView.map((l, i) => (
                    <Col lg="6" md="12" style={{ marginTop: 100 }} key={l + i}>
                      <PlayerComponent url={l} />
                    </Col>
                  ))}
                </Row>
                <Row></Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Videocorsi;

{
  /* const linkRoibooster = {
    "Introduzione a ROIBOOSTER™": {
      "Benvenuto in ROIBOOSTER™": "https://player.vimeo.com/video/666861770",
      "Ti parlo di me": "https://player.vimeo.com/video/666861770",
      "Perché funziona ROIBOOSTER™": "https://player.vimeo.com/video/666861770",
      "ROIBOOSTER™ in 15 minuti": "https://player.vimeo.com/video/666861770",
    },
    "Introduzione al Trading": {},
    "Piattaforma MT4": {},
    "Mindset e psicologia": {},
    "Money Management": {},
    "Come leggere i files ROIBOOSTER™": {},
    "Consigli sull'operatività": {},
    "EA ROIBOOSTER™": {},
  }; */
}
