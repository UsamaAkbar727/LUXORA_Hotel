"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiCheck, FiX } from "react-icons/fi";

export default function DownloadProject() {
  const [downloading, setDownloading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await fetch("/api/download");

      if (!response.ok) {
        throw new Error("Download failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "luxora-project.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass-strong rounded-xl px-4 py-3 max-w-[240px] shadow-xl"
          >
            <p className="text-white/80 text-xs font-[var(--font-inter)] leading-relaxed">
              Download the complete LUXORA project source code as a ZIP file — ready to run.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download Button */}
      <motion.button
        onClick={handleDownload}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        disabled={downloading}
        className={`group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
          success
            ? "bg-green-600 shadow-green-600/30"
            : error
            ? "bg-luxora-accent shadow-luxora-accent/30"
            : "bg-luxora-gold shadow-luxora-gold/30 hover:shadow-luxora-gold/50 hover:scale-110"
        }`}
        whileTap={{ scale: 0.95 }}
        aria-label="Download project source code"
      >
        <AnimatePresence mode="wait">
          {downloading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ rotate: { repeat: Infinity, duration: 1, ease: "linear" }, opacity: { duration: 0.2 } }}
              className="w-5 h-5 border-2 border-luxora-bg border-t-transparent rounded-full"
            />
          ) : success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <FiCheck className="text-white" size={20} />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <FiX className="text-white" size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FiDownload className="text-luxora-bg" size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!downloading && !success && !error && (
          <span className="absolute inset-0 rounded-full border-2 border-luxora-gold/40 animate-ping opacity-30" />
        )}
      </motion.button>
    </div>
  );
}
