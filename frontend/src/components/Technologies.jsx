import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandBootstrap, TbBrandCss3, TbBrandHtml5, TbBrandNodejs } from 'react-icons/tb'
import { SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { animate, motion, transform } from 'framer-motion'


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }

})

const Technologies = () => {
    return (
        <div className=' pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className=' my-20 text-center text-4xl'>Technologies</motion.h2>


            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className=' flex flex-wrap items-center justify-center gap-4'>


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2)}
                    whileHover={{ scale: 1.3 }}
                >
                    <RiReactjsLine className='text-cyan-400 text-7xl' />
                </motion.div>


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <TbBrandNodejs className=' text-green-400 text-7xl' />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <TbBrandHtml5 className=' text-orange-500 text-7xl' />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <SiTailwindcss className=' text-blue-400 text-7xl' />
                </motion.div>


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <SiMongodb className=' text-green-400 text-7xl' />
                </motion.div>


                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(3.5)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <SiJavascript className=' text-yellow-500 text-7xl' />
                </motion.div>

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <SiExpress className=' text-green-400 text-7xl' />
                </motion.div>



                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4.5)}
                    whileHover={{ scale: 1.3 }}
                    className=' p-4'>
                    <SiMysql className=' text-cyan-400 text-7xl' />
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies
