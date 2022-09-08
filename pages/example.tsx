import React, { useState } from 'react';
import Layout from '../components/Layout';

import { GithubRepos } from '../data';
import { motion } from 'framer-motion';

const Example: React.FC = () => {
    const [count, setCount] = useState(0);

    const scroll = (type: string) => {
        if (type === 'next') {
            return setCount((prev: number) => {
                if (prev === GithubRepos.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        } else {
            return setCount((prev: number) => {
                if (prev === 0) {
                    return GithubRepos.length - 1;
                } else {
                    return prev - 1;
                }
            });
        }
    };

    const variants = {
        visible: {
            opacity: 1,
        },
        hidden: (i: string) => ({
            opacity: 0,
        }),
    };

    return (
        <Layout>
            <div className="w-full h-full min-h-screen bg-black flex items-center justify-center">
                <button
                    onClick={() => scroll('back')}
                    className="text-red-200 text-lg"
                >
                    BACK
                </button>
                <motion.div
                    variants={variants}
                    transition={{ duration: 0.5 }}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-xl flex mx-4"
                >
                    <motion.div
                        variants={variants}
                        transition={{ duration: 0.5 }}
                        initial="hidden"
                        animate="visible"
                        className="text-white"
                    >
                        {GithubRepos[count].text}
                    </motion.div>
                </motion.div>
                <button
                    onClick={() => scroll('next')}
                    className="text-red-200 text-lg"
                >
                    NEXT
                </button>
            </div>
        </Layout>
    );
};

export default Example;
