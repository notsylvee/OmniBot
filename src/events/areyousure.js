const { PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;

    const chance = Math.random() * 1000;
    if (chance < 990) {
      return;
    } else {
      message.channel.send(`Are you sure?`).catch((err) => {return});
    };
  },
};