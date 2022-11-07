'use client'
import React, {use, useRef, useEffect} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Stars} from "@react-three/drei";
import {Physics, usePlane, useBox, useRaycastVehicle, useCylinder} from "@react-three/cannon";
import "../../styles/bg.css"



function Box() {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));

    return (
        <mesh
            onClick={() => {
                api.velocity.set(0, 2, 1);
            }}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
}

function Box_custom() {
    const [ref, api] = useBox(() => ({ mass: 1, position: [2, 2, 2], rotation: [0.4, 0.2, 0.5], args: [0.25, 2, 0.25]  }));
    return (
        <mesh
            ref={ref}

        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="blue"  />
        </mesh>
    );
}

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    );
}

function App() {
    return (
        <Canvas style={{ position: 'absolute', top: 0, left: 0,  width: '100%', height: '70%' }}>
            {/*<OrbitControls />*/}
            {/*<Stars />*/}
            <ambientLight intensity={0.5} />
            {/*<spotLight position={[10, 15, 10]} angle={0.3} />*/}
            {/*물리 적용*/}
            <Physics>
                {/*<Pillar/>*/}
                <Box />
                <Box_custom/>
                <Plane />
            </Physics>
        </Canvas>
    )
}

export default App