export const COMPANY_NAME = 'Uchooseit.us LLC';

export const getCurrentYear = (): number => new Date().getFullYear();

export const getCopyrightText = (): string =>
  `© ${getCurrentYear()} ${COMPANY_NAME}. All rights reserved.`;

export const getSavingsDisclaimer = (): string =>
  `© ${getCurrentYear()} Uchooseit.us — Savings are estimates; actual savings vary by offer and usage.`;
