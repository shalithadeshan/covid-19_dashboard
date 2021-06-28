import React from 'react';
import {Card, CardContent} from "@material-ui/core";

export default function DailyFigures() {
    return (
       <Card>
           <CardContent>
               <div className="d-flex justify-content-center">
                   <p className="fw-bold">Daily Figures (SL) in Last 24 Hours</p>
               </div>
           </CardContent>
       </Card>
    );
}