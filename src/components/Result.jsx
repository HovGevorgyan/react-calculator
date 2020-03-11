import React from 'react';
import '../styles/Result.css';

const Result = ({results = [], handleRemove = id => id}) => {
    return (
        <>
            <div className={'result-container'}>
                <table style={{'width': '100%'}}>
                    <thead>
                    <tr>
                        <th># First Number</th>
                        <th># Operation</th>
                        <th># Second Number</th>
                        <th># Result</th>
                        <th># Id</th>
                        <th># Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {results.map((result, index) =>
                        <tr key={index}>
                            <td>{result.firstNumber}</td>
                            <td>{result.operation}</td>
                            <td>{result.secondNumber}</td>
                            <td>{result.result}</td>
                            <td>{index}</td>
                            <td>
                                <button onClick={() => handleRemove(index)}>&#128465;</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default Result;
