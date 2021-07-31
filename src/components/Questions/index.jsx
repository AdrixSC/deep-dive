import React, { useState } from 'react';

//styles
import './Questions.css';

//components
import Context from '../Context';

export default function Questions(info) {

    const [question, setQuestion] = useState('');
    const [context, setContext] = useState('');
    const [answer, setAnswer] = useState('');

    function handleAnswer(pregunta, contexto) {
        setQuestion(pregunta);
        setContext(contexto);

        fetch('https://ihp701pvb4.execute-api.us-west-2.amazonaws.com/dev/qa', {
            method: 'POST',
            body: JSON.stringify({
                "question": `"${question}"`,
                "context": `"${context}"`
            })
        })
            .then((res) => res.json())
            .then((res) => {
                setAnswer(res.answer.answer);
            })
    }


    return (
        <>
            <div className="Questions">
                {info.info.map((item, index) => {
                    return (
                        <>
                            <div className="Question">
                                <div className="Question-number">{index + 1}</div>
                                <p className="Question-name">{`¿${item.pregunta}?`}
                                    <hr className={`Color-line${index}`}></hr>
                                </p>

                                <a className="Question-button" onClick={() => { handleAnswer(item.pregunta, item.contexto) }}>ver más</a>
                            </div>
                        </>
                    )
                })}
            </div>
            <Context dato1={question} dato2={answer} />
        </>
    );
}