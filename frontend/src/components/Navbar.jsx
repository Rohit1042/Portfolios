import { motion } from "framer-motion"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import myLogo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className=' flex items-center justify-between py-6'>
            <div className=' flex flexshrink-0 items-center space-x-2'>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    href="/" aria-label='Home'>
                    <img src={myLogo} alt="Rohit." className=" size-14" />
                </motion.a>

            </div>
            <div className=' m-8 flex items-center justify-center gap-10 text-2xl'>

                <motion.a
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    href="https://www.linkedin.com/in/rohitprashadpandeya/"
                    target='_blank'
                    aria-label='LinkedIn'
                    className=' hover:text-pink-500 text-3xl '>
                    <FaLinkedin />
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    href="https://www.facebook.com/rohit.pd.pandeya"
                    target='_blank'
                    aria-label='Facebook'
                    className=' hover:text-pink-500 text-3xl'>
                    <FaFacebook />
                </motion.a>

            </div>

        </nav>
    )
}

export default Navbar
