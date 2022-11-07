import {use} from "react"
import {dataCheck} from "./load_api/page";
import {dataCheck as dataCheck2} from "./load_api2/page";

//reactServer component
function Page() {
    const a = use(dataCheck())
    const b = use(dataCheck2())
    return (
        
        <div>{a.todo}</div>,
        <div>test</div>,
        <div>{b.todo}</div>
    )
}
export default Page