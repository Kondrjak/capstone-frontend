import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function useData(rowLength:number, columnLength:number) {
    const [data, setData] = React.useState({ columns: [], rows: [] });


    return data;
}

type Props = {

}
export default function CpGallery() {
    const data = useData(100, 1000);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} columnBuffer={2} />
        </div>
    );
}