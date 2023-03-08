const playerPicture = document.querySelector(".player-picture");
playerPicture.innerHTML = `<img src =
  "https://api.lorem.space/image/face?w=150&h=150">`;

const players = [
  { name: "Hugo Oliver Keto", image: "", playerNumber: "1", gender:"male" },

  { name: "Ian Smeulders", image: "", playerNumber: "4", gender:"female" },

  { name: "Sander Moen Foss", image: "", playerNumber: "17", gender:"female" },

  { name: "Jesper Taaje", image: "", playerNumber: "15", gender:"male" },

  { name: "Sander Risan Mørk", image: "", playerNumber: "6", gender:"male" },

  { name: "Youssef Chaib", image: "", playerNumber: "11", gender:"male" },
];
