import { blogPosts } from '../content.js';

function Blog() {
    return (
        <section id="blog" className="section">
            <div className="container">
                <div className="section__header">
                    <h2>Blog</h2>
                </div>
                <div className="blog-list">
                    {blogPosts.map((post) => (
                        <article key={post.title} className="blog-card">
                            <p className="blog-card__meta">
                                <span>{post.date}</span>
                                <span>&middot;</span>
                                <span>{post.readingTime}</span>
                            </p>
                            <h3>{post.title}</h3>
                            <p>{post.summary}</p>
                            <a href={post.href} className="blog-card__link">
                                {post.linkText}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
