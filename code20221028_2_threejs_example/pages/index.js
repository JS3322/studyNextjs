import App from './scroll/App'
import styles from '../styles/Home.module.css'

function Background() {
  return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <a href="https:/log.cleancode.kr/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
            CLEANCODE.KR
        </a>
        <a href="http://www.human.or.kr/" style={{ position: 'absolute', top: 40, left: 40, fontSize: '22px' }}>
            휴먼교육센터 사후관리반
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>20221024</div>
      </div>
  )
}

function Home() {
  return (
    <div className={styles.container}>
        <App />
        <Background />
    </div>
  )
}

export default Home
