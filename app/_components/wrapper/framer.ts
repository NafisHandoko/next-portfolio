"use client"

import { motion } from "framer-motion"
import { MotionGlobalConfig } from "framer-motion"

MotionGlobalConfig.skipAnimations = false

export const {
    div: MotionDiv,
    h1: MotionH1,
    h2: MotionH2,
    p: MotionP,
    section: MotionSection,
    header: MotionHeader,
    a: MotionA,
    li: MotionLi,
    span: MotionSpan
} = motion