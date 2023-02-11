import { useLoaderData } from "@remix-run/react";
import { client } from '~/sanity/client'
import { SanityContent } from '~/components/sanity-content'
import homePageQuery from '~/sanity/queries/home-page'
import { fork } from 'radash'

export const loader = async () => {
  return {
    ...(await client.fetch(homePageQuery)),
  }
}

const ExperienceItem = ({ title, href, startYear, endYear, children }) => (
  <article>
    <div className="mb-2">
      <h3>
        <strong>{title}</strong>
        {href && (
          <span className="href">
            {' '}
            <a
              href={href}
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
            >
              {href}
            </a>
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-400 time">
        {startYear === endYear ? startYear : `${startYear}–${endYear}`}
      </p>
    </div>
    {children}
  </article>
)

export default function Index() {
  const { author, globalSettings, workExperience } = useLoaderData<typeof loader>()
  const [currentExperience, previousExperience] = fork(workExperience, (e: any) => e.isCurrent)
  return (
    <>
      <a className="sr-only h-card" href="https://drk.wtf" rel="me">
        <img src={author.imageUrl} alt="" />
        Derek Reynolds
      </a>
      <div className="max-w-2xl mb-8 mast-grid [&>p:first-of-type]:mb-3">
        <h1 className="text-lg">
          <a href="/">drk.wtf</a>
        </h1>
        <SanityContent value={globalSettings[0]?.aboutMe} />
      </div>
      <div className="grid mb-5 experience-grid md:grid-cols-3">
        <div className="space-y-4 experience md:col-start-2 [&>article:last-of-type]:mb-3">
          <h2 className="text-gray-600 text-md">Currently</h2>
          {currentExperience.map((item) => {
            return (
              <ExperienceItem
                key={item.title}
                title={item.title}
                href={item.url ?? ''}
                startYear={new Date(item.startDate).getFullYear()}
                endYear={item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}
              >
                <SanityContent value={item.body} />
              </ExperienceItem>
            )
          })}
          <br />
          <h2 className="text-gray-600 text-md">Previously</h2>
          {previousExperience.map((item) => {
            return (
              <ExperienceItem
                key={item.title}
                title={item.title}
                href={item.url ?? ''}
                startYear={new Date(item.startDate).getFullYear()}
                endYear={item.endDate ? new Date(item.endDate).getFullYear() : 'Present'}
              >
                <SanityContent value={item.body} />
              </ExperienceItem>
            )
          })}
          <a
            href="https://www.linkedin.com/in/derek-reynolds-11a806132/"
            target="_blank"
            className="block text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
          >
            Linkedin {'>>'}
          </a>
        </div>
      </div>
      <footer>© Derek Reynolds {new Date().getFullYear()}</footer>
    </>
  )
}
