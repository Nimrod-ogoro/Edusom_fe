import React, { useState } from "react";

export default function SocialsPage() {
  // THEME
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // MOCK USER
  const currentUser = {
    id: "T123",
    name: "Leon",
    role: "Teacher",
    subject: "ICT",
    school: "NYS",
  };

  // MAIN TAB: home | resources | community | messages
  const [activeMainTab, setActiveMainTab] = useState("home");

  // FEED TAB: questions | content | dev_updates
  const [activeFeedTab, setActiveFeedTab] = useState("questions");

  // POSTS
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Dev Team",
      role: "Dev",
      type: "dev_updates",
      topic: "Uploads",
      content: "We’ve improved upload stability for large lesson files.",
      time: "Today • 10:15 AM",
    },
    {
      id: 2,
      author: "Jane Smith",
      role: "Teacher",
      type: "questions",
      topic: "Analytics",
      content: "How can I see weekly performance for my 7B class?",
      time: "Yesterday • 3:42 PM",
    },
  ]);

  // SHARED RESOURCES
  const [resourceInput, setResourceInput] = useState("");
  const [sharedResources, setSharedResources] = useState([
    {
      id: 1,
      author: "Leon",
      content: "Grade 8 Algebra Revision PDF",
      type: "file",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "https://example.com/science-experiment-ideas",
      type: "link",
    },
  ]);

  // NOTIFICATIONS
  const [notifications, setNotifications] = useState([
    "Dev Team replied to your question on uploads.",
    "Jane Smith shared a new Mathematics resource.",
  ]);

  // DIRECT MESSAGES
  const [conversations, setConversations] = useState([
    {
      id: "dev-team",
      name: "Dev Team",
      role: "Dev",
      lastMessage: "We’re checking the bug you reported.",
    },
    {
      id: "t456",
      name: "Mr. Kamau",
      role: "Teacher",
      lastMessage: "Let’s sync on exams schedule.",
    },
  ]);

  const [activeConversationId, setActiveConversationId] = useState("dev-team");

  const [messages, setMessages] = useState({
    "dev-team": [
      { from: "Dev Team", text: "We’re checking the bug you reported." },
      { from: "You", text: "Thanks, let me know what you find." },
    ],
    t456: [
      { from: "You", text: "Are you using the new resources page?" },
      { from: "Mr. Kamau", text: "Yes, it’s very clear and useful." },
    ],
  });

  const [messageInput, setMessageInput] = useState("");

  // HANDLERS

  const handleCreatePost = () => {
    if (!postText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: currentUser.name,
      role: currentUser.role,
      type: activeFeedTab,
      topic:
        activeFeedTab === "questions"
          ? "Questions"
          : activeFeedTab === "content"
          ? "Content"
          : "Dev",
      content: postText,
      time: "Just now",
    };

    setPosts([newPost, ...posts]);
    setPostText("");
    setNotifications([
      `${currentUser.name} created a new ${activeFeedTab} post.`,
      ...notifications,
    ]);
  };

  const handleShareResource = () => {
    if (!resourceInput.trim()) return;

    const newResource = {
      id: Date.now(),
      author: currentUser.name,
      content: resourceInput,
      type: resourceInput.startsWith("http") ? "link" : "note",
    };

    setSharedResources([newResource, ...sharedResources]);
    setResourceInput("");
    setNotifications([
      `${currentUser.name} shared a new resource.`,
      ...notifications,
    ]);
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !activeConversationId) return;

    const newMsg = { from: "You", text: messageInput };
    const existing = messages[activeConversationId] || [];

    const updatedMessages = {
      ...messages,
      [activeConversationId]: [...existing, newMsg],
    };

    setMessages(updatedMessages);
    setMessageInput("");

    const updatedConversations = conversations.map((c) =>
      c.id === activeConversationId
        ? { ...c, lastMessage: newMsg.text }
        : c
    );
    setConversations(updatedConversations);
  };

  // HELPERS

  const filteredPosts = posts.filter((p) => p.type === activeFeedTab);

  const activeConversation =
    conversations.find((c) => c.id === activeConversationId) || null;

  const activeConversationMessages =
    (activeConversation && messages[activeConversationId]) || [];

  const baseBg = darkMode ? "bg-slate-900" : "bg-slate-100";
  const baseText = darkMode ? "text-white" : "text-slate-900";
  const cardBg = darkMode ? "bg-slate-800" : "bg-white";
  const cardBorder = darkMode ? "border-slate-700" : "border-slate-200";
  const subtleText = darkMode ? "text-slate-400" : "text-slate-500";
  const inputBg = darkMode ? "bg-slate-700" : "bg-slate-50";
  const inputBorder = darkMode ? "border-slate-600" : "border-slate-200";

  return (
    <div className={`${baseBg} ${baseText} min-h-screen`}>
      {/* TOP BAR */}
      <header
        className={`px-6 py-3 border-b flex justify-between items-center sticky top-0 z-10 ${cardBg} ${cardBorder}`}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">📘</span>
          <div>
            <h1 className="text-lg md:text-xl font-bold">
              Socials & Resources Hub
            </h1>
            <p className={`text-xs ${subtleText}`}>
              Connect with teachers, share content, and talk directly with devs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className={`hidden md:block text-xs ${subtleText}`}>
            Logged in as{" "}
            <span className="font-semibold">{currentUser.name}</span>
          </span>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-lg text-xs md:text-sm font-medium 
              bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-6">
        {/* LEFT SIDEBAR */}
        <aside className="md:col-span-1 space-y-6 md:sticky md:top-20 h-fit">
          {/* Profile Card */}
          <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{currentUser.name}</p>
                <p className={`text-xs ${subtleText}`}>
                  {currentUser.role} • {currentUser.subject}
                </p>
                <p className={`text-xs ${subtleText}`}>{currentUser.school}</p>
              </div>
            </div>
            <p className={`text-xs ${subtleText}`}>
              Use this space to manage your resources, ask questions, and keep
              in touch with other teachers and devs.
            </p>
          </div>

          {/* Navigation */}
          <nav className={`${cardBg} ${cardBorder} border rounded-xl shadow p-3 space-y-2`}>
            {[
              { id: "home", label: "Home Feed" },
              { id: "resources", label: "Resources" },
              { id: "community", label: "Community" },
              { id: "messages", label: "Messages" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMainTab(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition
                  ${
                    activeMainTab === item.id
                      ? "bg-blue-600 text-white"
                      : darkMode
                      ? "hover:bg-slate-700"
                      : "hover:bg-blue-50"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Notifications */}
          <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
            <h2 className="font-semibold text-sm mb-2">Notifications</h2>
            {notifications.length === 0 ? (
              <p className={`text-xs ${subtleText}`}>
                No notifications yet. You’re all caught up.
              </p>
            ) : (
              <ul className="space-y-1 max-h-40 overflow-y-auto text-xs">
                {notifications.map((n, i) => (
                  <li
                    key={i}
                    className={`border rounded p-2 ${
                      darkMode ? "border-slate-700 bg-slate-800" : "border-slate-100 bg-slate-50"
                    }`}
                  >
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>

        {/* CENTER: FEED / RESOURCES / COMMUNITY / MESSAGES */}
        <main className="md:col-span-2 space-y-6">
          {activeMainTab === "home" && (
            <>
              {/* Feed Tabs */}
              <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-2 flex gap-2 text-sm`}>
                {[
                  { id: "questions", label: "Questions" },
                  { id: "content", label: "Content & Ideas" },
                  { id: "dev_updates", label: "Dev Updates" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFeedTab(tab.id)}
                    className={`flex-1 py-2 rounded-lg font-medium transition ${
                      activeFeedTab === tab.id
                        ? "bg-blue-600 text-white"
                        : darkMode
                        ? "bg-slate-800 hover:bg-slate-700"
                        : "bg-slate-100 hover:bg-blue-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Post Composer */}
              <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder={
                    activeFeedTab === "questions"
                      ? "Ask a question to other teachers or the devs..."
                      : activeFeedTab === "content"
                      ? "Share a teaching idea, tip, or resource..."
                      : "Share feedback or an observation with the dev team..."
                  }
                  className={`w-full rounded-lg p-2 text-sm mb-3 border ${inputBg} ${inputBorder} resize-none min-h-[70px]`}
                />
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${subtleText}`}>
                    Posting as {currentUser.name} ({activeFeedTab})
                  </span>
                  <button
                    onClick={handleCreatePost}
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Post
                  </button>
                </div>
              </div>

              {/* Feed List */}
              <div className="space-y-4">
                {filteredPosts.length === 0 ? (
                  <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
                    <p className={`text-sm ${subtleText}`}>
                      No posts yet in this category. Be the first to share
                      something.
                    </p>
                  </div>
                ) : (
                  filteredPosts.map((p) => (
                    <div
                      key={p.id}
                      className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-semibold">{p.author}</p>
                          <p className={`text-xs ${subtleText}`}>
                            {p.role} • {p.topic}
                          </p>
                        </div>
                        <span className={`text-xs ${subtleText}`}>{p.time}</span>
                      </div>
                      <p className="mt-2 text-sm">{p.content}</p>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

          {activeMainTab === "resources" && (
            <div className="space-y-4">
              <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
                <h2 className="font-semibold text-lg mb-2">
                  My Shared Resources
                </h2>
                <p className={`text-xs mb-3 ${subtleText}`}>
                  Share links, file names, or short notes. Later you can connect
                  this to real file uploads in the backend.
                </p>
                <input
                  type="text"
                  value={resourceInput}
                  onChange={(e) => setResourceInput(e.target.value)}
                  placeholder="Paste a link or write a short description..."
                  className={`w-full rounded-lg p-2 text-sm mb-2 border ${inputBg} ${inputBorder}`}
                />
                <button
                  onClick={handleShareResource}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Share Resource
                </button>
              </div>

              <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
                {sharedResources.length === 0 ? (
                  <p className={`text-sm ${subtleText}`}>
                    You haven’t shared any resources yet.
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {sharedResources.map((r) => (
                      <li
                        key={r.id}
                        className={`border rounded p-3 ${
                          darkMode ? "border-slate-700" : "border-slate-200"
                        }`}
                      >
                        <p className="text-sm">{r.content}</p>
                        <p className={`text-xs mt-1 ${subtleText}`}>
                          Shared by {r.author} • {r.type}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}

          {activeMainTab === "community" && (
            <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4 space-y-3`}>
              <h2 className="font-semibold text-lg">
                Community Space (Teachers & Devs)
              </h2>
              <p className={`text-sm ${subtleText}`}>
                Use the Home Feed under Questions and Dev Updates to interact
                with the community. This section can later hold dedicated
                community features like polls, tags, and pinned posts.
              </p>
              <ul className={`space-y-1 text-sm ${subtleText}`}>
                <li>• Teachers ask product-wide questions here.</li>
                <li>• Devs share roadmap updates and announcements.</li>
                <li>• Everyone can react and reply using the Home Feed.</li>
              </ul>
            </div>
          )}

          {activeMainTab === "messages" && (
            <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4 space-y-3`}>
              <h2 className="font-semibold text-lg">Messages Overview</h2>
              <p className={`text-sm ${subtleText}`}>
                Use the Direct Messages panel on the right to chat with the devs
                and other teachers. This section can later become a full-screen
                messages page with search, filters, and more advanced features.
              </p>
            </div>
          )}
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="md:col-span-1 space-y-6 md:sticky md:top-20 h-fit">
          {/* Community Panel */}
          <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
            <h2 className="font-semibold text-sm mb-2">
              Dev & Teacher Community
            </h2>
            <p className={`text-xs mb-2 ${subtleText}`}>
              People you can reach out to right now.
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between">
                <span>Dev Team</span>
                <span className="text-xs text-blue-400">Online</span>
              </li>
              <li className="flex justify-between">
                <span>Jane Smith</span>
                <span className={`text-xs ${subtleText}`}>Offline</span>
              </li>
              <li className="flex justify-between">
                <span>Mr. Kamau</span>
                <span className="text-xs text-blue-400">Online</span>
              </li>
            </ul>
            <button
              onClick={() => setActiveMainTab("community")}
              className="mt-3 w-full text-xs px-3 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              Open Community Space
            </button>
          </div>

          {/* Direct Messages panel */}
          <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4 flex flex-col h-80`}>
            <h2 className="font-semibold text-sm mb-2">Direct Messages</h2>
            <div className="flex gap-2 flex-1">
              {/* Conversation list */}
              <div className="w-1/2 pr-2 border-r border-slate-200 dark:border-slate-700 space-y-1 text-xs">
                {conversations.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveConversationId(c.id)}
                    className={`w-full text-left p-2 rounded ${
                      activeConversationId === c.id
                        ? "bg-blue-600 text-white"
                        : darkMode
                        ? "bg-slate-800 hover:bg-slate-700"
                        : "bg-slate-100 hover:bg-slate-200"
                    }`}
                  >
                    <p className="font-semibold text-[11px]">{c.name}</p>
                    <p className="truncate">{c.lastMessage}</p>
                  </button>
                ))}
              </div>

              {/* Chat window */}
              <div className="w-1/2 flex flex-col text-xs">
                <div
                  className={`flex-1 border rounded p-2 overflow-y-auto mb-2 ${
                    darkMode ? "border-slate-700" : "border-slate-200"
                  }`}
                >
                  {activeConversation ? (
                    <>
                      <p className="font-semibold mb-1">
                        Chat with {activeConversation.name}
                      </p>
                      {activeConversationMessages.length === 0 ? (
                        <p className={subtleText}>No messages yet. Say hi!</p>
                      ) : (
                        activeConversationMessages.map((m, idx) => (
                          <div
                            key={idx}
                            className={`mb-1 flex ${
                              m.from === "You"
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <span
                              className={`inline-block px-2 py-1 rounded-lg ${
                                m.from === "You"
                                  ? "bg-blue-600 text-white"
                                  : darkMode
                                  ? "bg-slate-700"
                                  : "bg-slate-200"
                              }`}
                            >
                              {m.text}
                            </span>
                          </div>
                        ))
                      )}
                    </>
                  ) : (
                    <p className={subtleText}>
                      Select a conversation to start messaging.
                    </p>
                  )}
                </div>
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                    className={`flex-1 border rounded px-2 py-1 text-[11px] ${inputBg} ${inputBorder}`}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 text-white px-2 rounded text-[11px] hover:bg-blue-700 transition"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick shared resources list */}
          <div className={`${cardBg} ${cardBorder} border rounded-xl shadow p-4`}>
            <h2 className="font-semibold text-sm mb-2">Latest Shared</h2>
            {sharedResources.length === 0 ? (
              <p className={`text-xs ${subtleText}`}>
                No shared resources yet.
              </p>
            ) : (
              <ul className="space-y-1 max-h-32 overflow-y-auto text-xs">
                {sharedResources.slice(0, 5).map((r) => (
                  <li
                    key={r.id}
                    className={`border rounded p-2 ${
                      darkMode ? "border-slate-700" : "border-slate-200"
                    }`}
                  >
                    <p className="truncate">{r.content}</p>
                    <p className={`text-[10px] ${subtleText}`}>
                      by {r.author} • {r.type}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}