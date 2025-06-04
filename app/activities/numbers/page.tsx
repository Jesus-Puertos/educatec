'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const numbers = [
    { id: 1, value: 1, img: '/numbers/1.png', audio: '/sounds/1.mp3' },
    { id: 2, value: 2, img: '/numbers/2.png', audio: '/sounds/2.mp3' },
    { id: 3, value: 3, img: '/numbers/3.png', audio: '/sounds/3.mp3' },
    { id: 4, value: 4, img: '/numbers/4.png', audio: '/sounds/4.mp3' },
    { id: 5, value: 5, img: '/numbers/5.png', audio: '/sounds/5.mp3' },
    { id: 6, value: 6, img: '/numbers/6.png', audio: '/sounds/6.mp3' },
    { id: 7, value: 7, img: '/numbers/7.png', audio: '/sounds/7.mp3' },
    { id: 8, value: 8, img: '/numbers/8.png', audio: '/sounds/8.mp3' },
    { id: 9, value: 9, img: '/numbers/9.png', audio: '/sounds/9.mp3' },
    { id: 10, value: 10, img: '/numbers/10.png', audio: '/sounds/10.mp3' },

];

export default function NumbersPage() {
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio() : null);

    const playSound = (src: string) => {
        if (audio) {
            audio.src = src;
            audio.play();
        }
    };

    return (
        <div className="p-4">
            <header className="relative flex items-center justify-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-3xl shadow-md">
                <Link
                    href="/"
                    className="absolute left-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </Link>
                <h1 className="text-2xl font-bold text-white">Números</h1>
            </header>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {numbers.map(({ id, value, img, audio }) => (
                    <div
                        key={id}
                        onClick={() => playSound(audio)}
                        className="bg-blue-100 p-4 rounded-xl text-center shadow hover:bg-blue-200 cursor-pointer"
                    >
                        <img src={img} alt={`Número ${value}`} className="w-full h-auto" />
                        <p className="text-xl mt-2 font-bold">{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
