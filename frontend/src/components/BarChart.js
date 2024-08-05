 import React from "react";
 import{Bar} from 'react-chartjs-2'


 const BarChart=({earnings,spendings})=>{
      const data={
        labels:['Week 1','Week 2','Week 3','Week 4'],
        datasets:[
            {
            label: 'Earnings',
            data:earnings,
            backgroundColor:'rgba(75, 192, 192, 0.6)'
            },
            {
                label: 'Spendings',
                data:spendings,
                backgroundColor:'rgba(255, 99, 132, 0.6)'
                }

        ]
      }
     return <Bar data={data}/>
  }