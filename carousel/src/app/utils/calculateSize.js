import root from "window-or-global";

const calculateSize = () => {
  let size;
  if (1200 < root.window.innerWidth) size = 0.3 * root.window.innerWidth;
  else if (900 < root.window.innerWidth) size = 0.4 * root.window.innerWidth;
  else if (700 < root.window.innerWidth) size = 0.6 * root.window.innerWidth;
  else if (500 < root.window.innerWidth) size = 0.7 * root.window.innerWidth;
  else if (330 < root.window.innerWidth) size = 0.8 * root.window.innerWidth;
  else size = 0.9 * root.window.innerWidth;
  return size;
};

module.exports = calculateSize;
