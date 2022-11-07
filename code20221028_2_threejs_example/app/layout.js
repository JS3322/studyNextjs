'use client'
import Page from '../component/scroll/page'
import Link from "next/link";
import "../styles/bg.css"


function Background() {

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>

            <Link href="https://log.cleancode.kr/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
                CLEANCODE.KR
            </Link>
            <Link href={"/"} style={{ position: 'absolute', bottom: 40, left: '50%', fontSize: '13px' }}>
                link
            </Link>
            <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>© 2022 Cleancode. All Rights Reserved.</div>
        </div>
    )
}

function Home({ children }) {
    return (
        <html>
            <head></head>
            <body>

                <Page />
                <Background />
                {children}
            </body>
        </html>
    )
}

export default Home