import * as actionTypes from "./actionTypes";
import axios from "axios";

// const myUrl = 'http://68.183.27.146:4000/api/platos';
const myUrl = "http://68.183.27.146:4000/api/insumos";

export const getSupply = supplies => {
  
  return {
    type: actionTypes.GET_SUPPLIES,
    supplies: supplies
  };
};

export const deleteSupplies = supplies => {
  return {
    type: actionTypes.DELETE_SUPPLIES,
    supplies: supplies
  };
};

export const getSupplies = () => {
  // let spanishData = [];
  return dispatch => {
    axios
      .get(myUrl, {
        headers: { "Access-Control-Allow-Origin": "*" },
        responseType: "json"
      })
      .then(response => {


        // spanishData = [...response.data];
        // let filData = spanishData.filter(el => el.idioma !== "english");
        dispatch(getSupply(response.data));
      })
      .catch(error => {
        console.log(error); //dispatch error
      });
  };
};
