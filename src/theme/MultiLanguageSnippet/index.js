import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import qs from 'jquery-param';


const MultiLanguageSnippet = ({
  endpoint,
  method = 'GET',
  query = {},
  body = {},
  ...props
}) => {

  console.log({ endpoint, method, query, props });
  const qparams = {
    ...query,
    token: 'YOUR_TREFLE_TOKEN'
  };

  const searchParams = qs(qparams);

  const values = [
    { label: 'CURL', value: 'curl' },
    { label: 'Browser', value: 'browser' },
    { label: 'NodeJS', value: 'node' },
    { label: 'Python', value: 'python' },
    { label: 'Ruby', value: 'ruby' },
  ]

  const renderCodeBlock = ({ value }) => {
    
    switch (value) {
      case "browser":
        return (<TabItem value="browser" key="browser">
          Open your browser and navigate to <a href={`https://trefle.io${endpoint}?${searchParams.toString()}`}>{`https://trefle.io${endpoint}?${searchParams.toString()}`}</a>

        </TabItem>)

      case "curl": 
        return (<TabItem value="curl" key="curl">
          <CodeBlock className="bash">{`
curl -X ${method.toString().toUpperCase()} "https://trefle.io${endpoint}?${searchParams.toString()}"
          `}</CodeBlock>
        </TabItem>)
        
      case "node": 
        return (<TabItem value="node" key="node">
          <CodeBlock className="js">{`
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io${endpoint}?${searchParams.toString()}');
  const json = await response.json();
  console.log(json);
})();
          `}</CodeBlock>

        </TabItem>)

      case "python": 
        return (<TabItem value="python" key="python">
          <CodeBlock className="py">{`
import requests

r = requests.${method.toString().toLowerCase()}('https://trefle.io${endpoint}?${searchParams.toString()}')
r.json
`}</CodeBlock>

        </TabItem>)
    

      case "ruby": 
        return (<TabItem value="ruby" key="ruby">
          <CodeBlock className="rb">{`
require 'httparty'

r = HTTParty.${method.toString().toLowerCase()}(
  'https://trefle.io${endpoint}',
  query: ${JSON.stringify(qparams, null, 2).split("\n").join("\n  ")}
)
r.parsed_response
`}</CodeBlock>

        </TabItem>)
    
      default:
        return (<TabItem value="?" key="?">
          <span>?</span>
        </TabItem>)
    }
  }

  return (
    <div className="codeBlock">
      <Tabs
        groupId="supports"
        defaultValue="browser"
        values={values}
      >
        {values.map(renderCodeBlock)}
      </Tabs>
    </div>
  )
}

export default MultiLanguageSnippet