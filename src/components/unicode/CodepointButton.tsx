import React from "react";
import {useState} from "react";
import {Button, SpeedDialIcon, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/FileCopyOutlined";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDial from "@mui/material/SpeedDial";

type Props = { fontSymbol: string, actions: any[], onClick: any }
export default function CodepointButton({fontSymbol, actions, onClick: handlePasteBin}: Props) {
    const [isHoveringButton, setHoveringButton] = useState(false);
    const [isHoveringDial, setHoveringDial] = useState(false);
    return (
        <div>
            <Button
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}
                onClick={() => handlePasteBin(fontSymbol)}
            >

                <Typography fontSize="28px">{fontSymbol}</Typography>
            </Button>
            {
                (isHoveringButton || isHoveringDial)
                &&
                <SpeedDial
                    onMouseEnter={() => setHoveringDial(true)}
                    onMouseLeave={() => setHoveringDial(false)}
                    ariaLabel="codepoint actions"
                    sx={{position: 'absolute', bottom: 10, right: 50 + 14}}
                    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
                    direction="left"
                    open={isHoveringDial}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => action.action(fontSymbol)}
                        />
                    ))}
                </SpeedDial>
            }
        </div>
    );
}