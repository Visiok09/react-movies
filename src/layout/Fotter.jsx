import React from "react";

const Fotter = () => {
  return (
    <footer className="page-footer #ff9800 orange">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;
