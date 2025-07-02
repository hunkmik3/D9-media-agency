import Link from "next/link";
import Image from "next/image";
import { getSinglePage } from "@lib/contentParser";

const HomeNews = () => {
  // Lấy 3 bài viết mới nhất
  const blogs = getSinglePage("content/blogs");
  const posts = blogs.slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center uppercase">Tin Tức & Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
              <Image src={post.frontmatter.image || "/images/blog-1.jpg"} alt={post.frontmatter.title} width={400} height={220} className="rounded-xl mb-4 object-cover w-full h-[180px]" />
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.frontmatter.title}</h3>
              <p className="text-gray-700 text-base mb-4 line-clamp-3">{post.frontmatter.description || post.content.slice(0, 100) + "..."}</p>
              <Link href={post.frontmatter.url || `/blogs/${post.slug}`} className="btn btn-primary mt-auto w-max">Xem chi tiết</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNews; 