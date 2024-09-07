"use strict";
exports.__esModule = true;
var programming_skills_1 = require("@/app/constants/programming-skills");
var image_1 = require("next/image");
var react_1 = require("react");
var HeroSection = function () {
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "container " },
            react_1["default"].createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement(image_1["default"], { src: "/hero.jpg", alt: "safeya yasien", height: 520, width: 520, className: "border rounded w-full md:w-full" })),
                react_1["default"].createElement("div", { className: "flex flex-col space-y-6 " },
                    react_1["default"].createElement("h1", { className: "text-white text-3xl font-bold uppercase tracking-wider" }, "Safeya Yasien"),
                    react_1["default"].createElement("p", { className: "text-slate-400 leading-8 text-base " }, "As a front-end developer, I have learned React, Redux Toolkit, Bootstrap, SASS, and TypeScript. I have built several projects using these technologies, focusing on responsive design and clean code practices. Currently, I'm applying my skills in e-commerce and e-learning platforms to enhance my development expertise. Additionally, I am expanding my knowledge with Cypress for end-to-end testing, which helps in automating browser interactions to ensure that web applications work as intended"),
                    react_1["default"].createElement("h3", { className: "text-center text-white text-xl " }, "Programming Skills"),
                    react_1["default"].createElement("div", { className: "my-skills flex text-white text-base flex-wrap" },
                        react_1["default"].createElement("ul", { className: "languages flex flex-wrap" }, programming_skills_1.programmingSkills.map(function (skill, index) { return (react_1["default"].createElement("li", { key: index, className: "p-4" }, skill)); }))))))));
};
exports["default"] = HeroSection;
