import { Variant, Variants } from "framer-motion";
export type AnimationType = Variant | undefined
export const FLOAT_GROW = {
  grow: {
    scale: 1.1,
  },
} as AnimationType
export const FLOAT_ROTATE = {
  rotate: {
    rotate: [null, -5, 5, 0],
    transition: {
      // delay,
      duration: 5,
      // repeat: Infinity,
      // repeatDelay: 0.2,
      // repeatType: "reverse"
    },
  } as AnimationType
};

export function floatRotate(delay: number, y?: number[]) {
  const yAxis = y ??  [-10, 10];
  return {
    initial: {
      y: yAxis,
      rotate: null,
      transition: {
        delay,
        duration: 2,
        repeat: Infinity,
        // repeatDelay: 0.2,
        repeatType: 'reverse',
      },
    },
  } as AnimationType
}

export function floatVariant(delay: number, rotate?: { y?: number[] }) {
  return { ...FLOAT_GROW, ...FLOAT_ROTATE, ...floatRotate(delay, rotate?.y) } as Variants
}

export function fadeInLeftAnimation(delay?: number) {
  const delayCount = delay ?? 0.4;
  return {
    initial: { opacity: 0, x: "5px" },
    animate: { opacity: 1,   x: 0},
    transition: { duration: 2, delay:delayCount}
  } as Variants | undefined
}

