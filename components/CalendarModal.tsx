"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Script from "next/script";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  // Close modal on escape key and handle body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent background scrolling on both desktop and mobile
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Full height on mobile, larger centered modal on desktop */}
      <div className="relative bg-white shadow-2xl w-full sm:max-w-4xl lg:max-w-5xl h-[95vh] sm:h-[85vh] rounded-t-2xl sm:rounded-xl flex flex-col">
        {/* Header - Sticky */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shrink-0 rounded-t-2xl sm:rounded-t-xl">
          {/* Mobile drag indicator */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-300 rounded-full sm:hidden" />

          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2 sm:mt-0">
            Schedule a Consultation
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 sm:h-5 sm:w-5 text-gray-500" />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto overscroll-contain min-h-0">
          <div className="p-3 sm:p-4 h-full">
            <iframe
              src="https://link.tdmarketinggroup.com/widget/booking/KPZxMrcQ9mm9vfb6JR5O"
              className="w-full border-none h-full min-h-[700px] sm:min-h-[800px]"
              id="KPZxMrcQ9mm9vfb6JR5O_1764874477812"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
            <Script
              src="https://link.tdmarketinggroup.com/js/form_embed.js"
              strategy="lazyOnload"
            />
          </div>
        </div>

        {/* Mobile bottom safe area padding */}
        <div className="shrink-0 pb-safe sm:hidden" />
      </div>
    </div>
  );
}
