import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function Detail() {

  const { char_id } = useParams();
  const [char, setChar] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
    .then((res) => res.data)
    .then((data) => setChar(data[0]));
  }, [char_id])
  
  return (
    <div>
      {
        char && (
          <div>
            <h1>{char.name}</h1>
            <img src={char.img} alt="" style={{width: "50%"}} />
          </div>
        )
      
      }
    </div>
  )
}

export default Detail