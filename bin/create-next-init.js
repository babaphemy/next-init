#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function exec(command, cwd = process.cwd()) {
  try {
    return execSync(command, { cwd, stdio: 'inherit' });
  } catch (error) {
    log(`\n❌ Error executing command: ${command}`, colors.red);
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    log('\n❌ Please provide a project name', colors.red);
    log('\nUsage:', colors.bright);
    log('  npx create-next-init my-app\n');
    process.exit(1);
  }

  const targetDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    log(`\n❌ Directory "${projectName}" already exists`, colors.red);
    process.exit(1);
  }

  log('\n🚀 Creating your Next.js project...\n', colors.bright);

  // Clone the template repository
  log('📦 Cloning template...', colors.blue);
  exec(
    `git clone https://github.com/babaphemy/next-init.git ${projectName}`,
    process.cwd(),
  );

  // Remove .git directory
  log('🔧 Initializing project...', colors.blue);
  const gitDir = path.join(targetDir, '.git');
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
  }

  // Change to project directory
  process.chdir(targetDir);

  // Run setup script
  log("\n🎨 Let's customize your project!\n", colors.bright);
  exec('node scripts/setup.js', targetDir);

  log(`\n✅ Project "${projectName}" created successfully!\n`, colors.green);
  log('Get started with:', colors.bright);
  log(`  cd ${projectName}`, colors.cyan);
  log('  npm install', colors.cyan);
  log('  npm run dev\n', colors.cyan);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
