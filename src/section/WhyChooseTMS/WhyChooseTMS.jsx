import React, { useState, useEffect, useRef } from "react";
import { PlusCircle, Award, CheckSquare, ArrowRight, Play, RotateCcw, Terminal, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";

const logSequences = [
  { type: "info", text: "Initializing TMS Agentic Test Runner v2.1..." },
  { type: "info", text: "Connecting to CI/CD pipeline via GitHub Actions..." },
  { type: "exec", text: "Executing test suite: TC-Cycle-Sprint-14..." },
  { type: "success", text: "✓ TC-101: Authentication flows: [Status: Passed]" },
  { type: "success", text: "✓ TC-102: Reset password validation: [Status: Passed]" },
  { type: "warn", text: "⚠ TC-103: API usage quota endpoints: [Status: Flaky (Retrying)]" },
  { type: "success", text: "✓ TC-103: API usage quota endpoints: [Status: Passed after retry]" },
  { type: "success", text: "✓ TC-104: Traceability matrix mapping: [Status: Passed]" },
  { type: "success", text: "✓ TC-105: Sprint release closing checklist: [Status: Passed]" },
  { type: "success", text: "✓ TC-106: Error prone modules hot-spot trace: [Status: Passed]" },
  { type: "info", text: "Test Cycle Completed. Logs saved to /dashboard/reports" },
  { type: "success", text: "Summary: 6 Executed | 6 Passed | 0 Failed | 100% Coverage" },
];

const WhyChooseTMS = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isRunning && currentLine < logSequences.length) {
      timer = setTimeout(() => {
        setLogs((prev) => [...prev, logSequences[currentLine]]);
        setCurrentLine((prev) => prev + 1);
        setProgress(Math.round(((currentLine + 1) / logSequences.length) * 100));
      }, 1000);
    } else if (currentLine >= logSequences.length) {
      setIsRunning(false);
    }
    return () => clearTimeout(timer);
  }, [isRunning, currentLine]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [logs]);

  const handleStartSim = () => {
    setLogs([logSequences[0]]);
    setCurrentLine(1);
    setProgress(8);
    setIsRunning(true);
  };

  const handleResetSim = () => {
    setIsRunning(false);
    setLogs([]);
    setProgress(0);
    setCurrentLine(0);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50/50 to-white py-16" id="why-choose-us">
      <div className="flex flex-col lg:flex-row items-center w-[95%] md:w-[90%] max-w-7xl mx-auto px-4 gap-16">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-left">
          <ScrollReveal animation="slide-right">
            <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-[#7047eb]/10 border border-[#7047eb]/20 text-sm font-semibold text-[#7047eb] mb-5 uppercase tracking-wider">
              <Award className="w-4 h-4" /> QA Innovation
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
              A Platform Engineered <br />
              For Real SQA Workflows
            </h2>

            <p className="text-gray-500 font-medium mb-8 text-base sm:text-lg leading-relaxed">
              We built TMS to align directly with Agile sprints and developer pipelines. No more fragmented spreadsheets—run, execute, trace, and close test cycles in one dashboard.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <ScrollReveal animation="slide-up" delay={100}>
                <div className="flex items-start gap-4 px-5 py-4 border border-gray-100 rounded-2xl shadow-sm bg-white hover:border-[#7047eb]/30 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-[#7047eb]/10 text-[#7047eb] mt-0.5">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5">Automated Execution Logs</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Run test cases manually or plug in automated execution scripts via CLI.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <div className="flex items-start gap-4 px-5 py-4 border border-gray-100 rounded-2xl shadow-sm bg-white hover:border-[#7047eb]/30 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-[#7047eb]/10 text-[#7047eb] mt-0.5">
                    <PlusCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5">Dynamic Requirement Coverage</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Verify requirement matrices directly and ensure no user story goes untested.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <div className="flex items-start gap-4 px-5 py-4 border border-gray-100 rounded-2xl shadow-sm bg-white hover:border-[#7047eb]/30 transition-all duration-300">
                  <div className="p-2 rounded-xl bg-[#7047eb]/10 text-[#7047eb] mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-0.5">Sprint Test Closures</h4>
                    <p className="text-xs sm:text-sm text-gray-500">Generate closing notes and SQA release reports automatically with one click.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] text-white px-7 py-4 rounded-xl font-bold shadow-lg shadow-[#7047eb]/20 hover:shadow-xl hover:shadow-[#7047eb]/30 hover:scale-[1.01] transition-all cursor-pointer">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Content: Interactive SQA Automation Log Widget */}
        <div className="w-full lg:w-1/2 p-1.5 bg-gray-950 rounded-3xl shadow-2xl border border-gray-900 relative overflow-hidden">

          {/* Header Bar */}
          <div className="flex items-center justify-between bg-gray-900/60 px-5 py-4 rounded-t-2xl border-b border-gray-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#7a5fff]" />
              <span className="font-mono text-xs font-bold text-gray-300">tms-cli --run-cycle --agentic</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
          </div>

          {/* Terminal Console Log Area */}
          <div ref={terminalBodyRef} className="bg-[#0c0c0f] px-6 py-8 h-60 overflow-y-auto font-mono text-xs text-left scrollbar-thin scrollbar-thumb-gray-800">
            {logs.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-2">
                <Terminal className="w-8 h-8 text-gray-700 animate-pulse" />
                <p>Click "Run Test Suite" to simulate live SQA execution.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-2 transition-all duration-300 ${log.type === "success"
                        ? "text-emerald-400"
                        : log.type === "warn"
                          ? "text-amber-400"
                          : log.type === "exec"
                            ? "text-[#7a5fff] font-bold"
                            : "text-gray-400"
                      }`}
                  >
                    <span>&gt;</span>
                    <span>{log.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Terminal Progress & Controls footer */}
          <div className="bg-gray-900/40 border-t border-gray-900 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Progress bar info */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-[10px] uppercase font-bold text-gray-500">Progress</span>
              <div className="flex-grow sm:w-32 bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#7a5fff] to-[#4e3be5] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs text-gray-300 w-8">{progress}%</span>
            </div>

            {/* Simulated CTA buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleStartSim}
                disabled={isRunning}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${isRunning
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                    : "bg-[#7047eb] text-white hover:bg-[#7a5fff] shadow-md shadow-[#7047eb]/20"
                  }`}
              >
                <Play className="w-3.5 h-3.5" /> Run Test Suite
              </button>
              <button
                onClick={handleResetSim}
                className="p-2.5 rounded-xl border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white bg-gray-900 transition-all duration-300 cursor-pointer"
                title="Reset log simulator"
                aria-label="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseTMS;
