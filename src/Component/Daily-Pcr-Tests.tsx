import React from 'react';
import {Chip, Paper} from "@material-ui/core";


export default function DailyPcrTests(props: any) {
    // console.log(props.count);
    // console.log(props.date);
    return (
        <Paper variant="outlined" className="mb-2">
            <div>
                <Chip label={props.date} className="d-flex justify-content-center mt-2"/>
                <p className="d-flex justify-content-center mt-2 text-success fw-bold">{props.count}</p>
            </div>
        </Paper>

    );
}