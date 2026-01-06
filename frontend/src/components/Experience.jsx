import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
    return (
        <div className=' pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className=' my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className=' flex flex-wrap mb-8 pb-10 lg:justify-center items-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className=' w-full lg:w-1/4'>
                            <h2 className=' mb-4'>{experience.year}</h2>

                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h3 className=' mb-2 font-semibold text-2xl text-pink-400'>{experience.role}</h3>
                            <h4 className=' mb-4 text-stone-400'>{experience.company}</h4>
                            <p className=' mb-4'>{experience.description}</p>
                            {experience.technologies.map((tech, index) => (
                                <div className=' inline-flex flex-row'>
                                    <span className='m-2 rounded bg-stone-900 text-sm font-medium p-2 text-stone-300' key={index}>{tech}</span>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Experience
