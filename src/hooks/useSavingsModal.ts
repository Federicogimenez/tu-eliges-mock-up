import { useContext } from "react";
import { SavingsModalContext } from "../context/SavingsCalculatorModalContext";

export function useSavingsModal() {
  const context = useContext(SavingsModalContext);
  if (!context) {
    throw new Error("useCategoryModal debe usarse dentro de un CategoryModalProvider");
  }
  return context;
}
