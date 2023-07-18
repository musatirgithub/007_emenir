const phases = {
  1: "Sigorta Şirketinden Değer Kaybı Talebi",
  2: "Tahkim Komisyonunda Ön İnceleme",
  3: "Tahkim Komisyon Heyetince İnceleme",
  4: "Tutarın Sigorta Şirketince Ödenmesi",
  5: "Sürec Tamamlandi",
};
export const phaseConverter = (phase) => {
  return phases[phase];
};
