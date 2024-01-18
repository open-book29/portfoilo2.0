"use client"

import React, { useEffect } from 'react'
import { SectionHeading } from './SectionHeading'
import { projectsData } from '@/lib/data'
import { ProjectItems } from './ProjectItems'
import { useSectionInView } from '@/lib/hooks'

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
        <SectionHeading>My Projects</SectionHeading>
        <div className='grid xl:grid-cols-2 justify-center items-center'>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <ProjectItems {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
