import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from './ScrollControls'

function Image(props) {
    const ref = useRef()
    const group = useRef()
    const data = useScroll()
    useFrame((state, delta) => {
        group.current.position.z = THREE.MathUtils.damp(group.current.position.z, Math.max(0, data.delta * 50), 4, delta)
        ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, Math.max(0, 1 - data.delta * 1000), 4, delta)
    })
    return (
        <group ref={group}>
            <ImageImpl ref={ref} {...props} />
        </group>
    )
}

function Page({ m = 0.4, urls, ...props }) {
    const { width } = useThree((state) => state.viewport)
    const w = width < 10 ? 1.5 / 3 : 1 / 3
    return (
        <group {...props}>
            <Image position={[-width * w, 0, -1]} scale={[width * w - m * 2, 5, 1]} url={urls[0]} />
            <Image position={[0, 0, 0]} scale={[width * w - m * 2, 5, 1]} url={urls[1]} />
            <Image position={[width * w, 0, 1]} scale={[width * w - m * 2, 5, 1]} url={urls[2]} />
        </group>
    )
}

function Pages() {
    const { width } = useThree((state) => state.viewport)
    return (
        <>
            <Page position={[-width * 1, 0, 0]} urls={['/screen/temp_11.PNG', '/screen/temp_12.PNG', '/screen/temp_13.PNG']} />
            <Page position={[width * 0, 0, 0]} urls={['/screen/temp_14.PNG', '/screen/temp_15.PNG', '/screen/temp_11.PNG']} />
            <Page position={[width * 1, 0, 0]} urls={['/screen/temp_11.PNG', '/screen/temp_12.PNG', '/screen/temp_13.PNG']} />
            <Page position={[width * 2, 0, 0]} urls={['/screen/temp_14.PNG', '/screen/temp_15.PNG', '/screen/temp_11.PNG']} />
            <Page position={[width * 3, 0, 0]} urls={['/screen/temp_11.PNG', '/screen/temp_12.PNG', '/screen/temp_13.PNG']} />
            <Page position={[width * 4, 0, 0]} urls={['/screen/temp_14.PNG', '/screen/temp_15.PNG', '/screen/temp_11.PNG']} />
        </>
    )
}

export default function App() {
    return (
        <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
                <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
                    <Scroll>
                        <Pages />
                    </Scroll>
                    <Scroll html>
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '-75vw' }}>Human</h1>*/}
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '25vw' }}>Academy</h1>*/}
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '125vw' }}>Edu</h1>*/}
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '225vw' }}>Clean</h1>*/}
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '325vw' }}>Code</h1>*/}
                        {/*<h1 style={{ position: 'absolute', top: '20vh', left: '425vw' }}>JS</h1>*/}
                    </Scroll>
                </ScrollControls>
                <Preload />
            </Suspense>
        </Canvas>
    )
}
