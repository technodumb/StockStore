import "./TopBar.scss";
import logo from "../../../assets/logo.png";

export default function TopBar() {
  return (
    <div className="TopBar">
      {/* <div className="background" /> */}
      <div className="icon">
        <img src={logo} alt="icon" />
      </div>
      <div className="actionButtons">
        {/* Other buttons */}
        <ActionButton text="About us" />
        <ActionButton text="Features" />
        <ActionButton text="Traders" />
        <ActionButton text="Featured Stocks" />
        <ActionButton text="Contact Us" />
        <ActionButton text="Login/Signup" bold={true} />
      </div>
    </div>
  );
}

function ActionButton(props: {
  text: string;
  onClick?: () => void;
  bold?: boolean;
}) {
  return (
    <div className={"actionButton" + (props.bold == true ? " bold" : "")}>
      {props.text}
    </div>
  );
}
