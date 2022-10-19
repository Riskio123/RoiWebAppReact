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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Esiti(props) {
  const th = [
    "STRUMENTO",
    "L'OPERAZIONE E' GIA' IN PROFITTO?",
    "VAR % DEL PREZZO RISPETTO A IERI",
    "VAR % DEL PREZZO RISPETTO AL LIVELLO DI INGRESSO",
    "ENTRARE A MERCATO?",
    "DIREZIONE PREVISTA SUL DAILY",
    "DIREZIONE PREVISTA SUL WEEKLY",
    "CONFERMA DI INGRESSO DAILY E WEEKLY",
    "CONCORDANZA DI DIREZIONE ANCHE CON Statistic Black Swan™️",
    "PROBABILITA' DI PROFITTO",
    "RITORNO MASSIMO SULL'INVESTIMENTO PREVISTO",
    "LIVELLO DI INGRESSO MEDIO",
    "LIVELLO DI INGRESSO INTRADAY",
    "LEVA MASSIMA DA UTILIZZARE",
    "LIVELLO DI INGRESSO ESTREMO",
    "LIVELLO DI USCITA",
    "MARGINE MEDIO",
    "MARGINE MASSIMO",
    "INDICAZIONE TEMPORALE DI CHIUSURA",
  ];

  const esiti = [
    [
      "GBPUSD",
      "",
      "0,58%",
      "0,34%",
      "SI",
      "SHORT",
      "SHORT",
      "-",
      "SHORT",
      "53,25%",
      "2638,47%",
      "1,1149",
      "1,1139",
      "500",
      "1,1159",
      "1,0990",
      "190%",
      "279%",
      "LASCIAR CORRERE",
    ],
    [
      "GBPUSD",
      "SI",
      "0,58%",
      "0,34%",
      "NO",
      "SHORT",
      "-",
      "LONG",
      "LONG",
      "53,25%",
      "2638,47%",
      "1,1149",
      "1,1139",
      "500",
      "1,1159",
      "1,0990",
      "190%",
      "279%",
      "CHIUDERE ENTRO LE 19",
    ],
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Esiti - Dashboard</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive bordered hover>
                  <thead className="text-primary">
                    <tr>
                      {th.map(header => (
                        <th className="align-bottom">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {esiti.map(esito => (
                      <tr>
                        {esito.map(e => {
                          if (e === "SHORT")
                            return (
                              <td className="text-center td-short"> {e}</td>
                            );
                          else if (e === "LONG")
                            return (
                              <td className="text-center td-long"> {e}</td>
                            );
                          return <td className="text-center">{e}</td>;
                        })}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Esiti;
