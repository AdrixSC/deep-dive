import React from 'react';

//styles
import './Graphic.css';

//Library
//import { Chart, registerables } from 'chart.js';
//Chart.register(...registerables);
//import Chart from 'chart.js/auto';

export default function Graphic() {
    return (
        <div>
            <div>
                <p>aqui va la gráfica</p>
                <canvas id="myChart"></canvas>
            </div>
        </div>
    );
}