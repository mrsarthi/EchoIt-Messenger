# [EchoIt](https://mrsarthi.github.io/EchoIt-Messenger/) — download & user guide

**A local-first, end-to-end encrypted messenger. Messages go straight from your
device to your friend's, and no server holds your history.**

This repository hosts the download page and the release builds. The application
source lives separately.

---

## Download

Latest release: **[v0.6.3 — beta](https://github.com/mrsarthi/EchoIt-Messenger/releases/latest)**

| Platform | File |
| :--- | :--- |
| **Windows** | `EchoIt_0.6.3_x64-setup.exe` — or update from **Settings** in the app |
| **Android** | `EchoIt_0.6.3_aarch64.apk` — 64-bit ARM, which is nearly every phone made since about 2018 |

On Android you will need to allow installing from an unknown source. The build
is signed, so later updates install over the top and keep your messages.

---

## What is EchoIt?

A messenger for ordinary people who would rather their conversations were not
sitting on someone else's server. There is no account, no phone number and no
email: your identity is created on your device and backed by a twelve-word
recovery phrase that only you hold.

Messages travel directly between the two devices in a conversation, encrypted
end to end. **No server stores your message history.**

### Connecting with someone

Share your connection ticket from the Profile tab. When your friend adds it,
you get a request showing the name they chose — tap **Accept** and you are
connected. If you both add each other's tickets, that works too.

### Messages

Replies, reactions, read receipts and typing indicators, one-to-one. On the
desktop app, hover over a message for **Reply** and **React**, or right-click it.

**When messages arrive:** messages arrive while EchoIt is in use on your phone;
otherwise the next time both phones are. A message waits on your device —
marked as not yet delivered — until then. Nothing is lost along the way.

### Files of any size

Photos, videos and documents go directly from your device to your friend's,
with no size limit. What to expect:

- **Before a large file can be sent** it is prepared on your device; the bar at
  the top shows how far along it is, and Cancel stops it. You need about the
  file's size free.
- **Your friend downloads it by tapping it.** Keep EchoIt open on your device
  until they have it — your device is the only place it comes from.
- **If a download stalls** (your device went to sleep, say), it says so, pauses,
  and carries on from where it stopped when you are both back.
- **Once they have it, EchoIt deletes its copy on your device.** Your original
  file is untouched. If they never download it, EchoIt lets go after 15 days.
- **Videos play straight away**, however large. Saving a video to your device
  moves it out of EchoIt rather than keeping it twice; pictures stay in the
  chat.

### Blocking

Blocking is local to your device. A blocked peer's messages are discarded on
arrival, and they are never told. Blocking does not undo anything they sent you
before.

---

## What this build does not do yet

Stated plainly, because finding out later is worse:

- **Nothing arrives while a phone is locked or asleep.** Android stops EchoIt
  then; messages and files wait until both phones are in use.
- **What you write is encrypted on your device, but not who you talked to or
  when.** Keep a lock screen or password on.
- **One-to-one only** — no groups yet.
- **Sending files from a phone** has had less testing than from a computer. If
  something misbehaves, please say so.

---

## About the connection

> **"Phones move around and have no fixed address, so EchoIt uses a helper to
> introduce your device to your friend's. After that, your messages go straight
> from your phone to theirs. If the two phones can't reach each other directly,
> the helper passes the messages along still sealed — it cannot open them. The
> only other server EchoIt talks to is the one it asks whether there's a new
> version."**

A helper can tell that a device is online and roughly where it is connecting
from. It cannot read a word of what it carries, and it never holds anything.
Files travel the same way, still sealed.

The update check asks GitHub once a day whether a newer version is available.
That request carries nothing about you or your conversations, though GitHub can
see an IP address and roughly when the app was opened. You can turn it off in
Settings and check for new versions yourself.

---

## Your recovery phrase

Write down the twelve words. They are the only way to recover your identity on a
new device, and they restore **who you are, not your message history**. Nobody
holds a copy of either — not us, not anyone. If you lose both the device and the
phrase, that identity is gone.

---

## Reporting problems

Please include what you did, what you expected, and what happened. If a message
or file did not arrive, say whether **both apps were open at the time** — that
single detail is the most useful thing in a report.
