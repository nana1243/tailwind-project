import { useState } from 'react'
import {twMerge} from "tailwind-merge";
import fruit from './assets/images/fruit.jpg';
import Lamp from "./components/Lamp/Lamp";


function App() {
  const isRed = false;

  return (
    <>
        <h1 className="michroma-regular">
            안녕하세요! Welcome to my React App!
        </h1>
        {/*<div className="flex flex-col item-center justify-center-min-h-screen">*/}
        {/*    <button className="button">Click Me! </button>*/}
        {/*    <button className={twMerge(`btns`,  isRed && `bg-rose-500`)}>Click Me! </button>*/}
        {/*</div>*/}
        {/*<img src="/fruit.jpg"/>*/}
        {/*<img src={fruit}/>*/}
        <Lamp/>
    </>
  )
}

export default App
