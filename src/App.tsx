import React, {useEffect, useState} from 'react';
import './App.css';
import {Card, CardContent, makeStyles} from "@material-ui/core";
import DailyFigures from "./Component/Daily-Figures";
import TotalFigures from "./Component/Total-Figures";
import axios from 'axios';
import DailyPcrTests from "./Component/Daily-Pcr-Tests";

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
    const [dailyPcrTest, setDailyPcrTest] = useState([]);
    const [hospitalized, setHospitalized] = useState(0);
    const [updatedDate, setUpdatedDate] = useState(0);


    const classes = useStyles();

    useEffect(() => {

        axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
            .then(res => {
                // console.log(res.data);
                if (res.status === 200) {
                    const cases = res.data.data
                    // console.log(cases);
                    setTotalCases(cases.local_total_cases);
                    setTotalDeaths(cases.local_deaths);
                    setTotalRecovered(cases.local_recovered);
                    setNewCases(cases.local_new_cases);
                    setDeaths(cases.local_new_deaths);
                    setUpdatedDate(cases.update_date_time);
                    setHospitalized(cases.local_total_number_of_individuals_in_hospitals);
                    setDailyPcrTest(cases.daily_pcr_testing_data);
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
                            <span className={'fw-bold'}>COVID-19</span>: Live Situational Analysis Dashboard of Sri
                            Lanka
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/*sections*/}
            <div className="row mt-5">

                {/*Total section*/}
                <div className="col-lg-3 order-lg-1 order-2" >
                    <TotalFigures
                        totalCase={totalCases}
                        totalDeaths={totalDeaths}
                        totalRecovered={totalRecovered}
                        updatedDate={updatedDate}
                        hospitalized={hospitalized}/>
                </div>

                {/*total vs active section*/}

                <div className="col-lg-6 order-lg-2 order-1">
                    <Card>
                        <CardContent>
                            <div className="d-flex flex-column justify-content-center text-center">
                                <p className="fw-bold">Daily PCR Tests</p>
                            </div>
                            <div className="row">
                                {dailyPcrTest.slice(0).slice(100)
                                    .map((testing: any) => (
                                            <div key={testing.date} className="col-lg-4">
                                                <DailyPcrTests date={testing.date} count={testing.count}/>
                                            </div>
                                    ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/*daily section*/}
                <div className="col-lg-3 order-lg-3 order-3" data-aos="zoom-in" data-aos-delay="300">
                    <DailyFigures
                        newCases={newCases}
                        deaths={deaths}
                        updatedDate={updatedDate}/>
                </div>
            </div>
        </div>

    );
}

export default App;
