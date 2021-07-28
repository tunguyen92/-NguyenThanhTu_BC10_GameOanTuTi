const stateDefault = {
  mangDatCuoc: [
    { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
    { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
  ],
  ketQua: "I'm Ironman, I love you 3000!!!",
  soLanThang: 0,
  tongLanChoi: 0,
  bot: { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
};

const GameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CUOC": {
      // console.log(action);

      //Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.payload) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      //Tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó
      // let index = mangCuocUpdate.findIndex(
      //   (item) => item.ma === action.payload
      // );
      // if (index !== -1) {
      //   mangCuocUpdate[index].datCuoc = true;

      // }
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RANDOM": {
      let randomNumber = Math.floor(Math.random() * 3);
      let lanCuocNgauNhien = state.mangDatCuoc[randomNumber];

      state.bot = lanCuocNgauNhien;

      return { ...state };
    }

    case "ENDGAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let bot = state.bot;

      switch (player.ma) {
        case "bao":
          if (bot.ma === "keo") {
            state.ketQua = "Bạn thua";
          } else if (bot.ma === "bua") {
            state.ketQua = "I'm Ironman, I love you 3000!!!";
            state.soLanThang += 1;
          } else {
            state.ketQua = "Hòa!";
          }
          break;

        case "bua":
          if (bot.ma === "keo") {
            state.ketQua = "I'm Ironman, I love you 3000!!!";
            state.soLanThang += 1;
          } else if (bot.ma === "bua") {
            state.ketQua = "Hòa!";
          } else {
            state.ketQua = "Bạn thua";
          }
          break;

        case "keo":
          if (bot.ma === "keo") {
            state.ketQua = "Hòa";
          } else if (bot.ma === "bua") {
            state.ketQua = "Bạn thua";
          } else {
            state.ketQua = "I'm Ironman, I love you 3000!!!";
            state.soLanThang += 1;
          }
          break;

        default:
          state.ketQua = "I'm Ironman, I love you 3000!!!";
          state.soLanThang += 1;
      }
      state.tongLanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default GameOanTuTiReducer;
