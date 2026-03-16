"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Home, Gamepad2, User, CheckCircle2, Clock, Banknote, CreditCard, ArrowRight } from "lucide-react"
import { Suspense } from "react"

function CongratulationsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [phase, setPhase] = useState<"loading" | "success">("loading")
  const [userData, setUserData] = useState<any>(null)
  const [countdown, setCountdown] = useState(5)
  const [confetti, setConfetti] = useState<{ id: number; x: number; color: string; delay: number; size: number }[]>([])
  const hasGenerated = useRef(false)

  const bank = searchParams.get("bank") || ""
  const account = searchParams.get("account") || ""
  const recipientName = searchParams.get("name") || ""

  useEffect(() => {
    const stored = localStorage.getItem("tivexx-user")
    if (stored) {
      try { setUserData(JSON.parse(stored)) } catch {}
    }
  }, [])

  // Loading phase → success phase
  useEffect(() => {
    const timer = setTimeout(() => setPhase("success"), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Countdown while loading
  useEffect(() => {
    if (phase !== "loading") return
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown, phase])

  // Generate confetti once on success
  useEffect(() => {
    if (phase === "success" && !hasGenerated.current) {
      hasGenerated.current = true
      const colors = ["#10b981", "#34d399", "#fbbf24", "#60a5fa", "#a78bfa", "#f472b6"]
      setConfetti(
        Array.from({ length: 48 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 1.4,
          size: 5 + Math.random() * 8,
        }))
      )
    }
  }, [phase])

  const username = userData?.name || "Champion"
  const balance = Number(userData?.balance || 0)
  const formatted = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" })
    .format(balance)
    .replace("NGN", "₦")

  const resolvedName = recipientName || username
  const firstName = resolvedName.trim().split(/\s+/).filter(Boolean)[0] || "User"
  const maskedRecipientName = `${firstName} ***`

  const digitsOnlyAccount = account.replace(/\D/g, "")
  const maskedAccount = digitsOnlyAccount.length >= 2
    ? `${digitsOnlyAccount.slice(0, 2)}***`
    : "***"

  const ref = `FG${Date.now().toString().slice(-8).toUpperCase()}`

  if (phase === "loading") {
    return (
      <div className="cg-root min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="cg-bubbles" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`cg-bubble cg-bubble-${i + 1}`} />
          ))}
        </div>
        <div className="cg-mesh" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          <div className="cg-spinner-wrap">
            <div className="cg-ring cg-ring-1" />
            <div className="cg-ring cg-ring-2" />
            <div className="cg-ring cg-ring-3" />
            <Banknote className="h-8 w-8 text-emerald-400 absolute inset-0 m-auto" />
          </div>
          <div>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Processing</p>
            <h2 className="text-2xl font-black text-white">Sending your funds…</h2>
          </div>
          <div className="cg-progress-bar">
            <div className="cg-progress-fill" />
          </div>
          <p className="text-emerald-400/70 text-xs font-mono">Completing in {countdown}s</p>
        </div>

        <style jsx global>{`
          ${sharedStyles}
          .cg-progress-bar{width:260px;height:4px;background:rgba(255,255,255,.08);border-radius:99px;overflow:hidden;}
          .cg-progress-fill{height:100%;width:0;background:linear-gradient(90deg,#10b981,#34d399);border-radius:99px;animation:cg-load 3s ease-in-out forwards;}
          @keyframes cg-load{0%{width:0}100%{width:100%}}
        `}</style>
      </div>
    )
  }

  return (
    <div className="cg-root min-h-screen pb-28 relative overflow-hidden">
      <div className="cg-bubbles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`cg-bubble cg-bubble-${i + 1}`} />
        ))}
      </div>
      <div className="cg-mesh" aria-hidden="true" />

      {/* Confetti */}
      <div className="cg-confetti-wrap" aria-hidden="true">
        {confetti.map(p => (
          <div
            key={p.id}
            className="cg-confetti-piece"
            style={{
              left: `${p.x}%`,
              width: p.size,
              height: p.size * 0.4,
              background: p.color,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto px-4 pt-12 pb-8 relative z-10 flex flex-col items-center gap-6">

        {/* Tick badge */}
        <div className="cg-tick-wrap">
          <div className="cg-tick-ring cg-tick-ring-1" />
          <div className="cg-tick-ring cg-tick-ring-2" />
          <div className="cg-tick-inner">
            <CheckCircle2 className="h-12 w-12 text-emerald-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mt-2">
          <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-1">Payment Approved ✓</p>
          <h1 className="text-3xl font-black text-white leading-tight mb-1">
            Congratulations,<br />
            <span className="cg-name-glow">{username}! 🎉</span>
          </h1>
          <p className="text-white/60 text-sm mt-2">Your withdrawal has been processed successfully.</p>
        </div>

        {/* Amount Card */}
        <div className="cg-amount-card w-full">
          <div className="cg-orb cg-orb-1" />
          <div className="cg-orb cg-orb-2" />
          <div className="relative z-10 text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Amount Withdrawn</p>
            <p className="cg-big-amount">{formatted}</p>
            <div className="cg-badge mt-3">
              <Clock className="h-3 w-3" />
              <span>Arrives in ≤ 5 minutes</span>
            </div>
          </div>
        </div>

        {/* Details card */}
        <div className="cg-details-card w-full">
          <div className="cg-detail-row">
            <span className="cg-detail-label">
              <CreditCard className="h-3.5 w-3.5" /> Bank
            </span>
            <span className="cg-detail-val">{bank || "—"}</span>
          </div>
          <div className="cg-divider" />
          <div className="cg-detail-row">
            <span className="cg-detail-label">
              <Banknote className="h-3.5 w-3.5" /> Account
            </span>
            <span className="cg-detail-val font-mono">{maskedAccount}</span>
          </div>
          <div className="cg-divider" />
          <div className="cg-detail-row">
            <span className="cg-detail-label">
              <User className="h-3.5 w-3.5" /> Name
            </span>
            <span className="cg-detail-val">{maskedRecipientName}</span>
          </div>
          <div className="cg-divider" />
          <div className="cg-detail-row">
            <span className="cg-detail-label">Ref No.</span>
            <span className="cg-detail-val font-mono text-emerald-400">{ref}</span>
          </div>
        </div>

        {/* Info tip */}
        <div className="cg-tip w-full">
          <Clock className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white/70">
            Your funds are on the way and will reflect in your bank account within <strong className="text-amber-300">5 minutes maximum</strong>. Keep your phone handy for an alert.
          </p>
        </div>

        {/* CTA */}
        <Link href="/dashboard" className="w-full">
          <button className="cg-home-btn w-full">
            Back to Dashboard
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>

      </div>

      {/* Bottom Nav */}
      <div className="cg-bottom-nav">
        <Link href="/dashboard" className="cg-nav-item">
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link href="/abouttivexx" className="cg-nav-item">
          <Gamepad2 className="h-5 w-5" />
          <span>About</span>
        </Link>
        <Link href="/refer" className="cg-nav-item">
          <User className="h-5 w-5" />
          <span>Refer</span>
        </Link>
      </div>

      <style jsx global>{`
        ${sharedStyles}

        /* Confetti */
        .cg-confetti-wrap{position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden;}
        .cg-confetti-piece{position:absolute;top:-20px;border-radius:2px;animation:cg-fall 2.8s ease-in forwards;}
        @keyframes cg-fall{
          0%{transform:translateY(0) rotate(0deg);opacity:1;}
          100%{transform:translateY(110vh) rotate(720deg);opacity:0;}
        }

        /* Tick */
        .cg-tick-wrap{position:relative;width:110px;height:110px;display:flex;align-items:center;justify-content:center;}
        .cg-tick-ring{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(16,185,129,.25);animation:cg-pulse-ring 2s ease-out infinite;}
        .cg-tick-ring-2{animation-delay:.4s;border-color:rgba(16,185,129,.15);}
        .cg-tick-inner{width:80px;height:80px;background:rgba(16,185,129,.08);border:1.5px solid rgba(16,185,129,.35);border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);}
        @keyframes cg-pulse-ring{0%{transform:scale(.85);opacity:1;}100%{transform:scale(1.5);opacity:0;}}

        /* Name glow */
        .cg-name-glow{background:linear-gradient(90deg,#34d399,#60a5fa,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

        /* Amount card */
        .cg-amount-card{background:linear-gradient(135deg,rgba(16,185,129,.12) 0%,rgba(59,130,246,.08) 100%);border:1px solid rgba(16,185,129,.25);border-radius:20px;padding:28px 24px;position:relative;overflow:hidden;}
        .cg-orb{position:absolute;border-radius:50%;filter:blur(40px);pointer-events:none;}
        .cg-orb-1{width:120px;height:120px;top:-30px;right:-30px;background:rgba(16,185,129,.15);}
        .cg-orb-2{width:80px;height:80px;bottom:-20px;left:-20px;background:rgba(59,130,246,.12);}
        .cg-big-amount{font-size:2.6rem;font-weight:900;color:#fff;letter-spacing:-1px;font-family:'Syne',sans-serif;}
        .cg-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);border-radius:99px;padding:4px 12px;font-size:.7rem;color:#34d399;font-weight:600;}

        /* Details card */
        .cg-details-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:0 4px;}
        .cg-detail-row{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;}
        .cg-detail-label{display:flex;align-items:center;gap:6px;font-size:.75rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.05em;}
        .cg-detail-val{font-size:.85rem;color:#fff;font-weight:600;max-width:55%;text-align:right;word-break:break-all;}
        .cg-divider{height:1px;background:rgba(255,255,255,.05);margin:0 16px;}

        /* Tip */
        .cg-tip{display:flex;gap:10px;background:rgba(251,191,36,.06);border:1px solid rgba(251,191,36,.2);border-radius:14px;padding:14px 16px;}

        /* CTA */
        .cg-home-btn{display:flex;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,#10b981,#059669);color:#fff;font-weight:800;font-size:.95rem;padding:16px 24px;border-radius:14px;border:none;cursor:pointer;transition:opacity .2s,transform .15s;}
        .cg-home-btn:hover{opacity:.92;transform:translateY(-1px);}

        /* Nav */
        .cg-bottom-nav{position:fixed;bottom:0;left:0;right:0;background:rgba(5,13,20,.95);backdrop-filter:blur(16px);border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-around;padding:10px 0 16px;}
        .cg-nav-item{display:flex;flex-direction:column;align-items:center;gap:3px;color:rgba(255,255,255,.45);font-size:.65rem;font-weight:500;text-decoration:none;transition:color .2s;}
        .cg-nav-item:hover{color:#34d399;}
      `}</style>
    </div>
  )
}

const sharedStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&display=swap');
  .cg-root{font-family:'Syne',sans-serif;background:#050d14;color:#fff;min-height:100vh;}

  /* Spinner */
  .cg-spinner-wrap{position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center;}
  .cg-ring{position:absolute;inset:0;border-radius:50%;border:2px solid transparent;}
  .cg-ring-1{border-top-color:#10b981;animation:cg-spin 1s linear infinite;}
  .cg-ring-2{inset:10px;border-top-color:#60a5fa;animation:cg-spin 1.4s linear infinite reverse;}
  .cg-ring-3{inset:22px;border-top-color:#a78bfa;animation:cg-spin .8s linear infinite;}
  @keyframes cg-spin{to{transform:rotate(360deg)}}

  /* Bubbles */
  .cg-bubbles{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;}
  .cg-bubble{position:absolute;border-radius:50%;opacity:0;animation:cg-rise linear infinite;}
  .cg-bubble-1{width:8px;height:8px;left:10%;background:radial-gradient(circle,rgba(16,185,129,.6),transparent);animation-duration:8s;animation-delay:0s;}
  .cg-bubble-2{width:14px;height:14px;left:25%;background:radial-gradient(circle,rgba(59,130,246,.5),transparent);animation-duration:11s;animation-delay:1.5s;}
  .cg-bubble-3{width:6px;height:6px;left:40%;background:radial-gradient(circle,rgba(16,185,129,.7),transparent);animation-duration:9s;animation-delay:3s;}
  .cg-bubble-4{width:18px;height:18px;left:55%;background:radial-gradient(circle,rgba(139,92,246,.4),transparent);animation-duration:13s;animation-delay:.5s;}
  .cg-bubble-5{width:10px;height:10px;left:70%;background:radial-gradient(circle,rgba(16,185,129,.5),transparent);animation-duration:10s;animation-delay:2s;}
  .cg-bubble-6{width:5px;height:5px;left:82%;background:radial-gradient(circle,rgba(52,211,153,.8),transparent);animation-duration:7s;animation-delay:4s;}
  .cg-bubble-7{width:12px;height:12px;left:15%;background:radial-gradient(circle,rgba(59,130,246,.4),transparent);animation-duration:12s;animation-delay:5s;}
  .cg-bubble-8{width:7px;height:7px;left:35%;background:radial-gradient(circle,rgba(16,185,129,.6),transparent);animation-duration:9.5s;animation-delay:2.5s;}
  .cg-bubble-9{width:20px;height:20px;left:60%;background:radial-gradient(circle,rgba(16,185,129,.2),transparent);animation-duration:15s;animation-delay:1s;}
  .cg-bubble-10{width:9px;height:9px;left:88%;background:radial-gradient(circle,rgba(139,92,246,.5),transparent);animation-duration:10.5s;animation-delay:6s;}
  .cg-bubble-11{width:4px;height:4px;left:5%;background:radial-gradient(circle,rgba(52,211,153,.9),transparent);animation-duration:6.5s;animation-delay:3.5s;}
  .cg-bubble-12{width:16px;height:16px;left:48%;background:radial-gradient(circle,rgba(59,130,246,.3),transparent);animation-duration:14s;animation-delay:7s;}
  @keyframes cg-rise{0%{transform:translateY(100vh) scale(.5);opacity:0;}10%{opacity:1;}90%{opacity:.6;}100%{transform:translateY(-10vh) scale(1.2);opacity:0;}}

  /* Mesh */
  .cg-mesh{position:fixed;inset:0;background:radial-gradient(ellipse 60% 40% at 20% 80%,rgba(16,185,129,.07) 0%,transparent 60%),radial-gradient(ellipse 50% 50% at 80% 20%,rgba(59,130,246,.06) 0%,transparent 60%),radial-gradient(ellipse 40% 30% at 50% 50%,rgba(139,92,246,.04) 0%,transparent 60%);pointer-events:none;z-index:0;}
`

export default function CongratulationsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050d14] flex items-center justify-center">
        <div className="text-white/50 text-sm">Loading…</div>
      </div>
    }>
      <CongratulationsContent />
    </Suspense>
  )
}
