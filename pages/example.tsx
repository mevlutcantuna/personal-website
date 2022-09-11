import React, { useState } from "react";
import Layout from "../components/Layout";

import { GithubRepos } from "../data";
import { motion } from "framer-motion";

const Example: React.FC = () => {
  const [count, setCount] = useState(0);

  const scroll = (type: string) => {
    if (type === "next") {
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
        <button onClick={() => scroll("back")} className="text-red-200 text-lg">
          BACK
        </button>
        <div className="w-full max-w-xl flex mx-4 relative">
          <div className="text-white animate-rightToLeftSlide absolute top-0 left-0">
            {GithubRepos[count].text}
          </div>
        </div>
        <button onClick={() => scroll("next")} className="text-red-200 text-lg">
          NEXT
        </button>
      </div>
    </Layout>
  );
};

export default Example;
