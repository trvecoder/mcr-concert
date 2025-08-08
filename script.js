let audio = null;
let isPlaying = false;
let isPaused = false;
let currentLine = 0;
let lyricsInterval;
let selectedTrack = null;
let isEnded = false;
typeLine(`happy birthday Leia. select a track to start :3`);

const lyricsMap = {
  "Helena": [
    { time: 0.39, text: "Long ago" },
    { time: 3.67, text: "Just like the hearse you die to get in again" },
    { time: 9.45, text: "We are so far from you" },
    { time: 15.54, text: "Burning on" },
    { time: 18.61, text: "Just like the match you strike to incinerate" },
    { time: 24.75, text: "The lives of everyone you know" },
    { time: 29.80, text: "And what's the worst you take (Worst you take)" },
    { time: 34.49, text: "From every heart you break (Heart you break)" },
    { time: 38.26, text: "And like the blade you stain (Blade you stain)" },
    { time: 42.08, text: "Well, I've been holding on tonight" },
    { time: 47.24, text: "What's the worst that I can say?" },
    { time: 51.18, text: "Things are better if I stay" },
    { time: 54.42, text: "So long and goodnight" },
    { time: 58.35, text: "So long and goodnight" },
    { time: 62.86, text: "Came a time" },
    { time: 66.21, text: "When every star fall" },
    { time: 68.75, text: "Brought you to tears again" },
    { time: 72.05, text: "We are the very hurt you sold" },
    { time: 77.53, text: "And what's the worst you take (Worst you take)" },
    { time: 81.89, text: "From every heart you break (Heart you break)" },
    { time: 85.64, text: "And like the blade you stain (Blade you stain)" },
    { time: 89.49, text: "Well, I've been holding on tonight" },
    { time: 94.82, text: "What's the worst that I can say?" },
    { time: 98.64, text: "Things are better if I stay" },
    { time: 102.18, text: "So long and goodnight" },
    { time: 106.05, text: "So long and goodnight" },
    { time: 110.13, text: "Well, if you carry on this way" },
    { time: 113.53, text: "Things are better if I stay" },
    { time: 117.48, text: "So long and goodnight" },
    { time: 121.25, text: "So long and goodnight" },
    { time: 128.05, text: "Can you hear me?" },
    { time: 135.87, text: "Are you near me?" },
    { time: 143.12, text: "Can we pretend to leave and then" },
    { time: 151.01, text: "We'll meet again" },
    { time: 154.41, text: "When both our cars collide" },
    { time: 159.65, text: "What's the worst that I can say?" },
    { time: 163.36, text: "Things are better if I stay" },
    { time: 166.72, text: "So long and goodnight" },
    { time: 170.52, text: "So long and goodnight" },
    { time: 174.83, text: "Well, if you carry on this way" },
    { time: 178.51, text: "Things are better if I stay" },
    { time: 181.97, text: "So long and goodnight" },
    { time: 185.82, text: "So long and goodnight" }
  ],
  "The Ghost of You": [
    { time: 17.78, text: "I never" },
    { time: 21.47, text: "Said I'd lie and wait forever" },
    { time: 27.99, text: "If I died" },
    { time: 30.31, text: "We'd be together" },
    { time: 34.70, text: "I can't always just forget her" },
    { time: 40.82, text: "But she could try" },
    { time: 44.79, text: "At the end of the world" },
    { time: 48.06, text: "Or the last thing I see" },
    { time: 50.22, text: "You are never coming home, never coming home" },
    { time: 53.73, text: "Could I? Should I?" },
    { time: 57.95, text: "And all the things that you never ever told me" },
    { time: 61.10, text: "And all the smiles that are ever, ever..." },
    { time: 64.21, text: "Ever get the feeling that you're never all alone?" },
    { time: 76.24, text: "And I remember now" },
    { time: 80.00, text: "At the top of my lungs in my arms she dies" },
    { time: 86.25, text: "She dies" },
    { time: 90.52, text: "At the end of the world" },
    { time: 93.97, text: "Or the last thing I see" },
    { time: 96.21, text: "You are never coming home, never coming home" },
    { time: 99.53, text: "Could I? Should I?" },
    { time: 103.72, text: "And all the things that you never ever told me" },
    { time: 107.03, text: "And all the smiles that are ever gonna haunt me" },
    { time: 110.01, text: "Never coming home, never coming home" },
    { time: 112.54, text: "Could I? Should I?" },
    { time: 116.98, text: "And all the wounds that are ever gonna scar me" },
    { time: 120.10, text: "For all the ghosts that are never gonna catch me" },
    { time: 125.78, text: "If I fall" },
    { time: 129.31, text: "..." },
    { time: 132.78, text: "If I fall" },
    { time: 135.35, text: "(Down)" },
    { time: 138.32, text: "..." },
    { time: 163.74, text: "At the end of the world" },
    { time: 166.89, text: "Or the last thing I see" },
    { time: 169.34, text: "You are never coming home, never coming home" },
    { time: 173.11, text: "Never coming home, never coming home" },
    { time: 176.69, text: "And all the things that you never ever told me" },
    { time: 179.95, text: "And all the smiles that are ever gonna haunt me" },
    { time: 183.02, text: "Never coming home, never coming home" },
    { time: 185.42, text: "Could I? Should I?" },
    { time: 189.84, text: "And all the wounds that are ever gonna scar me" },
    { time: 193.08, text: "For all the ghosts that are never gonna" }
  ],
  "I'm Not Okay (I Promise)": [
    { time: 26.40, text: "Well, if you wanted honesty" },
    { time: 29.02, text: "That's all you had to say" },
    { time: 32.03, text: "I never want to let you down" },
    { time: 34.48, text: "Or have you go, it's better off this way" },
    { time: 37.97, text: "For all the dirty looks" },
    { time: 39.95, text: "The photographs your boyfriend took" },
    { time: 42.69, text: "Remember when you broke your foot" },
    { time: 45.23, text: "From jumping out the second floor?" },
    { time: 48.07, text: "I'm not okay" },
    { time: 51.96, text: "I'm not okay" },
    { time: 56.95, text: "I'm not okay" },
    { time: 62.63, text: "You wear me out" },
    { time: 66.13, text: "..." },
    { time: 69.35, text: "What will it take to show you" },
    { time: 71.44, text: "That it's not the life it seems? (I'm not okay)" },
    { time: 74.60, text: "I've told you time and time again" },
    { time: 77.26, text: "You sing the words but don't know what it means (I'm not okay)" },
    { time: 80.77, text: "To be a joke and look" },
    { time: 82.71, text: "Another line without a hook" },
    { time: 85.28, text: "I held you close as we both shook" },
    { time: 87.85, text: "For the last time, take a good hard look" },
    { time: 90.81, text: "I'm not okay" },
    { time: 94.63, text: "I'm not okay" },
    { time: 99.81, text: "I'm not okay" },
    { time: 105.27, text: "You wear me out" },
    { time: 108.60, text: "..." },
    { time: 128.19, text: "Forget about the dirty looks" },
    { time: 130.79, text: "The photographs your boyfriend took" },
    { time: 133.40, text: "You said you read me like a book" },
    { time: 136.12, text: "But the pages all are torn and frayed" },
    { time: 138.83, text: "I'm okay, I'm okay, I'm okay now (I'm okay, now)" },
    { time: 153.58, text: "But you really need to listen to me" },
    { time: 155.65, text: "Because I'm telling you the truth" },
    { time: 157.44, text: "I mean this, I'm okay! (Trust me)" },
    { time: 160.20, text: "I'm not okay" },
    { time: 164.09, text: "I'm not okay" },
    { time: 166.52, text: "Well, I'm not okay, I'm not o-fucking-kay" },
    { time: 169.48, text: "I'm not okay" },
    { time: 172.43, text: "..." },
    { time: 174.65, text: "I'm not okay" },
    { time: 175.92, text: "..." }
  ],
     "This Is How I Disappear": [
        { time: 25.19, text: "Go!" },
        { time: 37.95, text: "To unexplain the unforgivable" },
        { time: 44.09, text: "Drain all the blood and give the kids a show" },
        { time: 49.87, text: "By streetlight, this dark night, a séance down below" },
        { time: 55.88, text: "There's things that I have done" },
        { time: 59.38, text: "You never should ever know" },
        { time: 64.70, text: "And without you is how I disappear" },
        { time: 70.53, text: "And live my life alone, forever now" },
        { time: 76.57, text: "And without you is how I disappear" },
        { time: 82.36, text: "And live my life alone, forever now" },
        { time: 88.06, text: "Who walks among the famous living dead" },
        { time: 94.01, text: "Drowns all the boys and girls inside your bed" },
        { time: 99.84, text: "And if you could talk to me, tell me if it's so" },
        { time: 105.52, text: "That all the good girls go to Heaven" },
        { time: 111.97, text: "Well, Heaven knows" },
        { time: 114.41, text: "That without you is how I disappear" },
        { time: 120.15, text: "And live my life alone, forever now" },
        { time: 126.18, text: "And without you is how I disappear" },
        { time: 132.13, text: "And live my life alone, forever now" },
        { time: 137.29, text: "Can you hear me cry out to you?" },
        { time: 142.75, text: "Words I thought I'd choke on, figure out" },
        { time: 149.86, text: "I'm really not so with you anymore, I'm just a ghost" },
        { time: 155.81, text: "So, I can't hurt you anymore" },
        { time: 158.58, text: "So, I can't hurt you anymore" },
        { time: 165.77, text: "And now" },
        { time: 168.39, text: "You wanna see how far down" },
        { time: 172.31, text: "I can sink" },
        { time: 175.20, text: "Let me go, fuck" },
        { time: 178.02, text: "So, you can" },
        { time: 183.49, text: "Well, now, so you can" },
        { time: 189.26, text: "I'm so far away from you" },
        { time: 194.92, text: "Well, now, so you can" },
        { time: 202.33, text: "And without you is how I disappear" },
        { time: 208.05, text: "And without you is how I disappear" },
        { time: 212.90, text: "(Whoa-oh, whoa-oh, whoa-oh, whoa-oh) and without you is how I disappear" },
        { time: 218.71, text: "(Whoa-oh, whoa-oh, whoa) and without you" },
        { time: 222.74, text: "Forever, forever now" }
      ],
  "Disenchanted": [
    { time: 20.76, text: "Well, I was there on the day" },
    { time: 23.69, text: "They sold the cause for the queen" },
    { time: 26.42, text: "And when the lights all went out" },
    { time: 29.28, text: "We watched our lives on the screen" },
    { time: 31.98, text: "I hate the ending myself" },
    { time: 34.96, text: "But it started with an alright scene" },
    { time: 43.03, text: "It was the roar of the crowd" },
    { time: 45.93, text: "That gave me heartache to sing" },
    { time: 48.44, text: "It was a lie when they smiled" },
    { time: 51.17, text: 'And said, "You won\'t feel a thing"' },
    { time: 53.95, text: "And as we ran from the cops" },
    { time: 57.49, text: "We laughed so hard it would sting" },
    { time: 66.68, text: "If I'm so wrong (so wrong, so wrong)" },
    { time: 71.23, text: "How can you listen all night long? (night long, night long)" },
    { time: 77.57, text: "Now, will it matter after I'm gone?" },
    { time: 81.71, text: "Because you never learned a goddamn thing" },
    { time: 87.27, text: "You're just a sad song with nothing to say" },
    { time: 92.78, text: "About a life-long wait for a hospital stay" },
    { time: 98.21, text: "And if you think that I'm wrong" },
    { time: 101.77, text: "This never meant nothing to you" },
    { time: 109.40, text: "I spent my high school career" },
    { time: 112.15, text: "Spit on and shoved to agree" },
    { time: 114.84, text: "So I could watch all my heroes sell a car on TV" },
    { time: 120.25, text: "Bring out the old guillotine" },
    { time: 123.67, text: "We'll show 'em what we all mean" },
    { time: 132.87, text: "If I'm so wrong (so wrong, so wrong)" },
    { time: 137.14, text: "How can you listen all night long? (night long, night long)" },
    { time: 143.87, text: "Now, will it matter long after I'm gone?" },
    { time: 148.07, text: "Because you never learned a goddamn thing" },
    { time: 153.49, text: "You're just a sad song with nothing to say" },
    { time: 158.94, text: "About a life-long wait for a hospital stay" },
    { time: 164.53, text: "And if you think that I'm wrong" },
    { time: 168.08, text: "This never meant nothing to you" },
    { time: 175.96, text: "So go, go away" },
    { time: 181.12, text: "Just go, run away" },
    { time: 186.07, text: "But where did you run to?" },
    { time: 188.72, text: "And where did you hide?" },
    { time: 190.96, text: "Go find another way" },
    { time: 195.00, text: "Price you pay" },
    { time: 219.97, text: "You're just a sad song with nothing to say" },
    { time: 225.33, text: "About a life-long wait for a hospital stay" },
    { time: 230.76, text: "And if you think that I'm wrong" },
    { time: 234.66, text: "This never meant nothing to you" },
    { time: 239.41, text: "Come on!" },
    { time: 241.79, text: "You're just a sad song with nothing to say" },
    { time: 247.23, text: "About a life-long wait for a hospital stay" },
    { time: 252.72, text: "And if you think that I'm wrong" },
    { time: 256.17, text: "This never meant nothing to you" },
    { time: 264.23, text: "At all, at all" },
    { time: 273.13, text: "At all, at all" }
  ],
   "The Sharpest Lives":[
    { time: 5.76, text: "Well, it rains and it pours when you're out on your own" },
    { time: 8.70, text: "If I crash on the couch, can I sleep in my clothes?" },
    { time: 11.99, text: "'Cause I've spent the night dancing, I'm drunk, I suppose" },
    { time: 15.05, text: "If it looks like I'm laughing, I'm really just asking to leave this alone" },
    { time: 19.68, text: "You're in time for the show" },
    { time: 21.19, text: "You're the one that I need, I'm the one that you loathe" },
    { time: 24.25, text: "You can watch me corrode like a beast in repose" },
    { time: 27.34, text: "'Cause I love all the poison, away with the boys in the band" },
    { time: 31.54, text: "I've really been on a bender and it shows" },
    { time: 36.84, text: "So why don't you blow me" },
    { time: 39.94, text: "A kiss before she goes?" },
    { time: 42.08, text: "Give me a shot to remember" },
    { time: 45.14, text: "And you can take all the pain away from me" },
    { time: 48.21, text: "Your kiss and I will surrender" },
    { time: 51.37, text: "The sharpest lives are the deadliest to lead" },
    { time: 54.42, text: "A light to burn all the empires" },
    { time: 57.42, text: "So bright, the sun is ashamed to rise and be" },
    { time: 60.54, text: "In love with all of these vampires" },
    { time: 63.66, text: "So you can leave, like the sane abandoned me" },
    { time: 70.77, text: "There's a place in the dark where the animals go" },
    { time: 73.89, text: "You can take off your skin in the cannibal glow" },
    { time: 77.08, text: "Juliet loves the beat and the lust it commands" },
    { time: 79.92, text: "Drop the dagger and lather the blood on your hands, Romeo" },
    { time: 83.92, text: "I've really been on a bender and it shows" },
    { time: 89.58, text: "So why don't you blow me" },
    { time: 92.48, text: "A kiss, before she goes?" },
    { time: 94.60, text: "Give me a shot to remember" },
    { time: 97.90, text: "And you can take all the pain away from me" },
    { time: 100.86, text: "Your kiss and I will surrender" },
    { time: 103.93, text: "The sharpest lives are the deadliest to lead" },
    { time: 107.06, text: "A light to burn all the empires" },
    { time: 110.12, text: "So bright, the sun is ashamed to rise and be" },
    { time: 113.35, text: "In love with all of these vampires" },
    { time: 116.25, text: "So you can leave like the sane abandoned me" },
    { time: 142.58, text: "Give me a shot to remember" },
    { time: 145.77, text: "And you can take all the pain away from me" },
    { time: 148.87, text: "Your kiss and I will surrender" },
    { time: 151.98, text: "The sharpest lives are the deadliest to lead" },
    { time: 155.06, text: "A light to burn all the empires" },
    { time: 158.13, text: "So bright, the sun is ashamed to rise and be" },
    { time: 161.21, text: "In love with all of these vampires" },
    { time: 164.35, text: "So you can leave like the sane abandoned me" }
  ],
  "To The End": [
      { time: 0.48, text: "He calls the mansion, not a house, but a tomb" },
      { time: 3.05, text: "He's always choking from the stench and the fume" },
      { time: 5.82, text: "The wedding party all collapsed in the room" },
      { time: 8.61, text: "So send my resignation to the bride and the groom" },
      { time: 11.02, text: "Let's go down!" },
      { time: 12.09, text: "This elevator only goes up to ten" },
      { time: 14.57, text: "He's not around, he's always looking at men" },
      { time: 17.45, text: "Down by the pool, he doesn't have many friends, as they are" },
      { time: 20.74, text: "Face down and bloated, snap a shot with the lens" },
      { time: 22.91, text: "If you marry me" },
      { time: 25.85, text: "Would you bury me?" },
      { time: 28.80, text: "Would you carry me to the end?" },
      { time: 35.28, text: "(So, say goodbye) to the vows you take" },
      { time: 38.16, text: "(And say goodbye) to the life you make" },
      { time: 41.08, text: "(And say goodbye) to the heart you break" },
      { time: 44.24, text: "And all the cyanide you drank" },
      { time: 49.98, text: "She keeps a picture of the body she lends" },
      { time: 52.92, text: "Got nasty blisters from the money she spends" },
      { time: 55.85, text: "She's got a life of her own and it shows by the Benz" },
      { time: 58.76, text: "She drives at 90 by the Barbie's and Ken's" },
      { time: 61.61, text: "If you ever say never, too late" },
      { time: 64.65, text: "I'll forget all the diamonds you ate" },
      { time: 67.65, text: "Lost in coma and covered in cake" },
      { time: 70.13, text: "Increase the medication" },
      { time: 71.28, text: "Share the vows at the wake (kiss the bride)" },
      { time: 73.64, text: "If you marry me" },
      { time: 76.19, text: "Would you bury me?" },
      { time: 78.92, text: "Would you carry me to the end?" },
      { time: 85.14, text: "(So, say goodbye) to the vows you take" },
      { time: 88.38, text: "(And say goodbye) to the life you make" },
      { time: 91.15, text: "(And say goodbye) to the heart you break" },
      { time: 94.23, text: "And all the cyanide you drank" },
      { time: 97.03, text: "(And say goodbye) to the last parade" },
      { time: 99.98, text: "(And walk away) from the choice you made" },
      { time: 102.75, text: "(And say goodnight) to the hearts you break" },
      { time: 106.45, text: "And all the cyanide you drank" },
      { time: 132.37, text: "(So, say goodbye) to the vows you take" },
      { time: 135.23, text: "(And say goodbye) to the life you make" },
      { time: 138.31, text: "(And say goodbye) to the heart you break" },
      { time: 141.21, text: "And all the cyanide you drank" },
      { time: 144.14, text: "(And say goodbye) to the last parade" },
      { time: 146.66, text: "(And walk away) from the choice you made" },
      { time: 150.12, text: "(And say goodnight) to the hearts you break" },
      { time: 153.42, text: "And all the cyanide you drank" },
      { time: 157.63, text: "To the last parade" },
      { time: 160.61, text: "As the parties fade" },
      { time: 163.67, text: "And the choice you made (to the end)" },
      { time: 166.70, text: "" }
    ]
}


function typeLine(text, speed = 55) {
  const box = document.getElementById("lyricsText");
  box.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      box.innerText += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

function startLyricSync() {
  clearInterval(lyricsInterval);
  lyricsInterval = setInterval(() => {
    if (
      currentLine < lyrics.length &&
      audio.currentTime >= lyrics[currentLine].time
    ) {
      typeLine(lyrics[currentLine].text);
      currentLine++;
    }

    if (currentLine >= lyrics.length) {
      clearInterval(lyricsInterval);
    }
  }, 200);
}



function updatePlayButtonIcon() {
  const btn = document.getElementById("playButton");
  if (btn) {
    if (isEnded) {
      btn.src = "assets/replay.png";
    } else {
      btn.src = isPlaying ? "assets/pause.png" : "assets/play.png";
    }
  }
}


function startConcert() {
  if (!selectedTrack) {
    btn.src = "assets/pause.png";
  };

  if (isPaused && audio) {
    audio.play();
    isPlaying = true;
    isPaused = false;
    startLyricSync();
    updatePlayButtonIcon();
    return;
  }

  if (isPlaying && audio) {
    audio.pause();
    clearInterval(lyricsInterval);
    isPlaying = false;
    isPaused = true;
    typeLine("");
    updatePlayButtonIcon();
    return;
  }
  if (isEnded) {
    isEnded = false;
    currentLine = 0;
    audio.currentTime = 0;
    typeLine("");
    updatePlayButtonIcon();
    setTimeout(() => {
      audio.play();
      typeLine("");
      startLyricSync();
    }, 1000);
  }
  


  // First-time play
  isPlaying = true;
  isPaused = false;
  currentLine = 0;
  audio = new Audio(`assets/${selectedTrack}.mp3`);
  updatePlayButtonIcon();

  // Show special intro message
  typeLine("");

  setTimeout(() => {
    audio.play().then(() => {
      typeLine(""); 
      startLyricSync();
    }).catch(err => {
      isPlaying = false;
      typeLine("");
      console.error(err);
    });

    audio.onended = () => {
      isPlaying = false;
      isPaused = false;
      isEnded = true; 
      clearInterval(lyricsInterval);
      typeLine("");
      updatePlayButtonIcon();
    };

  }, 2500);
}


function chooseTrack(trackName) {
  if (isPlaying || isPaused) {
    audio.pause();
    clearInterval(lyricsInterval);
    isPlaying = false;
    isPaused = false;
  }

  selectedTrack = trackName;

  // ✅ Load lyrics from lyricsMap
  lyrics = lyricsMap[trackName];
  currentLine = 0;

  if (!lyrics || lyrics.length === 0) {
    typeLine("❌ No lyrics found for this track.");
    return;
  }
  typeLine(`> Selected: ${trackName}`);
  startConcert();
}

