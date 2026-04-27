"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/content";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={`https://wa.me/${SITE_CONFIG.contact.phone.replace(/\+/g, "").replace(/\s/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#22c35e] transition-colors flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block shadow-md border border-gray-100">
        ¡Cotiza por WhatsApp!
      </span>
    </motion.a>
  );
};
