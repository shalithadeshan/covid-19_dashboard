import React from 'react';
import {Card, CardContent} from "@material-ui/core";

export default function TotalFigures() {
    return (
        <Card>
            <CardContent>
                <div className="d-flex justify-content-center">
                    <p className="fw-bold">Total Figures (SL)</p>
                </div>
            </CardContent>
        </Card>
    );
}