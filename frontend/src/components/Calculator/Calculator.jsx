import React, { useState } from 'react';
import '../../css/Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else if (value === 'all-clear') {
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <div>
            <section>
                <div className="calculator card">
                    <input type="text" className="calculator-screen z-depth-1 form-control" value={input} disabled />

                    <div className="calculator_keys">
                        <button type="button" className="operator btn btn-info" onClick={() => handleClick('+')}>+</button>
                        <button type="button" className="operator btn btn-info" onClick={() => handleClick('-')}>-</button>
                        <button type="button" className="operator btn btn-info" onClick={() => handleClick('*')}>&times;</button>
                        <button type="button" className="operator btn btn-info" onClick={() => handleClick('/')}>&divide;</button>

                        <button type="button" value="7" className="btn btn-light waves-effect" onClick={() => handleClick('7')}>7</button>
                        <button type="button" value="8" className="btn btn-light waves-effect" onClick={() => handleClick('8')}>8</button>
                        <button type="button" value="9" className="btn btn-light waves-effect" onClick={() => handleClick('9')}>9</button>

                        <button type="button" value="4" className="btn btn-light waves-effect" onClick={() => handleClick('4')}>4</button>
                        <button type="button" value="5" className="btn btn-light waves-effect" onClick={() => handleClick('5')}>5</button>
                        <button type="button" value="6" className="btn btn-light waves-effect" onClick={() => handleClick('6')}>6</button>

                        <button type="button" value="1" className="btn btn-light waves-effect" onClick={() => handleClick('1')}>1</button>
                        <button type="button" value="2" className="btn btn-light waves-effect" onClick={() => handleClick('2')}>2</button>
                        <button type="button" value="3" className="btn btn-light waves-effect" onClick={() => handleClick('3')}>3</button>

                        <button type="button" value="0" className="btn btn-light waves-effect" onClick={() => handleClick('0')}>0</button>
                        <button type="button" className="decimal function btn btn-secondary" onClick={() => handleClick('.')}>.</button>
                        <button type="button" className="all-clear function btn btn-danger btn-sm" onClick={() => handleClick('all-clear')}>AC</button>

                        <button type="button" className="equal-sign operator btn btn-default" onClick={() => handleClick('=')}>=</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calculator;
