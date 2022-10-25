import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className='about'>
      <Card>
      <h1>About This Project</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version: 1.0.0</p>
      <Link to='/'>Back To Home</Link>
      </Card>
    </div>
  )
}

export default AboutPage