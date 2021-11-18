import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
type Props = {show: boolean, symbol:string}

function InfoCard({codepoint}: { codepoint: string }) {
    return (<div>Info Card of {codepoint}</div>);
}

export default function InfoBackdrop({show, symbol}:Props) {
    const [showInfo, setShowInfo] = React.useState(show);

    const handleClose = () => {
        setShowInfo(false);
    };
    const handleToggle = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div>
            <Button onClick={handleToggle}>Show backdrop</Button>
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={showInfo}
                onClick={handleClose}
            >
                <InfoCard codepoint={symbol}/>
            </Backdrop>
        </div>
    );
}