import { motion } from 'framer-motion'
import { Typewriter } from "react-simple-typewriter"
import myImage from '../assets/rohit.jpg'


const containerVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,


        }
    }
}
const childVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}



const Hero = () => {
    return (
        <div className=' pb-4 lg:mb-36'>
            <div className=' flex flex-wrap lg:flex-row-reverse'>
                <div className=' w-full lg:w-1/2'>
                    <div className=' flex justify-center lg:p-8'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            height={300} width={300}
                            src={myImage} alt="Image of rohit" className=" border border-stone-900 rounded-3xl size-6/12 " />
                    </div>

                </div>
                <div className=" w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVarients}
                        className=" flex flex-col items-center lg:items-center mt-10">
                        <motion.h2
                            variants={childVarients}
                            className=" pb-2 text-2xl tracking-tighter lg:text-2xl">Hi There !
                        </motion.h2>

                        <motion.h2
                            variants={childVarients}
                            className=" pb-2 text-3xl tracking-wide lg:text-3xl">I'm
                            <span className=' text-purple-500'> Rohit Pandeya</span>
                        </motion.h2>


                        <motion.span
                            variants={childVarients}
                            className=" bg-gradient-to-r from-red-400 to-yellow-500 bg-clip-text text-3xl mt-2 tracking-tight text-transparent">
                            <Typewriter
                                words={['Web Developer', 'Graphics Designer']}
                                loop={Infinity}
                                cursor
                                cursorColor='green'
                                typeSpeed={100}
                                deleteSpeed={100}
                            />
                        </motion.span>



                        <motion.p variants={childVarients} className=" my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            I'm a full-stack developer and graphic designer blending clean code with creative visuals. With MERN and TailwindCSS, I build fast, responsive web apps that look sharp and work flawlessly. From backend logic to bold design, I bring ideas to life with style and precision.
                        </motion.p>
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(1, 6, 251)',
                                background:"black", color:"white"
                             }}
                            transition={{ type: 'spring', stiffness: 400 }}
                            variants={childVarients} href="/RohitPrashadPandeya.pdf" target="_blank" rel=" noopener noreferrer" className="  bg-white rounded-full p-4 text-sm  text-black font-bold mb-10">Download Resume</motion.a>

                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default Hero
