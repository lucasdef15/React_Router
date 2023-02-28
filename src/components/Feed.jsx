import propTypes from 'prop-types';
import Post from './Post';

const Feed = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </>
);

Feed.propTypes = {
  posts: propTypes.string.isRequired,
};

export default Feed;
