import CSSTransitionGroup from "react-addons-css-transition-group";
import "./Header.css";
const Header = () => (
  <CSSTransitionGroup
    transitionName="frade"
    transitionAppear
    transitionAppearTimeout={500}
  >
    <h1>Hello React Form</h1>
  </CSSTransitionGroup>
);

export default Header;
