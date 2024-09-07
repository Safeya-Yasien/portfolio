"use strict";
exports.__esModule = true;
var ContactSection_1 = require("./components/portfolio/ContactSection");
var HeroSection_1 = require("./components/portfolio/HeroSection");
var ProjectsSection_1 = require("./components/portfolio/ProjectsSection");
var ServicesSection_1 = require("./components/portfolio/ServicesSection");
function Home() {
    return (React.createElement("div", { className: "wrapper pt-28" },
        React.createElement(HeroSection_1["default"], null),
        React.createElement(ServicesSection_1["default"], null),
        React.createElement(ProjectsSection_1["default"], null),
        React.createElement(ContactSection_1["default"], null)));
}
exports["default"] = Home;
