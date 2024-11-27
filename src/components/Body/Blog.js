import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Quick Recipes for Busy Days',
      excerpt: 'Discover quick and easy recipes you can whip up in no time, perfect for busy days.',
      image: '/foodimages/10quick.jpg',
      date: 'November 24, 2024',
    },
    {
      id: 2,
      title: 'Desserts That Make You Smile',
      excerpt: 'Explore a world of delightful desserts that will bring a smile to your face.',
      image: '/foodimages/ds.jpg',
      date: 'November 18, 2024',
    },
    {
      id: 3,
      title: 'The Art of Perfect Tandoori',
      excerpt: 'Master the secrets of making perfect tandoori dishes with these expert tips.',
      image: '/foodimages/pt.jpg',
      date: 'November 20, 2024',
    },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Dstarve Blog</h1>
      <p className="blog-subtitle">Food, Recipes, and Everything in Between!</p>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
