import React, { useState } from "react";

export default function Socials() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Mr. Kamau",
      subject: "Mathematics",
      school: "NYS Secondary",
      content:
        "Tip: Use real-life budgeting examples when teaching percentages.",
      likes: 3,
      comments: ["Great idea!", "I’ll try this in my class."]
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const handleAddPost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: Date.now(),
      author: "You (T123)", // replace with logged-in teacher info
      subject: "Computer Studies",
      school: "NYS Secondary",
      content: newPost,
      likes: 0,
      comments: []
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLike = (id) => {
    setPosts(posts.map((p) =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    ));
  };

  const handleAddComment = (id, comment) => {
    if (!comment.trim()) return;
    setPosts(posts.map((p) =>
      p.id === id ? { ...p, comments: [...p.comments, comment] } : p
    ));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-bold">👩‍🏫 Teacher Social Platform</h2>
      <p className="text-slate-600">
        Share ideas, tips, and resources with fellow teachers.
      </p>

      {/* New Post box */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's happening in your class?"
          className="w-full border rounded p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAddPost}
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
          >
            Post
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border rounded-lg p-4 shadow-sm"
          >
            {/* Author + subject */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-slate-500">
                  {post.subject} · {post.school}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="mt-3 text-slate-800">{post.content}</p>

            {/* Interactions */}
            <div className="flex gap-6 mt-3 text-sm text-slate-600">
              <button
                onClick={() => handleLike(post.id)}
                className="hover:text-green-600"
              >
                👍 Like ({post.likes})
              </button>
            </div>

            {/* Comments */}
            <div className="mt-3 border-t pt-3">
              <h4 className="font-semibold text-sm mb-2">Replies</h4>
              <ul className="space-y-1">
                {post.comments.map((c, i) => (
                  <li
                    key={i}
                    className="text-slate-700 pl-2 border-l-2 border-slate-300"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Reply..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
                className="mt-2 w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}