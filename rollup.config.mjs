import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "solar-battery-card.js",  
  output: {
    file: "dist/solar-battery-card.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
