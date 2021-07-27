import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    const { mangDatCuoc } = this.props;
    return (
      <div className="playerGame text-center">
        <div className="speech-bubble">
          <img
            src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
            alt={mangDatCuoc.hinhAnh}
          />
        </div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/player.png"
          alt="./img/player.png"
        />

        <div className="row">
          {mangDatCuoc.map((item, index) => {
            let bgColor = {};

            if (item.datCuoc) {
              bgColor = { backgroundColor: "#0011ff" };
            }

            return (
              <div className="col-4" key={index}>
                <button style={bgColor} className="btnItem">
                  <img src={item.hinhAnh} alt={item.hinhAnh} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.GameOanTuTiReducer.mangDatCuoc,
  };
};

export default connect(mapStateToProps)(Player);
