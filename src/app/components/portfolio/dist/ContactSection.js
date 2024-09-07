"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomTitle_1 = require("./CustomTitle");
var ContactSection = function () {
    return (react_1["default"].createElement("section", { id: "contact", className: "bg-white dark:bg-gray-900" },
        react_1["default"].createElement("div", { className: "container" },
            react_1["default"].createElement("div", { className: "px-4 mx-auto max-w-screen-md" },
                react_1["default"].createElement(CustomTitle_1["default"], { title: " Contact Us" }),
                react_1["default"].createElement("p", { className: "mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl" }, "Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."),
                react_1["default"].createElement("form", { action: "#", className: "space-y-8" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "email", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Your email"),
                        react_1["default"].createElement("input", { type: "email", id: "email", className: " focus-visible:outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:shadow-sm-light", placeholder: "name@flowbite.com" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("label", { htmlFor: "subject", className: " block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" }, "Subject"),
                        react_1["default"].createElement("input", { type: "text", id: "subject", className: "focus-visible:outline-none  block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   dark:shadow-sm-light", placeholder: "Let us know how we can help you" })),
                    react_1["default"].createElement("div", { className: "sm:col-span-2" },
                        react_1["default"].createElement("label", { htmlFor: "message", className: " block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400" }, "Your message"),
                        react_1["default"].createElement("textarea", { id: "message", rows: 6, className: "focus-visible:outline-none  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ", placeholder: "Leave a comment..." })),
                    react_1["default"].createElement("button", { type: "submit", className: "py-3 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-fit block mx-auto" }, "Send message"))))));
};
exports["default"] = ContactSection;