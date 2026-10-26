const albums = [
    {
        id: "game-soundtrack",              // unique, no spaces
        title: "Game Soundtrack",
        description: "The original soundtrack I produced for my student game project.",
        icon: "fa-gamepad",                 // any Font Awesome free solid icon
        cover: "",                          // optional image path, e.g. "../Images/Covers/game.jpg"
        bg: "linear-gradient(135deg, #0b3d91, #63ff78 60%, #b7ffb7)", // default background + cover fallback
        tracks: [
            {
                title: "Frog Force Main",
                subtitle: "Sample of game project's main theme",
                src: "../Music/Audio/Fantasy.mp3",
                icon: "fa-wave-square",
                bg: "linear-gradient(135deg, #0b3d91, #63ff78 60%, #b7ffb7)"
            },
            {
                title: "Frog Force Jungle",
                subtitle: "Game project jungle theme",
                src: "../Music/Audio/Fantasy_Jungle.wav",
                icon: "fa-sliders",
                bg: "linear-gradient(135deg, #0b3d91, #63ff78 60%, #b7ffb7)"
            },
            {
                title: "Frog Force Sky",
                subtitle: "Unreleased Sky theme for game project",
                src: "../Music/Audio/Fantasy_Sky.mp3",
                icon: "fa-sliders",
                bg: "linear-gradient(135deg, #0b3d91, #63ff78 60%, #b7ffb7)"
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
                title: "Mixed Signals",
                subtitle: "Unreleased preview of work with BluNo",
                src: "../Music/Audio/MixedSignalsSnippet(Clean).mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #f77f00, #d62828 60%, #6a040f)"
            },
            {
                title: "Let Go",
                subtitle: "Original Production",
                src: "../Music/Audio/LetGoSnippet(Clean).mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #f77f00, #d62828 60%, #6a040f)"
            }
        ]
    },
    {
        id: "instrumentals",
        title: "Intrumental Previews",
        description: "Previews of instrumental tracks produced by me",
        icon: "fa-microphone-lines",
        cover: "",
        bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)",
        tracks: [
            {
                title: "Hideki Bounce",
                subtitle: "Original Production",
                src: "../Music/Audio/HidekiBounce.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "Trust Issues",
                subtitle: "Original Production",
                src: "../Music/Audio/TrustIssues(Snippet).mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "DanceHall",
                subtitle: "Original Production",
                src: "../Music/Audio/DancehallPass.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "Ascend",
                subtitle: "Original Production",
                src: "../Music/Audio/Ascend.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "Concrete",
                subtitle: "Original Production",
                src: "../Music/Audio/Concrete.wav",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "Sliding",
                subtitle: "Original Production",
                src: "../Music/Audio/Sliding.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "WCC",
                subtitle: "Original Production",
                src: "../Music/Audio/WCC.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            },
            {
                title: "Samurai",
                subtitle: "Original Production",
                src: "../Music/Audio/SamuraiNS.mp3",
                icon: "fa-music",
                bg: "linear-gradient(135deg, #10002b, #5a189a 50%, #e0aaff)"
            }
            
        ]
    }
];