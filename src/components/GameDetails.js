import React, { Component, Fragment } from "react";
import axios from "axios";
import "../css/game-details.css";
import Voved from "./Voved";
// import Steps from "./Steps";
class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDetail: { steps: [] },
    };
  }
  componentDidMount() {
    axios("https://brainsterboxapi.herokuapp.com/games").then((data) => {
      this.setState({
        gameDetail: data.data.find(
          (el) => el.id === this.props.match.params.id
        ),
      });
      window.scrollTo(0, 0);
    });
  }

  render() {
    return (
      <Fragment>
        <div className="full-details">
          <div className="slika-centar">
            <img src={this.state.gameDetail.image} alt="slika"></img>
          </div>
          <div className="div-padd">
            <div className="kos-div">
              <div className="kontra-kos-div">
                <div className="game-details">
                  <h1>{this.state.gameDetail.title}</h1>
                  <div className="gray-div">
                    <div className="in-g-d">
                      <div className="f-a">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="bold-p">Time Frame</p>
                        <p className="gray-p">
                          {this.state.gameDetail.timeFrame}
                        </p>
                      </div>
                    </div>
                    <div className="in-g-d">
                      <div className="f-a">
                        <i className="fa fa-users" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="bold-p">Group Size</p>
                        <p className="gray-p">
                          {this.state.gameDetail.groupSize}
                        </p>
                      </div>
                    </div>
                    <div className="in-g-d">
                      <div className="f-a">
                        <i className="fa fa-university" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="bold-p">Facilition Level</p>
                        <p className="gray-p">{this.state.gameDetail.level}</p>
                      </div>
                    </div>
                    <div className="in-g-d">
                      <div className="f-a">
                        <i className="fa fa-align-right" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="bold-p">Confort Zone</p>
                        <p className="gray-p">
                          {this.state.gameDetail.timeFrame}
                        </p>
                      </div>
                    </div>
                    <div className="in-g-d">
                      <div className="f-a">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                      </div>
                      <div>
                        <p className="bold-p">Materials</p>
                        <p className="gray-p">
                          {this.state.gameDetail.materials}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="description-div">
                    <p>{this.state.gameDetail.description}</p>
                  </div>
                  <hr></hr>
                  {this.state.gameDetail.steps.map((el) => (
                    <div className="cekori-div">
                      <h4> {el.step} </h4> <p> {el.stepDescription} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Voved />
      </Fragment>
    );
  }
}

export default GameDetails;
