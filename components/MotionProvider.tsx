"use client";

import { MotionConfig } from "motion/react";

const MotionProvider = ({ children }: { children: React.ReactNode }) => (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
