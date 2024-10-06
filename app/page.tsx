"use client";
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Users, Sparkles, Search } from 'lucide-react';

const SurveyApp = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const questions = [
    {
      id: 0,
      type: 'intro',
      content: (
        <div className="space-y-12 h-full flex flex-col justify-center items-center">
          <div className="flex items-center justify-center">
            <Heart className="w-24 h-24 text-[#8B5CF6] animate-bounce" />
          </div>
          <div className="space-y-8 text-center">
            <h1 className="text-6xl font-bold text-[#8B5CF6] tracking-tight">
              Welcome to Peeple
            </h1>
            <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg space-y-6 max-w-2xl">
              <p className="text-2xl font-medium text-gray-800">
                Hey there! We're Sikandar, Ayush, and Arnav - the cofounders of Peeple.
              </p>
              <p className="text-2xl font-medium text-gray-800">
                We're on a mission to create India's first women-first dating app that truly understands
                and respects our cultural context.
              </p>
              <div className="flex justify-center space-x-8 mt-12">
                {['Sikandar', 'Ayush', 'Arnav'].map((name) => (
                  <div key={name} className="text-center">
                    <div className="w-24 h-24 bg-[#8B5CF6] rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-xl font-semibold text-[#8B5CF6]">{name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      question: "Have you tried dating apps before? What were your expectations and how was your real experience?",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <Search className="w-24 h-24 text-[#8B5CF6] animate-pulse" />
          <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg max-w-3xl">
            <p className="text-2xl text-gray-500 text-center leading-tight">
              Share your dating app journey with us...
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      question: "What dating apps have you tried? Which one worked best for you and why?",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <Sparkles className="w-24 h-24 text-[#8B5CF6] animate-spin-slow" />
          <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg max-w-3xl">
            <p className="text-2xl text-gray-500 text-center leading-tight">
              Tell us about your favorite dating app...
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      question: "If you were the CTO of Bumble for a day, what features would you change or introduce?",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <div className="animate-bounce">
            <Heart className="w-24 h-24 text-[#8B5CF6]" />
          </div>
          <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg max-w-3xl">
            <p className="text-2xl text-gray-500 text-center leading-tight">
              Share your innovative ideas for improving dating apps...
            </p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      question: "How many matches and likes do you generally get? Is that overwhelming for you?",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <Users className="w-24 h-24 text-[#8B5CF6] animate-pulse" />
          <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg max-w-3xl">
            <p className="text-2xl text-gray-500 text-center leading-tight">
              Tell us about your matching experience...
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      question: "As a female user, is it difficult to find guys interested in long-term relationships on dating apps?",
      type: 'mcq',
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-12">
          <Heart className="w-24 h-24 text-[#8B5CF6] animate-ping" />
          <div className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg max-w-3xl">
            <p className="text-2xl text-gray-500 text-center leading-tight mb-12">
              Finding long-term relationships on dating apps is...
            </p>
            <div className="flex justify-center space-x-8">
              <button className="px-12 py-6 bg-[#8B5CF6] text-white text-2xl font-bold rounded-xl hover:bg-[#7c4fee] transform hover:scale-105 transition-all shadow-lg">
                Difficult
              </button>
              <button className="px-12 py-6 bg-[#8B5CF6] text-white text-2xl font-bold rounded-xl hover:bg-[#7c4fee] transform hover:scale-105 transition-all shadow-lg">
                Easy
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <div className="h-screen p-8 flex flex-col">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-3 rounded-full mb-8">
          <div
            className="bg-[#8B5CF6] h-3 rounded-full transition-all duration-500"
            style={{ width: `${(currentPage / (questions.length - 1)) * 100}%` }}
          />
        </div>

        {/* Main content area */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col">
          {/* Question content */}
          <div className="flex-1">
            {currentPage > 0 && (
              <h2 className="text-5xl font-bold mb-8 text-[#8B5CF6] text-center leading-tight">
                {questions[currentPage].question}
              </h2>
            )}
            {questions[currentPage].content}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              className={`flex items-center space-x-2 px-8 py-4 rounded-xl ${currentPage === 0
                ? 'opacity-50 cursor-not-allowed bg-gray-300'
                : 'bg-[#8B5CF6] hover:bg-[#7c4fee]'
                } text-white transition-all text-xl font-semibold`}
            >
              <ChevronLeft className="w-6 h-6" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => setCurrentPage(Math.min(questions.length - 1, currentPage + 1))}
              className={`flex items-center space-x-2 px-8 py-4 rounded-xl ${currentPage === questions.length - 1
                ? 'opacity-50 cursor-not-allowed bg-gray-300'
                : 'bg-[#8B5CF6] hover:bg-[#7c4fee]'
                } text-white transition-all text-xl font-semibold`}
            >
              <span>Next</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyApp;