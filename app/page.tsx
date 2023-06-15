"use client"
import React from 'react'
import Header from "../components/header";
import Gridhead from '../components/header1';
import Gridmatrix from "../components/gridmatrix"
import Texthead from "../components/Header2"
import Lowergrid from "../components/Lowergrid"
import DragandDrop from "../components/DragandDrop"
function page() {
  
const questionList = [
    {description: '1. Set the starting position:Drag and place the sprite on the stage to set its initial position. Click and drag the sprite to position it to where you want it to start.', key: 0},
    {description: '2. Add movement blocks:In the block palette on the lest side of the screen, locate the "Motion" category. You will find blocks like "Move 10 Steps,""Turn 15 degrees,"and "Go to x:[] y[]." ', key: 1},
    {description: '3. Use the "Go to x:[] y:[]" block: Drag the "Go to x:[] y:[]" block into the scripting area. Set the x and y values of the block to the coordinates of the target position you want the sprite to move to. For example, if you want the sprite to move to position (200,100), set the x value to 200 and the y value to 100.', key: 2}
  ];

  return (
    <div>
      <Header />
      <div className='flex'>

        <div className='justify-center bg-gray-50 h-screen w-2/4'>
              <Texthead Learn="Learn"/>
              <ol className='mx-10 py-6'>
        {questionList.map(question => {
          return (
            <li className='py-3' key={question.key}>{question.description}</li>
          );
        })}
      </ol>
        </div>
        <div className=" bg-blue-950 w-screen">
          <Gridhead />
         <div className='flex'> 
         <Gridmatrix />
          <div className=' bg-gray-900 my-5 w-2/4'>
            <Texthead Learn="Instructions Implemented" />
    
            </div> 
            </div>
          <div className=' bg-blue-700 h-32 my-8 text-white'>
            <h1 className='mx-5 py-5'>Logic Panel</h1>
            <DragandDrop />
          </div>
          <Lowergrid />
        </div>

      </div></div>
  )
}

export default page;
