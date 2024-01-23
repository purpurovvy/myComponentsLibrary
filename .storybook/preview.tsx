import type { Preview } from "@storybook/react";
import {createTheme, ThemeProvider} from "@mui/material";
import {customTheme} from "../src/utils/theme";

const theme=  createTheme(customTheme);

const preview: Preview = {
  decorators: [
    (Story) => (
        <ThemeProvider theme={theme}>
            <Story />
        </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
