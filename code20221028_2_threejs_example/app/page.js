import {use} from "react"
import {dataCheck} from "../component/load_api/page";


import "../styles/bg.css"


//reactServer component
function Page() {
    const a = use(dataCheck())
    const graph0001 = {
        height: a.userId+'%'
    }
    const graph0002 = {
        height: ((100-a.userId)/3)+'%'
    }
    const graph0003 = {
        height: (((100-a.userId)/3)*1.5)+'%'
    }


    return (

        <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>{a.rps}</div>,
            <div className={"graph0001"} style={graph0001} >그래프1</div>
            <div className={"graph0002"} style={graph0002} >그래프2</div>
            <div className={"graph0003"} style={graph0003} >그래프3</div>


        </div>

    )
}
export default Page