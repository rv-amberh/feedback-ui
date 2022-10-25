import PropTypes from 'prop-types'

const Header = ({text}) => {
  return (
    <header>
    <div className = 'container'>
        <h2>{text}</h2>
        </div>
    </header>
  )
}

//component level state - data for that one componenet(navigation open and close state, isOpen for example)
//global or app level state - reusabale data that is spread across many components 

Header.defaultProps = {
  text: 'Feedback UI'
}


Header.propTypes = {
  text: PropTypes.string.isRequired
}






export default Header