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
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              {href}
            </a>
          </span>
        )}
      </h3>
      <p className="time text-sm text-gray-400">
        {startYear && `${startYear}–`}
        {endYear}
      </p>
    </div>
    <p className="description">{children}</p>
  </article>
)

export default function Index() {
  return (
    <>
      <>
        <div className="mast-grid mb-8 max-w-2xl">
          <h1 className="text-lg">
            <a href="/">drk.wtf</a>
          </h1>
          <p>
            Hey, I'm Derek! Currently living in Sacramento working as an Software Developer for{' '}
            <a
              href="https://gowalla.com"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Gowalla
            </a>
            .
          </p>
          <p>
            I enjoy building and creating for the web. Some of my software work can be found on{' '}
            <a
              href="https://github.com/derekr"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              github
            </a>
            . I lightly post thoughts on{' '}
            <a
              href="https://twitter.com/drk"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              twitter
            </a>
            , gifs of interactions I make on{' '}
            <a
              href="https://dribbble.com/derek"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              dribbble
            </a>{' '}
            and photography on{' '}
            <a
              href="https://ddrrkk.exposure.co/"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              exposure
            </a>
            .
          </p>
        </div>
        <div className="experience-grid grid md:grid-cols-3 mb-5">
          <div className="experience md:col-start-2 space-y-4">
            <h2 className="text-md text-gray-600">Currently</h2>
            <ExperienceItem
              title="Gowalla"
              href="https://gowalla.com"
              startYear="2021"
              endYear="Present"
            >
              Doing what I can where I can helping build a fun game that gets you outside and
              exploring your world.
            </ExperienceItem>

            <br />

            <h2 className="text-md text-gray-600">Previously</h2>

            <ExperienceItem
              title="Babylist"
              href="https://babylist.com"
              startYear="2019"
              endYear="2021"
            >
              Helped this small and mighty engineering team grow as a lead and manger. Shipped
              projects in between shepparding tooling and processes that will help us scale to be
              the most helpful product for all expecting families.
            </ExperienceItem>

            <ExperienceItem
              title="Hipcamp"
              href="https://hipcamp.com"
              startYear="2018"
              endYear="2019"
            >
              Started a greenfield mobile app initiative and helped ship Apple and Android apps
              using React Native. We were a featured{' '}
              <a
                href="https://apps.apple.com/us/story/id1463651760"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                App of the Day
              </a>
              !
            </ExperienceItem>
            <ExperienceItem
              title="Patreon"
              href="https://patreon.com"
              startYear="2015"
              endYear="2018"
            >
              Began as a Frontend Engineer and moved to management which has been my primary focus
              and role for over 2 years.
            </ExperienceItem>
            <ExperienceItem title="NerdWallet" href="https://nerdwallet.com" endYear="2015">
              Senior Frontend Engineer.
            </ExperienceItem>
            <ExperienceItem title="DIY" href="https://diy.org" startYear="2013" endYear="2015">
              Lead Frontend Engineer.
            </ExperienceItem>
            <ExperienceItem
              title="Trulia"
              href="https://trulia.com"
              startYear="2011"
              endYear="2013"
            >
              Software Engineer
            </ExperienceItem>
            <ExperienceItem title="Optimal Outsource" startYear="2006" endYear="2011" />
            <a
              href="https://www.linkedin.com/in/derek-reynolds-11a806132/"
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              Linkedin {'>>'}
            </a>
          </div>
        </div>
        <footer>© Derek Reynolds {new Date().getFullYear()}</footer>
      </>
    </>
  )
}
