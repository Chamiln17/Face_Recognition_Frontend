import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        className="ma1"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <p
          className="f3 link dim black underline pa3 pointer  "
          onClick={() => onRouteChange("signin")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        className="ma1"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <div style={{ display: "flex", justifyContent: "space-between", direction:"row" }}>
          <p
            className="f3 link dim black underline pa3 pointer  "
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            className="f3 link dim black underline pa3 pointer  "
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};
export default Navigation;
