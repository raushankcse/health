
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
    <div>THis is landing page</div>
    <Link  to="/">Home</Link>
    <Link  to="/about">about</Link>
    <Link  to="/contact">contact</Link>
     </>
    

  )
}

export default Landing;