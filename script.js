// Enhanced mock tweet data
const tweets = [
  {
    name: "Elon Musk",
    handle: "elonmusk",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg",
    time: "2h",
    text: "Starship flight test was incredible! Here's the moment of liftoff 🚀",
    video: "video/Starship.mp4",
    likes: "1.2M",
    retweets: "234K",
    replies: "45K",
    views: "12.5M",
  },
  {
    name: "Mr Beast",
    handle: "MrBeast",
    verified: true,
    avatar: "image/mr beast.png",
    time: "3h",
    text: "$100,000 Giveaway! Rules:\n1. Follow me\n2. Retweet this\n3. Reply with your dream\n\nWinner announced in 24 hours! 💰💰💰",
    images: [
      "https://www.freebieshark.com/wp-content/uploads/2026/01/CleanShot-2026-01-15-at-05.09.16@2x.png",
    ],
    likes: "2.3M",
    retweets: "892K",
    replies: "456K",
    views: "45M",
  },
  {
    name: "NASA",
    handle: "NASA",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg",
    time: "5h",
    text: "Webb telescope captures the most detailed image of the Pillars of Creation ever seen. Mind-blowing! 🌌✨",
    images: ["image/nasa image 1.png"],
    likes: "890K",
    retweets: "145K",
    replies: "23K",
    views: "8.9M",
  },
  {
    name: "Ninja",
    handle: "Ninja",
    verified: true,
    avatar: "image/ninja.png",
    time: "8h",
    text: "1HP clutch was INSANE! 🎮🔥\n\nFull highlights dropping tomorrow on YouTube!",
    video: "video/1HP clutch by Ninja..mp4",
    likes: "234K",
    retweets: "45K",
    replies: "12K",
    views: "3.4M",
  },
  {
    name: "OpenAI",
    handle: "OpenAI",
    verified: true,
    avatar: "image/OpenAi.png",
    time: "12h",
    text: "Introducing GPT-5: Our most capable and aligned model yet.\n\n• 10x faster reasoning\n• Multimodal understanding\n• Enhanced safety features\n\nComing Q2 2026.",
    images: ["https://static-web.maxai.photos/release-notes/gpt-5/gpt-5.webp"],
    likes: "1.8M",
    retweets: "456K",
    replies: "89K",
    views: "23M",
  },
  {
    name: "Cristiano Ronaldo",
    handle: "Cristiano",
    verified: true,
    avatar:
      "https://platform.thebusbybabe.sbnation.com/wp-content/uploads/sites/157/chorus/uploads/chorus_asset/file/10210137/916732508.jpg.jpg?quality=90&strip=all&crop=0%2C8.531875%2C100%2C44.45&w=2400",
    time: "1d",
    text: "What a match! Proud of the team 💪⚽ #CR7",
    images: [
      "https://c.ndtvimg.com/cristiano-ronaldo-reuters_625x300_1530764546324.jpg",
      "https://pbs.twimg.com/media/FYlGJ_WaAAE1-qi.jpg",
    ],
    likes: "3.2M",
    retweets: "234K",
    replies: "67K",
    views: "67M",
  },
  {
    name: "The Game Awards",
    handle: "thegameawards",
    verified: true,
    avatar: "image/the game awards.png",
    time: "1d",
    text: "BREAKING: Game of the Year nominees revealed! 🎮🏆\n\nVote now at thegameawards.com",
    video: "video/The Game Awards.mp4",
    likes: "567K",
    retweets: "123K",
    replies: "45K",
    views: "12M",
  },
  {
    name: "Tesla",
    handle: "Tesla",
    verified: true,
    avatar:
      "https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png",
    time: "2d",
    text: "Cybertruck deliveries begin next week! Here's a first look at the production line 🔺⚡",
    images: [
      "https://electrek.co/wp-content/uploads/sites/3/2023/05/Tesla-Cybertruck-hero-shareholder-meeting.jpg?quality=82&strip=all&w=1600",
    ],
    likes: "678K",
    retweets: "89K",
    replies: "34K",
    views: "15M",
  },
];

// Generate tweet HTML with enhanced features
function createTweetCard(tweet) {
  let mediaHTML = "";

  if (tweet.video) {
    mediaHTML = `
      <div class="tweet-video-container">
        <video class="tweet-media-video" controls>
          <source src="${tweet.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    `;
  } else if (tweet.images) {
    const imageCount = tweet.images.length;
    const gridClass =
      imageCount === 1
        ? "single"
        : imageCount === 2
          ? "double"
          : imageCount === 3
            ? "triple"
            : "quad";

    mediaHTML = `<div class="tweet-media-grid ${gridClass}">`;
    tweet.images.forEach((img, index) => {
      mediaHTML += `<img src="${img}" alt="Tweet image ${index + 1}" class="tweet-grid-image" />`;
    });
    mediaHTML += `</div>`;
  } else if (tweet.image) {
    mediaHTML = `<img src="${tweet.image}" alt="Tweet image" class="tweet-media-single" />`;
  }

  return `
    <div class="tweet-card">
      <img src="${tweet.avatar}" alt="${tweet.name}" class="tweet-avatar" />
      <div class="tweet-main">
        <div class="tweet-header">
          <span class="tweet-name">${tweet.name}</span>
          ${tweet.verified ? '<svg viewBox="0 0 22 22" class="verified-icon"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>' : ""}
          <span class="tweet-handle">@${tweet.handle}</span>
          <span class="tweet-dot">·</span>
          <span class="tweet-time">${tweet.time}</span>
        </div>
        <p class="tweet-text">${tweet.text}</p>
        ${mediaHTML}
        <div class="tweet-actions">
          <button class="tweet-action" data-action="reply">
            <svg viewBox="0 0 24 24"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
            <span>${tweet.replies}</span>
          </button>
          <button class="tweet-action retweet" data-action="retweet">
            <svg viewBox="0 0 24 24"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
            <span>${tweet.retweets}</span>
          </button>
          <button class="tweet-action like" data-action="like">
            <svg viewBox="0 0 24 24"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
            <span>${tweet.likes}</span>
          </button>
          <button class="tweet-action views" data-action="views">
            <svg viewBox="0 0 24 24"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
            <span>${tweet.views}</span>
          </button>
          <button class="tweet-action" data-action="share">
            <svg viewBox="0 0 24 24"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Handle interactive actions
function handleAction(event, type) {
  event.stopPropagation();
  const button = event.currentTarget;
  const span = button.querySelector("span");

  if (!span) return;

  button.classList.toggle("active");

  if (type === "like" || type === "retweet") {
    const isActive = button.classList.contains("active");

    if (isActive) {
      button.style.color =
        type === "like" ? "rgb(249, 24, 128)" : "rgb(0, 186, 124)";
      const svg = button.querySelector("svg");
      if (type === "like") {
        svg.innerHTML =
          '<g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g>';
      }
    } else {
      button.style.color = "";
      if (type === "like") {
        const svg = button.querySelector("svg");
        svg.innerHTML =
          '<g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g>';
      }
    }
  }
}

// Insert tweets into feed
const tweetFeed = document.getElementById("tweetFeed");
tweets.forEach((tweet) => {
  tweetFeed.innerHTML += createTweetCard(tweet);
});

// Add event listeners using event delegation
tweetFeed.addEventListener("click", function (event) {
  const button = event.target.closest(".tweet-action");
  if (!button) return;

  const action = button.dataset.action;
  if (action) {
    handleAction(event, action);
  }
});
