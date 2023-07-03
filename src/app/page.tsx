'use client'

import { useEffect, useRef, useLayoutEffect } from "react";


import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About"
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work/Work";
import { useGlobalContext } from "@/contexts/useGlobalContext";



export default function Home() {
const smoothWrapRef = useRef<HTMLDivElement>(null!)
const cursorElementRef = useRef<HTMLDivElement>(null!)
const {clientX, clientY, isCursorHide} = useGlobalContext()
  
useLayoutEffect(() => {
  
//   console.clear()
// console.log(isCursorHide)

//   if(!isCursorHide){
//     cursorElementRef.current.style.width = '0px';
//     cursorElementRef.current.style.height = '0px';
//   }else{
//     cursorElementRef.current.style.width = '20px';
//     cursorElementRef.current.style.height = '20px';
//   }







}, [isCursorHide])
  
  useLayoutEffect(() => {




    let scrollOffset = 0;
    // const smoothWrap = document.querySelector('#smooth-wrapper');
    const body = document.body;
    const scrollSpeed = 0.10;


    function scroller() {
      const maxHeight = Math.floor(smoothWrapRef.current.getBoundingClientRect().height - 1);
      body.style.height = maxHeight + 'px';
    // window.pageYOffset
      scrollOffset += (window.scrollY - scrollOffset) * scrollSpeed;
      smoothWrapRef.current.style.transform = `translate3D(0,-${scrollOffset}px,0)`;
     
    }



  function tick() {
    requestAnimationFrame(tick)
    scroller()
  }
  // requestAnimationFrame(tick)
  tick();


  }, [smoothWrapRef])



  useLayoutEffect(() => {


// function handleMoveCursor(event: PointerEvent){
//       console.log()
// }


//   window.addEventListener('pointermove', handleMoveCursor)






      // move cursor element
      
      cursorElementRef.current.style.transform = `translate3d(${clientX - 10}px, ${
          clientY - 10
        }px, 0px)`;

      // console.log('clientXXXX', clientX)
      // console.log('clientYYYY', clientY)

      // cursorElementRef.current.style.top = `${clientY}px`;
      // cursorElementRef.current.style.left = `${clientX}px`;


      //   const heroLayerElement = document.querySelector('.hero-layer-container') as HTMLDivElement;
      //  const creativeElement = heroLayerElement.querySelector('.creative') as HTMLDivElement;
      //  const developerElement = heroLayerElement.querySelector('.creative') as HTMLDivElement;

        
      //  const creativeElementX = creativeElement.getBoundingClientRect().left;
      //  const creativeElementY = creativeElement.getBoundingClientRect().top;
      //  const creativeElementHeight = creativeElement.offsetHeight;
      //  const creativeElementWidth = creativeElement.offsetWidth;
   
  }, [clientX, clientY])
  return (
    <>
    <div ref={cursorElementRef} className="cursor-element"></div>
    <div ref={smoothWrapRef} id="smooth-wrapper">
      {/* <div id="smooth-content"> */}
    <header>
      {/* <Navbar /> */}
      <Hero />
    </header>
    <main>
    
      <About/>
        <Skills/>
      {/* <Work/> */}
      <Projects/>
    </main>
    <Footer/>
    {/* </div> */}
    </div>
    </>
  );
}
