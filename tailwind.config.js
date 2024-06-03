import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['SF UI Display', ...defaultTheme.fontFamily.sans],
            },
colors:{
                'ecru-white': {
                    '50': '#f8f7f2',
                    '100': '#efeddf',
                    '200': '#d7d2b0',
                    '300': '#c3ba86',
                    '400': '#b5a66a',
                    '500': '#a89058',
                    '600': '#94774b',
                    '700': '#7c5f41',
                    '800': '#674d39',
                    '900': '#564131',
                    '950': '#2f2319',
                },
                'marshland': {
                    '50': '#f7f7f6',
                    '100': '#e5e5e2',
                    '200': '#cacbc4',
                    '300': '#a7a99f',
                    '400': '#84877a',
                    '500': '#696c60',
                    '600': '#52554c',
                    '700': '#44463f',
                    '800': '#383a35',
                    '900': '#32332e',
                    '950': '#191a17',
                },
                'green-yellow': {
                    '50': '#f6ffe4',
                    '100': '#ebffc4',
                    '200': '#d7ff91',
                    '300': '#b9ff51',
                    '400': '#a8fe39',
                    '500': '#7ce500',
                    '600': '#5eb700',
                    '700': '#478b00',
                    '800': '#3a6d07',
                    '900': '#325b0c',
                    '950': '#173400',
                },
                'chartreuse-yellow': {
                    '50': '#fffee4',
                    '100': '#fffec4',
                    '200': '#ffff90',
                    '300': '#f8ff50',
                    '400': '#edff08',
                    '500': '#cfe600',
                    '600': '#a1b800',
                    '700': '#798b00',
                    '800': '#5f6d07',
                    '900': '#505c0b',
                    '950': '#2a3400',
                },


            }
        },

    },

    plugins: [
        require('daisyui'), forms, 
    ],


};
