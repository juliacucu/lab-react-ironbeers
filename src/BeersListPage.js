import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
 
function BeersListPage() {
  const [beers, setBeers] = useState([]);
 
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] );  // <- [] means: Run the effect only once, after initial render
 
  
  return (
    <div>
      <h3>List of Beers</h3>
 
      {/*      ADD     */}
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.img} alt="apartment" />
          <h3>{beer.title}</h3>
          <p>Price: {beer.pricePerDay}</p>
        </div>
      ))}
      
    </div>
  );
}
 
export default BeersListPage;