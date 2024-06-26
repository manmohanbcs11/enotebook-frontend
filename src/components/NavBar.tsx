import { NavLink, useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand mx-3" to="/">eNotepad</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
            </ul>
            {localStorage.getItem('token') ? <button className="btn btn-primary mx-1" type="submit" onClick={handleLogout}>Logout</button> :
              <form className='d-flex'>
                <NavLink className='btn btn-primary mx-1' to="/login" role="button">Login</NavLink>
                <NavLink className='btn btn-primary mx-1' to="/signup" role="button">Signup</NavLink>
              </form>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}