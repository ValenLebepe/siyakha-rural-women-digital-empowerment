import { useState } from 'react';
import { UserPlus, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SignupFormProps {
  onToggleForm: () => void;
}

export function SignupForm({ onToggleForm }: SignupFormProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [languagePreference, setLanguagePreference] = useState('');
  const [learningLevel, setLearningLevel] = useState('beginner');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!languagePreference) {
      setError('Please select your language preference');
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password, fullName, languagePreference, learningLevel);

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Start Your Journey</h2>
          <p className="text-gray-600 mt-2">Join a community of empowered entrepreneurs</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="languagePreference" className="block text-sm font-medium text-gray-700 mb-2">
              Language Preference
            </label>
            <select
              id="languagePreference"
              value={languagePreference}
              onChange={(e) => setLanguagePreference(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all bg-white"
            >
              <option value="">Select your preferred language</option>
              <option value="english">English</option>
              <option value="xhosa">IsiXhosa</option>
              <option value="zulu">IsiZulu</option>
              <option value="Venda">TshiVenda</option>
              <option value="swati">Swati</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Learning Level
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50 has-[:checked]:ring-1 has-[:checked]:ring-pink-400">
                <input
                  type="radio"
                  name="learningLevel"
                  value="beginner"
                  checked={learningLevel === "beginner"}
                  onChange={(e) => setLearningLevel(e.target.value)}
                  className="text-pink-500 focus:ring-pink-400"
                />
                <span className="ml-2 text-sm font-medium">Beginner</span>
              </label>
              
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50 has-[:checked]:ring-1 has-[:checked]:ring-pink-400">
                <input
                  type="radio"
                  name="learningLevel"
                  value="intermediate"
                  checked={learningLevel === "intermediate"}
                  onChange={(e) => setLearningLevel(e.target.value)}
                  className="text-pink-500 focus:ring-pink-400"
                />
                <span className="ml-2 text-sm font-medium">Intermediate</span>
              </label>
              
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50 has-[:checked]:ring-1 has-[:checked]:ring-pink-400">
                <input
                  type="radio"
                  name="learningLevel"
                  value="advanced"
                  checked={learningLevel === "advanced"}
                  onChange={(e) => setLearningLevel(e.target.value)}
                  className="text-pink-500 focus:ring-pink-400"
                />
                <span className="ml-2 text-sm font-medium">Advanced</span>
              </label>
              
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-pink-400 has-[:checked]:bg-pink-50 has-[:checked]:ring-1 has-[:checked]:ring-pink-400">
                <input
                  type="radio"
                  name="learningLevel"
                  value="expert"
                  checked={learningLevel === "expert"}
                  onChange={(e) => setLearningLevel(e.target.value)}
                  className="text-pink-500 focus:ring-pink-400"
                />
                <span className="ml-2 text-sm font-medium">Expert</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onToggleForm}
              className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}