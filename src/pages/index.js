import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> Brandeis Operating Systems Course</h1>
        <p className="hero__subtitle">
          Concepts, assignments, and debugging help for CS students.
        </p>
        <p className="hero__subtitle">
          email egk265@brandeis.edu for funny jokes
        </p>
        <img
          src="/img/dino.png"
          alt="Friendly dinosaur mascot"
          style={{ maxWidth: '250px', marginTop: '1rem', borderRadius: '10px' }}
        />
      </div>
    </header>
    
  );
}

export default function Home() {
  return (
    <Layout
      title="Operating Systems Course"
      description="Course resources, videos, and help for Operating Systems">
      <HomepageHeader />
      <main className="container margin-top--lg margin-bottom--xl">
        <div className="row">
          <div className="col col--6">
            <h2>🧠 Concepts & Videos</h2>
            <p>Short videos and notes for every key OS topic: processes, threads, memory, deadlocks, and more.</p>
            <Link className="button button--outline button--sm" to="/docs/concepts">
              Explore Concepts
            </Link>
          </div>
          <div className="col col--6">
            <h2>💻 Assignment Help</h2>
            <p>Get help with PAs and problem sets, plus common bug patterns and tips for better code.</p>
            <Link className="button button--outline button--sm" to="/docs/AssignmentHelp">
              View Assignment Help
            </Link>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--6">
            <h2>🛠️ Debugging & Java Tips</h2>
            <p>Learn how to use the VSCode debugger and write modular, bug-resistant code in Java.</p>
            <Link className="button button--outline button--sm" to="/docs/javadebugger">
              View Debugging Help
            </Link>
          </div>

          <div className="col col--6">
            <h2>📎 Resources</h2>
            <p>Find links to the textbook.</p>
            <Link className="button button--outline button--sm" to="/docs/Resources">
              View Resources
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
