
import './index.css'

const SECOND_SLIDE = [
    {
        id: 1,
        title: "architecture",
        description: "A general term to describe buildings and other physical structures. The art and science of designing buildings and (some) nonbuilding structures. The style of design and method of construction of buildings and other physical structures. A unifying or coherent form or structure.",
        image: './second-slide/architecture.jpg',
    },
    {
        id: 2,
        title: "landscape architecture",
        description: "Landscape architecture involves the planning, design, management, and nurturing of the built and natural environments. With their unique skill set, landscape architects work to improve human and environmental health in all communities.",
        image: './second-slide/landscape.jpg',
    },
    {
        id: 3,
        title: "Interior Architecture",
        description: "Generally referred to as the spatial art of environmental design, interior architecture also refers to the process by which the interiors of buildings are designed to address all aspects of the human use of their structural spaces. Put simply, interior architecture is the design of an interior in architectural terms.",
        image: './second-slide/interior.jpg',
    },
    {
        id: 4,
        title: "Lighting architecture",
        description: "Architectural lighting design is a field of work or study that is concerned with the design of lighting systems within the built environment, both interior and exterior. It can include manipulation and design of both daylight and electric light or both, to serve human needs",
        image: './second-slide/light.jpg',
    }
]

function Card({ image, title, description }) {

    // const { image, title, description } = props;

    return (
        <>
            <section className='main-card d-none d-md-flex'>
                {
                    SECOND_SLIDE.map(item => {
                        return <div className='card' >
                            <img src={item.image} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>

                        </div>
                    })
                }
            </section >

            <section className='main-card-responsive d-block d-md-none m-auto'>
                {
                    SECOND_SLIDE.map(item => {
                        return <div className='card-responsive'>
                            <img src={item.image} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    })
                }
            </section>
        </>
    )
}


export default Card;