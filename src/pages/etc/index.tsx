import Effect from '@/components/pages/etc/effect'
import Memo from '@/components/pages/etc/memo'

const AboutPage = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl">ETC PAGE</h2>
            <section className="flex gap-[14px] border-2 p-[15px] justify-stretch">
                <Effect />
                <hr />
                <Memo />
            </section>
        </div>
    )
}
export default AboutPage
