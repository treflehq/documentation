import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { RedocStandalone } from 'redoc';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = { customFields: {} } } = context;
  console.log({ siteConfig })
  return (
    <Layout
      title={`${siteConfig.title} - Reference`}
      description="Reference of the Trefle API">
      <main>
        <RedocStandalone
          specUrl={siteConfig.customFields.swagger || "/swagger.yaml"}
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
