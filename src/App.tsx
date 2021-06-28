import React from 'react';
import './App.css';
import {Card, CardContent, makeStyles} from "@material-ui/core";
import DailyFigures from "./Component/Daily-Figures";
import TotalFigures from "./Component/Total-Figures";
import TotalVsActive from "./Component/Total-vs-Active";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

});


function App() {
    const classes = useStyles();
    return (
        // header
        <div className={'mx-5 mt-5'}>
            <Card className={classes.root}>
                <CardContent>
                    <div className={'d-flex justify-content-center align-items-center mt-3'}>
                        <p className={'fs-4'}>
                            <span className={'fw-bold'}>COVID-19</span>: Live Situational Analysis Dashboard of Sri Lanka
                        </p>
                    </div>
                </CardContent>
            </Card>

           {/*sections*/}
            <div className="row mt-5">

                {/*Total section*/}
                <div className="col-lg-3">
                    <TotalFigures/>
                </div>

                {/*total vs active section*/}
                <div className="col-lg-6">
                    <TotalVsActive/>
                </div>

                {/*daily section*/}
                <div className="col-lg-3">
                    <DailyFigures/>
                </div>
            </div>
        </div>

    );
}

export default App;
