import React from "react";

function Footer() {


  const year = new Date().getFullYear();

  return (
    <div className="footer">
      © {year} Copyright To Do List.
    </div>
  );
}

export default Footer;