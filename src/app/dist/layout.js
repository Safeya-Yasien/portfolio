"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.scss");
var Navbar_1 = require("./components/common/Navbar");
var Footer_1 = require("./components/common/Footer");
exports.metadata = {
    title: "Safeya Yasien",
    description: "Safeya Yasien Portfolio, Frontend Developer"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: "min-h-screen overflow-x-hidden bg-neutral-900" },
            React.createElement(Navbar_1["default"], null),
            children,
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
