import React from "react";
import { Image } from "react-native";

const App = () => {
  return (
    <>
      <Image
        source={{
          uri: "https://reactjs.org/logo-og.png",
          method: "POST",
          headers: {
            Pragma: "no-cache",
          },
          body: "you body goes here",
        }}
      />

      {/* // include at least width and height! */}
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: "contain",
        }}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: "contain",
        }}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />
    </>
  );
};

export default App;
