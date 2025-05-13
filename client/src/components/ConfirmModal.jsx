// components/ConfirmModal.jsx
import { motion, AnimatePresence } from "framer-motion";

const ConfirmModal = ({ show, onClose, onConfirm }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "-100vh" }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cancel Order?</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to cancel this order? This action cannot be undone.</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-5 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                onClick={onConfirm}
              >
                Yes, Cancel
              </button>
              <button
                className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                onClick={onClose}
              >
                No, Go Back
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmModal;
