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
                Create Intelligent IAC Chatbot
              </h3>
              <p className="text-sm text-gray-700">
                Build an AI-powered chatbot that can answer common
                Infrastructure as Code (IAC) queries, such as locating cookbooks
                to execute specific tasks.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 7 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
            <div className="p-4 border rounded bg-blue-50 hover:bg-blue-100 transition">
              <h3 className="font-semibold text-blue-800">
                Create Splunk Query for High-Risk Transactions
              </h3>
              <p className="text-sm text-gray-700">
                Develop a Splunk query and rule to detect error logs or
                high-risk transactions from new/unusual devices in real-time.
              </p>
              <p className="text-xs text-gray-500">Estimated time: 4 hours</p>
              <button className="mt-2 text-sm text-blue-600 hover:underline">
                View details →
              </button>
            </div>
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
            📘 Knowledge Hub
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
                    Setting Up Jenkins CI/CD for IAC for UOB TMRW Application
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
                    How to add certain Chef exceptions on Chef?
                  </h4>
                  <p className="text-sm text-gray-600">
                    E.g., to disable password complexity temporarily for RHEL
                    CIS Benchmark exceptions. Refer to UOB OS Hardening Policy
                    for guidance.{" "}
                    <a href="#" className="text-blue-600 underline">
                      View GIS CIS Benchmarks Standards Page →
                    </a>
                  </p>
                  <p className="text-xs text-gray-400">
                    Asked by Germaine • 2 answers • 1 hour ago
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    How do I trigger a Jenkins pipeline from BitBucket PR merge?
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
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    How to configure Chef cookbook deployment for UOB TMRW QA
                    environment?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Guidelines for cookbook structure and environment file
                    configuration. Includes secrets management best practices.
                  </p>
                  <p className="text-xs text-gray-400">
                    Asked by Harish • 1 answer • 2 hours ago
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    How to set up GitHub webhook to auto-deploy Spring Boot on
                    UOB TMRW Dev environment?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Setup for GitHub Actions + Jenkins to build & deploy after
                    PR approval. Uses shared DevOps library.
                  </p>
                  <p className="text-xs text-gray-400">
                    Asked by Lina • 2 answers • 3 days ago
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-600">
                    What’s the difference between using InSpec vs custom Bash
                    script for compliance checks in UOB?
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pros/cons of using InSpec profiles for system baseline
                    validation. Includes performance and audit implications.
                  </p>
                  <p className="text-xs text-gray-400">
                    Asked by Anil • 1 answer • 5 hours ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gamified Recognition */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-teal-500 overflow-y-auto max-h-[85vh]">
          <h2 className="text-2xl font-extrabold text-teal-700 mb-4 flex items-center">
            🏆 UOB Reward Hub
          </h2>
          <div className="mb-4 bg-teal-50 p-4 rounded-xl shadow-inner">
            <h3 className="text-xl font-bold text-teal-800">
              Welcome back, Germaine Luah!
            </h3>
            <p className="text-lg text-gray-800 mt-2">
              🎉 You currently have{" "}
              <span className="font-bold text-teal-600">1,250 points</span>
            </p>
            <p className="text-sm text-gray-500">
              Keep contributing to earn rewards and climb the leaderboard!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📈 Progress to Next Reward
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-1">
                <div
                  className="bg-teal-500 h-3 rounded-full"
                  style={{ width: "83%" }}
                ></div>
              </div>
              <p className="text-xs text-gray-600">1250 / 1500 pts</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                🎁 Rewards Available
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>💵 HEAL$ – 1000 pts → $100</li>
                <li>🛒 NTUC Voucher – 500 pts → $50</li>
                <li>🎧 Wireless Headphones – 2000 pts</li>
                <li>🛏️ Extra Leave Day – 1500 pts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                📜 Redemption History
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>🛒 NTUC Voucher – 1 week ago</li>
                <li>💵 HEAL$ – Last month</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                🏅 Leaderboard
              </h3>
              <ol className="text-sm text-gray-700 list-decimal pl-4 space-y-1">
                <li>
                  <strong>Germaine Luah</strong> – 1,250 pts
                </li>
                <li>
                  <strong>Liu Yusheng</strong> – 999 pts
                </li>
                <li>
                  <strong>Rakhee Varshney</strong> – 789 pts
                </li>
                <li>
                  <strong>Chong Wengsum</strong> – 480 pts
                </li>
              </ol>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              🏅 Badges Earned
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>
                <strong>Automation Hero</strong> – Contributed 5 automation
                cookbooks/scripts used in UOB TMRW platform
              </li>
              <li>
                <strong>Knowledge Contributor</strong> – Published 3
                UOB-approved articles on internal Chef/Jenkins/InSpec practices
              </li>
              <li>
                <strong>Mentor Ally</strong> – Conducted 2 sessions for UOB Tech
                Academy or Cloud Guild
              </li>
              <li>
                <strong>Bug Buster</strong> – Closed 3 tech support tickets on
                UOB private cloud infra or platform tools
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              🎯 Point Earning Activities
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Complete a micro-project (+300 pts)</li>
              <li>Publish an approved how-to article (+200 pts)</li>
              <li>Answer technical questions (+100 pts)</li>
              <li>Host a workshop (+400 pts)</li>
              <li>Submit reusable automation code (+250 pts)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
