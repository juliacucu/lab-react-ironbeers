import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const BeerDetailPage = () => {
  const [beer, setBeer] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      });
  }, []);

  return (
    <div key={beer._id} className="card">
      <img src={beer.image_url} />
      <h4>{beer.name}</h4>
      <h5>{beer.tagline}</h5>
      <p>
        <b>{beer.first_brewed}</b>
      </p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>
        <b>Created by:</b> {beer.contributed_by}
      </p>
    </div>
  );
};

export default BeerDetailPage;
