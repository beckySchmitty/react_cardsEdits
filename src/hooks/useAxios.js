import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const useAxios = (url) => {
const [response, addToReponse] = useState([])

// add updates for endURL
  const addData = async () => {
    const resp = await axios.get(`${url}${endURL}`);
    addToReponse(response => [...response, { ...resp.data, id: uuidv4() }]);
  };

  return [response, addData ];
};


export default useAxios;