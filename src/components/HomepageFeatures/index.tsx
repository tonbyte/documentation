import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TON NFT Storage',
    image: 'img/features/nft.png',
    description: (
      <>
        You can create new or transfer already existing collection via our <a target='_blank' href='https://tonbyte.com/tools'>tools</a>.
      </>
    ),
  },
  {
    title: 'API',
    image: 'img/features/api.png',
    description: (
      <>
        Use our API to create and manage your data programmatically. Check swagger <a target='_blank' href='https://tonbyte.com/swagger'>here</a>.
      </>
    ),
  },
  {
    title: 'Gateway',
    image: 'img/features/gateway.png',
    description: (
      <>
        All your files in TON Storage are available via gateway.
      </>
    ),
  },
  {
    title: 'Decentralized Storage',
    image: 'img/features/decentralized.png',
    description: (
      <>
        Increase your data security by storing it in decentralized storage.
      </>
    ),
  }
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <h3>{title}</h3>
        <img style={{
          width: '70%',
          height: 'auto',
        }} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div style={{
      marginTop: '100px',
    }}>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
