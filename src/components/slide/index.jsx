import './index.css'



function Slide() {


    return (
        <>
            <section className='main_slide'>



                {/* fourth slide */}
                <section className='container mb-5'>
                    <div className='slide_fourth d-flex justify-content-between'>

                        <div className='slide_fourth--sub1 p-4'>
                            <h1 className='mt-5'><i>What is architectural style?</i></h1>

                            <p><i>
                                Let’s start with the basics. What, exactly, is architectural style? Architectural style is
                                defined
                                as a
                                set of characteristics and features that make a building or other structure notable or
                                historically
                                identifiable.

                                Though specific elements may carry over into various styles, each specific architectural style
                                includes
                                a unique combination of elements such as form, aesthetics, method of construction, building
                                materials,
                                and regional character. The combination of elements is what makes it possible to differentiate
                                between
                                the various categories of architectural styles.</i></p>

                            <h2><i>What are the elements of architectural style?</i></h2>

                            <p><i>There are a lot of different elements that contribute to the
                                architectural
                                style of a structure.</i></p>

                            <h3 className='mt-3'><i>Building Materialss</i></h3>

                            <p><i>Historically, the materials used to build structures were whatever materials were
                                abundant in the area.
                                Wood, brick, and stone were the most common building materials for thousands of years.

                                As technology advanced, other types of building materials became popular, like steel, glass, and
                                concrete. Better technology also created studier materials that could be used to build taller
                                buildings.
                                Understanding what materials were used to build a structure can give you a lot of clues about
                                its
                                architectural style.</i></p>
                        </div>

                        <div className='slide_fourth--sub2'>
                            <img src='./all/img/colosseum.jpg' />
                        </div>

                    </div>
                </section>


                {/* fifth slide */}
                <section className='container'>
                    <div className='slide_fifth d-flex justify-content-between'>

                        <div className='slide_fifth--sub1'>
                            <img src='./all/img/art.jpg' />
                        </div>

                        <div className='slide_fifth--sub2 p-4'>
                            <h1><i>Age</i></h1>

                            <p><i>The time in which a structure was built is another key component of architectural style. This is
                                especially important because many elements of architecture tend to go in and out of style.

                                So, two buildings may appear to have a similar style, but if they were built in different eras,
                                they likely have subtle but important differences. For example, a building that was built in
                                Rome between 850 BC and 500 AD would likely be an example of Classical architecture, like the
                                Roman Colosseum. </i></p>

                            <p><i>However, a similar style building that was built later may be an example of Neoclassical or
                                Renaissance styles of architecture. Knowing the age and context of when a building was designed
                                and built is an important piece of the puzzle when it comes to understanding architectural
                                style.</i></p>
                        </div>

                    </div>
                </section>

                {/* sixth slide */}
                <section className='container'>
                    <div className='slide_fourth d-flex justify-content-between'>

                        <div className='slide_fourth--sub1 p-4'>
                            <h1 className='mt-5'><i>Structure Design</i></h1>
                            <p><i>
                                The design aesthetics of a structure are essential to its style. The design of a structure
                                includes understanding elements such as line, color, shape, mass, space, texture, and more.

                                A Classical building will be designed with absolute symmetry and strict mathematical principles,
                                as opposed to a Gothic structure that features elaborate details like pointed arches and ornate
                                decorations.

                                Every style of architecture has key features and components that define that particular style.
                                Understanding how the individual design elements contribute to the structure is crucial to
                                connecting with the architectural style of the building.</i></p>

                        </div>
                        <div className='slide_fourth--sub2'>
                            <img src='./all/img/pexels-kelly-lacy-3736487.jpg' />
                        </div>
                    </div>
                </section>

                {/* seventh slide */}
                <section className='container'>
                    <div className='slide_fifth d-flex justify-content-between'>

                        <div className='slide_fifth--sub1'>
                            <img src='./all/img/structure.webp' />
                        </div>

                        <div className='slide_fifth--sub2 p-4'>
                            <h1><i>Location</i></h1>
                            <p><i>Where a building is located has a significant effect on architectural style. To be effective, a
                                building design must take into account location-based factors such as climate, geography,
                                topography, site features, and more.

                                In order to create a safe and long-lasting structure, it’s imperative for architects to have an
                                intimate understanding of the location where a building will be built. A building that is in a
                                swampy area will require a much different design than one being built in a rocky area.
                                Structure designs must account for local weather conditions, potential natural disasters, and
                                more. Buildings should also be created to take advantage of naturally-occurring features like
                                natural light, spectacular views, and other elements.

                                In addition to physical attributes, the social and cultural norms of the location must also be
                                considered in order for the final structure to be useful in its purpose. In some cultures the
                                direction a building faces or the number of floors it has can be culturally significant, so it’s
                                vital that designers understand not only the land, but also the people for whom they’re
                                designing.
                            </i></p>
                        </div>

                    </div>
                </section>


            </section>
        </>
    )
}


export default Slide;