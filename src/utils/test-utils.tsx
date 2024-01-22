import { ReactElement, ReactNode } from 'react';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';
import { render, RenderOptions, cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup();
});

const testTheme = createTheme();

const Wrapper = ({ children }: { children: ReactNode }) => (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={testTheme}>
                    {children}
                </ThemeProvider>
            </StyledEngineProvider>
);

export const wait = async (t: number) => new Promise<void>((r) => {
    setTimeout(() => r(), t);
});

export const customRender = (ui: ReactElement, options?: RenderOptions) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
