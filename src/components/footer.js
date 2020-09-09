import React from "react";
import "./footer.css";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img src={require("../images/logo-footer.svg")} />
          <a href="http://google.com"></a>
        </div>

        <div className="copyright">Copyright &copy; 2020 Venus Inc</div>
      </div>
    </div>
  );
}

export default AppFooter;
