import React from "react";
import "./App.css";
import Api from "./lib/Api";
import Routes from "./routes";
import HomeContext from "./lib/context/home/HomeContext";
function App() {
  const { actions } = React.useContext(HomeContext);
  React.useEffect(() => {
    Api.get("/transaction/e7804097-1234-43cc-9df2-9688200b12ad").then((res) => {
      console.log(res);
      if (res.data.isOk) {
        actions.setUser({ balance: res.data.total });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Routes />;
}

export default App;
