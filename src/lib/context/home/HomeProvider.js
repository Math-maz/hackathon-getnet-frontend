import React from "react";
import HomeContext from "./HomeContext";
export default function HomeProvider(props) {
  const [targetStore, setTargetStore] = React.useState({});
  const [user, setUser] = React.useState({});
  return (
    <HomeContext.Provider
      value={{
        state: { targetStore, user },
        actions: { setTargetStore, setUser },
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
