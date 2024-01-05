import React, { useEffect } from "react";

export default function Scroll() {

  const [changeColorNavbar, setChangeColorNavbar] = React.useState(false)
  
  useEffect(function mount() {
    function onScroll() {
      if (window.scrollY >= 90) {
        setChangeColorNavbar(true)
      } else {
        setChangeColorNavbar(false)
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return null;
}