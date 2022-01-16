import "../styles/Header.css";
import { ReactComponent as Asset1 } from "../Assests/Asset1.svg";
import { ReactComponent as Asset2 } from "../Assests/Asset2.svg";

const Header = () => {
  return (
    <>
      <header>
        <Asset1 id="asset1"/>
        <Asset2 id="asset2" />
      </header>
    </>
  );
};

export default Header;
