import tailwindcss from "tailwindcss";
import fs from "fs";
import postcss from "postcss";

const input = fs.readFileSync("./src/input.css", "utf8");

postcss([tailwindcss({ config: "./tailwind.config.js" })])
  .process(input, { from: "./src/input.css", to: "./dist/output.css" })
  .then(result => {
    fs.writeFileSync("./dist/output.css", result.css);
    console.log("Tailwind CSS built successfully!");
  });
