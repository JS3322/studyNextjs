import type { NextPage } from 'next'
import App from './component/scroller/App'


function Background() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>list</div>
            <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>cleancdoe</div>
        </div>
    )
}

const Home: NextPage = () => {
    return (
        <><App/><Background/></>
    )
}

export default Home

