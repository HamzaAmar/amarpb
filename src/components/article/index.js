import React from "react"
import { Link } from "gatsby"
import { Container, Title, Date, Text, Nav, Href } from "./style"

const Article = ({ article }) => {
  console.log(article)
  return (
    <Container>
      <Link to={`/blogs${article.slug}`}>
        <Title>{article.title}</Title>
      </Link>
      <Date>{article.date} • ☕️ 5 min read</Date>
      <Text>{article.description}</Text>
      <Nav>
        <ul>
          {article &&
            article.tags &&
            article.tags.map((keyword) => (
              <li key={keyword}>
                <Link to={`/tags/${keyword.toLowerCase()}`}>{keyword}</Link>
              </li>
            ))}
        </ul>
      </Nav>
      <Href to="/about/">See More</Href>
    </Container>
  )
}

export default Article
