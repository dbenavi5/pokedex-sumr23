import React, { useEffect } from "react";
import pokeballIcon from "../assets/pokeball-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
// import { useAppDispatch } from "../app/hooks";

function Navbar() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  const location = useLocation();
  // const dispatch = useAppDispatch();

  // create navbar link underline selection effect

  useEffect(() => {
    const index = navigationRoutes.findIndex(({ route }) =>
      location.pathname.includes(route)
    );

    ul(index);
  }, [location.pathname, navigationRoutes]);
  function ul(index: number) {
    const underlines = document.querySelectorAll<HTMLElement>(".underline");
    for (let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }
  return (
    <nav>
      <div className="block">
        <img src={pokeballIcon} alt="pokeball icon" className="" />
      </div>
      <div className="data">
        <ul>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          {navigationRoutes.map(({ name, route }, index) => {
            return (
              <Link to={route} key={index}>
                <li>{name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
