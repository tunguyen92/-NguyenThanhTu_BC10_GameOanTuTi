const stateDefault = {
  mangDatCuoc: [
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
  ],
  ketQua: "I'm Ironman, I love you 3000!!!",
  soLanThang: 0,
  tongLanChoi: 0,
  bot: { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
};

const GameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default GameOanTuTiReducer;
