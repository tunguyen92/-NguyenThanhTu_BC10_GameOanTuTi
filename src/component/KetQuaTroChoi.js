import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    const { ketQua, soLanThang, tongLanChoi } = this.props;
    return (
      <div>
        <div className="text text-warning">{ketQua}</div>
        <div className="text text-success">
          Số lần thắng: <span className="text-warning">{soLanThang}</span>
        </div>
        <div className="text text-success">
          Tổng số lần chơi: <span className="text-warning">{tongLanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.GameOanTuTiReducer.ketQua,
    soLanThang: state.GameOanTuTiReducer.soLanThang,
    tongLanChoi: state.GameOanTuTiReducer.tongLanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
