import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function Popup({ show, type = "success", message, onClose }) {
  if (!show) return null;

  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                   flex items-center justify-center"
      >
        {/* Popup Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="bg-[#111827] border border-white/10 rounded-2xl
                     p-8 max-w-sm w-full mx-4 text-center
                     shadow-2xl shadow-black/50"
        >
          <div className="flex justify-center mb-4">
            {isSuccess ? (
              <CheckCircle size={42} className="text-[#D4AF37]" />
            ) : (
              <XCircle size={42} className="text-red-400" />
            )}
          </div>

          <p className="text-white text-sm leading-relaxed mb-6">
            {message}
          </p>

          <button
            onClick={onClose}
            className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg
                       font-semibold hover:bg-[#F1C232] transition"
          >
            Okay
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
