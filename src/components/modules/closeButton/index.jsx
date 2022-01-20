import './styles.scss'

const CloseButton = ({ onClick }) => {
    return <p onClick={onClick} className="close-button"></p>
}

export default CloseButton