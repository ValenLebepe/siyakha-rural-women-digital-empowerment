import {
  BookOpen,
  Rocket,
  Users,
  TrendingUp,
  Sparkles,
  LogOut,
  GraduationCap,
  Palette
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function HomePage() {
  const { user, profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-sky-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-pink-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Siyakha
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">
                {profile?.full_name || user?.email}
              </p>
              <p className="text-xs text-gray-600">Entrepreneur</p>
            </div>
            <button
              onClick={signOut}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Welcome Back, {profile?.full_name?.split(' ')[0] || 'Entrepreneur'}!
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to take your business to the next level? Choose your path below.
          </p>
        </div>

        {/* Main Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Learn Card */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-sky-400"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-sky-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Learn Website Building
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access comprehensive courses, tutorials, and resources to master website creation.
                From the basics to advanced techniques, we'll guide you every step of the way.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Step-by-step video tutorials</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-700">Interactive coding exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Community support & mentorship</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-500 to-sky-500 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-sky-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Start Learning
              </button>
            </div>
          </div>

          {/* Create Card */}
          <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Create Your Website
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Use our intuitive website builder to bring your vision to life.
                No coding required - just drag, drop, and customize to create a stunning online presence.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Professional templates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Drag-and-drop builder</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700">Mobile-responsive designs</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                Start Building
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
            <p className="text-sm text-gray-600">
              Connect with fellow entrepreneurs and share experiences
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Business Growth</h4>
            <p className="text-sm text-gray-600">
              Tools and strategies to scale your online presence
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-sky-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
            <p className="text-sm text-gray-600">
              Learn from successful women entrepreneurs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
