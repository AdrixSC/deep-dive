import React, { useState } from 'react';

//styles
import './Questions.css';

//components
import Context from '../Context';

export default function Questions(info) {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    return (
        <>
            <div className="Questions">
                {info.info.map((item, index) => {
                    console.log("index", index)
                    return (
                        <>
                            <div className="Question">
                                <div className="Question-number">{index + 1}</div>
                                <p className="Question-name">{`¿${item.pregunta}?`}
                                    <hr></hr>
                                </p>

                                <a className="Question-button" onClick={() => {
                                    setQuestion(item.pregunta);
                                    setAnswer(item.contexto)
                                }}>ver más</a>
                            </div>
                        </>
                    )
                })}
            </div>
            <Context dato1={question} dato2={answer} />
        </>
    );
}