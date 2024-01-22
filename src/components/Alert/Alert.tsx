import React from "react";
import {
    Alert as MuiAlert, Box, Stack, SxProps, Theme, Typography,
} from '@mui/material';
import {
    Warning, InfoRounded, ErrorRounded, Check,
} from '@mui/icons-material';
import {AlertStyles} from './Alert.styles';


interface AlertProps {
    title?: React.ReactElement | string;
    message?: React.ReactElement | string;
    type: 'success' | 'warning' | 'info' | 'error'
    sx?: SxProps
}

const alertColors = {
    success: 'success.main',
    warning: 'warning.main',
    info: 'info.main',
    error: 'error.main',
};

const alertIcons = {
    success: <Box sx={{...AlertStyles.iconBox, backgroundColor: 'success.main'}}><Check sx={AlertStyles.icon}/></Box>,
    warning: <Warning sx={{width: '4.25rem', height: '4.25rem'}}/>,
    info: <InfoRounded sx={{width: '4.0625rem', height: '4.0625rem'}}/>,
    error: <ErrorRounded sx={{width: '4.0625rem', height: '4.0625rem'}}/>,
};

const Alert = ({
                          title, message, type, sx,
                      }: AlertProps): React.ReactElement => (
    <MuiAlert
        data-testid={`Alert-${type}`}
        color={type}
        icon={alertIcons[type]}
        sx={{...AlertStyles.container, border: (theme: Theme) => `1px solid ${theme.palette[type].main}`, ...sx}}
    >
        <Stack direction="column">
            {title && <Typography variant="h6" sx={{color: alertColors[type], fontWeight: 500}}>{title}</Typography>}
            {message && <Typography variant="body1" sx={{overflowWrap: 'anywhere'}}>{message}</Typography>}
        </Stack>
    </MuiAlert>
);

export type {AlertProps};
export default Alert;
