import Button from "@mui/material/Button";
import UnicodeIcon from "../logo/UnicodeIcon";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as React from "react";

export default function LoginHeading() {
    return (
        <>
            <Button sx={{bgcolor: 'secondary.main'}} variant="contained" startIcon={
                <UnicodeIcon/>}>
                <Typography alignSelf={"center"} fontSize={"5.5em"} fontFamily={"Verdana"}>TYPE</Typography>
            </Button>
            <Avatar sx={{marginTop: 10, marginBottom: 2, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <br/>
        </>
    )
        ;
}