export const customTheme ={
    components: {
        MuiCssBaseline: {
            styleOverrides: `
          /* cyrillic-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIxsdO_q.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIVsdO_q.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIJsdO_q.woff2) format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI5sdO_q.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AI9sdO_q.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjXr8AIFsdA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdzeFb5N.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdXeFb5N.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdLeFb5N.woff2) format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd7eFb5N.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhd_eFb5N.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYXgKVElMYYaJe8bpLHnCwDKhdHeFQ.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIxsdO_q.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIVsdO_q.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIJsdO_q.woff2) format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI5sdO_q.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AI9sdO_q.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjSL9AIFsdA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* cyrillic-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIxsdO_q.woff2) format('woff2');
            unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
          }
          /* cyrillic */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIVsdO_q.woff2) format('woff2');
            unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
          }
          /* greek */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIJsdO_q.woff2) format('woff2');
            unicode-range: U+0370-03FF;
          }
          /* vietnamese */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI5sdO_q.woff2) format('woff2');
            unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
          }
          /* latin-ext */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AI9sdO_q.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'IBM Plex Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/ibmplexsans/v14/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
      `,
        },
    },
    typography: {
        fontFamily: '"IBM Plex Sans",sans-serif',
        h1: {
            fontSize: '1.5625rem',
            lineHeight: '2rem',
            fontWeight: 500,
            color: '#474B6D',
        },
        h2: {
            fontSize: '1.25rem',
            lineHeight: '1.625rem',
            fontWeight: 500,
            color: '#474B6D',
        },
        h3: {
            fontSize: '.9375rem',
            lineHeight: '1.22rem',
            fontWeight: 500,
            color: '#474B6D',
        },
        subtitle1: {
            fontSize: '1.25rem',
            lineHeight: '1.625rem',
            fontWeight: 700,
            color: '#24284A',
        },
        subtitle2: {
            fontSize: '.9375rem',
            lineHeight: '1.22rem',
            fontWeight: 700,
            color: '#24284A',
        },
        body1: {
            fontSize: '.9375rem',
            lineHeight: '1.5rem',
            fontWeight: 300,
            color: '#474B6D',
        },
        body2: {
            fontSize: '.8125rem',
            lineHeight: '1.25rem',
            fontWeight: 300,
            color: '#474B6D',
        },
        caption: {
            fontSize: '.8125rem',
            lineHeight: '1rem',
            fontWeight: 700,
            color: '#24284A',
        },
        overline: {
            fontSize: '.625rem',
            lineHeight: '.75rem',
            fontWeight: 700,
            color: '#24284A',
        },
    },
    palette: {
        text: {
            primary: '#474B6D',
            secondary: '#646789',
            disabled: '#9DA0BF',
        },
        common: {
            black: '#24284A',
            white: '#FFFFFF',
        },
        primary: {
            main: '#4F6CFF',
            light: '#EFF0FC',
        },
        secondary: {
            main: '#03B075',
            contrastText: '#FFFFFF',
            light: '#E1F7EF',
        },
        success: {
            main: '#03B075',
            light: '#E1F7EF',
        },
        warning: {
            main: '#EEA620',
        },
        info: {
            main: '#0049B8',
        },
        error: {
            main: '#DE3C63',
        },
        grey: {
            100: '#F8F8FC',
            200: '#EEEFF8',
            300: '#DDDFF1',
            400: '#CED0E4',
            600: '#9DA0BF',
            800: '#6B6E8D',
            900: '#474B6D',
        },
        bookerPalette: {
            border: '#CED0E4',
            backgroundDark: '#24284A',
            backgroundLight: '#F8F8FC',
            divider: '#DDDFF1',
        },
    },
};