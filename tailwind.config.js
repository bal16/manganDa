import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["SF UI Display", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "ecru-white": {
                    50: "#f8f7f2",
                    100: "#efeddf",
                    200: "#d7d2b0",
                    300: "#c3ba86",
                    400: "#b5a66a",
                    500: "#a89058",
                    600: "#94774b",
                    700: "#7c5f41",
                    800: "#674d39",
                    900: "#564131",
                    950: "#2f2319",
                },
                marshland: {
                    50: "#f7f7f6",
                    100: "#e5e5e2",
                    200: "#cacbc4",
                    300: "#a7a99f",
                    400: "#84877a",
                    500: "#696c60",
                    600: "#52554c",
                    700: "#44463f",
                    800: "#383a35",
                    900: "#32332e",
                    950: "#191a17",
                },
                "green-yellow": {
                    50: "#f6ffe4",
                    100: "#ebffc4",
                    200: "#d7ff91",
                    300: "#b9ff51",
                    400: "#a8fe39",
                    500: "#7ce500",
                    600: "#5eb700",
                    700: "#478b00",
                    800: "#3a6d07",
                    900: "#325b0c",
                    950: "#173400",
                },
                "chartreuse-yellow": {
                    50: "#fffee4",
                    100: "#fffec4",
                    200: "#ffff90",
                    300: "#f8ff50",
                    400: "#edff08",
                    500: "#cfe600",
                    600: "#a1b800",
                    700: "#798b00",
                    800: "#5f6d07",
                    900: "#505c0b",
                    950: "#2a3400",
                },
            },

            boxShadow: {
                DEFAULT:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
                md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
                lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
                xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)",
            },
            outline: {
                blue: "2px solid rgba(0, 112, 244, 0.5)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.5" }],
                sm: ["0.875rem", { lineHeight: "1.5715" }],
                base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
                lg: [
                    "1.125rem",
                    { lineHeight: "1.5", letterSpacing: "-0.01em" },
                ],
                xl: [
                    "1.25rem",
                    { lineHeight: "1.5", letterSpacing: "-0.01em" },
                ],
                "2xl": [
                    "1.5rem",
                    { lineHeight: "1.33", letterSpacing: "-0.01em" },
                ],
                "3xl": [
                    "1.88rem",
                    { lineHeight: "1.33", letterSpacing: "-0.01em" },
                ],
                "4xl": [
                    "2.25rem",
                    { lineHeight: "1.25", letterSpacing: "-0.02em" },
                ],
                "5xl": [
                    "3rem",
                    { lineHeight: "1.25", letterSpacing: "-0.02em" },
                ],
                "6xl": [
                    "3.75rem",
                    { lineHeight: "1.2", letterSpacing: "-0.02em" },
                ],
            },
            screens: {
                xs: "480px",
            },
            borderWidth: {
                3: "3px",
            },
            minWidth: {
                36: "9rem",
                44: "11rem",
                56: "14rem",
                60: "15rem",
                72: "18rem",
                80: "20rem",
            },
            maxWidth: {
                "8xl": "88rem",
                "9xl": "96rem",
            },
            zIndex: {
                60: "60",
            },
        },
    },

    plugins: [
        forms,
        require("@tailwindcss/forms"),
        plugin(({ addVariant, e }) => {
            addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
                modifySelectors(
                    ({ className }) =>
                        `.sidebar-expanded .${e(
                            `sidebar-expanded${separator}${className}`
                        )}`
                );
            });
        }),
        require("daisyui"),
    ],
};
