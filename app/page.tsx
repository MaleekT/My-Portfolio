"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "./projectsData";

// Animation Variants with strict TypeScript typing
const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

// Refined, Human-Sounding Process Data
const processData = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "I start by asking the right questions. We'll dive into your business goals and user needs. From there, I create a structural blueprint designed specifically to drive results, whether that means more sales, leads, or engagement."
  },
  {
    id: "02",
    title: "UI/UX Design in Figma",
    description: "This is where we get creative. I use Figma to craft a distinct, high-fidelity look for your brand. I focus heavily on typography, spacing, and pacing to build a bespoke interface that users actually remember."
  },
  {
    id: "03",
    title: "Webflow Development",
    description: "I engineer the final product in Webflow for unmatched speed and reliability. This ensures your site loads instantly, scales perfectly across devices, and remains incredibly easy for you to update as your business grows."
  },
  {
    id: "04",
    title: "Custom Code & Integration",
    description: "To push beyond standard limits, I integrate custom JavaScript and CSS. This allows for complex, bespoke animations and seamless third-party API connections, ensuring your website feels truly premium and unique."
  }
];

function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView };
}

export default function HomePage() {
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, margin: "-60px" });
  
  const footerReveal = useReveal();
  const footerTextRef = useRef(null);

  // GSAP ScrollTrigger for the Footer Text
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".footer-char", {
        y: "120%",
        opacity: 0,
        rotateZ: 5,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: footerTextRef.current,
          start: "top 85%",
        }
      });
    }, footerTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="grain" style={{ background: "var(--bg)", minHeight: "100dvh" }}>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-dot {
          animation: blink 1.2s step-end infinite;
        }
      `}</style>

      {/* NAVBAR */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex",
          alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem",
          borderBottom: "1px solid var(--border)", backdropFilter: "blur(12px)", background: "rgba(10,10,10,0.72)",
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--fg)", letterSpacing: "-0.03em", fontWeight: 400 }}>
          Maleek<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {["Work", "Process", "Contact"].map((link) => (
            <a
              key={link} href={`#${link.toLowerCase()}`}
              style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-muted)", transition: "color 0.25s ease" }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--fg-muted)")}
            >
              {link}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* HERO / BIO SECTION */}
      <section style={{ minHeight: "100dvh", display: "flex", alignItems: "center", padding: "8rem 2.5rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
          <div>
            <motion.h1 custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 1, fontWeight: 400, letterSpacing: "-0.04em", color: "var(--fg)", marginBottom: "1rem" }}>
              Maleek Taiwo
            </motion.h1>
            <motion.h2 custom={1} variants={fadeUpVariants} initial="hidden" animate="visible" style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.85rem, 2vw, 1.1rem)", color: "var(--accent)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
              UI/UX Designer and Webflow Developer
            </motion.h2>
            <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", lineHeight: 1.7, color: "var(--fg-muted)", maxWidth: "500px" }}>
              Hi, I am Maleek. I design and build functional websites that solve real user problems. I focus on keeping interfaces clean, understanding what the user actually needs, and writing solid code to bring those ideas to life on the web.
            </motion.p>
          </div>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" style={{ width: "100%", maxWidth: "450px", aspectRatio: "4 / 5", background: "var(--bg-elevated)", border: "1px solid var(--border)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "auto", overflow: "hidden" }}>
            <img src="/maleek.png" alt="Maleek Taiwo" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: 2 }} onError={(e) => (e.currentTarget.style.display = 'none')} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px)`, opacity: 0.4 }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase", position: "relative", zIndex: 1, background: "var(--bg)", padding: "0.5rem 1rem", border: "1px solid var(--border)" }}>
              Photo Goes Here
            </span>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="work" ref={projectsRef} style={{ padding: "8rem 2.5rem", borderTop: "1px solid var(--border)" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>01</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--fg)" }}>Selected Work</h2>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.1em" }}>{projectsData.length} Projects</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.5rem", rowGap: "2.5rem" }}>
          {projectsData.map((project, i) => {
            const colSpans = ["1 / 9", "9 / 13", "1 / 5", "5 / 13"];
            const colSpan = colSpans[i] ?? "1 / 13";
            const isWide = i === 0 || i === 3;
            return (
              <motion.div key={project.id} custom={i} variants={cardVariants} initial="hidden" animate={projectsInView ? "visible" : "hidden"} style={{ gridColumn: colSpan }}>
                <ProjectCard project={project} isWide={isWide} index={i} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PROCESS & TOOLS SECTION */}
      <section id="process" ref={processRef} style={{ padding: "8rem 2.5rem", borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}>
        <motion.div initial={{ opacity: 0, x: -30 }} animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>02</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--fg)" }}>Process and Arsenal</h2>
          </div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {processData.map((step, i) => (
            <motion.div key={step.id} custom={i} variants={cardVariants} initial="hidden" animate={processInView ? "visible" : "hidden"} style={{ padding: "2.5rem", border: "1px solid var(--border)", background: "var(--bg)", display: "flex", flexDirection: "column", gap: "1.5rem", transition: "border-color 0.3s ease" }} whileHover={{ borderColor: "var(--accent)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.5rem", color: "var(--accent)", fontWeight: 300 }}>{step.id}</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--fg)", fontWeight: 400, letterSpacing: "-0.02em" }}>{step.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--fg-muted)" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" ref={footerReveal.ref} style={{ borderTop: "1px solid var(--border)", padding: "6rem 2.5rem 4rem", position: "relative", overflow: "hidden" }}>
        <motion.div initial={{ opacity: 0 }} animate={footerReveal.isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Available for freelance</p>
            <a href="mailto:maleektaiwo164@gmail.com" style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--fg-muted)", textDecoration: "underline", textDecorationColor: "var(--border)", textUnderlineOffset: "4px", transition: "color 0.2s ease, textDecorationColor 0.2s ease" }} onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--fg)"; (e.target as HTMLAnchorElement).style.textDecorationColor = "var(--accent)"; }} onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = "var(--fg-muted)"; (e.target as HTMLAnchorElement).style.textDecorationColor = "var(--border)"; }}>
              maleektaiwo164@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <a href="https://x.com/_MasterMal" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>Twitter</a>
            <a href="https://wa.me/2348061191638" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>WhatsApp</a>
          </div>
        </motion.div>
        
        {/* GSAP Animated Footer CTA */}
        <div ref={footerTextRef} style={{ marginTop: "2rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 11vw, 15rem)",
              lineHeight: 0.88,
              fontWeight: 400,
              letterSpacing: "-0.04em",
              color: "var(--fg)",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {"LET'S BUILD".split("").map((char, index) => (
              <span key={index} style={{ display: "inline-block", overflow: "hidden" }}>
                <span 
                  className="footer-char" 
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </span>
              </span>
            ))}
            {/* Blinking Dot */}
            <span className="blinking-dot" style={{ color: "var(--accent)", display: "inline-block" }}>.</span>
          </h2>
        </div>
        
        <motion.div initial={{ opacity: 0 }} animate={footerReveal.isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.6, duration: 0.7 }} style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={bottomFooterStyle}>© 2026 All rights reserved</span>
          <span style={bottomFooterStyle}>Designed & Built in Next.js</span>
        </motion.div>
      </footer>
    </main>
  );
}

const socialLinkStyle = { fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s ease" } as const;
const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLAnchorElement).style.color = "var(--fg)"; };
const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLAnchorElement).style.color = "var(--fg-faint)"; };
const bottomFooterStyle = { fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.12em", textTransform: "uppercase" } as const;

type Project = (typeof projectsData)[number];

function ProjectCard({ project, isWide, index }: { project: Project; isWide: boolean; index: number }) {
  return (
    <motion.a href={project.url} target="_blank" rel="noopener noreferrer" initial={{ borderColor: "var(--border)" }} whileHover={{ borderColor: "var(--accent)" }} transition={{ duration: 0.25, ease: "easeOut" }} style={{ display: "block", borderWidth: "1px", borderStyle: "solid", background: "var(--bg-surface)", overflow: "hidden", textDecoration: "none", position: "relative" }}>
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }} style={{ width: "100%", aspectRatio: isWide ? "16 / 9" : "4 / 5", background: "var(--bg-elevated)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: 2 }} onError={(e) => (e.currentTarget.style.display = 'none')} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, var(--border) 39px, var(--border) 40px)`, opacity: 0.4 }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.18em", textTransform: "uppercase", position: "relative", zIndex: 1, border: "1px solid var(--border)", padding: "0.4rem 0.8rem", background: "var(--bg)" }}>Screenshot</span>
      </motion.div>
      <div style={{ padding: "1.6rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>0{index + 1}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fg-faint)", letterSpacing: "0.12em", textTransform: "uppercase", border: "1px solid var(--border)", padding: "0.2rem 0.55rem" }}>{project.category}</span>
        </div>
        <div style={{ height: "1px", background: "var(--border)", width: "100%" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: isWide ? "clamp(1.1rem, 2vw, 1.6rem)" : "clamp(1rem, 1.6vw, 1.3rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--fg)" }}>{project.title}</h3>
          <motion.div whileHover={{ x: 3, y: -3 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0, width: "2rem", height: "2rem", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}><ArrowUpRight size={14} color="var(--fg-muted)" /></motion.div>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--fg-muted)" }}>{project.description}</p>
      </div>
    </motion.a>
  );
}