import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Heart, Sparkles, RefreshCw, Smartphone, ShieldCheck, Award } from 'lucide-react'
import data from '../public/data.json'
import './App.css'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([])
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100 + '%',
        size: Math.random() * 20 + 20 + 'px',
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2
      }
      setHearts(prev => [...prev.slice(-15), newHeart])
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-hearts-bg">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={{ y: '-10vh', opacity: [0, 1, 1, 0], rotate: 360 }}
          transition={{ duration: heart.duration, delay: heart.delay, ease: "linear" }}
          style={{
            position: 'absolute',
            left: heart.left,
            fontSize: heart.size,
            zIndex: 0
          }}
        >
          {['❤️', '💖', '💘', '💝'][Math.floor(Math.random() * 4)]}
        </motion.div>
      ))}
    </div>
  )
}

const Badges = () => (
  <>
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 20, opacity: 1 }}
      className="badge" style={{ top: '10%' }}
    >
      <Award size={16} /> 100% Husband Certified
    </motion.div>
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: -20, opacity: 1 }}
      className="badge" style={{ top: '20%', right: '20px' }}
    >
      <ShieldCheck size={16} /> Government Approved Love
    </motion.div>
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: -20, opacity: 1 }}
      className="badge" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
    >
      <ShieldCheck size={16} /> ISO 9001 Romantic
    </motion.div>
  </>
)

function App() {
  const [step, setStep] = useState('invite')
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [noCount, setNoCount] = useState(0)

  const handleYes = () => {
    setStep('celebrate')
    const end = Date.now() + 5 * 1000;
    const colors = ['#ff4d6d', '#ff0054', '#4ade80', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  const handleNoClick = () => {
    if (noCount === 0) {
      // First click skips away
      setNoButtonStyle({
        transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
        transition: 'all 0.2s'
      })
      setNoCount(1)
    } else {
      setStep('retry')
    }
  }

  const reset = () => {
    setStep('invite')
    setNoButtonStyle({})
    setNoCount(0)
  }

  return (
    <div className={`app-container ${step === 'retry' ? 'shake' : ''}`}>
      <FloatingHearts />
      {step === 'invite' && <Badges />}

      <AnimatePresence mode="wait">
        {step === 'invite' && (
          <motion.div
            key="invite"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="invite-screen"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="name-heading"
            >
              Hi {data.name}! ❤️
            </motion.h1>
            <motion.h1
              className="hero-text"
              initial={{ y: 20 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              "{data.heroMessage}"
            </motion.h1>

            <motion.p
              className="sub-hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {data.loveQuestion}
            </motion.p>

            <div className="button-group">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn btn-yes"
                onClick={handleYes}
              >
                {data.yesButtonText}
              </motion.button>
              <motion.button
                style={noButtonStyle}
                whileHover={noCount === 0 ? { scale: 1.1 } : {}}
                className="btn btn-no"
                onClick={handleNoClick}
              >
                {data.noButtonText}
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 'celebrate' && (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="celebration-screen"
          >
            <div className="subscription-card">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ fontSize: '3rem', marginBottom: '1rem' }}
              >
                😎
              </motion.div>
              <h2 className="hero-text" style={{ fontSize: '2rem' }}>
                {data.yesMessage}
              </h2>
              <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                {data.yesSubMessage.split(':')[0]}:<br />
                <span style={{ color: 'var(--primary)', fontSize: '1.5rem' }}>{data.yesSubMessage.split(':')[1]}</span>
              </p>

              <div className="special-message">
                "{data.specialMessage}"
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '1rem' }}>
                <div className="badge" style={{ position: 'static' }}>No Refunds</div>
                <div className="badge" style={{ position: 'static' }}>T&C Apply 😜</div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'retry' && (
          <motion.div
            key="retry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="retry-screen"
          >
            <motion.div className="crying-heart">
              💔😭
            </motion.div>
            <h1 className="hero-text" style={{ fontSize: '2rem' }}>
              {data.noMessage}
            </h1>
            <p className="sub-hero-text">
              {data.noSubMessage}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              className="btn btn-retry"
              onClick={reset}
            >
              <RefreshCw size={20} /> {data.retryButtonText}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

