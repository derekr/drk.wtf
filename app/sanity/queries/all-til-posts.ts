import groq from 'groq'

export default groq`
*[
  _type == "post" && "til" in categories[]->title
]{
  _id, 
  title,
  body, 
  slug, 
  piblishedAt,
  author->
}
`
