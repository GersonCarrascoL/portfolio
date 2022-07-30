const filePath = '../package.json';
const packageJson = require(filePath);
const prompts = require('prompts');
const fs = require('fs');
const {
  spawnSync
} = require('child_process');
const chalk = require('chalk');

validateWorkspace();

const preversion = packageJson.version.split('-');
const version = preversion[0].split('.');
const [p, n, m] = version;

if (version.length !== 3) {
  console.log('Formato de versión incorrecto', err);
  process.exit(1);
}

let currentVersion = version.join('.');
if (preversion[1]) {
  currentVersion += `-${preversion[1]}`;
}

const patch = `${p}.${n}.${chalk.bold.dim.yellowBright(+m + 1)}`;
const minor = `${p}.${chalk.bold.dim.yellowBright(+n + 1)}.0`;
const major = `${chalk.bold.dim.yellowBright(+p + 1)}.0.0`;

const preUpdate = `${p}.${n}.${m}-${chalk.bold.dim.yellowBright(+preversion[1] + 1 || 0)}`;

const question = [{
  type: 'select',
  name: 'version',
  message: `Seleccione la versión a subir. (Actual: ${currentVersion})`,
  choices: [{
      title: `Patch: ${patch}`,
      value: 'patch'
    },
    {
      title: `Minor: ${minor}`,
      value: 'minor'
    },
    {
      title: `Major: ${major}`,
      value: 'major'
    },
    {
      title: `Preupdate: ${preUpdate}`,
      value: 'preupdate'
    }
  ]
}];

(async () => {

  const response = await prompts(question);

  if (!response.version) {
    console.log(chalk.red.bold('No se seleccionó ninguna opción'));
    process.exit(1);
  }

  analizeResponse(response);
  updatePackageJsonVersion();
  writePackageJson();


})();

function validateWorkspace() {
  const workSpace = spawnSync('git', ['status', '--porcelain']);
  if (workSpace.error) {
    console.log(chalk.red.bold('Ocurrió un error verificando el espacio de trabajo'));
    process.exit(1);
  }
  if (workSpace.stdout.toString('utf8').trim()) {
    console.log(chalk.red.bold('Tiene archivos en su espacio de trabajo de GIT'));
    process.exit(1);
  }
}

function writePackageJson() {

  fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2), function (err) {
    if (err) {
      console.log('Error actualizando el archivo', err);
      process.exit(1);
    }
    console.log(chalk.bold('Actualizada versión del proyecto'));
    console.log(chalk.bold('Creando commit de actualización'));
    gitUpdate();
    console.log(chalk.bold('Tag de Git creado con éxito'));
    // gitPush();
    process.exit(0);
  });
}

function updatePackageJsonVersion() {
  packageJson.version = version.join('.');
  if (preversion[1]) {
    packageJson.version += `-${preversion[1]}`;
  }
}

function gitPush() {

  const gitBranch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']);

  if (gitBranch.error) {
    console.log('Error obteniendo rama activa', child.error);
    process.exit(1);
  }
  
  // Nombre de la rama
  const branchName = gitBranch.stdout.toString('utf8').trim();
  console.log(chalk.bold(`Subiendo rama ${branchName}`));

  const pushGit = spawnSync('git', ['push', 'origin', `${branchName}`]);
  if (pushGit.error) {
    console.log(chalk.red.bold('Ocurrió un error subiendo a Git'));
    process.exit(1);
  }

  console.log(chalk.bold(`Rama subida con éxito`));
  const pushGitTags = spawnSync('git', ['push', '--tags']);
  if (pushGitTags.error) {
    console.log(chalk.red.bold('Ocurrió un error subiendo los tags a Git'));
    process.exit(1);
  }

  console.log(chalk.bold(`Tag subido con éxito`));
}

function gitUpdate() {
  const addGit = spawnSync('git', ['add', '-A']);
  if (addGit.error) {
    console.log(chalk.red.bold('Ocurrió un error creando el tag de Git'));
    process.exit(1);
  }
  const commitGit = spawnSync('git', ['commit', '-m', `Actualizada versión: (${packageJson.version})`]);
  if (commitGit.error) {
    console.log(chalk.red.bold('Ocurrió un error creando el tag de Git'));
    process.exit(1);
  }
  const tagGit = spawnSync('git', ['tag', `${packageJson.version}`]);
  if (tagGit.error) {
    console.log(chalk.red.bold('Ocurrió un error creando el tag de Git'));
    process.exit(1);
  }
}

function analizeResponse(response) {
  switch (response.version) {
    case 'patch':
      version[2] = `${(+m) + 1}`;
      preversion[1] = undefined;
      break;
    case 'minor':
      version[1] = `${(+n) + 1}`;
      version[2] = '0';
      preversion[1] = undefined;
      break;
    case 'major':
      version[0] = `${(+p) + 1}`;
      version[1] = '0';
      version[2] = '0';
      preversion[1] = undefined;
      break;
    case 'preupdate':

      if (preversion[1]) {

        preversion[1] = (+preversion[1]) + 1;
      } else {

        preversion[1] = '0';
      }

      break;
  }
}
