import Image from '@/assets/images/logo.png'

const index = () => {
    return (
        <h1>
            <img className="block max-w-[168px] w-[100%]" src={Image} alt="헤더_로고" />
        </h1>
    )
}

export default index
