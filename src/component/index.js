import React, { Component } from "react";
import Player from "./Player";
import Bot from "./Bot";
import KetQuaTroChoi from "./KetQuaTroChoi";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button className="btn btn-success p-2 mt-3">Play game</button>
          </div>
          <div className="col-4">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}
