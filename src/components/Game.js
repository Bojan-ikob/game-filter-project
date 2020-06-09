import React from "react";
import "../css/game.css";
import { Link } from "react-router-dom";

const Game = ({ image, title, category, timeFrame, id }) => {
  return (
    <div className="game">
      <Link to={`/el/${id}`}>
        <div className="one-game">
          <div className="game-img">
            <img src={image} alt="slika"></img>
          </div>
          <div className="fff">
            <div className="igra-k-opis">
              <h4>{title}</h4>
              <p>
                Категорија: <span className="kategorija">{category}</span>
              </p>
              <p className="bold-p">
                <span className="casovnik">
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
                Времетраење
              </p>
              <p> {timeFrame}</p>
            </div>
            <div className="icon">
              <img src={image} alt="slikaa"></img>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
