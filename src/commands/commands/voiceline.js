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
            "Im so lonely...",
            "Let me break it down for you mark",
            "SEA SALT! I NEED YOU SEA SALT!",
            "Did you guys do this? That's not very nice." ,
            "I think... I miss my wife.",
            "I do love your mother but... she's more like a.. a pet to me.",
            "Good news! We can finally be bees. This isn't your world, but we can be bees. This is good news! You can be a bee. You'll live like a bee. A pet. \nA pet? \nA pet. Mark, this is good news! You'll live for 30 years. \nThis is insane!!",
            "Mark, look I made a steak. \nA STEAK!? \nYes.",
            "Mark. Look I made us pizza! \n...What? \nI made us pizza! This is good news. Have some pizza! \nDon't touch me! \nCalm down. \nI will not calm down!! This isn't steak!!!!",
            "Where's Mark, William."
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}` });
      },
}
