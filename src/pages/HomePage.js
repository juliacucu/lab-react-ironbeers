import React from 'react'
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png'
import randombeer from '../assets/random-beer.png'
import newbeer from '../assets/new-beer.png'

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <Link to={'/beers'}>
            <div>
                <img src={beers}></img>
                <h1>All Beers</h1>
            </div>
        </Link>
        <Link to={'/random-beer'}>
            <div>
                <img src={randombeer}></img>
                <h1>Random Beer</h1>
            </div>
        </Link>
        <Link to={'/new-beer'}>
            <div>
                <img src={newbeer}></img>
                <h1>New Beer</h1>
            </div>
        </Link>
    </div>
  )
}

export default HomePage