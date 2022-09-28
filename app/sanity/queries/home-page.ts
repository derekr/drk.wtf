import groq from 'groq'

export default groq`
{
  "globalSettings": *[_type == "globalSettings"]{ aboutMe },
  "workExperience": *[_type == "cv.experience"]{ 
    title,
    url,
    startDate,
    endDate,
    isCurrent,
    body
  } | order(startDate desc),
}
`
