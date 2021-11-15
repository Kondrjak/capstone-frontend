import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import DialOnHover from "./StringDialOnHover";

const actions = [
    {icon: <AddIcon/>, name: 'Add'},
    {icon: <InfoIcon/>, name: 'Info'},
];

type Props = { fontSymbol: string }
export default function CodepointDial({fontSymbol}: Props) {
    return (<DialOnHover fontSymbol={fontSymbol} actions={actions}/>
    );
}