import React from "react";
import "./Dashboard.scss";

import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import HoriScroller from "./HoriScroller/HoriScroller";
import Sell from "./SellStocks/SellStocks";
import Apply from "./Apply/Apply";

import { useState } from "react";
import BuyStocks from "./BuyStocks/BuyStocks";

export default function Dashboard() {
  const links: { [key: string]: JSX.Element } = {
    Top: <HoriScroller />,
    Buy: <BuyStocks />,
    Sell: <Sell />,
    Apply: <Apply />,
  };
  const [link, setLink] = useState("Top");
  return (
    <div className="Dashboard">
      <SideNav setLink={setLink} />
      <TopNav />
      {links[link]}
    </div>
  );
}
