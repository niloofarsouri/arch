
import './index.css'



function NavBar() {


    return (
        <>

            <section className='navbar'>

                <div className='left-header'>

                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#">NiloofarSouri</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">architectural style</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Images</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>

                            </ul>

                        </div>
    
                    </nav>
                </div>


                <div className='right-header'>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark" type="submit">Search</button>
                    </form>
                </div>


                {/* <div className='right-header'>
                    <input placeholder='Search' />
                </div> */}

            </section>

        </>
    )
}



export default NavBar;