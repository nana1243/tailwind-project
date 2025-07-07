import { useState } from 'react'
import {twMerge} from "tailwind-merge";

function App() {
  const isRed = false;

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <div className="flex flex-col item-center justify-center-min-h-screen">
            <button className="button">Click Me! </button>
            <button className={twMerge(`btns`,  isRed && `bg-rose-500`)}>Click Me! </button>
        </div>
    </>
  )
}

export default App
