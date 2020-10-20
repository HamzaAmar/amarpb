import React from "react"
import { Articles } from "./style"
import Article from "./"

const articles = ({ data }) => {
  console.log("hello", data)
  return (
    <Articles>
      {data &&
        data.edges &&
        data.edges.map(({ node }) => {
          const { frontmatter, fields } = node

          return (
            <Article
              key={frontmatter.title}
              article={{ ...frontmatter, ...fields }}
            />
          )
        })}
    </Articles>
  )
}

export default articles
