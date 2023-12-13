import React from 'react';

function NumbersTable({ limit }) {
  const generateNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const renderTable = () => {
    const numbers = generateNumbers();
    return (
      <table>
        <tbody>
          {numbers.map((number) => (
            <tr
              key={number}
              style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
            >
              <td>{number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return <div>{renderTable()}</div>;
}

export default NumbersTable;
