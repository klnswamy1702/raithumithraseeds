'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface SectionProps {
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Section({ title, description, image, reverse = false }: SectionProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
        >
            <div className="md:w-1/2 w-full">
                <div className="w-full h-[350px] relative rounded-2xl overflow-hidden shadow-xl transition duration-300 hover:scale-105 hover:shadow-green-200">
                    <Image src={image} alt={title} fill className="object-cover" />
                </div>
            </div>
            <div className="md:w-1/2 w-full space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-green-800 font-[Playfair]">
                    {title}
                    <span className="block h-1 w-24 bg-green-600 mt-2 rounded"></span>
                </h2>
                <p className="text-lg md:text-xl text-black-700 leading-relaxed whitespace-pre-line font-sans">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
