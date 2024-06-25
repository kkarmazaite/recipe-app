import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { DeviceOrientation } from "../types";

const isPortrait = () => {
  const screen = Dimensions.get("screen");
  return screen.height >= screen.width;
};

export function useOrientation(): DeviceOrientation {
  const [orientation, setOrientation] = useState<DeviceOrientation>(
    isPortrait() ? "PORTRAIT" : "LANDSCAPE"
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    const orientationChange = Dimensions.addEventListener("change", callback);
    return () => orientationChange.remove();
  }, []);

  return orientation;
}
