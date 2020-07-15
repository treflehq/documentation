import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Guides</>,
    link: '/docs/guides/getting-started',
    description: (
      <>
        Discover how to get started with the Trefle API basis, step by step.
      </>
    ),
  },
  {
    title: <>Advanced topics</>,
    link: '/docs/advanced/plants-fields',
    description: (
      <>
        Understand trefle schemas and specifications in depth.
      </>
    ),
  },
  {
    title: <>Examples and samples</>,
    link: '/docs/examples/snippets',
    description: (
      <>
        See sample queries and code snippets.
      </>
    ),
  },
  {
    title: <>API Reference</>,
    link: '/reference',
    description: (
      <>
        In depth reference of Trefle API endpoints, parameters and data structure.
      </>
    ),
  },
];

function Feature({link, title, description}) {
  return (
    <Link to={useBaseUrl(link) } className={clsx(styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function Home(props) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  console.log({ props, context })
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Getting started with the Trefle API">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
                styles.bigButton,
              )}
              to={useBaseUrl('docs/guides/getting-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
                <div className="col">
                  <Feature key={'changelogs'} title="Releases" link="/blog/tags/releases" />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
