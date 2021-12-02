import React from 'react';
import './component.css';
import {Card, CardContent, Paper} from "@material-ui/core";


export default function TotalFigures(props: any) {
    return (
        <Card>
            <CardContent>
                <div className="d-flex flex-column justify-content-center text-center">
                    <p className="fw-bold">Total Figures (SL)</p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <div className="mb-3">
                        <Paper variant="outlined">
                        <span className="d-flex flex-row mt-4">
                            <img className="mt-4  mx-3"
                                 src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-4.d002c132.gif" alt=""
                                 width="30" height="30"/>
                            <span className="d-flex flex-column">
                            <p className="font-monospace">Total Confirmed Cases</p>
                            <p className="fs-1 fw-bold text-primary data">{props.totalCase}</p>
                            </span>
                        </span>
                        </Paper>
                    </div>
                    <div className="mb-3">
                        <Paper variant="outlined">
                        <span className="d-flex flex-row mt-4">
                            <img className="mt-3 mx-3"
                                 src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-1.403b9d8b.gif" alt=""
                                 width="30" height="30"/>
                            <span className="d-flex flex-column">
                                <p className="font-monospace">Total Deaths</p>
                                <p className="fs-1 fw-bold text-danger data">{props.totalDeaths}</p>
                            </span>
                        </span>
                        </Paper>
                    </div>
                    <div className="mb-3">
                        <Paper variant="outlined">
                    <span className="d-flex flex-row mt-4">
                        <img className="mt-3 mx-3"
                             src="https://hpb.health.gov.lk/covid19-dashboard/img/icon-3.1348ba98.gif" alt="" width="30"
                             height="30"/>
                        <span className="d-flex flex-column">
                        <p className="font-monospace">Total Recovered</p>
                        <p className="fs-1 fw-bold text-success data">{props.totalRecovered}</p>
                        </span>
                        </span>
                        </Paper>
                    </div>
                    <div className="mb-3">
                        <Paper variant="outlined">
                    <span className="d-flex flex-row mt-4">
                        <img className="mt-3 mx-3"
                             src="https://covid19-dashboard.arimac.digital/img/icon-5.5c1a2221.gif" alt="" width="30"
                             height="30"/>
                        <span className="d-flex flex-column">
                        <p className="font-monospace">Hospitalized</p>
                        <p className="fs-1 fw-bold text-danger data">{props.hospitalized}</p>
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