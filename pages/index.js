import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "First Post",
    image: "getting-started-nextjs.png",
    excerpt: "This is the first post",
    date: "2025-01-01",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Second Post",
    image: "getting-started-nextjs.png",
    excerpt: "This is the second post",
    date: "2025-01-02",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Third Post",
    image: "getting-started-nextjs.png",
    excerpt: "This is the third post",
    date: "2025-01-03",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Fourth Post",
    image: "getting-started-nextjs.png",
    excerpt: "This is the fourth post",
    date: "2025-01-04",
    slug: "getting-started-with-nextjs4",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
