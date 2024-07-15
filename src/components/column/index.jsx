import './index.css'


const COLUMN_STYLE = [
    {
        id: 1,
        image: "./all/img/rustic.jpg",
        title: "Rustic",
        description: "Rustic interior design represents a natural, rough, aged, and casual design style. The category is broad and incorporates a range of variations on the style, including Tuscan, coastal, cottage and modern rustic.Most things came straight from the earth and, therefore, had a naturally organic and rustic nature. In this traditional sense, rustic design might seem heavy and dark. Today, however, a more contemporary rustic style has emerged with a fresh and light aesthetic.raw wood is one of the most common materials used to create a rustic style interior. This can be incorporated into your space with individual pieces of furniture and in the form of ceiling beams, and wood trims around doors, windows and fireplaces.",
    },
    {
        id: 2,
        image: './all/img/scandinavian-interior.jpg',
        title: 'Scandinavian',
        description: 'The Scandinavian style of interior design originated in the 1950s and largely evolved from five Nordic influences, namely Norway, Sweden, Finland, Iceland and Denmark. This modern look has grown in popularity over the years with the immense contributions of Ingvar Kamprad (Founder-Ikea), Arne Jacobsen, Hans Wegner, Alvar Aalto and Eero Arnio, all of whom are talented Scandinavian designers. The style is also known for its attractiveness, functionality and simplicity.',
    },
    {
        id: 3,
        image: './all/img/nordic-interiordesign.jpg',
        title: 'Nordic',
        description: 'Scandinavian design expresses its beauty in a simple, functional and warm decorating style, which mixes whites, neutral colours, and natural woods. Simple lines are combined with a clean and fresh aesthetic to create cosy and light interiors.However, there are also subtle differences between the two styles. Some designers feel that Scandinavian design is more minimalist with functionality at its core, while Nordic design is more homely and influenced by traditional workmanship and crafts. ',
    },
    {
        id: 4,
        image: './all/img/swedish-interiordesign.jpg',
        title: 'Swedish',
        description: 'Swedish design is often associated with clean functionality and modern, innovative stylings. Its aesthetic and values stem from the functionalism movement that first emerged in Berlin in the early 20th century. The beauty of less is more is a central concept. Every line has to be considered and the quality of material and craftsmanship has to be beyond reproach. Swedish designers tend to draw inspiration from the nature that surrounds them, not only in terms of the materials they use but as the muse for their creations.',
    },
    {
        id: 5,
        image: './all/img/Gustavian.jpg',
        title: 'Gustavian',
        description: 'When the future King Gustav III of Sweden returned from an extended stay at Versailles in 1771, he brought home with him a love of neoclassical style. It’s easy to confuse Gustavian decor with French neoclassicism and even rococo: The furniture boasts fluted legs, scalloped aprons, and carved detailing; chandeliers and mirrors glint with gold gilt. But the Swedes favored whitewashed woods and pale hues, rather than dark wood and jewel-tone colors, to compensate for the lack of sunlight during the long northern winters. And in keeping with a Scandinavian appreciation of simplicity, rich damasks and opulent tapestries were typically replaced with solid linen or cheery checked upholstery.',
    },
    {
        id: 6,
        image: './all/img/industrial-interior-design-2.webp',
        title: 'Industrial',
        description: 'Industrial interior design is the perfect synthesis of form and function. Inspired by the raw framework in factories, this style usually embraces concealed elements like bricks and concrete, wiring, pipes, ducting, etc.The beauty of industrial design lies in embracing the imperfections, wear and tear, and weathering seen in the materials and finishes. It is the most unpretentious style, laying bare all its rawness for the world to see and celebrate.',
    },
    {
        id: 7,
        image: './all/img/urban-3.jpg',
        title: 'Urban',
        description: 'Urban and Rustic are two opposite design styles that you might think could never go together, but that’s not the case. As you can see, these two very distinct styles do a phenomenal job at complimenting each other when you mix them together to create an Urban Rustic interior design. The creative use of metal and concrete, organic lines, and interesting shapes make it easy for urban designers to create an exciting look for any home. ',
    },
    {
        id: 8,
        image: './all/img/loft.webp',
        title: 'Loft',
        description: 'A loft is a living space made inside a former industrial building. Lofts feature open floor plans with concrete floors, high ceilings, and large windows for natural light. There are two types of lofts: hard and soft. Hard lofts, also known as true lofts, are traditional loft spaces inside renovated commercial buildings with brick walls and exposed ductwork. This style of hard loft grew in popularity with artists in New York City as spaces to live and work',
    },
    {
        id: 9,
        image: './all/img/Bohemian-Interior-Design-1.jpg',
        title: 'Bohemian',
        description: 'When you hear the word boho, if your mind immediately jumps to the perfectly undone (yet totally done) rooms inside an Anthropologie catalog, you would not be wrong.But you also wouldnot have the whole picture. Bohemian design is something that everyone thinks they know like the back of their hand, and while you are probably right about what, exactly, it looks like, there is a lot about the design is backstory that most people are not so familiar with.Bohemian design is generally inspired by those who lead a free-spirited, norm-defying life, like travelers, writers, artists, etc. "What we now understand as "bohemianism" from a design perspective emerged from early nineteenth century France, when artists moved into the lower-rent Romani (gypsy) areas of Paris, in order to seek alternatives to bourgeois expectations.',
    },
    {
        id: 10,
        image: './all/img/Art-Nouveau-Interior-Design-1.jpg',
        title: 'Art Nouveau',
        description: 'Art Nouveau interior design was popular in the United States and Europe from 1890 to 1910. It got its start in Britain during the Arts and Crafts movement. One of its first uses was by designer William Morris who created floral textile designs. The style took off and became a collaboration of architecture and interior design.The Art Nouveau designs drew inspiration from natural forms, often mimicking the curves in flowers and trees. Art Nouveau was elegant, and in addition to the wildlife-inspired features, designers looked to incorporate modern materials of the time, like concrete, glass, iron, and ceramics.In Art Noveau’s interior design, nature influenced all aspects, and each element had a sense of movement, sometimes referred to as “whiplash” lines. Because of the intricacy of these designs, the style was cost-prohibitive. While the movement was meant to be enjoyed by everyone, rich and poor, it was more often favored by the wealthy, who used it as a status symbol.',
    },
    {
        id: 11,
        image: './all/img/Art_Deco_Interior_Design_2.webp',
        title: 'Art Deco',
        description: 'Art deco interior design is a decorative art style that originated in France in the 1920s and flourished internationally in the 1930s and 1940s. It is famous today because of its versatility as it can be adapted to various styles and spaces, incorporated into a modern, minimalist design, or used to add glamour to a more traditional space. Additionally, art deco remains popular because of its timeless elegance and how it seamlessly blends modern and traditional design elements. The use of rich materials, such as marble, brass, and exotic woods, gives an air of luxury, while the bold geometric shapes and streamlined design create a sense of modernity. ',
    },
    {
        id: 12,
        image: './all/img/Neoclassical-style-2.jpg',
        title: 'Neo Classic',
        description: 'Neoclassical interior design style combines the elegance of classic style with modern lines. That is why many homeowners want to choose this style for their living room interior. One of the prominent features of Neoclassical style is its sizable interior in a large space. It’s also the biggest challenge when bringing neoclassical style into living room space of the tube house as this type of house is usually narrow in width and long in depth.To overcome limitations of width, the living room should be heightened to highlight delicate decorative lines in the ceiling and walls.',
    },
    {
        id: 13,
        image: './all/img/moroccan-4.jpg',
        title: 'Moroccan',
        description: 'Moroccan interior design is distinct due to its diverse influences from the countrys long and diverse history; the two main factors which have impacted Moroccan style are religion and external forces occupying the country.These influences range from Ancient Roman architecture to modern designs, and are deeply rooted in Moroccos African and Islamic heritages. This made wool an important part of Moroccan design, as it is used in rugs and soft, plushy floor cushions. They are also heavily involved in artisanal arts like pottery, jewelry, and weaving, and the designs carry over into Moroccan interiors through the use of metals, traditional amulet carvings, and African designs. The group also carries influences from Islam and spirituality. Interior details like softness and curved archways come from Moroccos Islamic culture.Their architectural details often use continuous abstract patterns, geometric shapes, and animal sculptures, which reflect Islams taboo of worshiping icons. The Islamic influence also incorporated Portuguese-inspired outdoor gardens.',
    },
    {
        id: 14,
        image: './all/img/persian-interior-design-3.jpg',
        title: 'Persian Style',
        description: 'One of the very first things that amaze tourists in Iran or even one of the reasons people decide to visit Iran is its magnificent traditional houses. No matter if you are an architecture enthusiast or not, you will be mesmerized by the ingenuity of these ancient houses. The ingenuous and eco-friendly design in which the house was kept warm during cold winters and pleasant in hot summer days are so shocking. In general, they are not just a house. They are indeed a precise reflection of rich Persian culture, lifestyle, attitudes, principals, and religion. That is why visiting a traditional house in Iran is a MUST; so that you would be able to deep into people’s lives and culture and gain a better understanding of how might a local live in Iran.',
    },
    {
        id: 15,
        image: './all/img/gothic-4.jpg',
        title: 'Gothic',
        description: 'Gothic architecture, architectural style in Europe that lasted from the mid-12th century to the 16th century, particularly a style of masonry building characterized by cavernous spaces with the expanse of walls broken up by overlaid tracery. Gothic design is often characterized by dark colors, embellishments, moldings, and ornate details. It also tends to be less ornate than the Victorian gothic style, with less furniture and fewer accessories. One of the critical features of the modern gothic style is its emphasis on light and shadow. This can be seen in the use of contrasting colors in rugs and tapestries to create drama and intrigue. Sconces are also popular in the modern gothic style, as they can add a touch of elegance and glam while also providing light that casts shadows on the wall. ',
    },
    {
        id: 16,
        image: './all/img/baroque-1.jpg',
        title: 'Baroque',
        description: 'Baroque interior design originates from the Baroque era, which began in 17th-century Italy and lasted into the mid-18th century. But the Baroque period wasn’t only about interior design and architecture – it influenced music, art, and culture. Baroque architecture and interior design developed in the 1600s in Italy. At the time, there was a reformation against the Catholic Church. In an attempt to counter that reformation, the Catholic Church began designing buildings that evoked power and beauty and inspired a sense of The first Baroque structures were intricate, with domes, ceiling carvings, and a sense of grandeur. In the beginning, Baroque-style buildings were only for churches and religious places, In France, the Baroque style made its way to the monarchy. It also spread through Latin America, Germany, Austria, and Czechia. While Baroque designs remained one that architects used for churches rather than residences, the details changed form depending on location.',
    },
    {
        id: 17,
        image: './all/img/rococco-7.jpg',
        title: 'Rococo',
        description: 'The Rococo first emerged in France during the 1720s and 30s as a style developed by craftspeople and designers rather than architects, which explains why it is found primarily in furniture, silver and ceramics.Rococo takes its name from the French word "rocaille", which means rock or broken shell – natural motifs that often formed part of the designs, along with fish and other marine decorations. The acanthus leaf (Acanthus mollis), or rather a heavily stylised version of it, was also a signature motif. Another key feature of the design is its curved asymmetric ornamentation, where its forms often resemble the letters "S" and "C", and where one half of the design does not match the other.',
    },
    {
        id: 18,
        image: './all/img/Renaissance-3.jpg',
        title: 'Renaissance',
        description: 'Renaissance style in interior design refers to a period of furniture and home decor popular from the 13th century to the 17th century. The designs were heavily influenced by classical art, especially that of Michelangelo, Raphael, and other Italian artists from this era.This style often draws inspiration from mythological or biblical figures, with ornate details and carved elements crafted in walnut, the wood of choice for many Renaissance-style pieces. The furniture was true to its purpose and featured functional elements like intricate doors, drawers, and storage compartments.',
    },
    {
        id: 19,
        image: './all/img/roman-design.jpg',
        title: 'Roman',
        description: 'Roman art is known for sculpture in bronze and marble, painting in the form of murals, frescos, portraiture and vase-painting, and architectural masterpieces such as its amphitheatres and domes. It was also known for its decorative arts, which included metalwork, glass work, mosaic and coins. ',
    },
    {
        id: 20,
        image: './all/img/modern2.jpg',
        title: 'Modern',
        description: 'Modern design is an interior design style characterized by a monochromatic color palette, clean lines, minimalism, natural materials, and natural light. It refers specifically to a historical aesthetic movement that took place during the early to mid-twentieth century.Modern design is rooted in modernism, the turn-of-the-century movement characterized by an emphasis on abstract thinking, functionality, and stark, simple forms. Modern design is rooted in modernism, the turn-of-the-century movement characterized by an emphasis on abstract thinking, functionality, and stark, simple forms.',
    }
]


function Column() {


    return (
        <>

            <section className='main-card-column row justify-content-center'>
                {
                    COLUMN_STYLE.map(item => {
                        return <div className='card-column col-12 col-md-3'>
                            <img src={item.image} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    })
                }
            </section>

        </>
    )
}



export default Column;