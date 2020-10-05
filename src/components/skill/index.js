import React from "react"
import skills from "../../constants/skills"
import { Container, Skill, SkillContainer } from "./style"

const SkillsContainer = () => {
  return (
    <Container>
      {skills.map(([skill, lists]) => {
        return (
          <Skill>
            <h1> {skill} </h1>
            <ul>
              {lists.map(list => {
                return (
                  <li>
                    <SkillContainer>
                      <h2>{list.title}</h2>

                      {list.icon}

                      <h4>{list.level}%</h4>
                    </SkillContainer>
                  </li>
                )
              })}
            </ul>
          </Skill>
        )
      })}
    </Container>
  )
}

export default SkillsContainer
