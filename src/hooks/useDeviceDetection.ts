"use client";

import { useEffect, useState } from "react";

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || '';
    const mobile = /Mobi|Tablet/i.test(userAgent);
    setIsMobile(mobile);
  }, []);

  return isMobile;
};

export default useDeviceDetection;