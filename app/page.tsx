import React from 'react';

const FarewellPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans scroll-smooth">
      {/* Header Section */}
      <header className="relative h-96 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">A Heartfelt Farewell & Thank You</h1>
          <p className="text-xl">Celebrating Our Journey, Gratitude, and Memories</p>
          <a href="#event-details" className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300">
            Join Us for the Farewell
          </a>
        </div>
      </header>

      {/* Welcome Message */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Dear Teachers and Faculty,</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          As we prepare to embark on a new chapter in our lives, we take a moment to reflect on the incredible journey we&apos;ve shared. Your guidance, love, and unwavering support have shaped us into who we are today. This farewell is not just a goodbye, but a heartfelt thank you for everything you&apos;ve done for us. We will carry your lessons and memories in our hearts forever.
        </p>
      </section>

      {/* Gratitude Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Thank You for Everything</h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            To our beloved teachers and faculty, your dedication and passion have been the foundation of our growth. You&apos;ve not only taught us lessons from books but also life lessons that will guide us forever. For every word of encouragement, every moment of patience, and every act of kindness — we are eternally grateful.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <span role="img" aria-label="heart" className="text-4xl">❤️</span>
            <span role="img" aria-label="books" className="text-4xl">📚</span>
            <span role="img" aria-label="graduation" className="text-4xl">🎓</span>
          </div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Remarkable Journey</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          From the first day we walked into these halls to the moments we shared in classrooms, labs, and events — every memory is a treasure. Here&apos;s a glimpse of our journey together:
        </p>
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">First Day</h3>
              <p className="text-gray-600">The beginning of our unforgettable journey.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Classroom Memories</h3>
              <p className="text-gray-600">Lessons, laughter, and lifelong friendships.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Farewell</h3>
              <p className="text-gray-600">A bittersweet goodbye to a cherished chapter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer & Blessings */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">You Will Always Be in Our Prayers</h2>
          <p className="text-lg leading-relaxed">
            As we move forward, we promise to keep you in our prayers. May Allah bless you with health, happiness, and success in all your endeavors. You will always remain a part of our lives, no matter where we go.
          </p>
          <div className="mt-8 text-4xl">
            <span role="img" aria-label="prayer" className="mr-4">🙏</span>
            <span role="img" aria-label="star" className="mr-4">⭐</span>
            <span role="img" aria-label="heart" className="mr-4">💖</span>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event-details" className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Join Us for the Farewell</h2>
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          We invite you to celebrate this special moment with us. Let&apos;s come together to relive the memories and create new ones.
        </p>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">Date: [Insert Date]</p>
          <p className="text-xl font-semibold">Time: [Insert Time]</p>
          <p className="text-xl font-semibold">Venue: [Insert Location]</p>
          <a href="#rsvp" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Confirm Your Presence
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-white text-center">
        <p className="text-lg">Thank you for being a part of our journey. We will miss you dearly and cherish the memories forever.</p>
        
        <p className="mt-4 text-sm text-gray-500">&copy; Muhammad Shariq | Students of Class 12 (H.B)</p>
      </footer>
    </div>
  );
};

export default FarewellPage;