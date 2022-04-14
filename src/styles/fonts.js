import { createGlobalStyle } from 'styled-components'

import eot from '../assets/fonts/shippori-antique-b1-v4-latin-regular.eot'
import woff2 from '../assets/fonts/shippori-antique-b1-v4-latin-regular.woff2'
import woff from '../assets/fonts/shippori-antique-b1-v4-latin-regular.woff'
import ttf from '../assets/fonts/shippori-antique-b1-v4-latin-regular.ttf'
import svg from '../assets/fonts/shippori-antique-b1-v4-latin-regular.svg'

/* shippori-antique-b1-regular - latin */
export const Fonts = createGlobalStyle`
@font-face {
   font-family: 'Shippori Antique B1';
   font-style: normal;
   font-weight: 400;
   src: url(${eot}); /* IE9 Compat Modes */
   src: local(''),
        url('${eot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url(${woff2}) format('woff2'), /* Super Modern Browsers */
        url(${woff}) format('woff'), /* Modern Browsers */
        url(${ttf}) format('truetype'), /* Safari, Android, iOS */
        url('${svg}#ShipporiAntiqueB1') format('svg'); /* Legacy iOS */
}
`
