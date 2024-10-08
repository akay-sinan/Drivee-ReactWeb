import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
const data = {
  labels: ['Hızlanma', 'Sağa Dönüş', 'Frenaj', 'Sola Dönüş'],
  datasets: [
    {
      label: '',
      data: [10, 20,30, 40],
      backgroundColor: '#556ee65c',
      borderColor: '#4458b8',
      borderWidth: 1,
    },
  ],
};
const options = {
  scales: { // <-- Note change in options from scale to scales
    r: {
      grid: {
         circular: true
      },
      beginAtZero: true
    }
},
  legend: {
    position: 'top'
  },
  title: {
    display: true,
    
  }
}

export default function SpecifiedDomainRadarChart() {
  return (
    <div style={{ width: '100%' }}>
     
        
          <Radar data={data} options={options}/>
        
     
    </div>
  );
}
