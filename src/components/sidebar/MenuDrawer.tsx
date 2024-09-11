"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer(newOpen: boolean) {
    setIsOpen(newOpen);
  }

  return (
    <div>
      <button onClick={() => toggleDrawer(true)}>Click me</button>
      <Drawer
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 1 / 2,
          },
        }}
      >
        <ul className="h-full" onClick={() => toggleDrawer(false)}>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
      </Drawer>
    </div>
  );
}
