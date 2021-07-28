import React, { Component } from "react";
import Player from "./Player";
import Bot from "./Bot";
import KetQuaTroChoi from "./KetQuaTroChoi";
import "./style.css";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              onClick={() => {
                this.props.bot();
              }}
              className="btn btn-success p-2 mt-3"
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bot: () => {
      let count = 0;

      let randomItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          clearInterval(randomItem);
          dispatch({
            type: "ENDGAME",
          });
        }
      }, 200);
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
