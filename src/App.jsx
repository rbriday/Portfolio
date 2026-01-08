import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import MyWork from "./components/MyWork/MyWork"
import Navbar from "./components/Navbar/Navbar"
import WhatIDo from "./components/WhatIDo/WhatIDo"
import WorkProcess from "./components/WorkProcess/WorkProcess"


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <WorkProcess></WorkProcess>
      <MyWork></MyWork>
      <WhatIDo></WhatIDo>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
