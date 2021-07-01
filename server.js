const Discord = require("discord.js");
const bot = new Discord.Client();
const snipes = new Discord.Collection();
const token = "YOUR_TOKEN_HERE";//input your token here

client.on("messageDelete", message => {
  snipes.set(message.channel.id, message)
})

client.on("message", message => {
  if (message.content === "-status") { //test online bot
    return message.channel.send("My Status is **Online!**");
  }
  
  if (message.content.startsWith("-snipe")) { //change prefix in here
    let snipe = snipes.get(message.channel.id)
    if (!snipe) return message.channel.send("No previously deleted chat!!")
    
    const snipeEmbed = new Discord.MessageEmbed()
    .setAuthor(`Message By ${snipe.author.tag}`, snipe.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(snipe)
    .setTimestamp()
    .setFooter("Command By SpaceID Developer")
    message.channel.send(snipeEmbed)
  }
});

client.login(token);
