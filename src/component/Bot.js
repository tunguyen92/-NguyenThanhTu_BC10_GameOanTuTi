import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    let keyframes = `@keyframes spin${Date.now()} { 
      from { 
          transform: rotate(0deg); 
      } to { 
          transform: rotate(360deg); 
      }
  }`;
    return (
      <div className="playerGame text-center">
        <style>{keyframes}</style>
        <div className="speech-bubble">
          <img
            style={{
              transform: "rotateY(180deg)",
              animation: `spin${Date.now()} 0.25s`,
            }}
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
