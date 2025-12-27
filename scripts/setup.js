#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Color helpers for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(`${colors.cyan}${prompt}${colors.reset}`, resolve);
  });
}

async function getUserChoices() {
  log('\n🚀 Welcome to Next-Init Setup!\n', colors.bright);
  log("Let's customize your project. Answer the following questions:\n");

  const choices = {
    dashboard: await question('Include dashboard? (y/n): '),
    auth: await question('Include authentication (NextAuth)? (y/n): '),
    analytics: await question('Include Google Analytics? (y/n): '),
    contact: await question('Include contact form? (y/n): '),
  };

  return {
    dashboard: choices.dashboard.toLowerCase() === 'y',
    auth: choices.auth.toLowerCase() === 'y',
    analytics: choices.analytics.toLowerCase() === 'y',
    contact: choices.contact.toLowerCase() === 'y',
  };
}

function removeDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
    log(`  ✓ Removed ${dirPath}`, colors.green);
  }
}

function removeFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    log(`  ✓ Removed ${filePath}`, colors.green);
  }
}

function updatePackageJson(choices) {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  // Dependencies to remove based on choices
  const depsToRemove = [];

  if (!choices.auth) {
    depsToRemove.push('next-auth', 'bcryptjs', 'jsonwebtoken');
  }

  if (!choices.analytics) {
    depsToRemove.push('@next/third-parties');
  }

  if (!choices.contact) {
    depsToRemove.push('formik');
  }

  // Remove dependencies
  depsToRemove.forEach((dep) => {
    if (packageJson.dependencies[dep]) {
      delete packageJson.dependencies[dep];
      log(`  ✓ Removed dependency: ${dep}`, colors.green);
    }
  });

  // Remove setup script after first run
  if (packageJson.scripts.setup) {
    delete packageJson.scripts.setup;
  }

  // Remove bin if it exists (for template usage)
  if (packageJson.bin) {
    delete packageJson.bin;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  log('  ✓ Updated package.json', colors.green);
}

function updateProviders(choices) {
  const providersPath = path.join(
    process.cwd(),
    'src/app/components/Providers.tsx',
  );

  if (!fs.existsSync(providersPath)) return;

  let content = fs.readFileSync(providersPath, 'utf8');

  if (!choices.auth) {
    // Remove SessionProvider import and usage
    content = content.replace(
      /import\s+\{\s*SessionProvider\s*\}\s+from\s+['"]next-auth\/react['"];?\n?/g,
      '',
    );
    content = content.replace(
      /<SessionProvider[^>]*>\s*\{children\}\s*<\/SessionProvider>/gs,
      '{children}',
    );
  }

  fs.writeFileSync(providersPath, content);
  log('  ✓ Updated Providers.tsx', colors.green);
}

function updateLayout(choices) {
  const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');

  if (!fs.existsSync(layoutPath)) return;

  let content = fs.readFileSync(layoutPath, 'utf8');

  if (!choices.analytics) {
    // Remove Ga component import and usage
    content = content.replace(
      /import\s+Ga\s+from\s+['"]\.\/components\/Analytics\/Google\/Ga['"];?\n?/g,
      '',
    );
    content = content.replace(/<Ga\s*\/>\s*\n?\s*/g, '');
  }

  fs.writeFileSync(layoutPath, content);
  log('  ✓ Updated layout.tsx', colors.green);
}

async function cleanupFiles(choices) {
  log('\n📦 Cleaning up files based on your choices...\n', colors.yellow);

  // Remove dashboard
  if (!choices.dashboard) {
    removeDirectory(path.join(process.cwd(), 'src/app/dashboard'));
  }

  // Remove authentication
  if (!choices.auth) {
    removeDirectory(path.join(process.cwd(), 'src/app/api/auth'));
    removeFile(path.join(process.cwd(), 'src/lib/auth-options.ts'));
  }

  // Remove analytics
  if (!choices.analytics) {
    removeDirectory(path.join(process.cwd(), 'src/app/components/Analytics'));
  }

  // Remove contact form
  if (!choices.contact) {
    removeDirectory(path.join(process.cwd(), 'src/app/components/contact'));
    removeFile(path.join(process.cwd(), 'src/app/(main)/contact/page.tsx'));
  }

  // Update files
  updateProviders(choices);
  updateLayout(choices);
  updatePackageJson(choices);
}

async function cleanupSetupFiles() {
  log('\n🧹 Cleaning up setup files...\n', colors.yellow);

  // Remove setup script itself
  removeFile(path.join(process.cwd(), 'scripts/setup.js'));

  // Remove bin directory if it exists
  removeDirectory(path.join(process.cwd(), 'bin'));

  // Remove scripts directory if empty
  const scriptsDir = path.join(process.cwd(), 'scripts');
  if (fs.existsSync(scriptsDir) && fs.readdirSync(scriptsDir).length === 0) {
    removeDirectory(scriptsDir);
  }
}

async function main() {
  try {
    const choices = await getUserChoices();

    log('\n📋 Your choices:', colors.bright);
    log(`  Dashboard: ${choices.dashboard ? '✓' : '✗'}`);
    log(`  Authentication: ${choices.auth ? '✓' : '✗'}`);
    log(`  Analytics: ${choices.analytics ? '✓' : '✗'}`);
    log(`  Contact Form: ${choices.contact ? '✓' : '✗'}`);

    const confirm = await question('\nProceed with these settings? (y/n): ');

    if (confirm.toLowerCase() !== 'y') {
      log('\n❌ Setup cancelled.', colors.yellow);
      rl.close();
      process.exit(0);
    }

    await cleanupFiles(choices);
    await cleanupSetupFiles();

    log('\n✨ Setup complete!', colors.green);
    log('\nNext steps:', colors.bright);
    log('  1. Run: npm install');
    log('  2. Run: npm run dev');
    log('  3. Start building your app!\n');

    rl.close();
  } catch (error) {
    console.error('Error during setup:', error);
    rl.close();
    process.exit(1);
  }
}

main();
