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

         
        </div>
      </nav>
    </>
  );
  
}

export default Navbar;
