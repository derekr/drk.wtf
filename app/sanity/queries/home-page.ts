import groq from 'groq'

export default groq`
{
  "globalSettings": *[_type == "globalSettings"]{ aboutMe },
  "author": *[_type == "author"][0]{ "imageUrl": image.asset->url },
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
