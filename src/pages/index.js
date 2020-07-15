import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    icon: <><i className="uil uil-rocket"></i></>,
    title: <>Get started</>,
    link: '/docs/guides/getting-started',
    description: (
      <>
        Discover how to get started with the Trefle API basis, step by step.
      </>
    ),
  },
  {
    icon: <><i className="uil uil-flask-potion"></i></>,
    title: <>Advanced topics</>,
    link: '/docs/advanced/plants-fields',
    description: (
      <>
        Understand trefle schemas and specifications in depth.
      </>
    ),
  },
  {
    icon: <><i className="uil uil-brackets-curly"></i></>,
    title: <>Examples and samples</>,
    link: '/docs/examples/snippets',
    description: (
      <>
        See sample queries and code snippets.
      </>
    ),
  },
  {
    icon: <><i className="uil uil-book-alt"></i></>,
    title: <>API Reference</>,
    link: '/reference',
    description: (
      <>
        In depth reference of Trefle API endpoints, parameters and data structure.
      </>
    ),
  },
];

function Feature({link, title, icon, description}) {
  return (
    <Link to={useBaseUrl(link) } className={clsx(styles.feature)}>
      <aside className={clsx(styles.featureAside)}>
        {icon}
      </aside>
      <main className={clsx(styles.featureMain)}>
        <h3>{title}</h3>
        <p>{description}</p>
      </main>
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
                'button button--primary button--lg',
                styles.getStarted,
                styles.bigButton,
              )}
              to={useBaseUrl('docs/guides/getting-started')}>
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
                styles.bigButton,
              )}
              to={useBaseUrl('reference')}>
              API reference
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          {features && features.length > 0 && (
            <section className={styles.features}>
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </section>
          )}
        </div>

        <div className="container">
        <footer>
          <Link
            className={clsx()}
            to={'https://trefle.io'}>

            <i className="uil uil-angle-left"></i>
              Back to Trefle website
            </Link>

        </footer>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
