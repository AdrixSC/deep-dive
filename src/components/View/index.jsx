import React, { useState, useEffect } from 'react';

//components
import Loading from '../Loading';
import Questions from '../Questions';
import Graphic from '../Graphic';

//styles
import './View.css';

export default function View() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/508d307b-5e60-4bdc-b634-0a6a58c46242/preguntas.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210729T032651Z&X-Amz-Expires=86400&X-Amz-Signature=f95ba866eee0d1597db435bb35ee6f47d61800506c22e8914d17f70fec676d9b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22preguntas.json%22')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setLoading(true);
            })
    }, []);

    console.log(data)

    if (!loading) return <Loading />

    return (
        <div className="Container">
            <div className="Container-graphic">
                <Graphic info={data} />
            </div>
            <div className="Container-questions">
                <Questions info={data} />
            </div>

        </div>
    )
}