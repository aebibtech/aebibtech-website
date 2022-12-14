import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Project from '../components/project'
import getProjectsData from '../lib/projects'
import { Button } from '@mui/material'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const projects = getProjectsData();
  return {
    props : {
      allPostsData: allPostsData,
      projectsData: projects
    }
  }
}

export default function Home({ allPostsData, projectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>🖥️ Computers | 👨‍💻 Software | 🌐 Web | 🥋 Karate | 🎸 Guitars</p>
        <p>Hey, <strong><em>Aebibtech</em></strong> here! I develop Desktop and Web applications. This website will contain the projects that I worked on and some tech tips that I can share with you all.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={utilStyles.projects}>
          {projectsData.filter(item => item.name != "").map(({name, description, image, repo}) => {
            return <Project key={name} name={name} description={description} image={image} repo={repo} />
          })}
        </div>
        <div className={utilStyles.more_projects}>
          <Button variant="text" href="https://github.com/aebibtech?tab=repositories" target="_blank" size="large">More . . .</Button>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tech Tips</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map( ({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
              <Link href={`/tech-tips/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ) )}
        </ul>
      </section>
    </Layout>
  )
}
