import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialPosts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    author: 'Admin',
    date: '2025-09-09',
    content: 'This is the first post on the modern blog space. Stay tuned for more updates!',
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Jane Doe',
    date: '2025-09-08',
    content: 'Here is another blog post with some interesting content.',
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', author: '', content: '' });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.content) return;
    setPosts([
      {
        id: posts.length + 1,
        title: form.title,
        author: form.author,
        date: new Date().toISOString().slice(0, 10),
        content: form.content,
      },
      ...posts,
    ]);
    setForm({ title: '', author: '', content: '' });
    setShowForm(false);
  };

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">Modern Blog</a>
          <button className="btn btn-outline-light ms-auto" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : 'New Post'}
          </button>
        </div>
      </nav>
      <div className="container py-5">
        <header className="mb-5 text-center">
          <h1 className="display-4 fw-bold">Modern Blog Space</h1>
          <p className="lead text-secondary">Share your thoughts and ideas with the world.</p>
        </header>
        {showForm && (
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Create a New Post</h5>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        placeholder="Author"
                        value={form.author}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        name="content"
                        placeholder="Write your post here..."
                        rows={4}
                        value={form.content}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row g-4">
          {posts.map(post => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title fw-semibold">{post.title}</h4>
                  <div className="mb-2 text-muted small">
                    By {post.author} &middot; {post.date}
                  </div>
                  <p className="card-text flex-grow-1">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center text-muted mt-5">No posts yet. Be the first to post!</div>
        )}
      </div>
      <footer className="text-center py-4 mt-auto text-secondary bg-white border-top">
        &copy; {new Date().getFullYear()} Modern Blog Space
      </footer>
    </div>
  );
}

export default App;