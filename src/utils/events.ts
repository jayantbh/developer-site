export const scrollPosition = () => {
  if (typeof window === 'undefined') return 0;

  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  return scrollPercentRounded;
};
