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
} from "lucide-react";
import Link from "next/link";

export default function InvestmentPlatformPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("10000");
  const [selectedDuration, setSelectedDuration] = useState("12");

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Growth simulation data
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
      gradient: "from-emerald-500/20 to-emerald-600/10",
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
      gradient: "from-blue-500/20 to-blue-600/10",
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
      gradient: "from-amber-500/20 to-amber-600/10",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <Building className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                WealthGuard
              </span>
              <span className="hidden lg:block text-xs text-slate-500 ml-2">
                Est. 2018 • Regulated
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="#plans"
                className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
              >
                Investment Plans
              </Link>
              <Link
                href="#portfolio"
                className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="#why-us"
                className="text-slate-600 hover:text-slate-900 transition text-sm font-medium"
              >
                Why Us
              </Link>
              <button className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl text-sm">
                Client Portal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-900"
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#about"
                className="block text-slate-600 hover:text-slate-900 py-2 text-sm"
              >
                About
              </Link>
              <Link
                href="#plans"
                className="block text-slate-600 hover:text-slate-900 py-2 text-sm"
              >
                Investment Plans
              </Link>
              <Link
                href="#portfolio"
                className="block text-slate-600 hover:text-slate-900 py-2 text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="#why-us"
                className="block text-slate-600 hover:text-slate-900 py-2 text-sm"
              >
                Why Us
              </Link>
              <button className="w-full px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium">
                Client Portal
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                <Shield className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-amber-800 font-medium">
                  SEC Registered Investment Advisor
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Build Wealth Through{" "}
                <span className="text-amber-600">Smart Investments</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-lg">
                Secure and diversified long-term investment opportunities backed
                by gold, crypto, and traditional assets.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center gap-2">
                  Schedule Consultation <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 rounded-xl font-semibold text-lg transition-all border border-slate-200 shadow-lg">
                  View Prospectus
                </button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
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
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
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

            {/* Trust Badges Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-3xl mb-3">🏦</div>
                <div className="font-bold text-slate-900">FDIC Insured</div>
                <div className="text-sm text-slate-500">Up to $250,000</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-3xl mb-3">🔒</div>
                <div className="font-bold text-slate-900">
                  Bank-Level Security
                </div>
                <div className="text-sm text-slate-500">256-bit encryption</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-bold text-slate-900">KYC/AML Verified</div>
                <div className="text-sm text-slate-500">
                  Regulatory compliant
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
                <div className="text-3xl mb-3">📋</div>
                <div className="font-bold text-slate-900">SEC Registered</div>
                <div className="text-sm text-slate-500">#801-123456</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Diversified Investment Approach
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform focuses on gold-backed and crypto-backed long-term
                investment funds, providing investors with stable, secure, and
                growth-oriented opportunities. We combine traditional asset
                management with modern digital assets.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Gem className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Gold-Backed Funds
                    </h3>
                    <p className="text-sm text-slate-500">
                      Physical gold storage with insured vaults in Switzerland
                      and Singapore
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bitcoin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Crypto-Backed Funds
                    </h3>
                    <p className="text-sm text-slate-500">
                      Institutional-grade custody with multi-signature security
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Traditional Assets
                    </h3>
                    <p className="text-sm text-slate-500">
                      Blue-chip stocks, bonds, and real estate investment trusts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Allocation Pie Chart Visualization */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-6">
                Sample Portfolio Allocation
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Gold</span>
                    <span className="font-bold text-slate-900">35%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[35%] bg-amber-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Cryptocurrency</span>
                    <span className="font-bold text-slate-900">30%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Bonds</span>
                    <span className="font-bold text-slate-900">20%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Real Estate</span>
                    <span className="font-bold text-slate-900">15%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 text-center">
                  Allocation varies by investment plan and risk profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Investment Plans
            </h2>
            <p className="text-xl text-slate-600">
              Choose the strategy that aligns with your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-3xl border transition-all hover:shadow-2xl ${
                  plan.popular
                    ? "border-amber-200 shadow-xl scale-105"
                    : "border-slate-200 hover:border-amber-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm rounded-full font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div
                    className={`mb-6 bg-gradient-to-br ${plan.gradient} rounded-xl p-4`}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.risk}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
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
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Minimum Deposit</span>
                      <span className="font-bold text-slate-900">
                        {plan.minDeposit}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Duration</span>
                      <span className="font-bold text-slate-900">
                        {plan.duration}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Projected Return</span>
                      <span className="font-bold text-amber-600">
                        {plan.projectedReturn}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
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
                        ([asset, percentage]) => (
                          <div
                            key={asset}
                            className="flex justify-between text-xs"
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
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all">
                    Select Plan
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Your Portfolio Dashboard
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">
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
                  <div className="text-right font-bold text-slate-900 mt-2">
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900"
                  >
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                    <option value="36">36 Months</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-500">
                      Initial Investment
                    </span>
                    <span className="font-bold text-slate-900">
                      ${projected.invested.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-500">
                      Projected Growth
                    </span>
                    <span className="font-bold text-emerald-600">
                      +${projected.growth.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-slate-900">Estimated Value</span>
                    <span className="text-amber-600">
                      ${projected.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900">Growth Projection</h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
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
                          className="absolute bottom-0 w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg transition-all group-hover:from-amber-600"
                          style={{ height: `${height}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap transition">
                            ${data.value.toLocaleString()}
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
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      Duration: {selectedDuration} months
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">
                      Target: 12% annual
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  *Hypothetical growth based on historical performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose WealthGuard
            </h2>
            <p className="text-xl text-slate-600">
              Professional fund management with institutional-grade security
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <PieChart className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Diversified Portfolio
              </h3>
              <p className="text-sm text-slate-500">
                Multi-asset allocation across gold, crypto, and traditional
                investments
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Professional Management
              </h3>
              <p className="text-sm text-slate-500">
                Experienced fund managers with 20+ years of market expertise
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Risk Management</h3>
              <p className="text-sm text-slate-500">
                Advanced risk controls and regular portfolio rebalancing
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 hover:border-amber-200 transition">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">
                Transparent Reporting
              </h3>
              <p className="text-sm text-slate-500">
                Monthly performance reports and quarterly investor updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assurance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Risk-Assured Investment Protection
              </h2>
              <p className="text-lg text-slate-300">
                Your principal investment is protected through our diversified
                risk management strategy and institutional-grade safeguards.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">
                    Capital preservation focus
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-slate-300">Insured custody</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">
                    $2.4B+
                  </div>
                  <div className="text-sm text-slate-400">Assets Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">0.2%</div>
                  <div className="text-sm text-slate-400">Management Fee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">24/7</div>
                  <div className="text-sm text-slate-400">Account Access</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">100%</div>
                  <div className="text-sm text-slate-400">Transparent</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">
                  Start Your Investment Journey
                </h2>
                <p className="text-lg text-slate-600">
                  Schedule a consultation with our wealth advisors to discuss
                  your financial goals.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Call Us</div>
                      <div className="font-bold text-slate-900">
                        +1 (888) 456-7890
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email</div>
                      <div className="font-bold text-slate-900">
                        invest@wealthguard.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                <h3 className="font-bold text-xl text-slate-900 mb-4">
                  Request Information
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500">
                    <option>Investment Amount Range</option>
                    <option>$5,000 - $50,000</option>
                    <option>$50,000 - $250,000</option>
                    <option>$250,000 - $1,000,000+</option>
                  </select>
                  <button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all">
                    Schedule Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
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

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Form ADV
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-600">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Regulatory</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>SEC#: 801-123456</li>
                <li>CRD#: 123456</li>
                <li>FINRA#: 789012</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} WealthGuard Capital Management. All
              rights reserved.
            </p>
            <p className="mt-2">
              Investing involves risk, including the possible loss of principal.
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
