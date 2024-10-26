import groq from 'groq';

export const HOME_PAGE_QUERY = groq`
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
`;

export const ALL_TIL_QUERY = groq`
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
`;
