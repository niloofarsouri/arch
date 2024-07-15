import './index.css'




function Footer() {


    return (
        <>

            <section className="container-fluid text-light final">

                <div className="row d-flex justify-content-between">
                    <div className="final--sub1 mt-2 col-12 col-lg-4">

                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                        </ul>

                    </div>

                    <div className="final--sub2 mt-3 d-none d-md-block col-12 col-lg-4">
                        <img src="./all/icons/icons8-github-white.svg" />
                        <img src="./all/icons/icons8-gmail-white.svg" />
                        <img src="./all/icons/icons8-twitter-white.svg" />
                    </div>

                    <div className="final--sub3 mt-3 col-12 col-lg-4">
                        <p>© 2023, Designed by Niloofar souri.</p>
                    </div>
                </div>

            </section>


        </>
    )
}



export default Footer;