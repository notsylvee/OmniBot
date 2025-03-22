const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        const chance = Math.random() * 300;
        if (chance < 290) {
            return;
          } else {
            message.channel.send(`Are you sure?`);
          };
    },
};