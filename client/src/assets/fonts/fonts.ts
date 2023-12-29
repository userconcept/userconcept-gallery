import { createGlobalStyle } from 'styled-components';

import InterRegularEot from './Inter-Regular.eot';
import InterRegularTtf from './Inter-Regular.ttf';
import InterRegularWoff from './Inter-Regular.woff';
import InterRegularWoff2 from './Inter-Regular.woff2';
import InterMediumEot from './Inter-Medium.eot';
import InterMediumTtf from './Inter-Medium.ttf';
import InterMediumWoff from './Inter-Medium.woff';
import InterMediumWoff2 from './Inter-Medium.woff2';
import InterBoldEot from './Inter-Bold.eot';
import InterBoldTtf from './Inter-Bold.ttf';
import InterBoldWoff from './Inter-Bold.woff';
import InterBoldWoff2 from './Inter-Bold.woff2';

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegularEot});
        src: local('Inter Regular'), local('Inter-Regular'),
            /* url('Inter-Regular.eot?#iefix') format('embedded-opentype'), */
            url(${InterRegularWoff2}) format('woff2'),
            url(${InterRegularWoff}) format('woff'),
            url(${InterRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: 'Inter';
        src: url(${InterMediumEot});
        src: local('Inter Medium'), local('Inter-Medium'),
            /* url('Inter-Medium.eot?#iefix') format('embedded-opentype'), */
            url(${InterMediumWoff2}) format('woff2'),
            url(${InterMediumWoff}) format('woff'),
            url(${InterMediumTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: block;
    }

    @font-face {
        font-family: 'Inter';
        src: url(${InterBoldEot});
        src: local('Inter Bold'), local('Inter-Bold'),
            /* url('Inter-Bold.eot?#iefix') format('embedded-opentype'), */
            url(${InterBoldWoff2}) format('woff2'),
            url(${InterBoldWoff}) format('woff'),
            url(${InterBoldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: block;
    }
`;
