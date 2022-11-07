import {use} from "react"

//reactServer component
function Page() {
    const a = use(dataCheck())
    return (
        <div>메인페이지{a.todo}</div>

    )
}

export async function dataCheck() {
    const res = await fetch('https://dummyjson.com/todos/1'
    //, {cache: 'no-store'}// = getServerSideProps()
    )
    const data = await res.json()
    return data
}

export default Page