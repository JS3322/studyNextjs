'use client'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'

function Images_position() {
  const { width, height } = useThree((state) => state.viewport)
  const position_data = useScroll()
  const module = useRef()
  useFrame(() => {
      module.current.children[0].material.zoom = 1 + position_data.range(0, 1 / 3) / 3
      module.current.children[1].material.zoom = 1 + position_data.range(0, 1 / 3) / 3
      module.current.children[2].material.zoom = 1 + position_data.range(1.16 / 3, 1 / 3) / 3
      module.current.children[3].material.zoom = 1 + position_data.range(1.15 / 3, 1 / 3) / 2
      module.current.children[4].material.zoom = 1 + position_data.range(1.23 / 3, 1 / 3) / 1
      module.current.children[5].material.zoom = 1 + position_data.range(1.8 / 3, 1 / 3) / 3
      module.current.children[5].material.grayscale = 1 - position_data.range(1.6 / 3, 1 / 3)
      module.current.children[6].material.zoom = 1 + (1 - position_data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={module}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/screen/IMG_5304.jpg" />
      <Image position={[2, 0, 1]} scale={3} url="/screen/IMG_6316.jpg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/screen/IMG_6635.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/screen/IMG_6841.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/screen/IMG_8288.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/screen/IMG_9219.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="/screen/IMG_5307.jpg" />
    </group>
  )
}

export default function Page() {
  return (
      //Canvas : 자바스크립트 동적 액션을 위한 도화지
    <Canvas gl={{ antialias: false }} dpr={[1, 1.3]}>
        {/*//Suspense : 특정 작업을 기다리는 태그이며 주로 비동기 컴포넌트를 감쌈*/}
        <Suspense fallback={null}>
            {/*//ScrollControls :*/}
        <ScrollControls damping={4} pages={3}>
          <Scroll>
            <Images_position />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '54vh', left: '1em' }}>Fix</h1>
            <h1 style={{ position: 'absolute', top: '112vh', left: '52vw' }}>Portfolio</h1>
            <h1 style={{ position: 'absolute', top: '207.2vh', left: '1.5vw', fontSize: '12vw' }}>Edu Communication</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  )
}
