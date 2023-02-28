import propTypes from 'prop-types';
import Feed from './Feed';

const Home = ({ posts }) => (
  <main className="Home">
    {posts.length ? (
      <Feed posts={posts} />
    ) : (
      <p style={{ marginTop: '2rem' }}>No posts to display. </p>
    )}
  </main>
);

Home.propTypes = {
  posts: propTypes.string.isRequired,
};

export default Home;
