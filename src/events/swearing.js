const { PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {

        if (message.author.bot || !message.guild) return;
        if (!message.guild.members.me.permissionsIn(message.channel.id).has(PermissionFlagsBits.SendMessages)) return;
        if (!message.content.toLowerCase().includes("fuck" || "shit" || "bitch" || "ass" || "hell")) return;

        if (message.content.toLowerCase() === "fuck off i got this") {message.channel.send("Swearing doesnt make you cool")}
        if (message.content.toLowerCase() === "fuck off, i got this") {message.channel.send("Swearing doesnt make you cool")}

        const chance = Math.random() * 250;
        if (chance < 245) {
            return;
          } else {
            message.channel.send(`Swearing doesnt make you cool`);
          };
    },
};