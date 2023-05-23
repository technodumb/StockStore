import React, { useState } from "react";
import "./SideNav.scss";

import { MdInventory, MdShoppingCart, MdHelp } from "react-icons/md";
import { FaFileInvoiceDollar, FaScroll } from "react-icons/fa";
import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";

export default function SideNav(props: { setLink: Function }) {
  const iconAttr = {
    color: "E1CC5B",
    size: "2.5rem",
  };

  const [open, setOpen] = useState(false);

  const handleMenuClick = (val: boolean) => {
    setOpen(val);
  };

  return (
    <div
      className={`SideNav ${+open ? "open" : ""}`}
      onMouseEnter={() => handleMenuClick(true)}
      onMouseLeave={() => handleMenuClick(false)}
    >
      <span className="MenuButton">
        <AiOutlineMenu color="white" size="2.5rem" className="MenuIcon" />
      </span>

      <span onClick={() => props.setLink("Top")}>
        <MdInventory {...iconAttr} />
        <i>Stocks of the Day</i>
      </span>
      <span onClick={() => props.setLink("Buy")}>
        <MdShoppingCart {...iconAttr} />

        <i>Buy Stocks</i>
      </span>
      <span onClick={() => props.setLink("Sell")}>
        <FaFileInvoiceDollar {...iconAttr} />
        <i>Sell Stocks</i>
      </span>
      <span onClick={() => props.setLink("Apply")}>
        <FaScroll {...iconAttr} />
        <i>Apply for Stock</i>
      </span>
      <span>
        <AiFillSetting {...iconAttr} />
        <i>Setting</i>
      </span>
      <span>
        <MdHelp {...iconAttr} />
        <i>Help</i>
      </span>
    </div>
  );
}
