"use client";

import { Drawer } from "@mui/material";
import { useState } from "react";

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setIsOpen(newOpen);
  }
  return (
    <div>
      <button onClick={() => toggleDrawer(true)}>Cart</button>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 1 / 2,
          },
        }}
      >
        <ul className="h-full" onClick={() => toggleDrawer(false)}>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
          <li>Item5</li>
          <li>Item6</li>
          <li>Item7</li>
        </ul>
      </Drawer>
    </div>
  );
}
