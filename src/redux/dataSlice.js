import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listOurTeams: [
    {
      id: 1,
      name: "nguyễn thanh phong",
      gitHub: "#",
      faceBook: "https://www.facebook.com/bryannguyenvn",
      email: "bryannguyenvn@gmail.com",
      phone: "+84919984877",
      img: "phong.jpg",
      position: "CEO",
    },
    {
      id: 2,
      name: "trương bửu nhựt",
      gitHub: "https://github.com/buunhut",
      faceBook: "https://facebook.com/buunhut",
      email: "nhut.nta@gmail.com",
      phone: "+84909240886",
      img: "nhut.jpg",
      position: "web developer",
    },
    {
      id: 3,
      name: "nguyễn đức tấn",
      gitHub: "https://github.com/ductandev",
      faceBook: "https://facebook.com/nguyen.duc.tan998",
      email: "nguyenductan998@gmail.com",
      phone: "+84931238660",
      img: "tan.jpg",
      position: "web developer",
    },
    {
      id: 4,
      name: "phan tấn phú",
      gitHub: "https://github.com/tanphudev",
      faceBook: "https://faceboo.com/buunhut",
      email: "tanphu.dev@gmail.com",
      phone: "+84965462877",
      img: "phu.jpeg",
      position: "web developer",
    },
    {
      id: 5,
      name: "lâm diễm kiều",
      gitHub: "https://github.com/KieuLam0603",
      faceBook: "https://www.facebook.com/profile.php?id=100022299992969",
      email: "kieulam6396@gmail.com",
      phone: "+84969989937",
      img: "kieu.jpg",
      position: "web developer",
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateListOurTeam(state, action) {
      state.listProducts = action.payload;
    },
  },
});

export const { updateListOurTeam } = dataSlice.actions;
export default dataSlice.reducer;
