const { PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "messageCreate",
  async execute(message) {

    if (message.author.bot || !message.guild) return;

    const chance = Math.random() * 400;
    if (chance < 390) {
      return;
    } else {
      message.channel.send(`Are you sure?`).catch((err) => {return});
    };
  },
};