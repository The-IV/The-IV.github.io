const albums = [
    {
        id: "game-soundtrack",              // unique, no spaces
        title: "Game Soundtrack",
        description: "The original soundtrack I produced for my student game project.",
        icon: "fa-gamepad",                 // any Font Awesome free solid icon
        cover: "",                          // optional image path, e.g. "../Images/Covers/game.jpg"
        bg: "linear-gradient(135deg, #3a0ca3, #7209b7 50%, #f72585)", // default background + cover fallback
        tracks: [
            {
                title: "Demo Track 1",
                subtitle: "Production Demo",
                src: "../Music/Audio/JSL.mp3",
                icon: "fa-wave-square",
                bg: "linear-gradient(135deg, #3a0ca3, #7209b7 50%, #f72585)"
            },
            {
                title: "Demo Track 2",
                subtitle: "Mixing Demo",
                src: "../Music/Audio/Comp 3.mp3",
                icon: "fa-sliders",
                bg: "linear-gradient(135deg, #0b3d91, #1b998b 60%, #9bf6ff)"
            }
        ]
    },
    {
        id: "producer-features",
        title: "Producer Features",
        description: "Quick snippets of work I've done with artists in the Houston area.",
        icon: "fa-microphone-lines",
        cover: "",
        bg: "linear-gradient(135deg, #f77f00, #d62828 60%, #6a040f)",
        tracks: [
            {
                title: "Demo Track 3",
                subtitle: "Genre Exploration",
                src: "../Music/Audio/Dancehall Pass.mp3",
                icon: "fa-compact-disc",
                bg: "linear-gradient(135deg, #f77f00, #d62828 60%, #6a040f)"
            },
            {
                title: "Demo Track 4",
                subtitle: "Original Production",
                src: "../Music/Audio/Ascend.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            }
        ]
    }
];