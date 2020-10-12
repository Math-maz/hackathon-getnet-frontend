import React from "react";
import HomeContext from "./HomeContext";
export default function HomeProvider(props) {
  const [targetStore, setTargetStore] = React.useState({});
  return (
    <HomeContext.Provider
      value={{ state: { targetStore }, actions: { setTargetStore } }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
