import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML, CSS, JavaScript" },
  { skill: "React, NextJs" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Rust" },
  { skill: "ExpressJs, NestJs" },
  { skill: "Solidity" },
  { skill: "Smart Contract Development" },
]

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
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> final year Information System (IS) undergraduate.
            </p>
            <br />
            <p>
              I have expertise in crafting seamless front-end experiences, building scalable and robust APIs, 
              and orchestrating applications on the cloud.
              But deep down I'm a crypto geek. Blockchain is a realm where I've dived deep, 
              be it exploring security vulnerabilities in smart contracts, analyzing whitepapers of new protocols, 
              or snooping for some on-chain alpha.
            </p>
            <br />
            <p>
            When I'm not in the tech zone, you'll find either in the gym getting a workout, or in the boxing ring getting a few rounds of sparring in. 
            I love staying active, traveling to new destinations and catching the latest K-drama hit on netflix.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my next venture would take me, and am
              always open to new opportunities. 🙂
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
                )
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
  )
}

export default AboutSection
