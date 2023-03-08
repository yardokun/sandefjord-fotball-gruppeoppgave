const playerPicture = document.querySelector(".player-picture");
playerPicture.innerHTML = `<img src =
  "http://api.lorem.space/image/face?w=300&h=300">`;

const players = [
  { name: "Hugo Oliver Keto", image: "", playerNumber: "1", gender:"male" },

  { name: "Ian Smeulders", image: "", playerNumber: "4", gender:"female" },

  { name: "Sander Moen Foss", image: "", playerNumber: "17", gender:"female" },

  { name: "Jesper Taaje", image: "", playerNumber: "15", gender:"male" },

  { name: "Sander Risan Mørk", image: "", playerNumber: "6", gender:"male" },

  { name: "Youssef Chaib", image: "", playerNumber: "11", gender:"male" },
];
