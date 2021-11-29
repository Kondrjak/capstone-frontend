import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
type Props = {show: boolean, symbol:string}

function InfoCard({codepoint}: { codepoint: string }) {
    return (<div>Info Card of {codepoint}</div>);
}

export default function InfoBackdrop({show, symbol}:Props) {
    const [showInfo, setShowInfo] = React.useState(show);
    return (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={showInfo}
                onClick={ () => setShowInfo(false)}
            >
                <InfoCard codepoint={symbol}/>
            </Backdrop>
    );
