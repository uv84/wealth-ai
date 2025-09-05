import React from "react";

const MainLayout = ({ children }) => {
  return <div className="container mx-auto my-32 bg-background">{children}</div>;
};

export default MainLayout;
