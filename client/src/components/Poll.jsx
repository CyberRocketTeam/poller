import React, { useState } from 'react'

function Poll({displayName, question, options}) {
    const [option, setOption] = useState([options])
    return (
        <div>
            <h1>polls</h1>
            <h3>{ displayName}</h3>
            <h3>{ question}</h3>
            <h3>{option.map((o) => (
                <>
                <h1>{o.optionA}</h1>
                <h1>{o.optionB}</h1>
                <h1>{o.optionC}</h1>
                <h1>{o.optionD}</h1>
                </>
                
            ))}</h3>
        </div>
    )
}

export default Poll
