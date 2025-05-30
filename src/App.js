import React from "react";
import uobLogo from "./assets/uob-logo.png"; // Ensure you have the logo in src/assets folder

export default function SkillsRecognitionPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white font-sans overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-4">
          <img src={uobLogo} alt="UOB Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-gray-800">
            Skills Exchange & Recognition Portal
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">
            👤 Logged in as <strong>Germaine Luah</strong>
          </span>
          <button className="text-sm text-blue-600 hover:underline">
            Logout
          </button>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {/* Skills Exchange Marketplace */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600 overflow-y-auto max-h-[85vh]">
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
              <h3 className="font-semibold text-blue-800">
                Write Chef Cookbook to Refresh Expiring Certificates
              </h3>
              <p className="text-sm text-gray-700">
                Develop a Chef cookbook to automatically detect and renew
                expiring SSL certificates for internal applications.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 5 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
            <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
              <h3 className="font-semibold text-blue-800">
                Develop CI/CD Automation
              </h3>
              <p className="text-sm text-gray-700">
                Assist the DevOps team in building GitHub Actions workflows to
                automate build-test-deploy for Node.js applications.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 4 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
            <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
              <h3 className="font-semibold text-blue-800">
                Data Visualization for Compliance
              </h3>
              <p className="text-sm text-gray-700">
                Build a dashboard in Power BI or Tableau to visualize monthly
                regulatory compliance KPIs.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 6 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
            <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
              <h3 className="font-semibold text-blue-800">
                Script Daily System Health Check
              </h3>
              <p className="text-sm text-gray-700">
                Write a Python script that collects and reports server
                CPU/memory/disk stats every morning and sends it to Slack.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 3 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
          </div>
        </div>

        {/* Knowledge Hub */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-indigo-500 overflow-y-auto max-h-[85vh]">
          <h2 className="text-2xl font-extrabold text-indigo-800 mb-4 flex items-center">
            📘 Knowledge Hub – Our Internal Stack Overflow
          </h2>
          <input
            type="text"
            placeholder="🔍 Search articles or questions..."
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-indigo-700">📄 Articles</h3>
              <div className="mt-2 space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    Setting Up Jenkins CI/CD for Java Apps
                  </h4>
                  <p className="text-sm text-gray-600">
                    Walkthrough for deploying Java Spring Boot apps using
                    Jenkins pipelines with Docker.
                  </p>
                  <p className="text-xs text-gray-400">
                    By DevGuru • 5 votes • 2 days ago
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    Best Practices for SQL Indexing
                  </h4>
                  <p className="text-sm text-gray-600">
                    Guide to optimizing query speed and avoiding full table
                    scans in large datasets.
                  </p>
                  <p className="text-xs text-gray-400">
                    By DataNinja • 9 votes • 1 week ago
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-700">
                ❓ Questions
              </h3>
              <div className="mt-2 space-y-3">
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    How do I trigger a Jenkins pipeline from GitHub PR merge?
                  </h4>
                  <p className="text-xs text-gray-400">
                    Asked by Alice • 3 answers • 4 days ago
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    Why is my Docker container not picking up environment
                    variables?
                  </h4>
                  <p className="text-xs text-gray-400">
                    Asked by Ben • 2 answers • 1 day ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gamified Recognition */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-teal-500 overflow-y-auto max-h-[85vh]">
          <h2 className="text-2xl font-extrabold text-teal-700 mb-4 flex items-center">
            🏆 Gamified Recognition
          </h2>
          <p className="text-3xl font-bold text-teal-900 mb-4">
            🎉 1,250 points
          </p>
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
            <p className="text-sm">
              🛍️ <strong>Extra Leave Day:</strong> 1500 pts
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            🏅 Leaderboard
          </h3>
          <ul className="space-y-1 text-sm">
            {["Alice", "John", "Sarah", "Ben", "Rachel", "David"].map(
              (name, idx) => (
                <li key={name}>
                  {`🥇🥈🥉⭐️⭐️⭐️`[idx] || "🔹"} <strong>{name}</strong> –{" "}
                  {1500 - idx * 100} pts
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
