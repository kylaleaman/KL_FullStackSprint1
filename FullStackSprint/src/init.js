const yargs = require('yargs');

yargs.command({
  command: 'init',
  describe: 'Initialize the application',
  builder: (yargs) => {
    return yargs
      .command('all', 'Create folder structure, config, and help files')
      .command('mk', 'Create folder structure')
      .command('cat', 'Create config file with default settings and help files');
  },
  handler: (argv) => {
    console.log('Initializing the application...');
    console.log('Selected command:', argv._[1]);
    console.log('Arguments:', argv);
  }
  
});

yargs.parse();


