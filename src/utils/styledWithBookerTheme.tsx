import { createStyled } from '@mui/system';
import {Palette, Theme} from "@mui/material";
export interface BookerPalette extends Palette {
    bookerPalette: {
        backgroundLight: string,
        backgroundDark: string,
        border: string,
        divider: string,
    }
}

export interface BookerTheme extends Omit<Theme, 'palette'> {
    palette: BookerPalette;
}


export const styledWithBookerTheme = createStyled<BookerTheme>();
