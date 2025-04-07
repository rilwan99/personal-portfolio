import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML, CSS, JavaScript" },
  { skill: "React, NextJs" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Rust" },
  { skill: "ExpressJs, NestJs" },
  { skill: "Solidity" },
  { skill: "Smart Contract Development" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Rilwan and I am a{" "}
              <span className="font-bold">{"highly motivated"}</span> and
              <span className="font-bold">{" impact-driven"}</span> Software
              Engineer with a background in Information Systems from the
              National University of Singapore (NUS).
            </p>
            <br />
            <p>
              I specialize in building scalable web applications and robust
              APIs, with hands-on experience across the full stack. My current
              work involves developing high-performance internal frameworks and
              edge middleware at SPH Media, and previously, I worked on
              blockchain protocol research and smart contract audits at
              Nethermind.
            </p>
            <br />
            <p>
              I&apos;m deeply fascinated by the world of crypto — whether it&apos;s
              analyzing on-chain data, dissecting consensus models, or diving
              into smart contract vulnerabilities. I&apos;m always exploring new
              ideas and technologies to stay ahead of the curve.
            </p>
            <br />
            <p>
              I believe in never settling and{" "}
              <span className="font-bold text-teal-500">always growing</span>.
              I&apos;m passionate about pushing the boundaries of what technology can
              do, and I&apos;m always open to new opportunities that challenge me to
              grow and create meaningful impact. 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/coder.svg"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:top-3 md:bottom-3 md:left-20 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
