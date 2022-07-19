import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

 
function BeersListPage() {
  const [beers, setBeers] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] );
  
  return (
    <div>
      <Header/>
      <h3>List of Beers</h3>
      {beers.map((beer) => (
        <Link to={`/beers/${beer._id}`}>
        <div key={beer._id} className="card">
          <img src={beer.image_url} />
          <h4>{beer.name}</h4>
          <h5>{beer.tagline}</h5>
          <p><b>Created by:</b> {beer.contributed_by}</p>
        </div>
        </Link>
      ))}
      
    </div>
  );
}
 
export default BeersListPage;