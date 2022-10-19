/** @format */

import React, { useReducer, useContext, useState, useEffect } from "react";
import useFetcher from "./useFetcher";

// import Fetcher from "./fetcher";

export const StateContext = React.createContext();

export default function EURUSD() {
  console.log("I am in EURUSD file");
  const dataD = useFetcher();
  // const [flag, setFlag] = useState(false);
  //   useFetcher();
  // return (
  //   <StateContext.Provider value={useReducer(reducer, initialState, undefined)}>
  //     <div style={{ height: "100%" }}>
  //       <div>EURUSD VALORE CORRENTE: {}</div>
  //       <div>Aggiornamento: </div>
  //       <UlcerIndex flag={flag} />
  //     </div>
  //   </StateContext.Provider>
  // );

  return dataD;
}

/** @format */
//ohlc
