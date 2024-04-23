/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        DingTalkJinBuTi: ["DingTalkJinBuTi", "sans-serif"]
      }
    }
  },
  plugins: [require("daisyui")]
};
