import React from "react";
import {red} from "@mui/material/colors";
import {alpha, useScrollTrigger} from "@mui/material";

export default function StyleOnScroll(props:any){
    const { children, threshold } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: threshold ? threshold : 100,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: {
            backgroundColor: trigger
                ? alpha(red.A400, 0.5)
                : alpha(red.A400, 1)
        }
    });
};
