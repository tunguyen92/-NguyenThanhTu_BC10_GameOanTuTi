import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    return (
      <div className="playerGame text-center">
        <div className="speech-bubble">
          <img
            style={{ transform: "rotateY(180deg)" }}
            src={this.props.bot.hinhAnh}
            alt={this.props.bot.hinhAnh}
          />
        </div>
        <img
          style={{ width: 200, height: 200 }}
          src="./img/bot.png"
          alt="./img/bot.png"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bot: state.GameOanTuTiReducer.bot,
  };
};

export default connect(mapStateToProps)(Bot);
