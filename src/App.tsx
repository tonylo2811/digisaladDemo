import './style/app.css'
import {Banner} from './component/Banner';
import { About } from './component/About';
import { InBetweenSection } from './component/InBetweenSection';
import { Ingradients } from './component/Ingradients';
import { Experience } from './component/Experience';
import {Slider} from './component/Slider';
import { useRef } from 'react';


function App() {

  const aboutSectionInBetweenRef = useRef<any>();


  return (
    <div className="App">
      <Banner/>
      <About/>
      <Ingradients/>
      <Experience/>
      <Slider/>
    </div>
  );
}

export default App;
