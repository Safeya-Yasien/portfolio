"use strict";
exports.__esModule = true;
exports.cairo = void 0;
var google_1 = require("next/font/google");
var cairo_init = google_1.Cairo({
    subsets: ['latin'],
    weight: ['200', '300', '500', '600'],
    variable: '--font-cairo'
});
exports.cairo = cairo_init.variable;
