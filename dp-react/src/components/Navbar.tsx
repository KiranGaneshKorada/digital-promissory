function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-2">
        <div className="container-fluid d-flex flex-row justify-content-between">
          <div>
            <h2 className="navbar-brand mx-0 my-0 px-0 py-0">
              Digital-Promissory
            </h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse d-flex justify-content-end ">
            <ul className="navbar-nav ">
              <li className="nav-item  mx-2">
                <p className="mb-0">About us</p>
              </li>
              <li className="nav-item mx-2">
                <p className="mb-0">Contact us</p>
              </li>
              <li className="nav-item mx-2">
                <p className="mb-0">Signup</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  
}

export default Navbar;
