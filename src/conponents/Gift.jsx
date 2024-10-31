
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '../assets/deepawali.png'
export default function Gift() {
    const [gifts, setGifts] = useState([
        { id: 1, name: ' Diyas 🪔🪔' },
        { id: 2, name: 'Sweets 🍫🍰' },
        { id: 3, name: 'Gifts 🎁📦' },
        { id: 4, name: 'Grits' }
    ]);
    const handleGiftClick = (gift) => {
        if (gift == "Grits") {
            toast.success(`Wishing You and Your Lovely Family a Very Happy Diwali 🕯 🪔, Have Lots of Fun and Joy with cracks 💥 and Be safe 🦺, Once Again a Very Happy Diwali From Arjun Side`);
        }
        else {
            toast.success(`Lots of  ${gift} for you and Your family`);
        }

    };


    return <>
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f5e6d3' }}>
            <h3>🪔🪔🪔🪔🪔🪔🪔🪔🪔🪔</h3>
            <h2 style={{ color: 'orange',textShadow:'1px 1px 1px black'}}>Arjun Wishing You and Your Family a very Happy Diwali! <br /> Be Happy 😁 and Safe 🦺 </h2>
            <p>Celebrate the festival of lights with joy and prosperity!</p>
            <motion.img
                src={image1}
                alt="Deepawali"
                style={{ width: '300px', borderRadius: '10px' }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            />
            <h2>Click for Presents</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {gifts.map(gift => (
                    <motion.li
                        key={gift.id}
                        onClick={() => handleGiftClick(gift.name)}
                        whileHover={{ scale: 1.1, color: '#ff5722' }}
                        style={{ cursor: 'pointer', margin: '10px 0' }}
                    >
                        {gift.name}
                    </motion.li>
                ))}
            </ul>
            <ToastContainer />
        </div>
    </>
}