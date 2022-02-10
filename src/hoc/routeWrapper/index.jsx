import {
    Header
} from '../../components'
import { StarryBG } from '../../module'
import './styles.scss'

const Wrapper = ({ children, page }) => {
    return <>
        {page !== 'about' && <Header/>}
        <StarryBG/>
        <section className={page === 'about' ? '' : 'pageWrapper'}>{children}</section>
    </>
}

export default Wrapper