// const home = document.querySelector("#home");
// home.addEventListener("click", (event) => {
//   console.log("Home menu item was clicked");
// });

// const about = document.querySelector("#about");
// about.addEventListener("click", (event) => {
//   console.log("About menu item was clicked");
// });

const menu = document.querySelector("#menu");
menu.addEventListener("click", (event) => {
  const target = event.target;

  switch (target.id) {
    case "home":
      console.log("Home Menu item was clicked");
      break;
    case "about":
      console.log("About menu item was clicked");
      break;
  }
});
