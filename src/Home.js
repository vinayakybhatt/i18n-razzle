import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import logo from './react.svg';
import './Home.css';

function Home() {
  const [ t ] = useTranslation('translations');

  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h2>{t('message.welcome')}</h2>
      </div>
      <div className="Home-intro">
        <Trans i18nKey="guideline">
          To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to
          reload.
        </Trans>
      </div>
    </div>
  );
}

export default Home;
