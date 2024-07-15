import './index.css'
import NavBar from './navbar';


function Header() {


    return (
        <>

            <section className='main'>


                <div className='header-sky'>
                    <div className='main-header'>

                        <NavBar />

                    </div>
                </div>


                <p className='arch d-none d-md-block'>ARCHITECTURE</p>

                <div className='header-town'></div>
            </section>


        </>
    )
}


export default Header;