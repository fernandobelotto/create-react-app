/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import clsx from 'clsx';

import styles from './styles.module.css';

const features = [
  {
    title: 'Menos para aprender',
    content:
      "Você não precisa aprender e configurar muitas ferramentas de build. Reloads instantâneos ajudam você a se concentrar no desenvolvimento. Quando é hora de implantar, seus pacotes são otimizados automaticamente.",
  },
  {
    title: 'Apenas Uma Dependência',
    content:
      'Seu aplicativo só precisa de uma dependência de compilação. Testamos o Create React App para garantir que todas as suas peças subjacentes funcionem juntas perfeitamente - sem incompatibilidades de versão complicadas.',
  },
  {
    title: 'Sem bloqueio',
    content:
      "Nos bastidores, usamos webpack, Babel, ESLint e outros projetos incríveis para potencializar seu aplicativo. Se você quiser uma configuração avançada, pode 'ejetar' do Create React App e editar seus arquivos de configuração diretamente.",
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'Configure um aplicativo da web moderno executando um comando.'}
    >
      <div className={clsx('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--md')}
            alt="Create React App logo"
            src={useBaseUrl('img/logo.svg')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted}>
            <Link
              className="button button--outline button--primary button--lg"
              to={useBaseUrl('docs/getting-started')}
            >
              Comece Agora
            </Link>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div
                  key={idx}
                  className={clsx('col col--4', styles.feature)}
                >
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={styles.gettingStartedSection}>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <h2>Comece em segundos</h2>
              <p>
                Esteja você usando o React ou outra biblioteca, Create React App
                permite que você <strong>foco no código, não em build tools</strong>.
                <br />
                <br />
                Para criar um projeto chamado <i>my-app</i>, execute este comando:
              </p>
              <CodeBlock className="language-sh">
                npx create-react-app my-app
              </CodeBlock>
              <br />
            </div>
            <div className="col col--5 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Fácil de começar em segundos"
                src={
                  'https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667'
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--4 col--offset-1">
              <img
                className={styles.featureImage}
                alt="Fácil de atualizar"
                src={useBaseUrl('img/update.png')}
              />
            </div>
            <div className="col col--5 col--offset-1">
              <h2>Fácil manutenção</h2>
              <p>
                  Atualizar suas ferramentas de construção é geralmente uma tarefa difícil e
                  demorada. Quando novas versões do aplicativo Create React são
                  lançado, você pode atualizar usando um único comando:
              </p>
              <CodeBlock className="language-sh">
                npm install react-scripts@latest
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
