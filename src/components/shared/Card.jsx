

const Card = ({ children, reverse }) => {
  return (
    <div className={`card ${reverse  && 'reverse'}`}>{ children }</div>

  )


// Card.propTypes = {
//     children: PropTypes.node.isRequired
// }

  }

export default Card