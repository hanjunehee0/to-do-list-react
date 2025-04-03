import { useEffect, useState } from 'react'

const render = 'render'
let renderleng = 0
const Effect = () => {
    const [items, setItems] = useState([0])
    const [items1, setItems1] = useState([0])
    const [total, setTotal] = useState(0)
    renderleng++
    useEffect(() => {
        console.log('onEffect')
        const start = performance.now()
        setTotal(items.length + items1.length)
        const end = performance.now()
        console.log(`[useEffect] 실행 시간: ${(end - start).toFixed(5)}ms`)
    }, [items, items1])

    const onClickButton = (p: number) => {
        if (p === 1) return setItems([...items, items.length])
        if (p === 2) return setItems1([...items1, items1.length])
    }

    return (
        <article className="w-[50%]">
            <strong className="block max-w-xs truncate">{render + renderleng}</strong>
            <p>
                1번 클릭 수 : {items.length - 1}, 2번 클릭 수 : {items1.length - 1}, 전체 클릭 수 :
                {total - 2}
            </p>
            <div className="flex gap-[20px]">
                <button
                    className="px-[15px] py-[8px] border-1 border-b-black"
                    onClick={() => onClickButton(1)}
                >
                    Click 1
                </button>
                <button
                    className="px-[15px] py-[8px] border-1 border-b-black bg-black text-white"
                    onClick={() => onClickButton(2)}
                >
                    Click 2
                </button>
            </div>
        </article>
    )
}

export default Effect
