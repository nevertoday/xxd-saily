<div align="center">

# Saily for Beginners

[中文](./README.md) · **English** · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Get the most out of Saily: online the moment you land

Saily is a travel eSIM. Install it on your phone before you leave, turn on data when you land, and you're online. It can also give you a US phone number.<br>This guide follows Saily's official help center and turns it into three short lessons, so even a first-time eSIM user can follow along.

**[Start with lesson 1 →](https://saily.xiaoxiaodong.ai/en/start/1-check-phone/)**　·　**[Already using it? The full guide →](https://saily.xiaoxiaodong.ai/en/guide/0-what/)**

<sub>Unofficial · free · open source · 10 languages</sub>

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="Demo: the phone confirms it supports eSIM, a data plan gets installed, the plane lands, data roaming is switched on for Saily, the status bar switches to Saily with full signal, and a card says it's connected to the local network. The three steps light up on the left: check your phone supports eSIM, buy and install a plan before you go, turn on data roaming when you land">
</p>

## You've probably been here

The plane lands and your phone still has your home SIM. Either there's no data, or roaming is on and you're nervous about the bill. So you hunt for airport Wi-Fi or queue for a local SIM, then go looking for a pin and try not to lose your own card.

An eSIM puts that card inside the phone. Install Saily at home on Wi-Fi before you leave, without taking anything out. Your home number stays, and you should still be able to take calls on it (your carrier may charge roaming for them, so ask before you go). Once you land, your data goes through Saily.

<p align="center">
  <img src="assets/en/readme/two-lines.svg" width="100%" alt="One phone, two lines, each with its own job: your main number keeps calls and texts, with its data off so it doesn't run up roaming charges; the Saily eSIM has data on and carries your internet abroad, and you check usage in the Saily app.">
</p>

## Three lessons, one thing at a time

You don't need to know what an APN or roaming is first. Each lesson does one thing, and you leave with something new.

<p align="center">
  <img src="assets/en/readme/lessons.svg" width="100%" alt="The three beginner lessons: check your phone works with eSIM, so you know whether it can; get a data plan and install it before you go, so you have a plan installed; land and turn on data, so you're online when you land.">
</p>

1. **[Check your phone works with eSIM](https://saily.xiaoxiaodong.ai/en/start/1-check-phone/)**: one look in your phone's settings tells you. Many models sold in mainland China, Hong Kong, Macau, Taiwan and Korea don't support it, so check before you buy.
2. **[Get a data plan and install it before you go](https://saily.xiaoxiaodong.ai/en/start/2-data-plan/)**: install at home on Wi-Fi; the plan's days only start at your destination. Saily itself warns the app may be unreachable in some countries, so install ahead.
3. **[Land, turn on data, and you're online](https://saily.xiaoxiaodong.ai/en/start/3-land/)**: choose Saily for data, and turn on data roaming for the Saily line only.

## No eSIM on your phone? There's still a way

For phones without eSIM, Saily's official route is a physical eSIM.me card in your SIM slot, plus an installation QR code from Saily support. Users on X have also shared ways to use other physical cards. Saily's docs don't cover those, and the guide marks them clearly.

<p align="center">
  <img src="assets/en/readme/no-esim.svg" width="100%" alt="A phone without eSIM, Saily's official route: buy an eSIM.me card, put it in place of your SIM card, ask Saily support for the QR code, and the Saily plan works. BeeSIM and similar cards are community methods that Saily's help docs don't cover.">
</p>

Details in [step 6 of the guide](https://saily.xiaoxiaodong.ai/en/guide/6-no-esim/).

## Want a US phone number?

Saily also sells a US +1 number that can make calls and receive texts and verification codes. You verify your identity first; documents issued in China need both a passport and a national ID card. Saily is upfront that the number runs on a VoIP carrier network: most services send codes to it fine, but some banks, financial and payment apps don't accept it.

Just want a number for now, without a data plan? [Quick number](https://saily.xiaoxiaodong.ai/en/quick-number/) walks you through buying one on the Saily website, with annotated screenshots.

How to get it, keep it, and what to do when a code doesn't arrive: [step 5 of the guide](https://saily.xiaoxiaodong.ai/en/guide/5-phone-number/) and the [phone number how-tos](https://saily.xiaoxiaodong.ai/en/howto/).

## Already using it?

- **[The full guide](https://saily.xiaoxiaodong.ai/en/guide/0-what/)**: eight steps covering choosing a plan, installing, fixing things abroad, usage and top-ups, the US number, phones without eSIM, and extras like the ad blocker and shared plans.
- **[How-to](https://saily.xiaoxiaodong.ai/en/howto/)**: 14 specific jobs, from a multi-country trip, a hotspot, and using your home number alongside Saily, to changing phones, no signal, and refunds.
- **[Wiki](https://saily.xiaoxiaodong.ai/en/wiki/)** and **[FAQ](https://saily.xiaoxiaodong.ai/en/faq/)**: words like APN, ICCID and data roaming, and the questions people ask before a trip.

## Where this comes from

Every feature, price and step is checked against [Saily's official help center](https://support.saily.com/hc/en-us), linked on the page; where the Chinese and English help centers disagree, the English one wins and the page says so. Experiences shared on X are quoted only as what someone tried, with a link.

This guide doesn't carry promo codes or other people's referral codes; the one exception is the [Quick number](https://saily.xiaoxiaodong.ai/en/quick-number/) page, which shows the author's own referral code and says the author gets credit for it. It doesn't teach pricing tricks or ways around network restrictions, and doesn't present the US number as a way to pass as a US resident.

This is an unofficial guide with no connection to Saily or Nord Security, and it doesn't speak for them. Saily is a trademark of its owner. Features and prices change, so the official help center and the app are the reference.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4440
npm run build      # output in dist/
```

Writing rules, sources, and the script that syncs the official help center are in [docs/MAINTAINING.md](docs/MAINTAINING.md). The site shell comes from the [Grok Bot for Beginners guide](https://github.com/nevertoday/xxd-grokbot), with the Xiaoxiaodong UI Kit. The code and text are MIT licensed; see [LICENSE](LICENSE). `public/xxd/` is a build of the Xiaoxiaodong UI Kit and isn't covered by the MIT license; see `public/xxd/LICENSE`.
