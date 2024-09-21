"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Component() {
  const [sunflowersCollected, setSunflowersCollected] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const totalSunflowers = 5

  useEffect(() => {
    if (sunflowersCollected === totalSunflowers) {
      setShowMessage(true)
    }
  }, [sunflowersCollected])

  const collectSunflower = () => {
    setSunflowersCollected(prev => Math.min(prev + 1, totalSunflowers))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-100 flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-12 shadow-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Flores Amarillas Para Ti
      </motion.h1>
      
      <motion.div 
        className="relative w-full max-w-2xl h-64 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        {[...Array(totalSunflowers)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute cursor-pointer"
            style={{
              top: `${Math.random() * 60 + 20}%`,
              left: `${(index / totalSunflowers) * 100}%`,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={collectSunflower}
          >
            {index >= sunflowersCollected ? (
              <span role="img" aria-label="girasol" className="text-6xl">🌻</span>
            ) : (
              <span className="text-4xl">✨</span>
            )}
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {!showMessage && (
          <motion.p 
            className="text-xl md:text-2xl text-yellow-700 text-center mb-8 shadow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Toca los girasoles para revelar un mensaje especial...
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl text-yellow-800 text-center leading-relaxed mb-6">
              Me hubiera encantado tanto darte flores amarillas en persona, pero quiero que sepas que siempre pienso en ti y no lo olvidé para nada. Sí, podré estar lejitos pero nunca NUNCA serás espectadora. 
              Te quiero un montón loca, gracias por aparecer en mi vida, gracias por existir simplemente, después de todo lo que compartí contigo soy capaz de decir sin equivocaciones que contigo todo es mejor.
            </p>
            <div className="flex justify-center">
            <Image
  src="/locos.jpg"
  alt="Imagen especial"
  width={300}
  height={300}
  className="rounded-lg shadow-md"
/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  )
}