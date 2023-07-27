import React from "react";
import { Link } from "react-router-dom";

export default function ListItems({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} />
        </span>

        <span className="home-crypto-name">{coin.name}</span>
        {coin.priceUsd && (
          <>
            <span className="home-crypto-price">
              <span className="home-crypto-usd">${coin.priceUsd}</span>
            </span>
          </>
        )}
      </Link>
    </div>
  );
}
