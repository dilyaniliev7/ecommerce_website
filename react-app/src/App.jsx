import { useState, useEffect } from "react"

export default function App(){
    const [showCounter, setShowCounter] = useState(false);

    return (
        <div>
            <button onClick={() => setShowCounter(!showCounter)}>
                {" "}
                Show Counter
            </button>
            {showCounter && <Counter />}
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Mounted")
    }, [])

    useEffect(() => {
        console.log("Component Updated")
    }, [count])

    return <button onClick={() => setCount(count + 1)}>{count}</button>
}