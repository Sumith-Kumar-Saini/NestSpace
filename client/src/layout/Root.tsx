import { ReactLenis } from "lenis/react";
import { Outlet } from "react-router";

const Root = () => {
  const lenisOptions = {
    lerp: 0.1, // Controls interpolation for smoothness
    duration: 1.5, // Defines how long a scroll should take
    smoothTouch: false, // Enable/disable smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Outlet />
    </ReactLenis>
  );
};

export default Root;
