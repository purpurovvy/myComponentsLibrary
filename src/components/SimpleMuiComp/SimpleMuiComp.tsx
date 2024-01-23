import {Stack, Typography} from "@mui/material";

const SimpleMuiComp = ()=> {
    const x = "123";
    return (<Stack sx={{width:'300px', backgroundColor:"green"}}><Typography>{x}</Typography></Stack>)
}

export default SimpleMuiComp;