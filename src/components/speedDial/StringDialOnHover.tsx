import React from "react";
import {useState} from "react";
import {Button, Typography} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDial from "@mui/material/SpeedDial";

type Props = { fontSymbol: string, actions: any[] }
export default function StringDialOnHover({fontSymbol, actions}: Props) {
    const [isHoveringButton, setHoveringButton] = useState(false);
    const [isHoveringDial, setHoveringDial] = useState(false);
    return (
        <div>
            <Button
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}>
                <Typography fontSize="28px">{fontSymbol}</Typography>
            </Button>
            {
                (isHoveringButton || isHoveringDial)
                &&
                <SpeedDial
                    onMouseEnter={() => setHoveringDial(true)}
                    onMouseLeave={() => setHoveringDial(false)}
                    ariaLabel="codepoint actions"
                    sx={{position: 'absolute', bottom: 10, right: 50+14}}
                    icon={<FileCopyIcon/>}
                    direction="left"
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            }
        </div>
    );
}