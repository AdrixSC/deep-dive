import React from 'react';

//styles
import './Graphic.css';

//Library
import { Bubble } from 'react-chartjs-2'

export default function Graphic(data) {
    console.log("data", data.info);

    return (
        <>
            <Bubble
                type='bubble'
                data={{
                    datasets: [
                        {
                            label: 'Preguntas',
                            data: [{
                                x: 90,
                                y: 10,
                                r: 30,
                            }, {
                                x: 60,
                                y: 30,
                                r: 20
                            },
                            {
                                x: 40,
                                y: 60,
                                r: 25
                            }, {
                                x: 80,
                                y: 80,
                                r: 50
                            }, {
                                x: 20,
                                y: 30,
                                r: 25
                            }, {
                                x: 0,
                                y: 100,
                                r: 15
                            }, {
                                x: 50,
                                y: 60,
                                r: 15
                            }, {
                                x: 80,
                                y: 30,
                                r: 70
                            }, {
                                x: 10,
                                y: 30,
                                r: 30
                            }, {
                                x: 10,
                                y: 100,
                                r: 15
                            }],
                            backgroundColor: [
                                'rgba(22, 110, 241, 0.2)',
                                'rgba(226, 14, 145, 0.2)',
                                'rgba(228, 228, 5, 0.2)',
                                'rgba(121, 3, 145, 0.2)',
                                'rgba(245, 150, 7, 0.2)',
                                'rgba(14, 226, 222, 0.2)',
                                'rgba(224, 7, 3, 0.2)',
                                'rgba(173, 226, 14, 0.2)',
                                'rgba(241, 22, 241, 0.2)',
                                'rgba(113, 14, 226, 0.2)',
                            ],
                            borderColor: [
                                'rgba(22, 110, 241, 1)',
                                'rgba(226, 14, 145, 1)',
                                'rgba(228, 228, 5, 1)',
                                'rgba(121, 3, 145, 1)',
                                'rgba(245, 150, 7, 1)',
                                'rgba(14, 226, 222, 1)',
                                'rgba(224, 7, 3, 1)',
                                'rgba(173, 226, 14, 1)',
                                'rgba(241, 22, 241, 1)',
                                'rgba(113, 14, 226, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ]
                }}
                height={100}
                width={200}
            />
        </>
    );
}