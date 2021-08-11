const state = {
  categories: [
    {
      id: 1,
      name: "Cat",
      imgSrc:
        "https://i.pinimg.com/originals/7d/1d/81/7d1d8104d1460bb020561f06a6522bad.png",
    },
    {
      id: 2,
      name: "Dog",
      imgSrc: "https://www.mcicon.com/wp-content/uploads/2021/06/Dog-37.jpg",
    },
    {
      id: 3,
      name: "Fish",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/1024px-Fish_icon_%28The_Noun_Project_27052%29.svg.png",
    },
    {
      id: 4,
      name: "Cow",
      imgSrc:
        "https://i.pinimg.com/736x/2b/1e/3b/2b1e3be0893520d45d64a14d520c0868.jpg",
    },
    {
      id: 5,
      name: "Lion",
      imgSrc:
        "https://cdn5.vectorstock.com/i/thumb-large/11/34/wild-lion-icon-logo-template-vector-23921134.jpg",
    },
  ],
};

const getters = {};

const mutations = {
  ADD_ITEMS(categories, payload) {
    console.log("wafreh");
    state.categories.push(payload);
  },
};

const actions = {
  AddItems({ commit }, payload) {
    commit("ADD_ITEMS", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
