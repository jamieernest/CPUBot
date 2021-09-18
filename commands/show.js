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
            type: "instruction",
            decoded: "Load data from memory address 5"
        },
        {
            address: 2,
            data: "ADD 6",
            type: "instruction",
            decoded: "Add ACC value to data in memory address 6"
        },
        {
            address: 3,
            data: "STO 7",
            type: "instruction",
            decoded: "Store ACC data to memory address 7"
        },
        {
            address: 4,
            data: "",
            type: "data",
            decoded: ""
        },
        {
            address: 5,
            data: 12,
            type: "data",
            decoded: 12
        },
        {
            address: 6,
            data: 8,
            type: "data",
            decoded: 8
        },
        {
            address: 7,
            data: "",
            type: "data",
            decoded: ""
        }
    ]
    let pc = 1
    let mar = ''
    let mdr = ''
    let cir = ''
    let acc = ''
    await msg.channel.send('I will now demonstrate my job.')
    await wait(2000)
    let registers = await msg.channel.send(`\nPC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    let ramDisplay = await msg.channel.send(`\nAddress 1: ${ram[0].data}\nAddress 2: ${ram[1].data}\nAddress 3: ${ram[2].data}\nAddress 4: ${ram[3].data}\nAddress 5: ${ram[4].data}\nAddress 6: ${ram[5].data}\nAddress 7: ${ram[6].data}`)
    async function fetchDecode(){
        await wait(2000)
        let message = await msg.channel.send(`Copying PC to MAR...`)
        mar = pc
        await wait(2000)
        await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
        message.edit(`Copying PC to MAR... Done.`)
        let message2 = await msg.channel.send(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory...`)
        await wait(1600)
        message.delete()
        await wait(2000)
        message2.edit(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory... Done.`)
        let res = ram.find(r => r.address == mar)
        await wait(1600)
        message = await msg.channel.send(`New message from memory!\nContent: ${res.data}\nType: ${res.type}`)
        message2.delete()
        message2 = await msg.channel.send(`Copying message to MDR...`)
        await wait(2000)
        mdr = res.data
        message.delete()
        await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
        message2.edit(`Copying message to MDR... Done.`)
        if(res.type == 'instruction'){
            message = await msg.channel.send(`Instruction detected, copying MDR content to CIR...`)
            cir = mdr
            await wait(4000)
            await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
            message.delete()
        }
        await wait(2000)
        message2.delete()
        message2 = await msg.channel.send('Fetch done!')
        await wait(2000)
        message = await msg.channel.send(`Using the Control Unit to decode content...`)
        await wait(2000)
        message2.delete()
        message.edit(`Using the Control Unit to decode content... Done. Result: ${res.decoded}`)
        await wait(4000)
        message.delete()
        message = await msg.channel.send(`Increasing PC by 1...`)
        await wait(2000)
        message.edit(`Increasing PC by 1... Done.`)
        pc++
        await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
        await wait(2000)
        message.delete()
    }
    await fetchDecode()
    let message = await msg.channel.send(`Setting MAR to 5...`)
    mar = 5
    await wait(2000)
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message.edit(`Setting MAR to 5... Done.`)
    let message2 = await msg.channel.send(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory...`)
    await wait(1600)
    message.delete()
    await wait(2000)
    message2.edit(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory... Done.`)
    let res = ram.find(r => r.address == mar)
    await wait(1600)
    message = await msg.channel.send(`New message from memory!\nContent: ${res.data}\nType: ${res.type}`)
    message2.delete()
    message2 = await msg.channel.send(`Copying message to MDR...`)
    await wait(2000)
    mdr = res.data
    message.delete()
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message2.edit(`Copying message to MDR... Done.`)
    if(res.type == 'instruction'){
        message = await msg.channel.send(`Instruction detected, copying MDR content to CIR...`)
        cir = mdr
        await wait(4000)
        await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
        message.delete()
    }
    message2.delete()
    await wait(2000)
    message = await msg.channel.send(`Using the Control Unit to decode content...`)
    await wait(2000)
    message.edit(`Using the Control Unit to decode content... Done. Result: ${res.decoded}`)
    await wait(4000)
    message.delete()
    message = await msg.channel.send(`Setting ACC to ${res.data}...`)
    await wait(4000)
    acc = res.data
    message.edit(`Setting ACC to ${res.data}... Done.`)
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    await wait(2000)
    message2 = await msg.channel.send(`Execute done!`)
    await wait(2000)
    message.delete()
    message2.delete()
    await fetchDecode()
    message = await msg.channel.send(`Setting MAR to 6...`)
    mar = 6
    await wait(2000)
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message.edit(`Setting MAR to 6... Done.`)
    message2 = await msg.channel.send(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory...`)
    await wait(1600)
    message.delete()
    await wait(2000)
    message2.edit(`Sending MAR address to memory via the address bus, and sending read signal via control bus from Control Unit to memory... Done.`)
    res = ram.find(r => r.address == mar)
    await wait(1600)
    message = await msg.channel.send(`New message from memory!\nContent: ${res.data}\nType: ${res.type}`)
    message2.delete()
    message2 = await msg.channel.send(`Copying message to MDR...`)
    await wait(2000)
    mdr = res.data
    message.delete()
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message2.edit(`Copying message to MDR... Done.`)
    if(res.type == 'instruction'){
        message = await msg.channel.send(`Instruction detected, copying MDR content to CIR...`)
        cir = mdr
        await wait(4000)
        await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
        message.delete()
    }
    message2.delete()
    await wait(2000)
    message = await msg.channel.send(`Using the Control Unit to decode content...`)
    await wait(2000)
    message.edit(`Using the Control Unit to decode content... Done. Result: ${res.decoded}`)
    await wait(4000)
    message.delete()
    message = await msg.channel.send(`Adding ACC value to ${res.data}...`)
    await wait(4000)
    acc = acc + res.data
    message.edit(`Adding ACC value to ${res.data}... Done. Result: ${acc}`)
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    await wait(2000)
    message2 = await msg.channel.send(`Execute done!`)
    await wait(2000)
    message.delete()
    message2.delete()
    await fetchDecode()
    message = await msg.channel.send(`Setting MAR to 7 and setting MDR to ${acc}...`)
    mar = 7
    mdr = acc
    await wait(2000)
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message.edit(`Setting MAR to 7 and setting MDR to ${acc}... Done.`)
    message2 = await msg.channel.send(`Sending MAR address to memory via the address bus, sending write signal via control bus from Control Unit to memory and sending ${mdr} via data bus to memory...`)
    await wait(2000)
    message.delete()
    message2.edit(`Sending MAR address to memory via the address bus, sending write signal via control bus from Control Unit to memory and sending ${mdr} via data bus to memory... Done.`)
    res = ram.find(r => r.address == mar)
    res.data == acc
    await ramDisplay.edit(`Address 1: ${ram[0].data}\nAddress 2: ${ram[1].data}\nAddress 3: ${ram[2].data}\nAddress 4: ${ram[3].data}\nAddress 5: ${ram[4].data}\nAddress 6: ${ram[5].data}\nAddress 7: ${ram[6].data}`)
    await wait(2000)
    mdr = res.data
    message2.delete()
    await registers.edit(`PC: ${pc}\nMAR: ${mar}\nMDR: ${mdr}\nCIR: ${cir}\nACC: ${acc}`)
    message2 = await msg.channel.send(`Execute done!`)
    await wait(2000)
    message2.delete()
    return msg.channel.send('Thank you for watching my video regarding the Discord CPU bot I made. The code is available on https://github.com/jamieernest/CPUBot <:whatamidoingwithmylife:799551612586033153>')
  }
}