import './index.css'



function Motion() {



    return (
        <>

                <div className="container d-none d-md-block">


                    <div className="slide_third d-flex justify-content-between p-5">

                        <div className="slide_third--sub1 d-none d-md-block">
                            <p className="p-2 m-5"><i>An architectural style is a set of characteristics
                                and features that make a
                                building or structure notable or historically identifiable. It is a sub-class of style in
                                the visual arts generally, and most styles in architecture relate closely to a wider
                                contemporary artistic style.</i></p>
                        </div>

                        <div className="slide_third--sub2 d-none d-md-block">
                            <img src="./all/img/stylist.jpg" />

                            <div className="motion motion_first">
                                <img src="./all/animation img/rococo1.jpg" />
                            </div>
                            <div className="motion motion_second">
                                <img src="./all/animation img/rococo2.jpg" />
                            </div>
                            <div className="motion motion_third">
                                <img src="./all/animation img/rococo5.jpg" />
                            </div>
                            <div className="motion motion_fourth">
                                <img src="./all/animation img/rococo6.jpg" />
                            </div>
                            <div className="motion motion_fifth">
                                <img src="./all/animation img/rococo7.jpg" />
                            </div>

                        </div>

                    </div>


                </div>



            {/* responsive mode */}

            <div className="fourth-slide-responsive d-md-none m-auto">
                <img src="./fourth-slide/baroque.jpg" />
                <p><i>An architectural style is a set of characteristics
                    and features that make a
                    building or structure notable or historically identifiable. It is a sub-class of style in
                    the visual arts generally, and most styles in architecture relate closely to a wider
                    contemporary artistic style.</i></p>
            </div>

            {/* responsive mode */}

        </>
    )
}




export default Motion;