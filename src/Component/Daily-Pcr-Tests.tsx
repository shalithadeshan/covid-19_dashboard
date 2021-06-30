import React from 'react';
// import {Chart} from "primereact/chart";

export default function DailyPcrTests(props: any) {

    // const BarChartDemo = () => {
    //     const basicData = {
    //         labels: [props.date],
    //         dataset: [
    //             {
    //                 label: props.date,
    //                 backgroundColor: '#42A5F5',
    //                 data: [props.count]
    //             }
    //         ]
    //     }
    //     // console.log(basicData);
    //
    //     const getLightTheme = () => {
    //         let basicOptions = {
    //             maintainAspectRatio: false,
    //             aspectRatio: .8,
    //             plugins: {
    //                 legend: {
    //                     labels: {
    //                         color: '#495057'
    //                     }
    //                 }
    //             },
    //             scales: {
    //                 x: {
    //                     ticks: {
    //                         color: '#495057'
    //                     },
    //                     grid: {
    //                         color: '#ebedef'
    //                     }
    //                 },
    //                 y: {
    //                     ticks: {
    //                         color: '#495057'
    //                     },
    //                     grid: {
    //                         color: '#ebedef'
    //                     }
    //                 }
    //             }
    //         };
    //         return {
    //             basicOptions
    //         }
    //     }
    // }

    // const { basicOptions } = getLightTheme();

    return (
        // <div className="card">
        //     <h5>Vertical</h5>
        //     <Chart type="bar" data={basicData} options={basicOptions} />
        // </div>

        <div>
            <p>{props.date}</p>
            <p>{props.count}</p>
        </div>
    );
}
