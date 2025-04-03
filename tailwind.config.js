module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add the paths to all your template files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // Ensure this line exists
  ],
};
