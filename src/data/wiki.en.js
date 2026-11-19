// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same voice as the Chinese (docs/MAINTAINING.md): a friend who knows the app, explaining it plainly. `like` is a picture the reader recognizes,
// `here` is connected sentences, and each myth quotes what the reader might think, then answers it. At most one ==highlight== per entry.
// Site links point at /en/…; Help Center links point at /hc/en-us/. Don't link the en-us "What is an eSIM?" article (27276554064924): its body is in Czech.
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
  "装好和连上": "Installing and connecting",
  "套餐和流量": "Plans and data",
  "电话号码": "The phone number",
  "钱和附加功能": "Money and extras",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "esim": {
    title: "What an eSIM is",
    one: "An eSIM is a SIM card built into your phone. There's nothing to insert: you go online, download a profile, and it connects to mobile networks like a physical SIM does.",
    like: "Think of it as a SIM slot you can't see. Travelling used to mean queueing at the airport for a local SIM and poking your home SIM out with a pin. Now the app drops a card into that invisible slot while your home SIM stays where it is, and when the plan's done you delete it and the slot is free for the next trip.",
    here: [
      "What Saily sells is data on an eSIM. You buy a plan in the Saily app and the app installs the eSIM for you, with no QR code to scan and no activation code to type; you only fall back on [a QR code or manual entry](/en/wiki/install-code/) when the app can't do it. Installing needs a steady Wi-Fi connection and no phone call in progress, and once it's on your phone you don't need the Wi-Fi anymore. Saily's [install guide](https://support.saily.com/hc/en-us/articles/15751399206172) walks through it.",
      "A Saily eSIM lives on one phone at a time, so when you switch phones you delete it from the old one while it's online, then install it on the new one. One Saily account can hold several eSIMs, though, say one per trip. And remember that an eSIM on its own is an empty card: it needs a [data plan](/en/wiki/data-plan/) to get online, and calls and texts need the separate [Saily phone number](/en/wiki/phone-number/).",
    ],
    myths: [
      "\"I can always reinstall an eSIM after deleting it.\" It depends where you delete it. Deleting it in your phone's settings only takes it off that phone; your plans stay in your account and you can reinstall by logging in to the app with the same email. But ++don't use **Delete eSIM** inside the Saily app++: that removes the eSIM and its plans from your account for good, and cancels its phone number, Ultra subscription and Auto Top-Up too. And don't delete it at all while you're in [a country that restricts Saily](https://support.saily.com/hc/en-us/articles/12838788763164#travel), where you may not be able to download it again.",
      "\"Installing Saily gives me a number I can call from.\" It doesn't. The Saily eSIM is data only. Calls and texts come with the phone number add-on, and your data works fine without it.",
    ],
  },
  "physical-sim": {
    title: "Physical SIM and dual SIM",
    one: "A physical SIM is the little card in your phone's SIM slot, and it's usually where your home number lives. On a dual-SIM phone it can stay on alongside the Saily eSIM, each doing its own job.",
    like: "Picture landing in Bangkok: the courier back home can still ring you, while your taxi app and maps run on Saily data. Two SIMs share one phone. The home one takes calls and texts, the Saily one handles the internet, and you tell your phone which does what in its settings.",
    here: [
      "Whether both can stay on depends on the phone. Saily says your home number should be able to take calls as long as your phone can run a physical SIM and an eSIM at the same time (Dual SIM Dual Standby, or DSDS). How many eSIMs can be active at once varies by model, so check your phone's manual. The details are in [Can I receive calls on my primary number?](https://support.saily.com/hc/en-us/articles/16747226859164)",
      "With both on, the thing to watch is your home carrier's bill. Saily notes that your own carrier may charge roaming for calls on your home SIM abroad, so ask them before you go. For data, turn off [data roaming](/en/wiki/roaming/) or mobile data for your home SIM, and turn off **Allow Mobile Data Switching** on iPhone (Android has a similar automatic switching option), so your phone doesn't quietly fall back to your home SIM for data. If your phone isn't dual-SIM, you'll have to switch the home SIM off entirely and keep only the Saily eSIM. See [How to avoid roaming charges](https://support.saily.com/hc/en-us/articles/20793044376092).",
    ],
    myths: [
      "\"With an eSIM, I have to take out my home SIM.\" You don't. ==A dual-SIM phone keeps both on, and your home number still gets calls.== Saily's own money-saving tips do include removing the physical SIM before you travel, but then your home number can't get calls either, so it comes down to which you care about more.",
      "\"Saily doesn't charge for roaming, so my home SIM can keep data roaming on.\" Those are two different bills. Saily doesn't charge extra for roaming on the Saily line, but roaming on your home SIM is charged by your home carrier. Keep data roaming on for Saily and off for the home SIM.",
    ],
  },
  "esim-devices": {
    title: "Which phones work with eSIM",
    one: "Most newer phones and tablets support eSIM, but two things have to be true: the model supports it, and your carrier hasn't locked it.",
    like: "It's like a door you open with a key card. The door needs a card reader, which is your phone supporting eSIM, and the old landlord can't have set it to accept only their own cards, which is a carrier lock. If either one's missing, the card won't open the door.",
    here: [
      "Saily keeps a [list of compatible devices](https://saily.com/esim-supported-devices/) that changes as new models come out, and the same phone can differ depending on the country it was sold in. Saily calls out that many models sold in mainland China, Hong Kong, Macau, Taiwan and South Korea don't support eSIM ([Saily's note](https://support.saily.com/hc/en-us/articles/12838788763164#travel)). The Saily app also needs iOS 18 or Android 10 or later, and very few laptops, and even fewer routers, work with it ([Saily's note](https://support.saily.com/hc/en-us/articles/16927592788636)).",
      "The quickest check is a look in your settings. On iPhone open **Settings > Mobile Service** (or **Cellular**), and on Samsung open **Settings > Connections > SIM manager**. If you see **Add eSIM**, your phone supports eSIM and isn't locked. To check the carrier lock on its own, an iPhone shows it under **Settings > General > About > Carrier Lock**, where \"No SIM restrictions\" means it's unlocked. Xiaomi, Redmi and POCO phones need eSIM switched on first under **Settings > SIM cards & mobile networks > Manage eSIM**. See [How to check if my device is eSIM compatible](https://support.saily.com/hc/en-us/articles/13318373425180).",
    ],
    myths: [
      "\"Any new flagship phone works with eSIM.\" Not necessarily. The same phone can be sold in different versions in different places, and many models bought in mainland China, Hong Kong, Macau, Taiwan and South Korea don't support it. Check your settings before you buy a plan.",
      "\"A carrier lock doesn't matter, the eSIM will still work.\" Saily is clear on this: a carrier-locked phone can install the Saily eSIM but can't connect with it. ==Ask your carrier to unlock the phone first==, and then it'll install and connect.",
      "\"No eSIM support means no Saily.\" There's still a way: put a [removable eSIM card](/en/wiki/esim-card/) in the SIM slot.",
    ],
  },
  "esim-card": {
    title: "Removable eSIM card",
    one: "A physical card that can hold eSIMs. Put it in a phone that doesn't support eSIM, and that phone can still run Saily.",
    like: "Think of a blank USB stick. It plugs into the computer's ordinary port, and whatever files you want on it, you download. A removable eSIM card goes in your phone's ordinary SIM slot, and the Saily eSIM gets downloaded onto the card.",
    here: [
      "The route Saily gives is to buy a physical card from [eSIM.me](https://esim.me/) and use it instead of your regular SIM, which lets you download eSIM profiles onto it. Installing Saily works differently from a normal phone: ==you need to [contact Saily support](https://support.saily.com/hc/en-us/articles/17770364559516) for a QR code first==, then install with that. See [Can I use Saily if my device doesn't support eSIM?](https://support.saily.com/hc/en-us/articles/12822397552028)",
      "Since the card goes in instead of your regular SIM, a phone with a single slot means your home SIM comes out. Other cards like this exist too, such as BeeSIM and 9eSIM, and one user on X wrote up the whole process of putting a Saily number on a BeeSIM card in a China-market iPhone ([the post](https://x.com/AI_Jasonyu/status/2080877134319624492)). But Saily's Help Center only mentions eSIM.me and says nothing about other cards, so if you use one, you do so at your own risk.",
    ],
    myths: [
      "\"With a removable eSIM card, I just tap install in the app.\" Saily says you need to get a QR code from support first, so set it up before you leave rather than after you land.",
      "\"If someone online got their card working, mine will too.\" One person's report only shows it worked for them that time. Saily's Help Center doesn't cover these cards, so whether one installs, or stays reliable afterwards, isn't something Saily has said anything about.",
    ],
  },

  // ---------- Installing and connecting ----------
  "install-code": {
    title: "QR code and activation code",
    one: "Two fallbacks for when the Saily app can't install your eSIM: scan a QR code, or type the SM-DP+ address and activation code into your phone. Both install the same eSIM.",
    like: "Like the pickup code for a parcel locker. Scanning the QR code is holding your phone up to the locker, and the activation code is typing the same details in by hand, and either way the same door opens. Which is also why whoever has the code first gets the parcel.",
    here: [
      "Most of the time you won't need either. In the Saily app you tap **Set up eSIM**, choose **On this device**, and the app installs it for you. When the automatic install doesn't work, the app shows **View instructions**, which gives you the SM-DP+ address and activation code, and Saily support can send them too. To scan instead, log in to the same account on a second phone or a tablet, tap **Set up eSIM**, choose **On someone else's device**, and it shows a QR code for the phone you're installing on to scan.",
      "To enter the details by hand on iPhone, go to **Settings > Mobile Service > Add eSIM > Use QR Code > Enter Details Manually**. On Android the activation code usually starts with `LPA:1$`; type it exactly as the app shows it, without changing a character. One thing people miss: after a QR code or manual install on Android, you set data roaming and the APN yourself, because the app only does that when it installs the eSIM itself ([Saily's note](https://support.saily.com/hc/en-us/articles/12838788763164)). The full steps are in Saily's [install guide](https://support.saily.com/hc/en-us/articles/15751399206172).",
    ],
    myths: [
      "\"Sending a screenshot of the QR code is harmless.\" The QR code and the activation code are effectively the eSIM itself. Each eSIM installs on one device only, and once it's installed the code can't be used again, so ++only send it to the person you're actually giving it to++, never to a group chat or a public post. Saily's own [way to gift an eSIM](https://support.saily.com/hc/en-us/articles/31072966285724) is exactly that: buy it, send the QR code, and ask them to install it soon.",
      "\"An invalid-code message means the code is broken.\" More likely it's already installed. Saily says that if you see \"This code is no longer valid\" or \"already being used on another device\", check your phone's SIM settings for the eSIM first, because installing the same eSIM twice can cause errors.",
      "\"If the app fails once, I have to switch to the QR code.\" Not yet. Check whether the eSIM already appears in your settings, then get on good Wi-Fi and retry in the app, up to 3 times. If it still fails, then switch to the QR code or manual entry.",
    ],
  },
  "activation": {
    title: "Activation",
    one: "Installing the eSIM doesn't start your plan. The plan activates when you're in a country it covers, with the Saily line and data roaming on, and your phone connects to a local network.",
    like: "Like a boarding pass you print at home. It's been in your pocket for days, but your trip only starts when it's scanned at the gate. Installing the eSIM is putting the pass in your pocket, and connecting after you land is the scan.",
    here: [
      "That's why Saily suggests installing the eSIM at home over Wi-Fi before you leave, turning on [data roaming](/en/wiki/roaming/) for the Saily line, and then leaving it alone. Once you land, switch off your home SIM, or at least its data roaming, and turn off **Allow Mobile Data Switching**, so your phone only uses Saily. See [How to activate my Saily eSIM](https://support.saily.com/hc/en-us/articles/15751572038300).",
      "There's no rush to install after you buy. You have 180 days from purchase to install and activate, and if you haven't activated by then, the plan activates on its own ([Saily data plan management](https://support.saily.com/hc/en-us/articles/21484628749084); the Chinese version of that article still says 30 days, and the English original is the one to go by). Once it's active the validity period runs and can't be paused, and when it ends, any data you haven't used goes with it.",
    ],
    myths: [
      "\"The validity period starts the day I install.\" It doesn't. Installing just gets you ready; the clock starts when you're in a covered country and connected, so installing a few days early is fine.",
      "\"Once it's active, I can pause it on days I don't need it.\" No, ==Saily says the service can't be paused once it's active==. If you pop home for a few days mid-trip, the validity period keeps running.",
      "\"If it didn't activate when I landed, the plan is broken.\" Check a few things first: is the Saily line on, is data roaming on, and does your plan's country match where you are? On Android, also look for the Saily [APN](/en/wiki/apn/), and if it's missing, keep the Saily app open for up to 5 minutes so it can set it up. On iPhone, if the APN is missing or it won't connect, Saily says to contact support. See [How to check if my Saily eSIM is activated](https://support.saily.com/hc/en-us/articles/12823108536476).",
    ],
  },
  "roaming": {
    title: "Data roaming",
    one: "Data roaming is the switch in your phone's settings that lets it use mobile data abroad. The Saily eSIM needs it on, and your home SIM needs it off.",
    like: "Like the minibar in a hotel room. The Saily SIM's minibar is included in the room rate, so help yourself. Your home SIM's minibar charges for every bottle, and you only find out how much when the bill arrives back home. So one stays open and the other gets locked.",
    here: [
      "Abroad, the Saily eSIM connects through local partner networks, which your phone counts as roaming, so data roaming has to be on for the Saily line, and Saily doesn't charge extra for it ([Saily's note](https://support.saily.com/hc/en-us/articles/12838788763164)). On iPhone, go to **Settings > Mobile Service**, tap the Saily line and turn on **Data Roaming**; on Samsung it's under **Settings > Connections > Mobile networks**; on a Pixel, go to **Settings > Network & internet > SIMs**, tap Saily and turn on **Roaming**. See [How to enable Data Roaming](https://support.saily.com/hc/en-us/articles/15750378798236).",
      "Your home SIM is the other way round. To avoid roaming charges from your home carrier, Saily suggests a few things: keep airplane mode on until you're ready to use Saily, turn off data roaming or mobile data for your home SIM, or switch that line off altogether, and turn off automatic mobile data switching. When the app installs the eSIM itself on Android, it turns data roaming on for you; after a QR code or manual install you turn it on yourself. See [How to avoid roaming charges](https://support.saily.com/hc/en-us/articles/20793044376092).",
    ],
    myths: [
      "\"Turning on data roaming means roaming charges.\" It depends which SIM. Having it on for Saily costs nothing extra, and ==it's your home SIM's data roaming that you turn off==.",
      "\"After a network reset, my Saily settings are still there.\" They aren't. Saily warns that resetting network settings puts Wi-Fi passwords, data roaming and the APN back to factory defaults, so afterwards turn data roaming back on for Saily and check the APN.",
    ],
  },
  "apn": {
    title: "APN",
    one: "The APN (Access Point Name) tells your phone which way in to use for mobile data. Most Saily eSIMs use `wbdata`, and when you have signal but no internet, this is often what's wrong.",
    like: "Like visiting a friend's apartment complex. Full signal bars mean you're at the front gate; the APN is the name of the door you're meant to use. Get the name wrong and you keep circling outside, right there but never getting in.",
    here: [
      "When the Saily app installs the eSIM itself on Android, it sets the APN for you. If you still have no data a few minutes later, keep the app open for up to 5 minutes so it can finish setting up the connection. If that doesn't do it, open your Saily eSIM's mobile network settings, tap **Access Point Names**, and see whether the selected one is `wbdata` (or `truphone.com` for 1GLOBAL eSIMs). If not, edit the Saily entry to the values in the table below; if you can't edit it, or you only see `mms.wbdata`, tap **+** or **Add** for a new one. Leave every other field empty, save, and select it. If your phone won't accept `dun`, enter only `default` as the APN type.",
      "iPhone is different: Saily says that if the APN is missing or you can't connect on iPhone, contact support, and they're also who sets up a manual APN for you. Not sure which kind of eSIM you have? Look at the eSIM's name in your settings, or the SM-DP+ address in the app. See Saily's [install guide](https://support.saily.com/hc/en-us/articles/15751399206172) and [troubleshooting guide](https://support.saily.com/hc/en-us/articles/12838788763164).",
    ],
    list: [
      ["Webbing", "Most Saily eSIMs, with the SM-DP+ address `wbg.prod.ondemandconnectivity.com`. Name and APN `wbdata`, APN type `default,ia,dun`"],
      ["1GLOBAL", "SM-DP+ address `rsp.truphone.com`. Name and APN `truphone.com`, APN type `default,dun`"],
    ],
    listTitle: "APNs for the two kinds of Saily eSIM", listHead: ["Your eSIM", "What to enter"],
    myths: [
      "\"Full bars means I'll have internet.\" Not necessarily. Saily says signal without internet usually comes down to one of three things: Saily isn't selected for mobile data, data roaming is off, or the APN isn't `wbdata`.",
      "\"That Saily APN V6 entry is useless, I'll delete it.\" ++Don't delete or rename it++; the Saily app just recreates it. All you need to do is add a `wbdata` entry or fix the existing one.",
      "\"A new APN needs every field filled in.\" It doesn't. Apart from the name, APN and APN type, leave everything empty, and if you can't select the new entry, check for typos or extra spaces.",
    ],
  },
  "iccid-eid": {
    title: "ICCID and EID",
    one: "Two long numbers in your phone. The ICCID identifies the SIM card, and eSIMs have one too; the EID identifies the eSIM chip inside the phone. You rarely need them, except when support is helping you sort out a problem.",
    like: "Like the numbers on a parcel delivery. The recipient's phone number is your phone number, and it stays the same when you move. The tracking number is the ICCID: one per parcel, so a new card means a new one. The EID is like the ID of the locker unit, the chip in your phone that holds the card.",
    here: [
      "The ICCID is a SIM card's unique serial number, usually 18 to 22 digits, and both physical SIMs and eSIMs have one. Carriers use it to activate a new SIM, move a number to another carrier, and troubleshoot connection problems. On iPhone, scroll down in **Settings > General > About**; on Samsung, go to **Settings > Connections > SIM manager** and tap the SIM. Some carriers hide it for security, and then you'd ask your carrier. See [What is ICCID number?](https://support.saily.com/hc/en-us/articles/24617942070556)",
      "The EID is the eSIM chip's own number, which carriers use to activate an eSIM and tie it to your device. With Saily, it mostly comes up when something goes wrong: Saily says to tell support your phone model, which country you're in and which steps you've tried, and to include a screenshot of your device's EID ([Saily's note](https://support.saily.com/hc/en-us/articles/12838788763164)).",
    ],
    list: [
      ["Phone number", "Your account, for calls and texts; you can usually keep it when you change SIMs"],
      ["ICCID", "This one SIM card (eSIMs have one too); a new card means a new ICCID"],
      ["IMEI", "The phone's hardware"],
      ["EID", "The eSIM chip inside the phone"],
    ],
    listTitle: "The numbers on your phone", listHead: ["Number", "What it identifies"],
    myths: [
      "\"The ICCID is my phone number.\" It isn't. Your phone number goes with your account and the ICCID goes with the card, so a new SIM gets a new ICCID while you usually keep your number.",
      "\"These numbers are fine to screenshot anywhere.\" Sending them to Saily support is fine, since that's what they need to troubleshoot, but don't post them anywhere else. In this site's own screenshots and illustrations, these numbers are always swapped for examples.",
    ],
  },

  // ---------- Plans and data ----------
  "data-plan": {
    title: "Data plan",
    one: "A data plan is what you buy from Saily: data for one destination, valid for a set time. When it expires, any data you haven't used is gone.",
    like: "Like a prepaid card with the destination and the expiry date printed on it. Every bit you use comes off the balance, and after the date whatever's left can't be used.",
    here: [
      "You pick the destination first. A country plan covers one place; a regional plan bundles several countries, but only the ones on its own list; a Global plan (Ultra) covers 121 destinations. Plans are listed by country, so to find a city, search for its country. And a plan only connects where it's meant to: a plan for Japan won't connect in South Korea. See [What countries and regions does Saily cover?](https://support.saily.com/hc/en-us/articles/31091827466140)",
      "Then you pick how the data comes. A standard plan gives you one total to use anytime before it expires, not a daily amount. An Unlimited plan gives you a high-speed allowance each day, and once that's used your speed drops to about 1 Mbps for the rest of the day, resetting once a day. A data plan is just data, with no calls or texts. The official [guide to data plans](https://support.saily.com/hc/en-us/articles/31092295169948) has the details.",
    ],
    list: [
      ["Country plan", "Covers one destination"],
      ["Regional plan", "One plan for several countries, only those on its list, so open the list before you buy"],
      ["Global plan (Ultra)", "Covers 121 destinations; how much high-speed data you get and how slow it drops afterward is in Saily's Ultra article and the app"],
      ["Unlimited plan", "No data cap, but a daily high-speed allowance; once it's used, about 1 Mbps for the rest of the day"],
    ],
    listTitle: "Kinds of plan", listHead: ["Plan", "In plain words"],
    myths: [
      "\"I should wait until I arrive to buy a plan.\" No need. Saily suggests buying and installing before you leave, and the plan only [activates](/en/wiki/activation/) once you're in the country it covers, with the Saily line and data roaming on.",
      "\"Unlimited means full speed all the time.\" It doesn't. ==Once the day's high-speed allowance is used, you're down to about 1 Mbps for the rest of the day.== To get full speed back before the reset, Saily's answer is to buy a regular plan for the same destination.",
      "\"My phone's data counter doesn't match the app, so Saily is overcounting.\" Saily says that's normal: your phone's counter may have been reset on a different date, it also counts other SIMs and Wi-Fi, and it may not show all background traffic. Saily counts all the data that went through its network while your plan was active.",
    ],
  },
  "top-up": {
    title: "Adding data and Auto Top-Up",
    one: "When you're running low there are three ways to get more: pick a new plan yourself (Add data), buy your current plan again (Top-up now), or have it renew itself when it runs out (Auto top-up).",
    like: "Like topping up a prepaid phone. When the balance runs low you can pick an amount yourself, repeat last time's top-up, or set it to top up automatically when it hits zero, so you don't get cut off halfway through your day.",
    here: [
      "The most direct is **Add data**: select the eSIM in the Saily app, tap **Add data**, choose the location and the data size, and pay. The location can be the next country on your trip, and as long as the eSIM is activated, the new plan activates by itself when you arrive there. See [What happens when I run out of data?](https://support.saily.com/hc/en-us/articles/12823150321052)",
      "Under your current plan there's also a **Top-up** button with two options. **Top-up now** is a one-off purchase of a plan like your current one, using the payment details from last time. **Auto top-up** renews your plan when the data runs out, either once or every time. While it's on, the **Top-up** button shows a green dot, and you get a push notification each time an auto top-up succeeds or fails; to stop it, tap **Cancel auto top-up**. See [What is Saily Auto Top-Up?](https://support.saily.com/hc/en-us/articles/20105542335132)",
    ],
    myths: [
      "\"Auto top-up will charge me the discounted price I paid before.\" It won't. ++If you paid for the original plan partly with credits or a discount code, auto top-up charges full price.++",
      "\"My Unlimited plan slowed down, so a top-up will fix it.\" Once an Unlimited plan slows, Saily's answer is to buy a regular (not Unlimited) plan for the same destination.",
      "\"Auto top-up follows me to a new Saily eSIM.\" It doesn't. Saily says that after [moving your plans to a new eSIM](https://support.saily.com/hc/en-us/articles/31797245183516) you have to turn Auto top-up on again, and deleting the eSIM in the app cancels Auto top-up too.",
    ],
  },
  "hotspot": {
    title: "Hotspot",
    one: "A hotspot lets a nearby laptop or tablet use your phone's connection. It comes out of your Saily eSIM's data, counted just like your phone's own use.",
    like: "Like giving a house guest your Wi-Fi password. Everyone gets online, but the bill is still in your name.",
    here: [
      "First make sure the Saily eSIM is on and working, then turn on the hotspot in your phone's settings. On iPhone, go to **Settings > Mobile Data > Personal Hotspot** and turn on **Allow Others to Join**; on Samsung, go to **Settings > Connections > Mobile Hotspot and Tethering** and turn on **Mobile Hotspot**. See [How to set up a hotspot](https://support.saily.com/hc/en-us/articles/12822169782812).",
      "Data shared through a hotspot comes out of your eSIM's balance, and Saily's fair use policy applies to it. The thing to keep straight is that a hotspot shares your connection: the eSIM stays on your phone, and the other devices lose the internet when they leave your side. If you want family members using data on their own phones, that's a [Family Plan](/en/wiki/family-plan/).",
    ],
    myths: [
      "\"A hotspot needs its own add-on or costs extra.\" Saily's instructions only have you turn it on in your phone's settings, and it uses the data in your plan.",
      "\"A hotspot for my family is the same as sharing my plan.\" It isn't. ==A hotspot shares a connection, not a plan==: everyone has to stay near your phone, and it all comes out of your one allowance.",
    ],
  },
  "family-plan": {
    title: "Family Plan",
    one: "Buy one plan and invite up to 4 more people to use it, 5 in all, each claiming it on their own phone.",
    like: "Like the big water jug a family takes on a trip, with everyone filling their own cup. It's all one jug, so every cup someone fills leaves less for the rest. On a newly bought Family Plan the data is handed out the same way, 256 MB a cup.",
    here: [
      "As the plan owner, tap the plan on the app's home screen or pick it in **My plans**, then add the other person's email to invite them. They get an email with a **Claim plan** button; tapping it opens the Saily app, and they log in and confirm. So they need the Saily app and their own Saily account, and sharing only works in the app. See [What is the Saily Family Plan?](https://support.saily.com/hc/en-us/articles/29753248333724)",
      "You can share any plan except Ultra and Unlimited plans, and sharing a 1 GB plan needs app version 3.63 or later. You can also only share a plan that hasn't been activated yet, meaning no one has installed it or started using it ([gifting an eSIM](https://support.saily.com/hc/en-us/articles/31072966285724)). Newly bought plans share data in 256 MB portions, while plans shared before that change still use 1 GB portions. A Family Plan lasts until the data is used up or the plan expires.",
    ],
    myths: [
      "\"A hotspot gets the whole family online.\" A hotspot needs everyone near you; with a Family Plan each person uses data on their own phone, even when you split up for the day.",
      "\"I can share a plan I'm halfway through.\" You can't. ==Only plans that haven't been activated can be shared==, so decide when you buy it.",
      "\"An Unlimited plan is the best one to share.\" The opposite: Unlimited and Ultra plans can't be shared at all.",
    ],
  },

  // ---------- The phone number ----------
  "phone-number": {
    title: "Saily phone number",
    one: "A +1 US number added to your Saily eSIM that makes and takes calls and sends texts. It's an optional add-on, and your data works without it.",
    like: "Like renting a mailbox in the US. You can collect your mail from any country, but whoever sends you a letter pays postage to the US. The number works the same way: someone calling you from a local phone may be charged by their carrier for an international call to the US.",
    here: [
      "Saily describes it as a real US-based wireless number that sits alongside your Saily data eSIM. Calls come in minute packages and work only in the countries and territories on Saily's list. A Global plan lets you call from any supported country, a local plan covers one country, and phone number plans cover local calls only, not international ones. ==Answering a call uses minutes too==, counted from when the other person picks up, and an unanswered call costs nothing. Before you get the number you go through [KYC verification](/en/wiki/kyc/), and until that's done the number isn't shown to you. See [What is a Saily phone number?](https://support.saily.com/hc/en-us/articles/27948598334620) and [minutes and billing](https://support.saily.com/hc/en-us/articles/27948683924380).",
      "Texts are plain text only. Non-Latin characters, such as Chinese, fit up to 70 characters per SMS and one message may use 2 to 3 credits from your package, and adding a picture, texting a group or adding a subject line makes your phone turn it into an MMS, which won't send. Letting the number go needs some care too: when the phone number plan ends, the number is held for 30 days, and buying the plan again on the same eSIM with **Get number** in that window keeps it; after 30 days it's released and can't be recovered. See [SMS and MMS](https://support.saily.com/hc/en-us/articles/27948666453404) and [How to cancel a subscription](https://support.saily.com/hc/en-us/articles/31089593239452).",
    ],
    list: [
      ["Make and take calls", "Yes, and answering uses minutes too; only in supported countries"],
      ["Plain-text SMS", "Yes, sending and receiving"],
      ["MMS", "No; a picture, a group text or a subject line all turn a text into MMS"],
      ["International calls", "No, phone number plans cover local calls only"],
      ["Call forwarding", "No, and no calls or texts to short numbers either"],
    ],
    listTitle: "What it can and can't do", listHead: ["What you want to do", "Can you?"],
    myths: [
      "\"I can use the number for calls in mainland China.\" Mainland China isn't on Saily's list of countries and territories that support calls (Hong Kong, Macau and Taiwan are). Whether calls work depends on where you are when you make or take the call. See [Which countries support calls?](https://support.saily.com/hc/en-us/articles/27948695958684)",
      "\"If I change my number and don't like the new one, I can switch back.\" You can't. You get one free number change in the app, and support can do one more after that. The new number can take up to 24 hours, and your current one keeps working until then, but once it's replaced you can't get it back.",
      "\"No texts arriving means the number's broken.\" Not necessarily. One user on X reports that their texts weren't arriving because another SIM in the phone was clashing with it, and once they briefly switched that SIM off, the waiting texts all came in ([the post](https://x.com/yedabinbinah/status/2114683684414685509)). That's one person's experience, and Saily's Help Center doesn't say this.",
    ],
  },
  "kyc": {
    title: "KYC verification",
    one: "KYC is the identity check before Saily switches on your phone number. Until it's done the number isn't shown to you and can't be used; data-only plans usually don't need it.",
    like: "Like showing your ID at a phone shop when you get a new SIM. You can pick the number first, but until they've checked who you are, it can't be switched on.",
    here: [
      "Saily explains that telecoms and anti-money-laundering laws, and the rules of numbering authorities and carriers, require it to confirm you're the rightful holder of your ID document before it turns on a number for two-way calls and texts. Until KYC is done, Saily won't tell you which number you've been given or switch it on. And because the law requires Saily to keep this data, some of your rights over KYC records, call records and similar data, such as deletion, may be limited. See [Documents Saily accepts for KYC](https://support.saily.com/hc/en-us/articles/29288111980060).",
      "What you send depends on where you live and which country issued your document. Some countries can use a one-tap digital ID or bank login, such as BankID in Sweden or CLEAR in the US. Everywhere else it's a physical document: a national ID card (both sides), a passport (the photo page) or a driver's license (both sides). It has to be valid, government-issued and the original, with no photocopies, screenshots or photos of a screen, and you may also be asked for a selfie or a short video. For the photo, Saily suggests a flat, dark surface, all four corners in the frame, no glare, and no fingers over the document.",
    ],
    list: [
      ["Both", "Issued in China or Morocco: a passport and a national ID card, since one on its own won't complete verification"],
      ["Passport only", "Issued in Brazil, India, Nigeria, Pakistan, the Philippines, Romania or South Africa"],
      ["Can't verify yet", "Issued in Belarus, Cuba, Iran, Iraq, Myanmar, North Korea, Russia, Syria or Venezuela; try a valid document from another country if you have one, or ask support about a refund"],
      ["Any one", "Issued anywhere else: a national ID card, passport or driver's license"],
    ],
    listTitle: "What to send, by the country that issued your document", listHead: ["What to send", "Which documents"],
    myths: [
      "\"My Chinese ID card is enough on its own.\" Saily's rule is that ==documents issued in China need both a passport and a national ID card==, and one on its own won't complete verification.",
      "\"The rules change when I'm abroad.\" They don't. What counts is the country that issued your document, not where you are or where you bought the plan.",
      "\"A residence permit or visa has my photo, so it should work.\" It won't. Saily doesn't accept residence permits, visas, provisional licenses or military IDs from any country.",
    ],
  },
  "otp": {
    title: "Verification codes (OTP and 2FA)",
    one: "Lots of apps text a code to your phone when you sign in or link an account. Saily numbers get most of them, but some banks, financial and payment services don't accept this kind of number.",
    like: "Like a building whose doorman only accepts resident cards, not visitor passes. He isn't checking whether you're really you, only which kind of card you're holding.",
    here: [
      "Saily says its numbers are real US numbers assigned through the North American Numbering Plan, and each one is yours alone for as long as your service stays active. But they come through a carrier that uses internet-based (VoIP) technology, so apps and websites that check number types may label yours \"VoIP\" rather than \"mobile\". That describes the carrier's network, not whether the number is genuine. Most services send codes without trouble, but some banks, financial and payment apps, and platforms with strict security policies don't accept VoIP numbers. That's their policy, and Saily can't change it. See [Can I use Saily phone number for OTP and 2FA?](https://support.saily.com/hc/en-us/articles/27948689277596)",
      "If a service turns your number down, Saily suggests checking whether it offers another way to verify, like an authenticator app, email or a passkey, which are often more secure than texts anyway; asking that service's support whether they can verify you another way; and emailing support@saily.com to say which service it was. Saily also lists services commonly reported as working, but it's clear that the list isn't complete, isn't guaranteed and can change at any time.",
    ],
    list: [
      ["OTP codes", "Signal, Viber, WhatsApp, Airbnb"],
      ["2FA", "Wise, PayPal, Venmo, Bunq, Gemini Crypto, eToro, Cash App, Chime, Robinhood, Webull, Klarna"],
      ["Calls only", "Revolut (SMS verification isn't confirmed to work)"],
    ],
    listTitle: "Services Saily lists as commonly reported working", listHead: ["Use", "Services"],
    myths: [
      "\"Being flagged as VoIP means it's a fake number.\" It doesn't. Saily says the label describes the carrier's network technology and has nothing to do with whether the number is genuine.",
      "\"If a service is on the list, codes will definitely arrive.\" Not necessarily. The list is just common reports, Saily doesn't guarantee it, and services can change their rules at any time.",
      "\"With this number, banks and payment apps will always accept it.\" Not necessarily. ==Whether a service accepts it for codes is the service's own call==, and Saily itself says some banks and payment apps don't accept these numbers at all. Check the service's own rules first.",
    ],
  },

  // ---------- Money and extras ----------
  "credits": {
    title: "Credits",
    one: "Credits are a balance in your Saily account that you can put toward a plan. They're valid for one year from when they're issued and can't be moved to another account.",
    like: "Like a store voucher: it only works in that one store, it has your name on it, and after the date it's worthless.",
    here: [
      "Tap **Credits** at the bottom of the app to see yours. The Help Center mentions two sources: when a friend joins Saily with your referral code, you get credit (on Android you claim it yourself with **Claim Your Reward**), and Ultra members get a share of their purchases back as credits. This site doesn't post referral codes, and the app shows the current amounts. See [the referral program](https://support.saily.com/hc/en-us/articles/14262137198236) and [Saily Ultra](https://support.saily.com/hc/en-us/articles/25455420492572).",
      "You can put credits toward a plan, but you can't move them to another account. To use them for family or friends, Saily's answer is to buy an eSIM with your credits and send them the QR code to install. One more thing: if you paid for a plan partly with credits, auto top-ups after that are charged at full price. See [payment methods](https://support.saily.com/hc/en-us/articles/31030534656924) and [gifting an eSIM](https://support.saily.com/hc/en-us/articles/31072966285724).",
    ],
    myths: [
      "\"I can transfer my credits to a friend.\" You can't. ==To use them for someone else, buy an eSIM with them and send the QR code.==",
      "\"Credits never expire.\" They do, one year after they're issued.",
      "\"The ClassPass credits that come with Ultra are Saily credits.\" They're a different thing. ClassPass credits expire monthly and are managed by ClassPass, and Saily doesn't control that balance ([ClassPass with Saily Ultra](https://support.saily.com/hc/en-us/articles/31763970183196)).",
    ],
  },
  "security-features": {
    title: "Web protection, Ad Blocker and virtual locations",
    one: "Three extras on the Saily app's home screen: Web protection blocks dangerous sites, Ad Blocker blocks ads, and a virtual location shows websites an IP address from another country.",
    like: "Like three things at a hotel: the security guard who stops suspicious people at the door, a do-not-disturb sign that keeps the salespeople away, and a parcel drop-off address, so senders only know where the drop-off is.",
    here: [
      "**Web protection** helps shield you from malware and phishing: tap it under **Security** on the app's home screen and switch it on, and it turns green on the home screen. **Ad Blocker** stops ads from loading, so it also saves a little data and pages load faster. It works at the DNS level, so ads served from the same domain as the website may still get through. See [Web protection](https://support.saily.com/hc/en-us/articles/17463257396508) and [Ad Blocker](https://support.saily.com/hc/en-us/articles/17464798496796).",
      "A **virtual location** routes your traffic through a remote server, so websites and apps see an IP address from that server's country. Tap the **Virtual location** tab on the app's home screen and pick a country to connect. It changes your IP address, not your phone's GPS location, and it doesn't make you anonymous: sites can still recognise you from things like your account. See [What are Saily virtual locations?](https://support.saily.com/hc/en-us/articles/17464251910428)",
    ],
    myths: [
      "\"With Ad Blocker on, I'll never see an ad.\" Saily says it blocks at the DNS level, so ads hosted on the same domain as the website still show up.",
      "\"With a virtual location on, nobody can tell who I am.\" Not so. ==It only changes your IP address==, and sites can still work out who and where you are from your GPS, your account and the like.",
      "\"Maps and websites think I'm in another country, so something's wrong with my phone.\" A virtual location is probably on. Saily says that's expected: check which country is selected in the app's **Virtual location** tab, and pick another or disconnect.",
    ],
  },
};
