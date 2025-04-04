import React, { PropsWithChildren } from "react";
import "./RootLayoutContainer.css";

export const RootLayoutContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="vertical-container">
      <div className="horizontal-container">{children}</div>
    </div>
  );
};
