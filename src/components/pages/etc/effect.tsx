import { useEffect, useState } from 'react'

let render = 'render'
const Effect = () => {
    const [items, setItems] = useState([0])
    const [items1, setItems1] = useState([0])
    const [total, setTotal] = useState(0)
    render += '| render'
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
        <article>
            <strong>{render}</strong>
            <p>
                1번 클릭 수 : {items.length - 1}, 2번 클릭 수 : {items1.length - 1}, total :{' '}
                {total - 2}
            </p>
            <button onClick={() => onClickButton(1)}>Click 1</button>
            <button onClick={() => onClickButton(2)}>Click 2</button>
        </article>
    )
}

export default Effect
