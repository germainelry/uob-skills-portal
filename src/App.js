import React from "react";

export default function SkillsRecognitionPortal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-gray-100 to-white min-h-screen font-sans">
      {/* Skills Exchange Marketplace */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600">
        <h2 className="text-2xl font-extrabold text-blue-900 mb-4 flex items-center">
          🛠️ Skills Exchange Marketplace
        </h2>
        <input
          type="text"
          placeholder="🔍 Search for micro-projects..."
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="space-y-4">
          <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
            <h3 className="font-semibold text-blue-800">Automation Script</h3>
            <p className="text-sm text-gray-700">
              Develop Python script for task automation (4 hours)
            </p>
            <button className="mt-2 text-sm text-blue-600 hover:underline">
              View details →
            </button>
          </div>
          <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
            <h3 className="font-semibold text-blue-800">Dashboard Builds</h3>
            <p className="text-sm text-gray-700">
              Create Power BI dashboard for KPI tracking (6 hours)
            </p>
            <button className="mt-2 text-sm text-blue-600 hover:underline">
              View details →
            </button>
          </div>
        </div>
      </div>

      {/* Knowledge Hub */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-indigo-500">
        <h2 className="text-2xl font-extrabold text-indigo-800 mb-4 flex items-center">
          📘 Knowledge Hub
        </h2>
        <input
          type="text"
          placeholder="🔍 Search articles or questions..."
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <div className="space-y-4">
          <div className="border-b pb-2">
            <h3 className="font-semibold text-indigo-700">
              How to Set Up a CI/CD Pipeline
            </h3>
            <p className="text-sm text-gray-600">
              A step-by-step guide for Jenkins pipeline configuration
            </p>
            <p className="text-xs text-gray-400">👍 15 votes • 🕒 3 days ago</p>
          </div>
          <div className="border-b pb-2">
            <h3 className="font-semibold text-indigo-700">
              Database Performance Tips
            </h3>
            <p className="text-sm text-gray-600">
              Techniques to optimize SQL query execution
            </p>
            <p className="text-xs text-gray-400">👍 8 votes • 🕒 5 days ago</p>
          </div>
        </div>
      </div>

      {/* Gamified Recognition */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-teal-500">
        <h2 className="text-2xl font-extrabold text-teal-700 mb-4 flex items-center">
          🏆 Gamified Recognition
        </h2>
        <p className="text-3xl font-bold text-teal-900 mb-4">🎉 1,250 points</p>
        <div className="mb-6">
          <p className="text-sm">
            🏅 <strong>HEAL$:</strong> 1000 pts → $100
          </p>
          <p className="text-sm">
            🎁 <strong>NTUC Voucher:</strong> 500 pts → $50
          </p>
          <p className="text-sm">
            🎧 <strong>Wireless Headphones:</strong> 2000 pts
          </p>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          🏅 Leaderboard
        </h3>
        <ul className="space-y-1 text-sm">
          <li>
            🥇 <strong>Alice</strong> – 1,500 pts
          </li>
          <li>
            🥈 <strong>John</strong> – 1,300 pts
          </li>
          <li>
            🥉 <strong>Sarah</strong> – 1,100 pts
          </li>
        </ul>
      </div>
    </div>
  );
}
