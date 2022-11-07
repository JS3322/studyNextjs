import React, { useRef } from 'react';
import '../../styles/intro0001/App.css';

interface CanvasProps {
    width: number;
    height: number;
}

function Page({width, height}: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    return (
        <div className="App">
            <canvas ref={canvasRef} height={height} width={width} className="canvas"/>
        </div>
    )
}

App.defaultProps = {
    width: 800,
    height: 600
};

export default App;