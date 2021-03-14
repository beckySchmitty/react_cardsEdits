import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


const useAxios = (url) => {
const [cards, setCards] = useState([])

  const addCard = async () => {
    const resp = await axios.get(url);
    setCards(cards => [...cards, { ...resp.data, id: uuidv4() }]);
  };

  return [cards, addCard ];
};


// refactored for more general use
// function useAxios(url) {
//     const [responses, setResponses] = useState([]);
  
//     const addResponseData = async () => {
//       const resp = await axios.get(`${url}`);
//       setResponses(data => [...data,  { ...resp.data, id: uuidv4() }]);
//     };
    
//     return [responses, addResponseData];
// }

export default useAxios;