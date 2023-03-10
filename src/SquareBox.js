import React, { useState } from 'react';

function SquareBox() {
    const [size, setSize] = useState(500);
    const [squares, setSquares] = useState([
        { x: 0, y: 0 },
        { x: size / 2, y: 0 },
        { x: 0, y: size / 2 },
        { x: size / 2, y: size / 2 },
    ]);

    const handleClick = (index) => {
        if (size <= 10) {
            return;
        }

        const newSquares = [
            ...squares.slice(0, index),
            ...squares.slice(index + 1),
            { x: squares[index].x, y: squares[index].y },
            { x: squares[index].x + size / 4, y: squares[index].y },
            { x: squares[index].x, y: squares[index].y + size / 4 },
            { x: squares[index].x + size / 4, y: squares[index].y + size / 4 },
        ];

        setSquares(newSquares);
        setSize(size / 2);
    };

    return (
        <div style={{ position: 'relative', width: size, height: size, backgroundColor: 'gray' }} onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            for (let i = 0; i < squares.length; i++) {
                const square = squares[i];
                if (x >= square.x && x <= square.x + size / 2 && y >= square.y && y <= square.y + size / 2) {
                    handleClick(i);
                    break;
                }
            }
        }}>
            {squares.map((square, index) => (
                <div key={index} style={{ position: 'absolute', left: square.x, top: square.y, width: size / 2, height: size / 2, backgroundColor: 'white', border: '1px solid black' }} />
            ))}
        </div>
    );
}

export default SquareBox;
