import React, { useState, useEffect } from 'react';

//styles
import './Context.css'

export default function Context({ dato1, dato2 }) {
    if (!dato1) return null;

    return (
        <div className="Container-context">
            <div className="Question">{`¿${dato1}?`}</div>
            <div className="Context">{dato2}</div>
        </div>
    )
}