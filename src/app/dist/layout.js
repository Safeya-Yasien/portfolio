"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.scss");
var common_1 = require("./components/common");
exports.metadata = {
    title: "Safeya Yasien",
    description: "Safeya Yasien Portfolio, Frontend Developer"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: "min-h-screen overflow-x-hidden bg-neutral-900" },
            React.createElement(common_1.Navbar, null),
            children,
            React.createElement(common_1.Footer, null))));
}
exports["default"] = RootLayout;
