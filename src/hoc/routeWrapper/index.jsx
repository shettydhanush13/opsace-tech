import {
    Header
} from '../../components'
import { StarryBG } from '../../module'
import './styles.scss'

const Wrapper = ({ children }) => {
    return <>
        <Header/>
        <StarryBG/>
        <section className='pageWrapper'>{children}</section>
    </>
}

export default Wrapper