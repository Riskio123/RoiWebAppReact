/** @format */

/** @format */
import moment from "moment/moment";
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useRef,
} from "react";
import { readString } from "react-papaparse";
import csvFileD from "./eurusd-1d.csv";
import csvFileW from "./eurusd-1w.csv";

import axios from "axios";

export default function useFetcher() {
  const dataD = useRef([]);
  const dataDold = useRef([]);
  // const [valoreCorrente, setValoreCorrente] = useState(0);

  //LETTURA PER DATI DAL 01/01/2001 (ANCHE PRIMA) FINO AL 2009
  useEffect(() => {
    async function fetchData() {
      const papaConfigD = {
        complete: (results, file) => {
          // console.log("Parsing complete D:", results.data, file);
          dataDold.current = results.data;
        },
        download: true,
        error: (error, file) => {
          console.log("Error while parsing:", error, file);
        },
      };
      readString(csvFileD, papaConfigD);
      //FETCH DATI DAL 01/08/2003 FINO A OGGI

      const res = await axios.get(
        `https://api.investing.com/api/financialdata/1/historical/chart?period=MAX&interval=P1D&pointscount=120`
      );

      const json = res.data.data;

      for (let v in json) {
        json[v][0] = moment(json[v][0]).format("DD/MM/YYYY");
      }
      dataD.current = json;

      const dataFiltered_2001_2005 = dataDold.current
        .filter(e => {
          let dateSplit = e[0].split("/");
          var dateFixed =
            dateSplit[1] + "-" + dateSplit[0] + "-" + dateSplit[2];
          return (
            moment(dateFixed).year() > 2000 && moment(dateFixed).year() < 2005
          );
        })
        .map(e => [
          e[0],
          parseFloat(e[2]),
          parseFloat(e[3]),
          parseFloat(e[4]),
          parseFloat(e[5]),
          parseFloat(e[6]),
        ]);

      const dataFiltered_2005_today = dataD.current.filter(e => {
        let dateSplit = e[0].split("/");
        var dateFixed = dateSplit[1] + "-" + dateSplit[0] + "-" + dateSplit[2];
        return moment(dateFixed).year() > 2004;
      });

      const dataFull = dataFiltered_2001_2005.concat(dataFiltered_2005_today);
      const dataFixed = dataFull.map(e => [e[0], e[1], e[2], e[3], e[4]]);
      console.log(dataFixed);
      dataD.current = dataFixed;
    }

    fetchData();
  }, []);

  return dataD.current;
}

//  //x45D8KoDOvoS8RBkYqnub38vxMnUwTUFPDRT
// fetch();

//set Date
// useEffect(() => {
//   const request = async () => {
//     const response = await fetch(
//       "https://currencyapi.net/api/v1/convert?key=x45D8KoDOvoS8RBkYqnub38vxMnUwTUFPDRT&amount=1&from=EUR&to=USD&output=JSON"
//     );
//     const json = await response.json();
//     console.log(json);
//     setValoreCorrente(json.conversion.result);
//     var timestamp = json.updated * 1000;
//     const date = moment(new Date(timestamp)).format("LLLL");
//     setDataOra(date);
//   };
//   request();
//   const intervalId = setInterval(() => {
//     request();
//   }, 1000 * 60 * 5); // in milliseconds
//   return () => clearInterval(intervalId);
// }, []);

// const papaConfigW = {
//   complete: (results, file) => {
//     // console.log("Parsing complete:", results, file);
//     setDataW(results);
//   },
//   download: true,
//   error: (error, file) => {
//     console.log("Error while parsing:", error, file);
//   },
// };
// readString(csvFileD, papaConfigD);
// readString(csvFileW, papaConfigW);
