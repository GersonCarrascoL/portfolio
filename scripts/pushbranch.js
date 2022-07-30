const { spawnSync} = require('child_process');
const chalk = require('chalk');

const child = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']);
if (child.error) {

  console.log('Error obteniendo rama activa', child.error);
  process.exit(1);
}

// Nombre de la rama
const branchName = child.stdout.toString('utf8').trim();
console.log(chalk.bold(`Subiendo a la rama ${branchName}`));

const push = spawnSync('git', ['push', '-u', 'origin', `${branchName}`, '--no-verify']);
if (push.error) {
  
  console.log('Error subiendo los cambios al servidor remoto', child.error);
  process.exit(1);
}

console.log(chalk.bold(`Subiendo tags`));
const tags = spawnSync('git', ['push', '--tags', '--no-verify']);
if (tags.error) {

  console.log('Error subiendo las etiquetas al servidor remoto', child.error);
  process.exit(1);
}