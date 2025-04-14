const fs = require("fs");
const { exec } = require("child_process");
const { performance } = require("perf_hooks");

const functions = JSON.parse(fs.readFileSync("func.json", "utf-8"));

async function runTests() {
  for (const item of functions) {
    if (!item.testfile) {
      console.error("❌ Error: Missing testfile in func.json");
      continue;
    }

    console.log(`\n🔍 Testing: ${item.testfile}`);
    const start = performance.now();

    await new Promise((resolve) => {
      exec(`npx jest ${item.testfile} --coverage --verbose`, (error, stdout, stderr) => {
        const end = performance.now();
        const duration = (end - start).toFixed(2);

        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);

        if (error) {
          console.error("❌ Error during test execution:");
          console.error(error.message);
        }

        console.log(`⏱️ Total execution time: ${duration} ms`);
        resolve();
      });
    });
  }

  console.log("\n🧪 Running Mutation Testing (Stryker)...");
  exec(`npx stryker run`, (err, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  });

  console.log("\n📊 Generating Maintainability & Complexity Report (Plato)...");
  exec(`plato -r -d report src`, (err, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  });
}

runTests();
