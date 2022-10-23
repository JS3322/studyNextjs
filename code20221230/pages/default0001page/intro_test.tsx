// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// // import '../../styles/default0001page/styles.css'
// import * as three from 'three';
//
//
// const Cube = () => {
//     const cube = useRef<three.Mesh>();
//
//     useFrame(() => {
//         cube.current!.rotation.x += 0.01;
//         cube.current!.rotation.y += 0.01;
//     });
//
//     return (
//         <mesh ref={cube}>
//             <boxBufferGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color="#0391BA" />
//         </mesh>
//     );
// };
//
// const Scene = () => {
//     return (
//         <>
//             <gridHelper />
//             <axesHelper />
//             <pointLight intensity={1.0} position={[5, 3, 5]} />
//             <Cube />
//         </>
//     );
// };
//
// const view3D: ({}: {}) => void = ({}) => {
//
//     <Canvas>
//         <Scene />
//     </Canvas>
// };
//
//
// export default  view3D;