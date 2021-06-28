import React from 'react';
import {Card, CardContent} from "@material-ui/core";

export default function TotalVsActive() {
    return (
        <Card>
            <CardContent>
                <div className="d-flex justify-content-center">
                    <p className="fw-bold">Total vs Active Cases (SL)</p>
                </div>
            </CardContent>
        </Card>
    );
}