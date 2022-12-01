import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props)=>{

let dataPoints = props.dataPoints.map((data)=>{
    return data.value

})
let totalMaxValue = Math.max(...dataPoints)

return <div className="chart">
{
    props?.dataPoints.map((data)=>{
        return <ChartBar 
        key={data.label}
        value = {data.value}
        label = {data.label}
        maxValue = {totalMaxValue}
        />
    })
}
</div>
}

export default Chart