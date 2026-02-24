"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  Shield,
  Award,
  Users,
  ChevronRight,
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  Globe,
  ArrowUpRight,
  CheckCircle,
  Clock,
  BarChart3,
  DollarSign,
  LineChart,
  PieChart,
  Target,
  Lock,
  Gem,
  Bitcoin,
  Wallet,
  Calendar,
  Percent,
  TrendingDown,
  Briefcase,
  BarChart2,
  FileText,
  UserCheck,
  Building,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function InvestmentPlatformPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("10000");
  const [selectedDuration, setSelectedDuration] = useState("12");
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Growth simulation data with animation
  const [growthData, setGrowthData] = useState([
    { month: "Month 1", value: 10000 },
    { month: "Month 2", value: 10250 },
    { month: "Month 3", value: 10550 },
    { month: "Month 4", value: 10900 },
    { month: "Month 5", value: 11300 },
    { month: "Month 6", value: 11750 },
    { month: "Month 7", value: 12250 },
    { month: "Month 8", value: 12800 },
    { month: "Month 9", value: 13400 },
    { month: "Month 10", value: 14050 },
    { month: "Month 11", value: 14750 },
    { month: "Month 12", value: 15500 },
  ]);

  // Animate growth data
  useEffect(() => {
    const interval = setInterval(() => {
      setGrowthData((prev) =>
        prev.map((item) => ({
          ...item,
          value: item.value + (Math.random() - 0.5) * 100,
        })),
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const investmentPlans = [
    {
      id: "starter",
      name: "Starter Portfolio",
      risk: "Conservative",
      riskLevel: "Low",
      minDeposit: "$5,000",
      maxDeposit: "$50,000",
      duration: "3 months",
      projectedReturn: "200%",
      annualizedReturn: "8-10%",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-600",
      lightGradient: "from-emerald-50 to-emerald-100",
      badge: "Ideal for beginners",
      allocation: {
        gold: "40%",
        crypto: "20%",
        bonds: "25%",
        cash: "15%",
      },
      features: [
        "Capital preservation focus",
        "Monthly dividend payouts",
        "Quarterly rebalancing",
        "Basic portfolio reports",
      ],
    },
    {
      id: "growth",
      name: "Growth Portfolio",
      risk: "Moderate",
      riskLevel: "Medium",
      minDeposit: "$50,000",
      maxDeposit: "$250,000",
      duration: "6 months",
      projectedReturn: "200%",
      annualizedReturn: "12-15%",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
      lightGradient: "from-blue-50 to-blue-100",
      badge: "Most Popular",
      popular: true,
      allocation: {
        gold: "30%",
        crypto: "35%",
        stocks: "25%",
        realEstate: "10%",
      },
      features: [
        "Balanced growth strategy",
        "Weekly performance updates",
        "Tax-efficient harvesting",
        "Priority support access",
        "Quarterly strategy calls",
      ],
    },
    {
      id: "premium",
      name: "Premium Portfolio",
      risk: "Aggressive",
      riskLevel: "High",
      minDeposit: "$250,000",
      maxDeposit: "$1,000,000+",
      duration: "12 months",
      projectedReturn: "200%",
      annualizedReturn: "15-20%",
      color: "amber",
      gradient: "from-amber-500 to-amber-600",
      lightGradient: "from-amber-50 to-amber-100",
      badge: "For High Net Worth",
      allocation: {
        gold: "25%",
        crypto: "40%",
        privateEquity: "20%",
        ventureCapital: "15%",
      },
      features: [
        "High-growth opportunities",
        "Dedicated account manager",
        "Custom portfolio optimization",
        "Monthly strategy sessions",
        "Early access to new funds",
        "Exclusive investment opportunities",
      ],
    },
  ];

  const calculateProjectedValue = () => {
    const amount = parseFloat(investmentAmount) || 10000;
    const years = parseInt(selectedDuration) / 12;
    const baseReturn = amount;
    const growth = amount * 0.12 * years; // 12% annual return example
    return {
      invested: amount,
      growth: Math.round(growth),
      total: amount + Math.round(growth),
    };
  };

  const projected = calculateProjectedValue();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/30 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                <Building className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 block leading-tight">
                  WealthGuard
                </span>
                <span className="text-xs text-slate-500">
                  Est. 2018 • Regulated
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Plans", "Portfolio", "Why Us"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm">
                Client Portal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-900 transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            {["About", "Plans", "Portfolio", "Why Us"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="block text-slate-600 hover:text-slate-900 py-2 text-sm transition-all duration-300 hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105">
              Client Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 via-transparent to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Shield className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-sm text-amber-800 font-medium">
                  SEC Registered Investment Advisor
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Build Wealth Through{" "}
                <span className="text-amber-600 relative">
                  Smart Investments
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 rounded-full animate-width"></span>
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Secure and diversified long-term investment opportunities backed
                by gold, crypto, and traditional assets.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-2 hover:scale-105">
                  Schedule Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-semibold text-lg transition-all duration-300 border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105">
                  View Prospectus
                </button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">
                      Assets Under Management
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      $2.4B+
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">
                      Active Investors
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      45,000+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges Grid with animations */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {[
                {
                  emoji: "🏦",
                  title: "FDIC Insured",
                  desc: "Up to $250,000",
                  delay: 0,
                },
                {
                  emoji: "🔒",
                  title: "Bank-Level Security",
                  desc: "256-bit encryption",
                  delay: 100,
                },
                {
                  emoji: "✓",
                  title: "KYC/AML Verified",
                  desc: "Regulatory compliant",
                  delay: 200,
                },
                {
                  emoji: "📋",
                  title: "SEC Registered",
                  desc: "#801-123456",
                  delay: 300,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <div className="text-3xl mb-3 animate-bounce-subtle">
                    {item.emoji}
                  </div>
                  <div className="font-bold text-slate-900">{item.title}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-on-scroll">
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-slate-900 relative">
                  Diversified Investment Approach
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-amber-500 rounded-full animate-width-slow"></span>
                </h2>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform focuses on gold-backed and crypto-backed long-term
                investment funds, providing investors with stable, secure, and
                growth-oriented opportunities. We combine traditional asset
                management with modern digital assets.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Gem,
                    title: "Gold-Backed Funds",
                    desc: "Physical gold storage with insured vaults in Switzerland and Singapore",
                    delay: 0,
                  },
                  {
                    icon: Bitcoin,
                    title: "Crypto-Backed Funds",
                    desc: "Institutional-grade custody with multi-signature security",
                    delay: 150,
                  },
                  {
                    icon: Briefcase,
                    title: "Traditional Assets",
                    desc: "Blue-chip stocks, bonds, and real estate investment trusts",
                    delay: 300,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
                      style={{ transitionDelay: `${item.delay}ms` }}
                    >
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Allocation Pie Chart Visualization with animation */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-float">
              <h3 className="font-bold text-slate-900 mb-6">
                Sample Portfolio Allocation
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Gold", percentage: 35, color: "amber", delay: 0 },
                  {
                    label: "Cryptocurrency",
                    percentage: 30,
                    color: "blue",
                    delay: 100,
                  },
                  {
                    label: "Bonds",
                    percentage: 20,
                    color: "emerald",
                    delay: 200,
                  },
                  {
                    label: "Real Estate",
                    percentage: 15,
                    color: "purple",
                    delay: 300,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="animate-slide-in"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-slate-900">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full w-0 bg-${item.color}-500 rounded-full transition-all duration-1000`}
                        style={{
                          width: `${item.percentage}%`,
                          animationDelay: `${item.delay}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center animate-pulse-subtle">
                  Allocation varies by investment plan and risk profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section
        id="plans"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50/20 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 relative inline-block">
              Investment Plans
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-500 rounded-full animate-width-slow"></span>
            </h2>
            <p className="text-xl text-slate-600">
              Choose the strategy that aligns with your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl border transition-all duration-500 hover:shadow-2xl ${
                  plan.popular
                    ? "border-amber-200 shadow-xl scale-105 hover:scale-110 z-10"
                    : "border-slate-200 hover:border-amber-200 hover:scale-105"
                }`}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm rounded-full font-medium animate-pulse shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div
                    className={`mb-6 bg-gradient-to-br ${plan.lightGradient} rounded-xl p-4 transform transition-all duration-300 hover:scale-105`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.risk}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm group hover:translate-x-1 transition-transform">
                      <span className="text-slate-500">Risk Level</span>
                      <span
                        className={`font-medium ${
                          plan.riskLevel === "Low"
                            ? "text-emerald-600"
                            : plan.riskLevel === "Medium"
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {plan.riskLevel}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm group hover:translate-x-1 transition-transform">
                      <span className="text-slate-500">Minimum Deposit</span>
                      <span className="font-bold text-slate-900">
                        {plan.minDeposit}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm group hover:translate-x-1 transition-transform">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-bold text-slate-900">
                        {plan.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm group hover:translate-x-1 transition-transform">
                      <span className="text-slate-500">Projected Return</span>
                      <span className="font-bold text-amber-600 animate-pulse-subtle">
                        {plan.projectedReturn}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm group hover:translate-x-1 transition-transform">
                      <span className="text-slate-500">Annualized Return</span>
                      <span className="font-bold text-emerald-600">
                        {plan.annualizedReturn}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-900 mb-3">
                      Portfolio Allocation
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(plan.allocation).map(
                        ([asset, percentage], j) => (
                          <div
                            key={asset}
                            className="flex justify-between text-xs group hover:translate-x-1 transition-transform"
                            style={{ transitionDelay: `${j * 50}ms` }}
                          >
                            <span className="text-slate-500 capitalize">
                              {asset}
                            </span>
                            <span className="font-medium text-slate-700">
                              {percentage}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-sm text-slate-600 group hover:translate-x-1 transition-transform"
                        style={{ transitionDelay: `${j * 30}ms` }}
                      >
                        <CheckCircle className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                    <span className="relative z-10">Select Plan</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4 animate-pulse-subtle">
                    *Past performance does not guarantee future returns
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Dashboard */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-amber-50/30"></div>

        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center animate-fade-in">
            Your Portfolio Dashboard
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator with animations */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-float">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-amber-500" />
                Investment Calculator
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Investment Amount ($)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="1000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="w-full accent-amber-500"
                  />
                  <div className="text-right font-bold text-slate-900 mt-2 animate-pulse-subtle">
                    ${parseInt(investmentAmount).toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-slate-500 mb-2 block">
                    Investment Period
                  </label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  >
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between mb-2 group hover:translate-x-1 transition-transform">
                    <span className="text-sm text-slate-500">
                      Initial Investment
                    </span>
                    <span className="font-bold text-slate-900">
                      ${projected.invested.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2 group hover:translate-x-1 transition-transform">
                    <span className="text-sm text-slate-500">
                      Projected Growth
                    </span>
                    <span className="font-bold text-emerald-600">
                      +${projected.growth.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold group hover:translate-x-1 transition-transform">
                    <span className="text-slate-900">Estimated Value</span>
                    <span className="text-amber-600 animate-pulse-subtle">
                      ${projected.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart with animations */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-amber-500" />
                  Growth Projection
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-500">Projected</span>
                  </div>
                </div>
              </div>

              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between">
                  {growthData.map((data, i) => {
                    const height = (data.value / 16000) * 100;
                    return (
                      <div key={i} className="relative w-8 group">
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg transition-all duration-300 group-hover:from-amber-600 group-hover:scale-110 group-hover:z-10"
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 50}ms`,
                          }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition-all duration-300">
                            ${Math.round(data.value).toLocaleString()}
                          </div>
                        </div>
                        {i % 2 === 0 && (
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                            {data.month.split(" ")[1]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      Duration: {selectedDuration} months
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform">
                    <Target className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      Target: 12% annual
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-400 animate-pulse-subtle">
                  *Hypothetical growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why-us"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-50/30 via-transparent to-emerald-50/30"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 relative inline-block">
              Why Choose WealthGuard
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-500 rounded-full animate-width-slow"></span>
            </h2>
            <p className="text-xl text-slate-600">
              Professional fund management with institutional-grade security
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: PieChart,
                title: "Diversified Portfolio",
                desc: "Multi-asset allocation across gold, crypto, and traditional investments",
                delay: 0,
              },
              {
                icon: Briefcase,
                title: "Professional Management",
                desc: "Experienced fund managers with 20+ years of market expertise",
                delay: 150,
              },
              {
                icon: Shield,
                title: "Risk Management",
                desc: "Advanced risk controls and regular portfolio rebalancing",
                delay: 300,
              },
              {
                icon: FileText,
                title: "Transparent Reporting",
                desc: "Monthly performance reports and quarterly investor updates",
                delay: 450,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Assurance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white relative inline-block">
                Risk-Assured Investment Protection
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-amber-500 rounded-full animate-width-slow"></span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Your principal investment is protected through our diversified
                risk management strategy and institutional-grade safeguards.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { text: "Capital preservation focus", delay: 0 },
                  { text: "Insured custody", delay: 150 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 group hover:translate-x-1 transition-all duration-300"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all duration-500 hover:scale-105">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "$2.4B+", label: "Assets Protected", delay: 0 },
                  { value: "0.2%", label: "Management Fee", delay: 150 },
                  { value: "24/7", label: "Account Access", delay: 300 },
                  { value: "100%", label: "Transparent", delay: 450 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center group hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="text-3xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-50/30 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900 relative inline-block">
                  Start Your Investment Journey
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-amber-500 rounded-full animate-width-slow"></span>
                </h2>
                <p className="text-lg text-slate-600">
                  Schedule a consultation with our wealth advisors to discuss
                  your financial goals.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    {
                      icon: Phone,
                      title: "Call Us",
                      value: "+1 (888) 456-7890",
                      delay: 0,
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      value: "invest@wealthguard.com",
                      delay: 150,
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
                        style={{ transitionDelay: `${item.delay}ms` }}
                      >
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500">
                            {item.title}
                          </div>
                          <div className="font-bold text-slate-900">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-500" />
                  Request Information
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  />
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300">
                    <option>Investment Amount Range</option>
                    <option>$5,000 - $50,000</option>
                    <option>$50,000 - $250,000</option>
                    <option>$250,000 - $1,000,000+</option>
                  </select>
                  <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                    <span className="relative z-10">Schedule Consultation</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Building className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-lg font-bold text-slate-900">
                  WealthGuard
                </span>
              </div>
              <p className="text-sm text-slate-500">
                SEC-registered investment advisor providing diversified
                long-term investment solutions.
              </p>
            </div>

            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "Newsroom"],
              },
              {
                title: "Legal",
                links: ["Form ADV", "Privacy Policy", "Terms of Use"],
              },
              {
                title: "Regulatory",
                links: ["SEC#: 801-123456", "CRD#: 123456", "FINRA#: 789012"],
              },
            ].map((section, i) => (
              <div key={i} className="group">
                <h4 className="font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      {section.title === "Regulatory" ? (
                        <span className="hover:text-amber-600 transition-colors cursor-default">
                          {link}
                        </span>
                      ) : (
                        <Link
                          href="#"
                          className="hover:text-amber-600 transition-colors inline-block hover:translate-x-1 transform duration-300"
                        >
                          {link}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} WealthGuard Capital Management. All
              rights reserved.
            </p>
            <p className="mt-2 animate-pulse-subtle">
              Investing involves risk, including the possible loss of principal.
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes width {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes width-slow {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }

        .animate-width {
          animation: width 1.5s ease-out forwards;
        }

        .animate-width-slow {
          animation: width-slow 2s ease-out forwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
