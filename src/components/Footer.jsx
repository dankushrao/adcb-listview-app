import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-center p-4">
      © {new Date().getFullYear()} My Website. All rights reserved.
    </footer>
  );
}
