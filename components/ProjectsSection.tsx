import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Risk Dashboard",
    description:
      "This dashboard displays the various interests rates for different lending markets deployed on AAVE, a permissionless lending protocol deployed on the Ethereum blockchain",
    image: "/aave.png",
    github: "https://github.com/rilwan99/aave-risk-dashboard",
    link: "https://github.com/rilwan99/aave-risk-dashboard",
  },
  {
    name: "y00ts dashboard",
    description: "A real-time dashboard tracking the mints of one of the most anticipated NFT drops on the Solana Blockchain",
    image: "/y00ts.png",
    github: "https://github.com/rilwan99/y00ts-dashboard",
    link: "https://twitter.com/Ril11111/status/1588972421201420288?s=20",
  },
  {
    name: "Treehoppers",
    description:
      "Treehoppers is a hackathon project which enables retail merchants to transform coupons into NFTs on the blockchain, accessible to users via a user-friendly Telegram bot.",
    image: "/treehoppers.png",
    github: "https://github.com/rilwan99/Treehoppers",
    link: "https://www.youtube.com/watch?v=EzBdCXiMzFM",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
