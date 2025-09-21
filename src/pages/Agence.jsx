import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger) // 👈 Important

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  // 👇 GSAP animation setup
  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -80%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className="parent">
      <div id="page1" className="py-1 flex justify-center">
        <div className="scale-92 origin-top">
          <div
            ref={imageDivRef}
            className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]"
          >
            <img
              ref={imageRef}
              className="h-full object-cover w-full"
              src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
              alt=""
            />
          </div>

          <div className="relative font-[font2]">
            <div className="lg:mt-[55vh] mt-[30vh]">
              <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
                Soixan7e <br /> Douze
              </h1>
            </div>
            <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
              <p className="lg:text-6xl text-xl leading-tight">
                Notre curiosité nourrit notre créativité. On reste humbles et on
                dit non aux gros egos, même le vôtre. Une marque est vivante.
                Elle a des valeurs, une personnalité, une histoire. Si on oublie
                ça, on peut faire de bons chiffres à court terme, mais on la tue
                à long terme. C’est pour ça qu’on s’engage à donner de la
                perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="page2" className="h-screen"></div>
    </div>
  )
}

export default Agence
