"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceCard = function (_a) {
    var title = _a.title, description = _a.description;
    return (react_1["default"].createElement("div", { className: "block md:max-w-sm p-6 max-w-full border border-gray-200 bg-neutral-950 rounded-lg shadow bg-" },
        react_1["default"].createElement("h5", { className: "mb-6 text-2xl tracking-tight text-gray-900 dark:text-white" }, title),
        react_1["default"].createElement("p", { className: "font-normal text-gray-700 dark:text-gray-400" }, description)));
};
exports["default"] = ServiceCard;
