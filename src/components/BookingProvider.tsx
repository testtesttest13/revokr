"use client";

import { createContext, useContext, useState, useCallback } from "react";
import CalModal from "./CalModal";
import FloatingCTA from "./FloatingCTA";

const BookingContext = createContext<{ openBooking: () => void }>({
  openBooking: () => {},
});

export function useBooking() {
  return useContext(BookingContext);
}

export default function BookingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <FloatingCTA onClick={openBooking} />
      <CalModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  );
}
