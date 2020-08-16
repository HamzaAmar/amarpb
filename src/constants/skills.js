import React from "react"
import { DiReact, DiHtml5, DiJavascript1, DiCss3 } from "react-icons/di"
import { DiNodejs, DiMongodb, DiPostgresql } from "react-icons/di"
import { GrGraphQl, GrGatsbyjs } from "react-icons/gr"

const skills = [
  [
    "Front End",
    [
      {
        title: "React",
        level: 90,
        icon: <DiReact size="80" color="#1255ff" />,
      },
      {
        title: "JavaScript",
        level: 90,
        icon: <DiJavascript1 size="80" color="orange" />,
      },
      {
        title: "HTML",
        level: 90,
        icon: <DiHtml5 size="80" color="#1255ff" color="orange" />,
      },
      {
        title: "CSS",
        level: 90,
        icon: <DiCss3 size="80" color="#1255ff" />,
      },
      {
        title: "GraphQL",
        level: 90,
        icon: <GrGraphQl size="80" color="#ff0000" />,
      },
      {
        title: "Gatsby",
        level: 90,
        icon: <GrGatsbyjs size="80" />,
      },
    ],
  ],
  [
    "Back End",
    [
      {
        title: "Node",
        level: 90,
        icon: <DiNodejs size="80" color="#1255ff" />,
      },
      {
        title: "Mongo DB",
        level: 90,
        icon: <DiMongodb size="80" color="#1255ff" />,
      },
      {
        title: "Postgres",
        level: 90,
        icon: <DiPostgresql size="80" color="#1255ff" />,
      },
      {
        title: "Postgres",
        level: 90,
        icon: <DiPostgresql size="80" color="#1255ff" />,
      },
    ],
  ],
]

export default skills
