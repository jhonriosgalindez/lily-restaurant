import React from "react";

const [changeColorNavbar, setChangeColorNavbar] = React.useState(false)

function onScroll() {
  if (window.scrollY >= 90) {
    setChangeColorNavbar(true)
  } else {
    setChangeColorNavbar(false)
  }
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}