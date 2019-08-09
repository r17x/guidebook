import React from "react";
import {SideDrawer} from 'atomize'

export default function SideDrawer({ isOpen, onClose, children }) {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose}>
      {children}
    </SideDrawer>
  );
}

SideDrawer.propTypes = {
    isOpen: bool,
    onClose: func,
}
