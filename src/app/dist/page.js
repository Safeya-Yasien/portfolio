"use strict";
exports.__esModule = true;
var portfolio_1 = require("./components/portfolio");
function Home() {
    return (React.createElement("div", { className: "wrapper pt-28" },
        React.createElement(portfolio_1.HeroSection, null),
        React.createElement(portfolio_1.ServicesSection, null),
        React.createElement(portfolio_1.ProjectsSection, null),
        React.createElement(portfolio_1.ContactSection, null)));
}
exports["default"] = Home;
