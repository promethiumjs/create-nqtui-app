#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);

    return false;
  }

  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/nqtui/nqtui-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Initializing new nqtui app in ${repoName}`);
const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(1);

console.log(`Installing dependencies....`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(1);

console.log(
  `Congrutulations! You're now ready to start developing your nqtui app. Follow the commands down below to get started.`
);
console.log(`cd ${repoName}`);
console.log(`npm run dev`);
console.log(`All the best!`);
