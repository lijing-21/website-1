import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import clsx from 'clsx';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate'
// import Link from '@docusaurus/Link';

import styles from './index.module.css';
import { UseCases } from '../components/use-cases';
import { Section } from '../components/Section';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="https://arextest.github.io/arex-doc/">
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();



// @ts-ignore
    const showcase = siteConfig.customFields.users.map((user, i) => {
        const url = new URL(user.infoLink);
        url.searchParams.append("utm_source", "pnpm");
        url.searchParams.append("utm_medium", "users_page");

        return (
            <a href={url.toString()} target="_blank" key={i} rel="noopener">
                <img src={user.image} title={user.caption} style={{
                    width: user.width ? `${user.width}px` : '128px',
                    padding: '20px'
                }} />
            </a>
        );
    });
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />

                <div className="mainContainer">
                    <div style={{margin: '0 auto', maxWidth: '1100px', padding: '2rem 0'}}>
                        <div className="showcaseSection">
                            <div className="prose text--center">
                                <h1><Translate>Who's Using This?</Translate></h1>
                                <p><Translate>This project is used by many folks</Translate></p>
                                <p><Translate>Are you using this project?</Translate></p>
                                <Link
                                    className={clsx(
                                        'button button--outline button--secondary button--lg',
                                        styles.getStarted,
                                    )}
                                    href="https://github.com/arex/website/edit/main/users.json">
                                    <Translate>Add your company</Translate>
                                </Link>
                            </div>
                            <div className="logos" style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexFlow: 'row wrap',
                                justifyContent: 'center',
                            }}>{showcase}</div>
                        </div>
                    </div>
                </div>


                {/*<Section.Title center size="small">*/}
                {/*    Join Community*/}
                {/*</Section.Title>*/}
                {/*<div style={{marginBottom:'40px'}}>*/}
                {/*    <UseCases />*/}
                {/*</div>*/}
            </main>
        </Layout>
    );
}
