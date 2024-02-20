"use client"

import { useSectionInView } from "~/lib/hooks"

const Skills = () => {
    const {ref} = useSectionInView("Skills")
  return (
    <section ref={ref}>

    </section>
  )
}

export default Skills