const discord = require('discord.js');

module.exports = {
  command: 'what',
  aliases: ['so'],
  dm: false,
  permissions: (member) => {
    return true;
  },
  async execute(bot, msg, args) {
    if(args.includes('alu?')) return msg.channel.send('An ALU (Arithmetic logic unit) does arithmetic calculations on numbers.')
    else if(args.includes('control')) return msg.channel.send('A control unit directs the operations of the CPU and converts binary into timing and control signals for the other units of the CPU to follow.')
    else if(args.includes('acc') || args.includes('acc?')) return msg.channel.send('An ACC (Accumulator) stores the results of the ALU.')
    else if(args.includes('pc') || args.includes('pc?')) return msg.channel.send('A PC (Program counter) keeps track of the next instruction to be fetched. Every cycle makes the PC increase by 1.')
    else if(args.includes('mar') || args.includes('mar?')) return msg.channel.send('A MAR (Memory address register) holds the location of memory which is being read from or written to')
    else if(args.includes('mdr?') || args.includes('mdr')) return msg.channel.send('A MDR (Memory data register) holds the data/instruction which is just read from or about to be written to memory.')
    else if(args.includes('cir') || args.includes('cir?')) return msg.channel.send('A CIR (Current instruction register) holds the instruction which is just been fetched from the MDR.')
    else if(args.includes('registers?')) return msg.channel.send('Registers are a set of storage location for the CPU.')
    else if(args.includes('parts')) return msg.channel.send('The parts of the CPU includes the Arithmetic logic unit (ALU), control unit and registers, which are named PC, MAR, MDR, CIR, and ACC.')
    return msg.channel.send(`You may think I do very advanced tasks, but I don't. I just do very simple tasks (fetch, decode and execute) very quicky! The laptop I am being hosted on can boost up to 5 Gigahertz so theoretically I can do 5 billion cycles of fetch, decode and execute per second!`)
  }
};
