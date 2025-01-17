import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function Patterns() {
  const history = useHistory();

  return (
    <Layout>
      <h1>Patterns</h1>
      <button
        className="bg-slate-400"
        onClick={() => history.push('/patterns/segmentation-panel')}
      >
        {'Segmentation Panel'}
      </button>
      <button
        className="bg-slate-400"
        onClick={() => history.push('/patterns/measurement-panel')}
      >
        {'Measurements Panel'}
      </button>
    </Layout>
  );
}
