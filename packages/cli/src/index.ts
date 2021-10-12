#!/usr/bin/env node

import { Command } from 'commander'
const program = new Command()

program.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name(), 
})

program.command('setup').action(() => {
  console.log('111')
})

program
  .option('-f, --force')
  .command('build [env]')
  .action((env) => {
    const opts2 = program.opts()
    console.log(opts2)
  })

program.parse()