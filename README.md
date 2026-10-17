# [EchoIt](https://mrsarthi.github.io/EchoIt-Messenger/) — download & user guide

**A local-first, end-to-end encrypted messenger. Messages go from your device to
your friend's, sealed so only they can read them, and no server holds your
history.** It is a free beta, for Windows and Android.

This repository hosts the download page and the release builds. The application
source lives separately.

---

## Download

Latest release: **[v0.7.1 — beta](https://github.com/mrsarthi/EchoIt-Messenger/releases/latest)**

| Platform | File |
| :--- | :--- |
| **Windows** | `EchoIt_0.7.1_x64-setup.exe` — or update from **Settings** in the app |
| **Android** | `EchoIt_0.7.1_aarch64.apk` — 64-bit ARM, which is nearly every phone made since about 2018 |

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
desktop app, hover over a message for **Reply** and **React**.

Long-press a message (right-click it on the desktop) to choose it: a bar takes
the place of the chat's header with **Reply**, **Forward**, **Copy**,
**Select all** and **Delete**. Delete removes messages from your device only —
your friend keeps their copy.

The app icon shows how many chats have something unread: on the Windows
taskbar, and on Android as a number or a dot, depending on the phone.

**When messages arrive:** messages arrive while EchoIt is in use on your phone;
otherwise the next time both phones are. A message waits on your device —
marked as not yet delivered — until then. Nothing is lost along the way.

### Files of any size

Photos, videos and documents go directly from your device to your friend's,
with no size limit. What to expect:

- **On a computer, a file is sent from where it is** — nothing is copied, so
  even a large video starts straight away. If you move, change or delete it
  before your friend has it, EchoIt tells you both, and you can send it again.
- **On a phone, a file is copied into EchoIt first**; the bar at the top shows
  how far along it is, and Cancel stops it. You need about the file's size
  free.
- **Your friend sees a preview straight away** — a blurred picture of a photo
  or video — and **downloads it by tapping it**. Keep EchoIt open on your
  device until they have it — your device is the only place it comes from.
- **Progress shows on the file itself.** Tap it to stop a download, and again
  to carry on from where it stopped.
- **If a download stalls** (your device went to sleep, say), it says so, pauses,
  and carries on from where it stopped when you are both back.
- **Once they have it, EchoIt lets go of the file on your device.** Your
  original file is untouched. If they never download it, EchoIt lets go after
  15 days.
- **Videos play straight away**, however large. Saving a video to your device
  moves it out of EchoIt rather than keeping it twice; pictures stay in the
  chat.
- **No sound?** Some videos carry their sound in a format EchoIt's player
  can't play (often films with 5.1 sound). EchoIt notices and offers **Open in
  another player** — VLC, PotPlayer, or whatever your device uses for videos.

### Blocking

Blocking is local to your device. A blocked peer's messages are discarded on
arrival, and they are never told. Blocking does not undo anything they sent you
before.

### Removing a contact

From a contact's **⋮** menu, or from their profile. They are removed from your
device only, and they are not told. You can also delete your chat with them —
from your device; theirs stays. To talk again, add them with their ticket.

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
- **Someone you removed may still see you as online** while you both have
  EchoIt open.
- **Update before mid-November 2026.** The connection helper that EchoIt 0.7.0
  and earlier rely on is switched off then; after that they cannot connect to
  anyone on a different network. 0.7.1 moves to a new helper by itself.

---

## About the connection

Phones move around and have no fixed address, so EchoIt uses a **connection
helper** to introduce your device to your friend's. Usually your messages then
go straight between the two devices. If they can't reach each other directly,
the helper passes them along still sealed — it cannot open them, and it stores
nothing.

Three services are involved, and this is everything they can see:

| Service | What it can see | Who runs it |
| :--- | :--- | :--- |
| **Connection helper** | Your device's ID, its internet address, when it is online, and how much passes through it | Number 0 — until mid-November 2026, a helper we run ourselves |
| **Address directory** | Your device's ID and which helper it uses, and your internet address when it publishes | Number 0 |
| **Update check** | Nothing about you — like any website, your internet address and roughly when the app was opened | GitHub (you can turn it off in Settings) |

None of them can read your messages. The [Privacy Policy](https://mrsarthi.github.io/EchoIt-Messenger/privacy.html)
has the details, including what each may keep.

---

## Terms and privacy

EchoIt asks you to agree to its terms the first time you open it. Both documents
are short and written in plain words:

- [Privacy Policy](https://mrsarthi.github.io/EchoIt-Messenger/privacy.html) — what stays on your device, what leaves it, and who can see it
- [Terms of Use](https://mrsarthi.github.io/EchoIt-Messenger/terms.html) — what you can expect from a free beta, and what you agree to

The MIT licence in this repository covers the website's own code only. The
EchoIt app is not open source.

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
