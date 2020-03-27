import PropTypes from 'prop-types';
import Count from '@app/components/Count';

function Home({ name }) {
  return (
    <div className="App">
      <h1>{name}</h1>

      <h2>Features</h2>

      <ul>
        <li>ESLint + Prettier</li>
        <li>Husky + lint-staged + commitlint</li>
        <li>@reduxjs/toolkit</li>
        <li>Absolute imports</li>
      </ul>

      <Count />
    </div>
  );
}

function getStaticProps() {
  return {
    props: { name: 'NextJS App' },
  };
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Home as default, getStaticProps };
