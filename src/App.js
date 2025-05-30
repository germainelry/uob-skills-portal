import React from "react";

export default function SkillsRecognitionPortal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50 min-h-screen">
      {/* Skills Exchange Marketplace */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          Skills Exchange Marketplace
        </h2>
        <input
          type="text"
          placeholder="Search micro-projects"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="space-y-3">
          <div className="p-3 border rounded bg-blue-50">
            <h3 className="font-semibold">Automation Script</h3>
            <p className="text-sm text-gray-600">
              Develop Python script for task automation (4 hours)
            </p>
            <button className="mt-2 text-blue-700 underline">
              View details
            </button>
          </div>
          <div className="p-3 border rounded bg-blue-50">
            <h3 className="font-semibold">Dashboard Builds</h3>
            <p className="text-sm text-gray-600">
              Create Power BI dashboard for KPI tracking (6 hours)
            </p>
            <button className="mt-2 text-blue-700 underline">
              View details
            </button>
          </div>
        </div>
      </div>

      {/* Knowledge Hub */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Knowledge Hub</h2>
        <input
          type="text"
          placeholder="Search articles and questions"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="space-y-3">
          <div className="border-b pb-2">
            <h3 className="font-semibold">How to Set Up a CI/CD Pipeline</h3>
            <p className="text-sm text-gray-600">
              A step-by-step guide for Jenkins pipeline configuration
            </p>
            <p className="text-xs text-gray-400">15 votes • 3 days ago</p>
          </div>
          <div className="border-b pb-2">
            <h3 className="font-semibold">Database Performance Tips</h3>
            <p className="text-sm text-gray-600">
              Techniques to optimize SQL query execution
            </p>
            <p className="text-xs text-gray-400">8 votes • 5 days ago</p>
          </div>
        </div>
      </div>

      {/* Gamified Recognition */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold text-teal-700 mb-4">
          Gamified Recognition
        </h2>
        <p className="text-2xl font-semibold mb-2">1,250 points</p>
        <div className="mb-4">
          <p>🏅 HEAL$ – 1000 pts for $100</p>
          <p>🎁 NTUC Voucher – 500 pts for $50</p>
          <p>🎧 Wireless Headphones – 2000 pts</p>
        </div>
        <h3 className="font-semibold text-gray-700 mb-2">Leaderboard</h3>
        <ul className="space-y-1 text-sm">
          <li>🥇 Alice – 1,500 pts</li>
          <li>🥈 John – 1,300 pts</li>
          <li>🥉 Sarah – 1,100 pts</li>
        </ul>
      </div>
    </div>
  );
}
