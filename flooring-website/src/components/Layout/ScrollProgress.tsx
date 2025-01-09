import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const springScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{ scaleX: springScroll }}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 to-amber-100/80
        transform origin-left z-50"
        />
    );
};