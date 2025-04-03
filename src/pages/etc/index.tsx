import Effect from '@/components/pages/etc/effect'
import Memo from '@/components/pages/etc/memo'

const AboutPage = () => {
    return (
        <div>
            <h2>ETC PAGE</h2>
            <section className="flex gap-[14px] border-2">
                <Effect />
                <hr />
                <Memo />
            </section>
        </div>
    )
}
export default AboutPage
