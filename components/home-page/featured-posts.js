import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <ul>
        <li>
          <PostsGrid posts={posts} />
        </li>
      </ul>
    </section>
  );
}

export default FeaturedPosts;
