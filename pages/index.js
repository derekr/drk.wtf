import { Fragment } from 'react'

export const meta = {
  title: 'Derek Reynolds – Bay Area Software Developer.',
}

const ExperienceItem = ({ title, href, startYear, endYear, children }) => (
  <article>
    <h3>
      {title}
      {href && (
        <span className="href">
          {' '}
          <a href={href} target="_blank">
            {href}
          </a>
        </span>
      )}
    </h3>
    <p className="time">
      {startYear && `${startYear}–`}
      {endYear}
    </p>
    <p className="description">{children}</p>

    <style jsx>{`
      article {
        margin-bottom: 2em;
        max-width: 500px;
      }

      h3 {
        margin-bottom: 0.2em;
      }

      .href {
        font-size: 0.7em;
      }

      .time {
        margin-top: 0;
        font-size: 0.7em;
        color: #666;
      }

      .description {
        margin-top: 0;
      }
    `}</style>
  </article>
)

export default () => (
  <Fragment>
    <div className="mast-grid">
      <h1>
        <a href="/">drk.wtf</a>
      </h1>
      <p>
        Hey, I'm Derek! Currently living in the Bay Area working as an Engineering Manager for{' '}
        <a href="https://patreon.com">Patreon</a>.
      </p>
      <p>
        I enjoy building and creating for the web. Some of my software work can be found on{' '}
        <a href="https://github.com/derekr" target="_blank">
          github
        </a>. I lightly post thoughts on{' '}
        <a href="https://twitter.com/drk" target="_blank">
          twitter
        </a>, gifs of interactions I make on{' '}
        <a href="https://dribbble.com/derek" target="_blank">
          dribbble
        </a>{' '}
        and photography on{' '}
        <a href="https://ddrrkk.exposure.co/" target="_blank">
          exposure
        </a>.
      </p>
    </div>
    <div className="experience-grid">
      <div className="experience">
        <h2>Currently</h2>
        <ExperienceItem title="Patreon" href="https://patreon.com" startYear="2015" endYear="2018">
          Began as a Frontend Engineer and moved to management which has been my primary focus and
          role for the last couple of years.
        </ExperienceItem>
        <h2>Previously</h2>
        <ExperienceItem title="NerdWallet" href="https://nerdwallet.com" endYear="2015">
          Senior Frontend Engineer.
        </ExperienceItem>
        <ExperienceItem title="DIY" href="https://diy.org" startYear="2013" endYear="2015">
          Lead Frontend Engineer.
        </ExperienceItem>
        <ExperienceItem title="Trulia" href="https://trulia.com" startYear="2011" endYear="2013">
          Software Engineer
        </ExperienceItem>
        <ExperienceItem title="Optimal Outsource" startYear="2006" endYear="2011" />
        <a href="https://www.linkedin.com/in/derek-reynolds-11a806132/" target="_blank">
          Linkedin >>
        </a>
      </div>
    </div>
    <footer>© Derek Reynolds {new Date().getFullYear()}</footer>
    <style jsx>{`
      .mast-grid {
        padding: 2rem;
      }

      .mast-grid p {
        font-size: 1.2em;
        line-height: 1.5;
        max-width: 60vw;
      }

      h2 {
        color: #aaa;
      }

      .experience-grid {
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 50px 1fr 1fr;
      }

      .experience {
        grid-column-start: 3;
        grid-column-end: 5;
      }

      footer {
        padding: 1em;
      }
    `}</style>
  </Fragment>
)

// # Derek Reynolds – Webdev, Thoughts and Fun.

// Currently living in the Bay Area working as a Senior Engineering Manager at [Patreon](https://patreon.com).

// ## Currently
// Patreon 2015

// ## Previous
// NerdWallet 2015
// DIY 2013-2015
// Trulia 2011-2013
// Optimal Outsource 2006-2001
