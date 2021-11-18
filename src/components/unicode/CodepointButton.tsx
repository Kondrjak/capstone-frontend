import React from "react";
import {useState} from "react";
import {Button, Fab, SpeedDialIcon, Typography} from "@mui/material";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDial from "@mui/material/SpeedDial";
import CloseIcon from '@mui/icons-material/Close';

type Props = { codepoint: string, actions: any[], onClick: any }
export default function CodepointButton({codepoint, actions, onClick: handlePasteBin}: Props) {
    const [isHoveringButton, setHoveringButton] = useState(false);
    const [isHoveringDial, setHoveringDial] = useState(false);
    return (
        <div>
            <Button
                onMouseEnter={() => setHoveringButton(true)}
                onMouseLeave={() => setHoveringButton(false)}
                onClick={handlePasteBin}
            >
                <Typography fontSize="28px">{codepoint}</Typography>
            </Button>
            {
                (isHoveringButton || isHoveringDial)
                &&
                <Fab sx={{maxWidth: 0}}>
                    <SpeedDial
                        onMouseEnter={() => setHoveringDial(true)}
                        onMouseLeave={() => setHoveringDial(false)}
                        onClick={() => {setHoveringDial(false)
                                        setHoveringButton(false)
                        }}
                        ariaLabel="codepoint actions"
                        sx={{position: 'relative', bottom: 0, right: 140}}
                        icon={<SpeedDialIcon openIcon={<CloseIcon onClick={handlePasteBin}/>}
                        />}
                        direction="left"
                        open={isHoveringDial}
                    >
                        {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    onClick={() => action.action(codepoint)}
                                />
                        ))}
                    </SpeedDial>
                </Fab>
            }
        </div>
    );
}