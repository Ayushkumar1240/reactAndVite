import { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = WAVES({
      el: vantaRef.current,
      THREE, // Required for Vanta.js
      color: 0x1e88e5,
      shininess: 50,
      waveHeight: 20,
      waveSpeed: 0.5,
      zoom: 1.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Clean up the effect on unmount
    };
  }, []);

  return <div ref={vantaRef} style={{ height: "100vh", width: "100%" }} />;
};

export default VantaBackground;
