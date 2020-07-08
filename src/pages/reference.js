import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { RedocStandalone } from 'redoc';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <RedocStandalone
          specUrl={siteConfig.swagger || "https://mgmt.trefle.io/swagger/v1/swagger.yaml"}
          options={{
            scrollYOffset: ".navbar.navbar--light.navbar--fixed-top",
            theme: {
              colors: {
                primary: {
                  main: "#2d7b0f"
                }
              },
              typography: {
                fontFamily: "'Roboto Mono', monospace",
                headings: {
                  fontFamily: "'Roboto Mono', monospace"
                }
              }
            }
          }}
        />
      </main>
    </Layout>
  );
}

export default Home;
