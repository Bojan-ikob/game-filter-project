import React from "react";
import Game from "./Game";
import "../css/game-list.css";

const GameList = ({ cards, prikaziDiv }) => {
  return (
    <div className="div-padd">
      <div className="kos-div">
        <div className="kontra-kos-div">
          <div className="game-list">
            <div className={prikaziDiv ? "sokrij" : "prikazi"}>
              <div>
                <h1 className="ssss">
                  <span className="redSm">
                    <i className="fa fa-frown-o" aria-hidden="true"></i>
                  </span>
                  Нема такви игри
                </h1>
              </div>
            </div>
            {cards.map(el => (
              <Game
                id={el.id}
                key={el.id}
                image={el.image}
                title={el.title}
                category={el.category}
                timeFrame={el.timeFrame}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
