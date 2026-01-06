import { CONTACT } from "../constants"
import { SiGmail } from "react-icons/si"
import { TbLocationPin, TbPhone } from "react-icons/tb"
import { motion } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

    const [state, handleSubmit] = useForm("xzzanpyz");
    if (state.succeeded) {
        return <p>Thanks for sending message!</p>
    }

    return (
        <div className=' pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className=' my-10 text-center text-4xl'>Contact us</motion.h2>
            <div className="flex flex-wrap items-center lg:justify-center mb-8 pb-8">

                {/* <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-2/5 lg:pr-20">
                    <h2 className=" text-xl">For more details !</h2>
                    <div className=" mt-10">
                        <div
                            className=" mb-6 flex flex-wrap items-center gap-4">
                            <span><SiGmail /></span>
                            <h4>{CONTACT.email}</h4>
                        </div>
                        <div className=" mb-6 flex flex-wrap items-center gap-4">
                            <span><TbLocationPin /></span>
                            <h4>{CONTACT.address}</h4>
                        </div>
                        <div className=" mb-6 flex flex-wrap items-center gap-4">
                            <span><TbPhone /></span>
                            <h4>{CONTACT.phoneNo}</h4>
                        </div>
                    </div>
                </motion.div> */}

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className=' shadow-gray-700 shadow-2xl p-8 w-full lg:w-2/5'>
                    <form onSubmit={handleSubmit}>
                        <h1
                            className=" mb-5 pt-8 text-xl text-green-600  font-bold ">Send us message !</h1>

                        <div className=" mt-4">
                            <div className=" flex flex-col">
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    className=" focus:outline-2 outline-pink-600 caret-pink-600 bg-stone-400 text-black rounded p-2 mb-6"
                                />

                            </div>
                            <div className=" flex flex-col">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className=" focus:outline-2 outline-pink-600 caret-pink-600 bg-stone-400 text-black rounded p-2 mb-6"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            <div className=" flex flex-col">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required className=" focus:outline-2 outline-pink-600 caret-pink-600 bg-stone-400 text-black rounded p-2 mb-6" />

                            </div>
                            <div className=" flex flex-col">
                                <label htmlFor="subject">Message</label>

                                <textarea
                                    id="message"
                                    name="message"
                                    className=" focus:outline-2 outline-pink-600 caret-pink-600 bg-stone-400 text-black rounded p-2 mb-6"
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}

                            type="submit" className=" cursor-pointer hover:bg-gradient-to-r hover:from-purple-800 hover: to-violet-900 bg-cyan-700 p-2 rounded my-5 w-full " disabled={state.submitting}>
                            Send message
                        </motion.button>

                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact










