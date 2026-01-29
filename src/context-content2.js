import React, { useContext } from "react";
import { userContext } from "./context";

export default function Content2() {
  const { user, setUser } = useContext(userContext);

  const ContentStyle = {
    backgroundColor: "#ddd",
    textAlign: "center",
    margin: 10,
    padding: 10
  };

  const onClickSignIn = (event) => {
    event.preventDefault();
    setUser("Tom Jerry");
  };

  return (
    <div style={ContentStyle}>
      {user ? (
        <span>Hello {user}</span>
      ) : (
        <span>
          Please <a href="#" onClick={onClickSignIn}>Sign in</a>
        </span>
      )}
    </div>
  );
}
