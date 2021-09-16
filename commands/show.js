const discord = require('discord.js');

module.exports = {
  command: 'show',
  aliases: [],
  dm: false,
  permissions: (member) => {
    return true;
  },
  async execute(bot, msg, args) {
    async function wait(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
          });
    }
    let ram = [
        {
            address: 1,
            data: "LOAD 5",
            type: "instruction"
        },
        {
            address: 2,
            data: "ADD 6",
            type: "instruction"
        },
        {
            address: 3,
            data: "STO 7",
            type: "instruction"
        },
        {
            address: 4,
            data: "",
            type: "data"
        },
        {
            address: 5,
            data: 12,
            type: "data"
        },
        {
            address: 6,
            data: 8,
            type: "data"
        },
        {
            address: 7,
            data: "",
            type: "data"
        }
    ]
    let pc = 1
    let mar = 'nothing yet'
    let mdr = ''
    let cir = ''
    let acc = ''
    await msg.channel.send('I will now demonstrate my job.')
    await wait(1000)
    let registers = await msg.channel.send(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    await wait(300)
    let message = await msg.channel.send(`Copying PC to MAR...`)
    mar = pc
    await wait(300)
    registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message.edit(`Copying PC to MAR... Done.`)
    let message2 = await msg.channel.send(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory...`)
    await wait(100)
    message.delete()
    await wait(300)
    message2.edit(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory... Done.`)
    let res = ram.find(r => r.address == mar)
    await wait(100)
    message = await msg.channel.send(`New message from memory!\nContent: ${res.data}\nType: ${res.type}`)
    message2.delete()
    message2 = await msg.channel.send(`Copying message to MDR...`)
    await wait(300)
    mdr = res.data
    message.delete()
    registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message2.edit(`Copying message to MDR... Done.`)
    if(res.type == 'instruction'){
        message = await msg.channel.send(`Instruction detected, copying MDR content to CIR...`)
        cir = mdr
        await wait(100)
        registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    }
  }
}