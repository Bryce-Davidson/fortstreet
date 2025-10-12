"use client";

import React, { useState } from "react";
import HeaderBar from "./HeaderBar";
import MenuBar from "./MenuBar";

const NavigationWrapper: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderBar
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={handleMobileMenuToggle}
      />
      <MenuBar
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuClose={handleMobileMenuClose}
      />
    </>
  );
};

export default NavigationWrapper;
