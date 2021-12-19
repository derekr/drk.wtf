---
title: Work at DIY
---

# DIY

[DIY](https://diy.org 'DIY') is a community of kids learning skills and sharing what
they make. Designing and building for kids is a fun and challenging task – it helped
working with a team that are all still kids at heart. I enjoyed coming up with
solutions that were engaging, but worked within constraints put forth by
things like [COPPA](http://www.coppa.org "Children's Online Privacy Protection Act").

In addition to working on the website proper and other services I built internal
tools like a Skills admin site for our curators and a playground for designers to
sketch new web components with our type and base css pre-loaded.

## Tools and Technologies

- NodeJS
- NPM
- Browserify
- MySQL
- Redis
- jQuery
- Transloadit
- AWS

## Skills

Kids could browse a [wide breadth of Skills](https://diy.org/skills 'DIY – Skills') and get a glimpse in to all
sorts of interests they may not have known they had. If they are signed in a
list of skills in progress could encourage completion earning a patch as
a result. Clientside sorting and grouping made it really easy to navigate the
100+ skills on the page. Any new skills would have a `new` label on their card and
that would bubble up to the category navigation to the left. New and noteworthy
skills would display at the top in a banner with a random skill on each page
load.

![Skills Page](https://cloud.githubusercontent.com/assets/22249/5868795/9fa188c2-a263-11e4-8659-0e51e7fd4933.png)

- Designed by [Ryan Brock](ryan)
- I implemented the serverside and clientside.

## To-Do's

After launching [Extra Awesome](https://diy.org/membership 'DIY Membership') we had some room to work on a non-roadmap project.
I chose adding support for bookmarking challenges. Kids on the site had asked for the
feature before and I always saw the activities you could do on DIY were asyncrhonous
so a feature like To-Do's would be pretty beneficial.

On each Challenge detail view a To-Do button would appear as long as you haven't
completed the challenge already. Tapping the button would add the challenge
to your To-Do list in your portfolio.

![To-Do Button](/assets/projects/diy/images/todo-button.gif)

![To-Do List](https://cloud.githubusercontent.com/assets/22249/5868810/bd96fdd0-a263-11e4-9642-23e378b60967.png)

Each To-Do item sports time and cost metadata meters. The color of the meter
will change depending on how many dots are filled increasing the scannability
of To-Do's that might be cheap and quick or expensive and difficult depending
on what you're looking for.

- Button and To-Do Card designed by [Ryan Brock](https://twitter.com/brocklesocks "Ryan's Twitter").
- I implemented the serverside and clientside.

## Portfolio

One of the last projects I worked on was a refresh of the [Portfolio](https://diy.org/drk 'drk on DIY').
It was a much needed facelift and a preparation to support new features we had
on the roadmap such as custom avatars.

In the previous iteration you couldn't view your entire skill grid. With this
update you can now scroll through your entire skill history. The grid was built
using an [awesome module by Substack](https://github.com/substack/hex-grid 'skill-grid on Github') with some [additional tweaks](https://github.com/diy/skill-hex-grid 'diy/skill-hex-grid on Github') to meet the
intended visual design.

![Skill Grid](/assets/projects/diy/images/skill-grid.gif)

![Portfolio Projects](https://cloud.githubusercontent.com/assets/22249/5868815/c8397862-a263-11e4-9a1d-568bade27097.png)

![Portfolio Followers](https://cloud.githubusercontent.com/assets/22249/5868811/bdd49582-a263-11e4-9cb6-3d62e6152778.png)

## Insights

A part of the Extra Awesome offerings is access to your insights on your portfolio
as well as your parent's dashboard. We hired [Ri Liu](https://twitter.com/riblah "Ri's Twitter") for a data viz residency to
help craft the d3 visualization and I helped put all the pieces together. We
opened sourced two of the graphs used to make up Insights: [donutchart](https://github.com/diy/donutchart 'diy/donutchart') and
[radarchart](https://github.com/diy/radarchart 'diy/radarchart').

![Insights Progress](https://cloud.githubusercontent.com/assets/22249/5868805/b888ac8a-a263-11e4-880f-6a3b0efc2829.png)

![Insights Journey](https://cloud.githubusercontent.com/assets/22249/5868806/b8a64d08-a263-11e4-8f93-1035b52db608.png)

- Designed by [Hartley Miller](https://twitter.com/hrtlym "Hartley's Twitter")
- Data plumbing by [Jack Perkins](https://twitter.com/mousecastle "Jack's Twitter") and Myself.
- d3 work by [Ri Liu](https://twitter.com/riblah "Ri's Twitter").
- I did the clientside plumbing.

## Join Flow

We never got around to making all of DIY mobile friendly, but it was important
to get the [Join flow](https://diy.org/join 'DIY Join') in shape as many of the kids and parents needing to verify
accounts were using mobile devices.

<iframe src="//player.vimeo.com/video/117758788" width="500" height="888" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="article-media"></iframe>

- Designed by [Hartley Miller](https://twitter.com/hrtlym "Hartley's Twitter")
- I implemented serverside and clientside for both mobile and desktop experiences.

## Noteworthy

- Launched a membership offering called [Extra Awesome](https://diy.org/membership 'DIY Membership')
- Started a weekly Show and Smell for staff to share work and whatever as a way to wind down on Friday afternoons.
- Managed services in AWS and web deployments.
- Worked on extra [documentation and walkthroughs](https://github.com/derekr/diy-client-example 'Getting started w/ diy-client') to help kids work with the [DIY API](http://docs.diy.org 'DIY API Docs').
