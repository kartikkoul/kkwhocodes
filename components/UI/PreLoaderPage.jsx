import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import classes from './PreLoaderPage.module.css';

function App() {

  const [showK, setShowK] = useState(false)
  const [dotAnimation, setDotAnimation] = useCycle("animation1", "animation2")

  useEffect(() => {
    const dotTimer = setTimeout(() => {
      setDotAnimation();
    }, 3000);
    const kTimer = setTimeout(()=>{
      setShowK(true)
    }, 3700)
    return () => {
      clearTimeout(dotTimer)
      clearTimeout(kTimer)
    }
  }, [])


  const logoVariants={
    before:{
      width: 100,
      y:"-10vw"
    },
    after:{
      width: 36,
      y:0,
      transition:{
        duration:2
      }
    }
  }

  const kVariant={
    before:{
      height: 100
    },
    after:{
      height:33,
      transition:{
        duration:2
      }
    }
  }

  const dotVariant={
    animation1:{
      height: [30, 8],
      transition:{
          duration:2
        }
    },
    animation2:{
      height:8,
      y:[null, -20, 0],
      transition:{
        type:"spring",
        ease:"easeInOut"
      }
    },
    exit:{
      opacity:0,
      y:"100vw"
    }
  }

  const enterKVariant = {
    before:{
      height: 24,
      opacity:0,
    },
    after:{
      opacity:1,
    }
  }

  const headlineVariants = {
    before:{
      
    },
    after:{
      transition:{
        delayChildren:2,
        staggerChildren:0.03
      }
    }
  }
  
  const h1Variants = {
    before:{
      opacity:0,
      y:"-2vw",
    },
    after:{
      opacity:1,
      y:0
    }
  }

  

 

  return (
    <div className={classes.preLoaderPage}>
      <div className={classes.branding}>
        <motion.div variants={headlineVariants} initial="before" animate="after" className={classes.headline}>
          <motion.h1 variants={h1Variants}>I&nbsp;</motion.h1>

          <motion.h1 variants={h1Variants}>i</motion.h1>
          <motion.h1 variants={h1Variants}>m</motion.h1>
          <motion.h1 variants={h1Variants}>a</motion.h1>
          <motion.h1 variants={h1Variants}>g</motion.h1>
          <motion.h1 variants={h1Variants}>i</motion.h1>
          <motion.h1 variants={h1Variants}>n</motion.h1>
          <motion.h1 variants={h1Variants}>e</motion.h1>
          <motion.h1 variants={h1Variants}>.&nbsp;</motion.h1>

          <motion.h1 variants={h1Variants}>I&nbsp;</motion.h1>

          <motion.h1 variants={h1Variants}>c</motion.h1>
          <motion.h1 variants={h1Variants}>r</motion.h1>
          <motion.h1 variants={h1Variants}>e</motion.h1>
          <motion.h1 variants={h1Variants}>a</motion.h1>
          <motion.h1 variants={h1Variants}>t</motion.h1>
          <motion.h1 variants={h1Variants}>e</motion.h1>
          <motion.h1 variants={h1Variants}>.&nbsp;</motion.h1>

          <motion.h1 variants={h1Variants}>I&nbsp;</motion.h1>

          <motion.h1 variants={h1Variants}>s</motion.h1>
          <motion.h1 variants={h1Variants}>o</motion.h1>
          <motion.h1 variants={h1Variants}>l</motion.h1>
          <motion.h1 variants={h1Variants}>v</motion.h1>
          <motion.h1 variants={h1Variants}>e</motion.h1>
          <motion.h1 variants={h1Variants}>.&nbsp;</motion.h1>
        </motion.div>
        <motion.div variants={logoVariants} initial="before" animate="after" className={classes.svgArea}>
          <motion.svg variants={kVariant} viewBox="0 0 47 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1" fill="white">
              <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M0 70.1719H12.8906V63.75L21.7969 51.9375L31.9688 70.1719H46.6875L30.0469 40.9688L46.6875 20.0625H31.9688L12.8906 44.25V0H0V70.1719Z"/>
            </mask>
            <motion.path d="M12.8906 70.1719V72.1719H14.8906V70.1719H12.8906ZM0 70.1719H-2V72.1719H0V70.1719ZM12.8906 63.75L11.2937 62.5459L10.8906 63.0805V63.75H12.8906ZM21.7969 51.9375L23.5435 50.9632L22.048 48.2823L20.1999 50.7334L21.7969 51.9375ZM31.9688 70.1719L30.2221 71.1462L30.7943 72.1719H31.9688V70.1719ZM46.6875 70.1719V72.1719H50.1291L48.4252 69.1817L46.6875 70.1719ZM30.0469 40.9688L28.4821 39.7232L27.6389 40.7826L28.3092 41.9589L30.0469 40.9688ZM46.6875 20.0625L48.2523 21.308L50.8356 18.0625H46.6875V20.0625ZM31.9688 20.0625V18.0625H30.999L30.3984 18.8239L31.9688 20.0625ZM12.8906 44.25H10.8906V50.0151L14.4609 45.4886L12.8906 44.25ZM12.8906 0H14.8906V-2H12.8906V0ZM0 0V-2H-2V0H0ZM12.8906 68.1719H0V72.1719H12.8906V68.1719ZM10.8906 63.75V70.1719H14.8906V63.75H10.8906ZM20.1999 50.7334L11.2937 62.5459L14.4876 64.9541L23.3938 53.1416L20.1999 50.7334ZM33.7154 69.1975L23.5435 50.9632L20.0503 52.9118L30.2221 71.1462L33.7154 69.1975ZM46.6875 68.1719H31.9688V72.1719H46.6875V68.1719ZM28.3092 41.9589L44.9498 71.162L48.4252 69.1817L31.7846 39.9786L28.3092 41.9589ZM45.1227 18.817L28.4821 39.7232L31.6117 42.2143L48.2523 21.308L45.1227 18.817ZM31.9688 22.0625H46.6875V18.0625H31.9688V22.0625ZM14.4609 45.4886L33.5391 21.3011L30.3984 18.8239L11.3203 43.0114L14.4609 45.4886ZM10.8906 0V44.25H14.8906V0H10.8906ZM0 2H12.8906V-2H0V2ZM2 70.1719V0H-2V70.1719H2Z" fill="white" mask="url(#path-1-inside-1)"/>
          </motion.svg>

          <AnimatePresence exitBeforeEnter> 
            {!showK && <motion.svg variants={dotVariant} animate={dotAnimation} exit="exit" className="dot" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path d="M19.3594 14.4062L22.126 15.5664L22.1325 15.5509L22.1388 15.5354L19.3594 14.4062ZM15.1406 18.625L13.9804 15.8584L13.9429 15.8741L13.9059 15.8909L15.1406 18.625ZM8.85938 18.625L10.0618 15.8765L10.0408 15.8673L10.0196 15.8584L8.85938 18.625ZM6.28125 16.9375L4.15993 19.0588L4.18249 19.0814L4.20553 19.1035L6.28125 16.9375ZM4.54688 14.4062L1.76748 15.5354L1.78911 15.5886L1.81276 15.641L4.54688 14.4062ZM4.54688 8.125L1.81276 6.89024L1.79602 6.92731L1.78029 6.96482L4.54688 8.125ZM6.28125 5.59375L4.20553 3.42779L4.18249 3.44986L4.15993 3.47243L6.28125 5.59375ZM8.85938 3.90625L10.0196 6.67283L10.0408 6.66394L10.0618 6.65472L8.85938 3.90625ZM15.1406 3.90625L13.9059 6.64036L13.9429 6.6571L13.9804 6.67283L15.1406 3.90625ZM16.9688 11.2188C16.9688 11.9733 16.8344 12.6509 16.58 13.2771L22.1388 15.5354C22.6969 14.1616 22.9688 12.7142 22.9688 11.2188H16.9688ZM16.5928 13.2461C16.332 13.8679 15.9846 14.3821 15.5506 14.8162L19.7932 19.0588C20.7966 18.0554 21.5742 16.8821 22.126 15.5664L16.5928 13.2461ZM15.5506 14.8162C15.1165 15.2502 14.6022 15.5977 13.9804 15.8584L16.3008 21.3916C17.6165 20.8398 18.7897 20.0623 19.7932 19.0588L15.5506 14.8162ZM13.9059 15.8909C13.3476 16.143 12.7245 16.2812 12 16.2812V22.2812C13.5255 22.2812 14.9961 21.982 16.3754 21.3591L13.9059 15.8909ZM12 16.2812C11.3193 16.2812 10.6819 16.1478 10.0618 15.8765L7.65692 21.3735C9.0369 21.9772 10.4932 22.2812 12 22.2812V16.2812ZM10.0196 15.8584C9.38634 15.5929 8.83818 15.2327 8.35697 14.7715L4.20553 19.1035C5.22432 20.0798 6.39491 20.8446 7.69919 21.3916L10.0196 15.8584ZM8.40257 14.8162C7.95153 14.3651 7.57632 13.8254 7.28099 13.1715L1.81276 15.641C2.39243 16.9246 3.17347 18.0724 4.15993 19.0588L8.40257 14.8162ZM7.32627 13.2771C7.07185 12.6509 6.9375 11.9733 6.9375 11.2188H0.9375C0.9375 12.7142 1.2094 14.1616 1.76748 15.5354L7.32627 13.2771ZM6.9375 11.2188C6.9375 10.5067 7.06762 9.87142 7.31346 9.28518L1.78029 6.96482C1.21363 8.31608 0.9375 9.74334 0.9375 11.2188H6.9375ZM7.28099 9.35976C7.57632 8.7058 7.95153 8.16611 8.40257 7.71507L4.15993 3.47243C3.17347 4.45889 2.39243 5.6067 1.81276 6.89024L7.28099 9.35976ZM8.35697 7.75971C8.83818 7.29855 9.38634 6.93838 10.0196 6.67283L7.69919 1.13967C6.39491 1.68662 5.22432 2.45145 4.20553 3.42779L8.35697 7.75971ZM10.0618 6.65472C10.6819 6.38346 11.3193 6.25 12 6.25V0.25C10.4932 0.25 9.0369 0.554038 7.65692 1.15778L10.0618 6.65472ZM12 6.25C12.7245 6.25 13.3476 6.38825 13.9059 6.64036L16.3754 1.17214C14.9961 0.549251 13.5255 0.25 12 0.25V6.25ZM13.9804 6.67283C14.6022 6.93358 15.1165 7.28102 15.5506 7.71507L19.7932 3.47243C18.7897 2.46898 17.6165 1.69142 16.3008 1.13967L13.9804 6.67283ZM15.5506 7.71507C15.9846 8.14912 16.332 8.6634 16.5928 9.28518L22.126 6.96482C21.5742 5.6491 20.7966 4.47588 19.7932 3.47243L15.5506 7.71507ZM16.5928 9.28518C16.8386 9.87142 16.9688 10.5067 16.9688 11.2188H22.9688C22.9688 9.74334 22.6926 8.31608 22.126 6.96482L16.5928 9.28518Z" fill="white"/>
            </motion.svg>}

            {showK && <motion.svg variants={enterKVariant} initial="before" animate="after" viewBox="0 0 47 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1" fill="white">
                <motion.path fill-rule="evenodd" clip-rule="evenodd" d="M0 70.1719H12.8906V63.75L21.7969 51.9375L31.9688 70.1719H46.6875L30.0469 40.9688L46.6875 20.0625H31.9688L12.8906 44.25V0H0V70.1719Z"/>
              </mask>
              <motion.path d="M12.8906 70.1719V72.1719H14.8906V70.1719H12.8906ZM0 70.1719H-2V72.1719H0V70.1719ZM12.8906 63.75L11.2937 62.5459L10.8906 63.0805V63.75H12.8906ZM21.7969 51.9375L23.5435 50.9632L22.048 48.2823L20.1999 50.7334L21.7969 51.9375ZM31.9688 70.1719L30.2221 71.1462L30.7943 72.1719H31.9688V70.1719ZM46.6875 70.1719V72.1719H50.1291L48.4252 69.1817L46.6875 70.1719ZM30.0469 40.9688L28.4821 39.7232L27.6389 40.7826L28.3092 41.9589L30.0469 40.9688ZM46.6875 20.0625L48.2523 21.308L50.8356 18.0625H46.6875V20.0625ZM31.9688 20.0625V18.0625H30.999L30.3984 18.8239L31.9688 20.0625ZM12.8906 44.25H10.8906V50.0151L14.4609 45.4886L12.8906 44.25ZM12.8906 0H14.8906V-2H12.8906V0ZM0 0V-2H-2V0H0ZM12.8906 68.1719H0V72.1719H12.8906V68.1719ZM10.8906 63.75V70.1719H14.8906V63.75H10.8906ZM20.1999 50.7334L11.2937 62.5459L14.4876 64.9541L23.3938 53.1416L20.1999 50.7334ZM33.7154 69.1975L23.5435 50.9632L20.0503 52.9118L30.2221 71.1462L33.7154 69.1975ZM46.6875 68.1719H31.9688V72.1719H46.6875V68.1719ZM28.3092 41.9589L44.9498 71.162L48.4252 69.1817L31.7846 39.9786L28.3092 41.9589ZM45.1227 18.817L28.4821 39.7232L31.6117 42.2143L48.2523 21.308L45.1227 18.817ZM31.9688 22.0625H46.6875V18.0625H31.9688V22.0625ZM14.4609 45.4886L33.5391 21.3011L30.3984 18.8239L11.3203 43.0114L14.4609 45.4886ZM10.8906 0V44.25H14.8906V0H10.8906ZM0 2H12.8906V-2H0V2ZM2 70.1719V0H-2V70.1719H2Z" fill="white" mask="url(#path-1-inside-1)"/>
            </motion.svg>}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
