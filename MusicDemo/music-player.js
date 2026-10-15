
const audio = document.getElementById("audio-player");
const tracks = [...document.querySelectorAll(".track-row")];

const currentTitle = document.getElementById("current-title");
const currentStatus = document.getElementById("current-status");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const seekBar = document.getElementById("seek-bar");
const togglePlay = document.getElementById("toggle-play");

let currentIndex = -1;

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${String(secs).padStart(2, "0")}`;
}

function updatePlayButton(playing) {
    const icon = togglePlay.querySelector("i");

    icon.className = playing
        ? "fa-solid fa-pause"
        : "fa-solid fa-play";

    togglePlay.setAttribute(
        "aria-label",
        playing ? "Pause" : "Play"
    );

    tracks.forEach((track, index) => {
        const button = track.querySelector(".track-play");
        const isPlaying = playing && index === currentIndex;

        button.innerHTML = isPlaying
            ? '<i class="fa-solid fa-pause"></i>'
            : '<i class="fa-solid fa-play"></i>';

        button.setAttribute(
            "aria-label",
            `${isPlaying ? "Pause" : "Play"} ${track.querySelector("h2").textContent}`
        );
    });
}

async function playTrack(index) {
    if (index < 0 || index >= tracks.length) return;

    const track = tracks[index];
    const source = track.dataset.src;

    if (!source) return;

    if (currentIndex !== index || audio.src !== new URL(source, document.baseURI).href) {
        currentIndex = index;
        audio.src = source;

        currentTitle.textContent =
            track.querySelector("h2").textContent;

        currentStatus.textContent =
            track.querySelector("p").textContent;

        tracks.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });

        seekBar.value = 0;
        currentTime.textContent = "0:00";
        duration.textContent = "0:00";
    }

    try {
        await audio.play();
    } catch (error) {
        currentStatus.textContent =
            "Unable to play track. Check the audio file path.";
        console.error("Playback failed:", error);
    }
}

tracks.forEach((track, index) => {
    track.querySelector(".track-play").addEventListener("click", () => {
        if (currentIndex === index && !audio.paused) {
            audio.pause();
        } else {
            playTrack(index);
        }
    });
});

togglePlay.addEventListener("click", () => {
    if (currentIndex === -1) {
        playTrack(0);
    } else if (audio.paused) {
        audio.play().catch(error => {
            console.error("Playback failed:", error);
        });
    } else {
        audio.pause();
    }
});

document.getElementById("prev-track").addEventListener("click", () => {
    if (currentIndex === -1) {
        playTrack(0);
    } else {
        playTrack((currentIndex - 1 + tracks.length) % tracks.length);
    }
});

document.getElementById("next-track").addEventListener("click", () => {
    playTrack((currentIndex + 1) % tracks.length);
});

audio.addEventListener("play", () => updatePlayButton(true));
audio.addEventListener("pause", () => updatePlayButton(false));

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    currentTime.textContent = formatTime(audio.currentTime);

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
});

seekBar.addEventListener("input", () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime =
            (Number(seekBar.value) / 100) * audio.duration;
    }
});

audio.addEventListener("ended", () => {
    if (currentIndex < tracks.length - 1) {
        playTrack(currentIndex + 1);
    } else {
        updatePlayButton(false);
    }
});

audio.addEventListener("error", () => {
    currentStatus.textContent = "Unable to load audio file.";
    updatePlayButton(false);
});
