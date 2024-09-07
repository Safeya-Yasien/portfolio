"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var CustomTitle_1 = require("./CustomTitle");
var projectsData_1 = require("@/app/data/projectsData");
var ProjectCard_1 = require("./ProjectCard");
var ProjectsSection = function () {
    return (react_1["default"].createElement("section", { id: "projects" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement(CustomTitle_1["default"], { title: "Projects" }),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" }, projectsData_1.projectsData.map(function (project) { return (react_1["default"].createElement(ProjectCard_1["default"], __assign({ key: project.id }, project))); })))));
};
exports["default"] = ProjectsSection;
