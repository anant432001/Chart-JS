import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJs} from "chart.js/auto"

const BarChart = ({chartData}) => {
  return (
    <div style={{width:700}}>
        <Bar data={chartData}/>
    </div>
  )
}

export default BarChart;