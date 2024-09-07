"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceCard_1 = require("./ServiceCard");
var servicesData_1 = require("@/app/data/servicesData");
var CustomTitle_1 = require("./CustomTitle");
var ServicesSection = function () {
    return (react_1["default"].createElement("section", { id: "services" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(CustomTitle_1["default"], { title: "Services" }),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" }, servicesData_1.servicesData.map(function (service, index) { return (react_1["default"].createElement(ServiceCard_1["default"], { key: index, title: service.title, description: service.description })); })))));
};
exports["default"] = ServicesSection;
