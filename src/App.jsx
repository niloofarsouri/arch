import { useState } from 'react'
import './bootstrap-5.1.3-dist/bootstrap-5.1.3-dist/css/bootstrap.css'
import './App.css'
import Header from './components/header'
import Card from './components/card'
import Motion from './components/motionSlide'
import Slide from './components/slide'
import Column from './components/column'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className='second-slide'>
        <p><i>Architecture is the art and technique of designing and building, as
          distinguished from the skills
          associated with construction. It is both the process and the product of sketching,
          conceiving, planning, designing, and constructing buildings or other structures. The term
          comes from Latin architectura; from Ancient Greek ἀρχιτέκτων (arkhitéktōn) 'architect'; from
          ἀρχι- (arkhi-) 'chief', and τέκτων (téktōn) 'creator'. Architectural works, in the material form
          of buildings, are often perceived as cultural symbols and as works of art. Historical
          civilizations are often identified with their surviving architectural achievements.</i>
        </p>
      </div>


      <Card />

      <Motion />

      <Slide />

      <Column />

      <Footer />

    </>
  )
}

export default App;