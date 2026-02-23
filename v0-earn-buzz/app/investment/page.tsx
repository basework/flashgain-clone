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
  ArrowDownRight,
  Sparkles,
  Zap,
  CheckCircle,
  Clock,
  BarChart3,
  DollarSign,
  LineChart,
  CandlestickChart,
  Activity,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TradingLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("btc");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock candlestick data for animation
  const [candleData, setCandleData] = useState([
    { high: 52, low: 48, open: 50, close: 51, time: "09:00" },
    { high: 53, low: 49, open: 51, close: 52, time: "10:00" },
    { high: 55, low: 51, open: 52, close: 54, time: "11:00" },
    { high: 56, low: 52, open: 54, close: 53, time: "12:00" },
    { high: 58, low: 53, open: 53, close: 57, time: "13:00" },
    { high: 60, low: 55, open: 57, close: 59, time: "14:00" },
    { high: 62, low: 58, open: 59, close: 61, time: "15:00" },
    { high: 63, low: 59, open: 61, close: 62, time: "16:00" },
  ]);

  // Animate candles in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setCandleData((prev) => {
        const newData = [...prev];
        // Update the last candle
        const lastIndex = newData.length - 1;
        const lastCandle = newData[lastIndex];

        // Random walk for realism
        const movement = (Math.random() - 0.5) * 4;
        const newClose = Math.max(
          40,
          Math.min(80, lastCandle.close + movement),
        );
        const newHigh = Math.max(lastCandle.high, newClose + Math.random() * 2);
        const newLow = Math.min(lastCandle.low, newClose - Math.random() * 2);

        newData[lastIndex] = {
          ...lastCandle,
          close: newClose,
          high: newHigh,
          low: newLow,
        };

        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const investmentPlans = [
    {
      name: "Starter Plan",
      risk: "Low Risk",
      minInvestment: "$500",
      maxInvestment: "$10,000",
      expectedReturn: "12-15%",
      term: "30 days",
      features: ["Basic market analysis", "Email support", "Weekly reports"],
      color: "emerald",
      gradient: "from-emerald-500/20 to-emerald-600/10",
      badge: "Perfect for beginners",
    },
    {
      name: "Growth Plan",
      risk: "Moderate Risk",
      minInvestment: "$10,000",
      maxInvestment: "$50,000",
      expectedReturn: "18-25%",
      term: "60 days",
      features: [
        "Advanced analytics",
        "Priority support",
        "Daily reports",
        "Risk management",
      ],
      color: "amber",
      gradient: "from-amber-500/20 to-amber-600/10",
      badge: "Most Popular",
      popular: true,
    },
    {
      name: "Pro Trader Plan",
      risk: "High Risk",
      minInvestment: "$50,000",
      maxInvestment: "$500,000",
      expectedReturn: "30-45%",
      term: "90 days",
      features: [
        "Professional trading tools",
        "24/7 dedicated support",
        "Real-time alerts",
        "API access",
        "Portfolio optimization",
      ],
      color: "purple",
      gradient: "from-purple-500/20 to-purple-600/10",
      badge: "For Professionals",
    },
  ];

  const metrics = [
    {
      label: "24h Trading Volume",
      value: "$2.4B",
      change: "+12.5%",
      icon: BarChart3,
    },
    { label: "Active Traders", value: "125K+", change: "+8.2%", icon: Users },
    { label: "BTC Price", value: "$63,245", change: "+3.2%", icon: TrendingUp },
    { label: "Gold (XAU)", value: "$2,345", change: "+0.8%", icon: DollarSign },
  ];

  const faqs = [
    {
      question: "Is my investment protected?",
      answer:
        "We use institutional-grade security measures including cold storage, 2FA, and encryption. However, all investments carry risk and are not FDIC insured.",
    },
    {
      question: "How do I withdraw my funds?",
      answer:
        "Withdrawals can be initiated anytime from your dashboard. Processing takes 1-3 business days for bank transfers and 1-24 hours for crypto.",
    },
    {
      question: "What are the fees?",
      answer:
        "We charge a competitive 0.1% trading fee and a 15% performance fee on profits only. There are no hidden fees or withdrawal charges.",
    },
    {
      question: "Do you accept international clients?",
      answer:
        "Yes, we accept clients from most countries, subject to local regulations. KYC verification is required for all accounts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-particle ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/95 backdrop-blur-lg border-b border-amber-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                TradeVault
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#markets"
                className="text-gray-300 hover:text-amber-400 transition"
              >
                Markets
              </Link>
              <Link
                href="#plans"
                className="text-gray-300 hover:text-amber-400 transition"
              >
                Plans
              </Link>
              <Link
                href="#metrics"
                className="text-gray-300 hover:text-amber-400 transition"
              >
                Metrics
              </Link>
              <Link
                href="#faq"
                className="text-gray-300 hover:text-amber-400 transition"
              >
                FAQ
              </Link>
              <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-amber-400"
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
          <div className="md:hidden bg-gray-900 border-t border-amber-500/20">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="#markets"
                className="block text-gray-300 hover:text-amber-400 py-2"
              >
                Markets
              </Link>
              <Link
                href="#plans"
                className="block text-gray-300 hover:text-amber-400 py-2"
              >
                Plans
              </Link>
              <Link
                href="#metrics"
                className="block text-gray-300 hover:text-amber-400 py-2"
              >
                Metrics
              </Link>
              <Link
                href="#faq"
                className="block text-gray-300 hover:text-amber-400 py-2"
              >
                FAQ
              </Link>
              <button className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-400">
                  Trusted by 125,000+ traders worldwide
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Trade{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Gold & Bitcoin
                </span>
                <br />
                with Confidence
              </h1>

              <p className="text-xl text-gray-400 max-w-lg">
                Institutional-grade trading platform with real-time analytics,
                professional tools, and 24/7 support.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center gap-2">
                  Start Trading <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold text-lg transition-all border border-gray-700">
                  View Markets
                </button>
              </div>

              <div className="flex items-center gap-6 pt-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-gray-400">Regulated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-gray-400">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-gray-400">Licensed</span>
                </div>
              </div>
            </div>

            {/* Live Chart */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab("btc")}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      activeTab === "btc"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    BTC/USD
                  </button>
                  <button
                    onClick={() => setActiveTab("gold")}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      activeTab === "gold"
                        ? "bg-amber-500 text-white"
                        : "bg-gray-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    XAU/USD
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-400">Live</span>
                </div>
              </div>

              {/* Candlestick Chart */}
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between gap-1">
                  {candleData.map((candle, i) => {
                    const isUp = candle.close >= candle.open;
                    const height = ((candle.high - candle.low) / 10) * 100;
                    const bodyHeight =
                      (Math.abs(candle.close - candle.open) / 10) * 100;
                    const bodyTop =
                      ((Math.max(candle.open, candle.close) - candle.low) /
                        (candle.high - candle.low)) *
                      100;

                    return (
                      <div
                        key={i}
                        className="relative w-full h-full flex flex-col justify-end"
                      >
                        <div className="relative h-full w-full flex items-center justify-center">
                          {/* Wick */}
                          <div
                            className={`absolute w-0.5 ${isUp ? "bg-emerald-400" : "bg-red-400"}`}
                            style={{
                              height: `${height}%`,
                              bottom: `${(candle.low / 100) * 100}%`,
                            }}
                          />
                          {/* Body */}
                          <div
                            className={`absolute w-4 ${isUp ? "bg-emerald-400" : "bg-red-400"}`}
                            style={{
                              height: `${bodyHeight}%`,
                              bottom: `${(candle.low / 100) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-400 rounded"></div>
                    <span className="text-sm text-gray-400">Buy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded"></div>
                    <span className="text-sm text-gray-400">Sell</span>
                  </div>
                </div>
                <div className="text-sm text-amber-400">
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Dashboard */}
      <section
        id="metrics"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Market Overview
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              const isPositive = metric.change.startsWith("+");

              return (
                <div
                  key={i}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/30 transition-all hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-5 h-5 text-amber-400" />
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        isPositive ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isPositive ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Plans</h2>
            <p className="text-xl text-gray-400">
              Choose the plan that matches your risk tolerance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentPlans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-gray-800/50 border rounded-2xl p-6 transition-all hover:scale-105 ${
                  plan.popular
                    ? "border-amber-500"
                    : "border-gray-700 hover:border-amber-500/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm rounded-full">
                    Most Popular
                  </div>
                )}

                <div
                  className={`mb-6 bg-gradient-to-br ${plan.gradient} rounded-xl p-4`}
                >
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.risk}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Min</span>
                    <span className="font-bold">{plan.minInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Max</span>
                    <span className="font-bold">{plan.maxInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected Return</span>
                    <span className="font-bold text-amber-400">
                      {plan.expectedReturn}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Term</span>
                    <span className="font-bold">{plan.term}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  * Past performance does not guarantee future returns. All
                  investments carry risk.
                </div>

                <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KYC & Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Secure & Compliant</h2>
              <p className="text-xl text-gray-400">
                We maintain the highest standards of security and regulatory
                compliance to protect your investments.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Regulatory Compliance</h3>
                    <p className="text-sm text-gray-400">
                      Licensed and regulated in multiple jurisdictions. We
                      follow strict KYC/AML procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Bank-Grade Security</h3>
                    <p className="text-sm text-gray-400">
                      256-bit SSL encryption, cold storage for assets, and
                      multi-signature wallets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">KYC Verification</h3>
                    <p className="text-sm text-gray-400">
                      Identity verification required for all accounts to prevent
                      fraud and ensure compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🔒</div>
                <div className="font-bold">SSL Secured</div>
                <div className="text-xs text-gray-400">256-bit encryption</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🏦</div>
                <div className="font-bold">Licensed</div>
                <div className="text-xs text-gray-400">MSB License #123456</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">✓</div>
                <div className="font-bold">KYC Verified</div>
                <div className="text-xs text-gray-400">Identity confirmed</div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <div className="font-bold">Insured</div>
                <div className="text-xs text-gray-400">
                  Up to $250K coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 text-xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Risk Disclaimer</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Trading cryptocurrencies and gold carries a high level of risk
                  and may not be suitable for all investors. The value of
                  investments can fluctuate significantly, and past performance
                  does not guarantee future returns. You should only invest
                  money you can afford to lose. Always conduct your own research
                  and consult with a financial advisor before making investment
                  decisions. TradeVault is not responsible for any financial
                  losses incurred through trading on our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-amber-500/30 transition-all"
              >
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  24/7 Professional Support
                </h2>
                <p className="text-xl text-gray-400">
                  Our dedicated support team is always available to assist you.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Live Chat</div>
                      <div className="font-bold">Available 24/7</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-bold">support@tradevault.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="font-bold">+1 (888) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-4">Quick Contact</h3>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
                  />
                  <button className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  TradeVault
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Professional trading platform for cryptocurrencies and gold.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-400">
                    Risk Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Regulatory</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>FinCEN: 31000123456789</li>
                <li>MSB Registration: 123456789</li>
                <li>DUNS: 12-345-6789</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} TradeVault. All rights reserved.
            Cryptocurrency and gold trading involves substantial risk.
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
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
