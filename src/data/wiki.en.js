// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows the app, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
// Site links point at /en/…; Help Center links point at /hc/en-us/.
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "esim": {
    title: "What an eSIM is",
    one: "An eSIM is a SIM card built into your phone. There's nothing to insert: you go online, download a profile, and it connects to mobile networks like a physical SIM does.",
    like: "Think of it as a SIM slot you can't see. When you buy a plan, the app puts a card in it, and when the plan's done you delete it and the slot is free for the next one.",
    here: [
      "What Saily sells is data on an eSIM. You buy a plan in the Saily app and the app installs the eSIM for you, with no QR code to scan and no activation code to type; you only fall back on those when the app can't install it. Installing needs an internet connection, but once it's on your phone it doesn't.",
      "Most new phones support eSIM, but many models sold in mainland China, Hong Kong, Macau, Taiwan and South Korea don't, so [check yours](https://support.saily.com/hc/en-us/articles/13318373425180-How-to-check-if-my-device-is-eSIM-compatible) first. On a dual-SIM phone your home SIM and the Saily eSIM can both stay on, so your home number can still take calls, though your home carrier may charge roaming for them.",
    ],
    myths: [
      "\"I can always reinstall an eSIM after deleting it.\" Not always. If the plan hasn't run out or expired, you can reinstall it on the same phone or another one, ==but in [some countries](https://support.saily.com/hc/en-us/articles/12838788763164#travel) you may not be able to download it again.== So delete it only once everything else has failed.",
      "\"With an eSIM, I have to take out my home SIM.\" You don't. A dual-SIM phone keeps both on. Just turn off data roaming for your home SIM so it doesn't run up roaming charges.",
    ],
  },
  "data-plan": {
    title: "Data plan",
    one: "A data plan is what you buy from Saily: data for one destination, valid for a set time. When it expires, any data you haven't used is gone.",
    like: "Like a prepaid card with the destination and the expiry date printed on it. Every bit you use comes off the balance, and after the date whatever's left can't be used.",
    here: [
      "You pick the destination first, either one country or a regional plan that bundles several, and then how much data. A standard plan gives you one total to use anytime before it expires, not a daily amount. An Unlimited plan gives you a high-speed allowance each day, and once that's used your speed drops to about 1 Mbps for the rest of the day. The official [guide to data plans](https://support.saily.com/hc/en-us/articles/31092295169948-How-Saily-data-plans-work-total-vs-daily-data-Unlimited-plans-and-speed-limits) has the details.",
      "When you're running low you can top up, or turn on Auto Top-Up. A hotspot for your laptop uses the same data, counted just like your phone's own.",
    ],
    myths: [
      "\"I should wait until I arrive to buy a plan.\" No need. Saily suggests buying and installing before you leave, and the plan only starts working once you're in the country it covers, with the Saily eSIM line and data roaming on.",
    ],
  },
};
