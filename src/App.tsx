import React, { useEffect, useState } from 'react';
import './App.css';
import {Card, CardContent, makeStyles} from "@material-ui/core";
import DailyFigures from "./Component/Daily-Figures";
import TotalFigures from "./Component/Total-Figures";
import TotalVsActive from "./Component/Total-vs-Active";
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

});


function App() {
    
    const [totalCases, setTotalCases] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    const [totalRecovered, setTotalRecovered] = useState(0);
    const [newCases, setNewCases] = useState(0);
    const [deaths, setDeaths] = useState(0);
    // const [recovered, setRecovered] = useState(0);
    const [updatedDate, setUpdatedDate] = useState(0);


    const classes = useStyles();

    useEffect(() => {
        
        axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
        .then(res => {
            if (res.status === 200) {
                const cases = res.data.data
                setTotalCases(cases.local_total_cases);
                setTotalDeaths(cases.local_deaths);
                setTotalRecovered(cases.local_recovered);
                setNewCases(cases.local_new_cases);
                setDeaths(cases.local_new_deaths);
                setUpdatedDate(cases.update_date_time);
            }
        })

        console.log('Component has been rendered');
        return function cleanup() {
            console.log('Component has been destroyed');
        }
    }, [])


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
                    <TotalFigures 
                    totalCase = {totalCases} 
                    totalDeaths = {totalDeaths} 
                    totalrecovered = {totalRecovered}
                    updatedDate = {updatedDate}/>
                </div>

                {/*total vs active section*/}
                <div className="col-lg-6">
                    <TotalVsActive/>
                </div>

                {/*daily section*/}
                <div className="col-lg-3">
                    <DailyFigures newCases = {newCases} deaths = {deaths} updatedDate = {updatedDate}/>
                </div>
            </div>
        </div>

    );
}

export default App;
