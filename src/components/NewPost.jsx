import propTypes from 'prop-types';

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => (
  <main className="NewPost">
    <h2>New Post</h2>
    <form className="newPostForm" onSubmit={handleSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input
        id="postTitle"
        type="text"
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <label htmlFor="postBody">Post:</label>
      <textarea
        id="postBody"
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  </main>
);

NewPost.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  postTitle: propTypes.string.isRequired,
  setPostTitle: propTypes.func.isRequired,
  postBody: propTypes.string.isRequired,
  setPostBody: propTypes.func.isRequired,
};

export default NewPost;
