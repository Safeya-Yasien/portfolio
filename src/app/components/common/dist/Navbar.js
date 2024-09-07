"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var navLinks_1 = require("@/app/constants/navLinks");
var Navbar = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () {
        setIsOpen(!isOpen);
    };
    //   - active links
    // if there is any enhancements
    return (react_1["default"].createElement("header", { className: "fixed  text-white w-full bg-neutral-950 " },
        react_1["default"].createElement("nav", { className: "  " },
            react_1["default"].createElement("div", { className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" },
                react_1["default"].createElement(link_1["default"], { href: "/", className: "flex items-center space-x-3 rtl:space-x-reverse" },
                    react_1["default"].createElement("span", { className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white" }, "Safeya Yasien")),
                react_1["default"].createElement("button", { "data-collapse-toggle": "navbar-default", type: "button", className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "navbar-default", "aria-expanded": "false", onClick: toggleMenu },
                    react_1["default"].createElement("span", { className: "sr-only" }, "Open main menu"),
                    react_1["default"].createElement("svg", { className: "w-5 h-5", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 17 14" },
                        react_1["default"].createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M1 1h15M1 7h15M1 13h15" }))),
                react_1["default"].createElement("div", { className: "w-full md:block md:w-auto " + (isOpen ? "" : "hidden"), id: "navbar-default" },
                    react_1["default"].createElement("ul", { className: "font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 transition-all" }, navLinks_1.navLinks.map(function (link, index) { return (react_1["default"].createElement("li", { key: index },
                        react_1["default"].createElement(link_1["default"], { href: "#" + link.path, className: "block py-2 px-3 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:dark:text-blue-500 transition-all", "aria-current": "page" }, link.name))); })))))));
};
exports["default"] = Navbar;
