import {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState<number>(0)
    const [stepInput, setStepInput] = useState<string>("1")

    const step = Number(stepInput)
    const isValidStep = Number.isInteger(step) && step >= 1

    function decreaseCount() {
        setCount(count => count - step)
    }

    function increaseCount() {
        setCount(count => count + step)
    }

    function resetCount() {
        setCount(0)
    }


    return (
        <main className="counter-page">
            <section className="counter-card" aria-labelledby="counter-title">
                <h1 id="counter-title">Counter with Step Control</h1>

                <div className="counter-controls">
                    <button type="button" aria-label="Decrease count" onClick={decreaseCount} disabled={!isValidStep}>−</button>
                    <output className="counter-value" aria-label="Count">{count}</output>
                    <button type="button" aria-label="Increase count" onClick={increaseCount} disabled={!isValidStep}>+</button>
                </div>

                <div className="step-control">
                    <label htmlFor="step">Step</label>
                    <input id="step" type="number" min={1} step={1} value={stepInput}
                           onChange={(event) => setStepInput(event.target.value)}/>
                </div>

                <button type="button" className="reset-button" onClick={resetCount}>Reset</button>
            </section>
        </main>
    )
}

export default App
