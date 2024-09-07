"use strict";
exports.__esModule = true;
var programming_skills_1 = require("@/app/constants/programming-skills");
var image_1 = require("next/image");
var HeroSection = function () {
    return (React.createElement("section", { id: "about" },
        React.createElement("div", { className: "container " },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" },
                React.createElement("div", { className: "flex items-center justify-center" },
                    React.createElement(image_1["default"], { src: "/hero.jpg", alt: "Safeya Yasien, Front-end Developer", height: 250, width: 250, className: "border rounded  hidden lg:block " })),
                React.createElement("div", { className: "flex flex-col space-y-6 " },
                    React.createElement("h1", { className: "text-white text-3xl font-bold uppercase tracking-wider" }, "Safeya Yasien"),
                    React.createElement("p", { className: "text-slate-400 leading-8 text-base " }, "As a front-end developer, I have learned React, Redux Toolkit, Bootstrap, SASS, and TypeScript. I have built several projects using these technologies, focusing on responsive design and clean code practices. Currently, I'm applying my skills in e-commerce and e-learning platforms to enhance my development expertise. Additionally, I am expanding my knowledge with Cypress for end-to-end testing, which helps in automating browser interactions to ensure that web applications work as intended"),
                    React.createElement("h3", { className: "text-center text-white text-xl " }, "Programming Skills"),
                    React.createElement("div", { className: "my-skills flex text-white text-base flex-wrap" },
                        React.createElement("ul", { className: "languages flex flex-wrap" }, programming_skills_1.programmingSkills.map(function (skill, index) { return (React.createElement("li", { key: index, className: "p-4" }, skill)); }))))))));
};
exports["default"] = HeroSection;
