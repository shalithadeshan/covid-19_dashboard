import React from 'react';
import './component.css';
import {Card, CardContent, Paper} from "@material-ui/core";

export default function DailyFigures(props: any) {
    return (
        <Card>
            <CardContent>
                <div className="d-flex flex-column justify-content-center text-center">
                    <p className="fw-bold">Daily Figures (SL) in Last 24 Hours</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div className="mb-3">
                        <Paper variant="outlined">
                        <span className="d-flex flex-row mt-4">
                        <img className="mt-3 mx-3"
                             src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-4.d002c132.gif" alt="" width="30"
                             height="30"/>
                        <span className="d-flex flex-column">
                            <p className="font-monospace">New Cases</p>
                            <p className="fs-1 fw-bold text-primary data">{props.newCases}</p>
                            </span>
                            </span>
                        </Paper>
                    </div>
                    <div className="mb-3">
                        <Paper variant="outlined">
                    <span className="d-flex flex-row mt-4">
                    <img className="mt-3 mx-3" src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-1.403b9d8b.gif"
                         alt="" width="30" height="30"/>
                    <span className="d-flex flex-column">
                        <p className="font-monospace">Deaths</p>
                        <p className="fs-1 fw-bold text-danger data">{props.deaths}</p>
                        </span>
                        </span>
                        </Paper>
                    </div>
                    <div className="text-center text-muted">
                        <p><small>Last update at: {props.updatedDate}</small></p>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}