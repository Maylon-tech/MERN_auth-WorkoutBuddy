import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navbar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }



  return (
     <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>

        <nav className="">
          <div className="">
            <button
              className=""
              onClick={handleClick}
            >
              Log Out
            </button>
          </div>
          <div className="">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
