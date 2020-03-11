import React, {useState, useEffect} from 'react';
import Result from './Result';
import '../styles/Calculator.css';

const operators = [
    '+', '-', '*', '/'
];

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState();
    const [operation, setOperation] = useState(operators[0]);
    const [secondNumber, setSecondNumber] = useState();
    const [results, setResults] = useState([]);

    const handleRemove = key => {
        setResults(results.filter((item, index) => index !== key))
    };

    useEffect(() => {
        const res = sessionStorage.getItem('results');
        if (res) {
            setResults(JSON.parse(res))
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('results', JSON.stringify(results))
    }, [results]);

    return (
        <>
            <input
                placeholder={'Input number one'}
                type={'number'}
                step={0.1}
                value={firstNumber ? firstNumber : ''}
                className={'input'}
                onChange={evt => {
                    setFirstNumber(parseFloat(evt.target.value))
                }}
            />
            <select
                className={'select'}
                value={operation}
                onChange={evt => {
                    setOperation(evt.target.value);
                }}
            >
                {operators.map(operator =>
                    <option value={operator} key={operator}>{operator}</option>
                )}
            </select>
            <input
                placeholder={'Input number two'}
                type={'number'}
                step={0.1}
                value={secondNumber ? secondNumber : ''}
                onChange={evt => {
                    setSecondNumber(parseFloat(evt.target.value));
                }}
                className={'input'}/>
            <button className={'calculate-btn'} onClick={() => {
                let result = undefined;
                switch (operation) {
                    case '+':
                        result = firstNumber + secondNumber;
                        break;
                    case '-':
                        result = firstNumber - secondNumber;
                        break;
                    case '*':
                        result = firstNumber * secondNumber;
                        break;
                    case '/':
                        result = firstNumber / secondNumber;
                        break;
                    default:
                        throw new Error('Operation is not supported');
                }
                if (result !== undefined && !isNaN(result)) {
                    setResults([...results, {firstNumber, operation, secondNumber, result}]);
                } else {
                    alert('Invalid input');
                }
            }}>Calculate
            </button>

            <Result
                results={results}
                handleRemove={handleRemove}
            />
        </>
    )
};

export default Calculator;
