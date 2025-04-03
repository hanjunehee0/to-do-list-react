import { useMemo, useState } from 'react'

const render2 = 'render'
let render2leng = 0

const Memo = () => {
    const [items2, setItems2] = useState([0])
    const [items3, setItems3] = useState([0])
    render2leng++

    const total2 = useMemo(() => {
        console.log('onMemo', items2.length)
        let result = 0
        if (items2.length > 1 || items3.length > 1) {
            const start = performance.now()
            result = items2.length + items3.length > 2 ? items2.length + items3.length : 0
            const end = performance.now()
            console.log(`[useMemo] 실행 시간: ${(end - start).toFixed(5)}ms`)
        } else {
            result = 0
        }
        return result
    }, [items2, items3])

    const onClickButton2 = (p: number) => {
        if (p === 1) return setItems2([...items2, items2.length])
        if (p === 2) return setItems3([...items3, items3.length])
    }

    return (
        <article className="w-[50%]">
            <strong className="block max-w-xs truncate">{render2 + render2leng}</strong>
            <p>
                1번 클릭 수 : {items2.length - 1}, 2번 클릭 수 : {items3.length - 1}, 전체 클릭 수 :
                {total2 !== 0 ? total2 - 2 : 0}
            </p>
            <div className="flex gap-[20px]">
                <button
                    className="px-[15px] py-[8px] border-1 border-b-black"
                    onClick={() => onClickButton2(1)}
                >
                    Click 1
                </button>
                <button
                    className="px-[15px] py-[8px] border-1 border-b-black bg-black text-white"
                    onClick={() => onClickButton2(2)}
                >
                    Click 2
                </button>
            </div>
        </article>
    )
}

export default Memo
