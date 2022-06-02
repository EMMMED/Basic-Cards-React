import './App.css';
import Testimony from './components/Testimony'
import Emmmmed from './img/emmmed.png'
// Importacion nombrada import { Testimony } from 'lorem...'}

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Primeras Tarjetas en React by Emmmed</h1>
        <img src={Emmmmed} alt="" height='120px' />
        <Testimony 
          name='Eva'
          position='Ingeniera de Software'
          country='Sueacia'
          company='Spotify'
          img=''
          about='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica'
        />
        <Testimony 
          name='Sara'
          position='UX/UI Designer'
          country='Spain'
          company='Netflix'
          img=''
          about='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica'
        />
        <Testimony 
          name='Shawn'
          position='Tech Lead'
          country='Canada'
          company='Nu Company'
          img=''
          about='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica'
        />
      </div>
    </div>
  )
}

export default App;
