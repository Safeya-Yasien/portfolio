"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var ProjectCard = function (_a) {
    var title = _a.title, description = _a.description, image = _a.image, github_link = _a.github_link, live_demo = _a.live_demo;
    return (React.createElement("div", { className: "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" },
        React.createElement(link_1["default"], { href: github_link, target: "_blank" },
            React.createElement(image_1["default"], { src: image, alt: title, width: 1920, height: 1080, className: "rounded-t-lg" })),
        React.createElement("div", { className: "p-5" },
            React.createElement(link_1["default"], { href: live_demo, target: "_blank" },
                React.createElement("h5", { className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" }, title)),
            React.createElement("p", { className: "mb-3 font-normal text-gray-700 dark:text-gray-400" }, description),
            React.createElement(link_1["default"], { href: live_demo, target: "_blank", className: "flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-auto" },
                "Live Demo",
                React.createElement("svg", { className: "rtl:rotate-180 w-3.5 h-3.5 ms-2", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 14 10" },
                    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M1 5h12m0 0L9 1m4 4L9 9" }))))));
};
exports["default"] = ProjectCard;
