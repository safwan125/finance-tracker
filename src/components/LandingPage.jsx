import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pb-20">
            {/* Hero Section */}
            <div className="mt-10 mb-20 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-700 mb-6 dark:text-dark-neu-text tracking-tight">
                    Master Your Money. <br />
                    <span className="text-blue-500">Simplify Your Life.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto dark:text-gray-400">
                    A clean, modern way to track your income and expenses.
                    Gain insights into your spending habits with beautiful analytics.
                </p>

                <div className="flex gap-6 flex-wrap justify-center">
                    <NavLink
                        to="/auth"
                        className="px-8 py-4 rounded-xl bg-neu-bg shadow-neu-flat text-blue-500 font-bold text-lg hover:shadow-neu-pressed hover:text-blue-600 transition-all duration-300 transform active:scale-95 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-blue-400 dark:hover:text-blue-300 dark:hover:shadow-dark-neu-pressed"
                    >
                        Get Started
                    </NavLink>
                    <a
                        href="#features"
                        className="px-8 py-4 rounded-xl bg-neu-bg shadow-neu-flat text-gray-500 font-bold text-lg hover:shadow-neu-pressed hover:text-gray-600 transition-all duration-300 transform active:scale-95 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-gray-400 dark:hover:text-gray-300 dark:hover:shadow-dark-neu-pressed"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="mb-32 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-700 mb-12 dark:text-dark-neu-text">Why MyFin?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-neu-bg shadow-neu-flat dark:bg-dark-neu-bg dark:shadow-dark-neu-flat hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-dark-neu-text mb-2">Visual Analytics</h3>
                        <p className="text-gray-500 dark:text-gray-400">See where your money goes with intuitive charts and graphs.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neu-bg shadow-neu-flat dark:bg-dark-neu-bg dark:shadow-dark-neu-flat hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="text-4xl mb-4">🌚</div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-dark-neu-text mb-2">Dark Mode</h3>
                        <p className="text-gray-500 dark:text-gray-400">Easy on the eyes with a sleek dark theme.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neu-bg shadow-neu-flat dark:bg-dark-neu-bg dark:shadow-dark-neu-flat hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-xl font-bold text-gray-700 dark:text-dark-neu-text mb-2">Responsive</h3>
                        <p className="text-gray-500 dark:text-gray-400">Track your finances on the go with a mobile-friendly design.</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="mb-32 w-full max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-700 mb-12 dark:text-dark-neu-text">How It Works</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <Step number="1" title="Sign Up" description="Create your free account in seconds." />
                    <div className="hidden md:block text-4xl text-gray-300 dark:text-gray-600">→</div>
                    <Step number="2" title="Add Transactions" description="Log your income and expenses easily." />
                    <div className="hidden md:block text-4xl text-gray-300 dark:text-gray-600">→</div>
                    <Step number="3" title="View Insights" description="Understand your spending habits instantly." />
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-20 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-700 mb-12 dark:text-dark-neu-text">Loved by Users</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Testimonial
                        name="Alex J."
                        role="Freelancer"
                        text="MyFin has completely changed how I manage my freelance income. The analytics are a game changer!"
                    />
                    <Testimonial
                        name="Sarah K."
                        role="Student"
                        text="Simple, beautiful, and easy to use. I love the dark mode on my late-night study sessions."
                    />
                    <Testimonial
                        name="Mike T."
                        role="Small Business Owner"
                        text="Finally, a finance tracker that doesn't look like a spreadsheet from the 90s. Highly recommend!"
                    />
                </div>
            </div>
        </div>
    );
};

const Step = ({ number, title, description }) => (
    <div className="flex flex-col items-center max-w-xs">
        <div className="w-16 h-16 rounded-full bg-neu-bg shadow-neu-flat flex items-center justify-center text-2xl font-bold text-blue-500 mb-4 dark:bg-dark-neu-bg dark:shadow-dark-neu-flat dark:text-blue-400">
            {number}
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2 dark:text-dark-neu-text">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
);

const Testimonial = ({ name, role, text }) => (
    <div className="p-8 rounded-2xl bg-neu-bg shadow-neu-flat text-left dark:bg-dark-neu-bg dark:shadow-dark-neu-flat">
        <p className="text-gray-600 italic mb-6 dark:text-gray-300">"{text}"</p>
        <div>
            <h4 className="font-bold text-gray-700 dark:text-dark-neu-text">{name}</h4>
            <span className="text-sm text-gray-500 dark:text-gray-500">{role}</span>
        </div>
    </div>
);

export default LandingPage;
