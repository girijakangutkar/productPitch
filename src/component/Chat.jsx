import { useState } from "react";

const Chat = () => {
  const API = import.meta.env.VITE_API;
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me something like 'best laptop under ₹1200' or 'noise canceling headphones'." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    const msg = input.trim();
    if (!msg || loading) return;
    setInput("");
    setMessages(p => [...p, { role: "user", text: msg }]);
    setLoading(true);
    try {
      const res = await fetch(`${API}/app/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setMessages(p => [...p, { role: "bot", text: data.reply, products: data.products }]);
    } catch {
      setMessages(p => [...p, { role: "bot", text: "Server error. Is the backend running?" }]);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Product Chat</h2>

      <div className="border border-gray-200 rounded-lg h-[420px] overflow-y-auto p-4 mb-4 bg-gray-50 flex flex-col gap-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg border text-sm ${
              m.role === "user"
                ? "bg-indigo-50 border-indigo-200"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="text-xs text-gray-400 mb-1">
              {m.role === "user" ? "You" : "Bot"}
            </div>
            <div className="text-gray-800">{m.text}</div>

            {m.products && m.products.length > 0 && (
              <div className="mt-3 flex flex-col gap-2">
                {m.products.map(p => (
                  <div
                    key={p.id}
                    className="border border-gray-200 rounded-md px-3 py-2 bg-gray-50 flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-xs">{p.name}</div>
                      <div className="text-xs text-gray-400">{p.category}</div>
                    </div>
                    <div className="text-green-600 font-bold text-sm">₹{p.price}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="p-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-400">
            Thinking...
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ask about any product..."
          disabled={loading}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-400"
        />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="px-5 py-2 bg-indigo-600 text-white text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;