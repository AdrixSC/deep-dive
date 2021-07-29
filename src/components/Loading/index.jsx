import React from 'react';

//styles
import './Loading.css'

import Loader from './loading.gif';

export default function Loading() {
    return (
        <div className="Loading">
            <img src={Loader} />
        </div>
    )
}