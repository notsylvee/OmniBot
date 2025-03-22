module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random voiceline from Invincible",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "Are you sure?",
            "What you did was not nice! It's not nice to do that!",
            "Threw a trash bag\nare you sure\ninto space\nare you sure\nat work",
            "WHERES OMNI MAN",
            "YOURE NOT LISTENING",
            "WHY DID YOU MAKE ME DO THIS",
            "WHAT WILL YOU HAVE IN 500 YEARS",
            "I wouldnt even keep you as a slave in my empire",
            "Look what they need to mimic a fraction of our power",
            "THINK MARK THINK",
            "Im so lonely..."
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}`, ephemeral: false });
      },
}