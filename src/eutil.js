const Discord = require('discord.js');
//Discord Colors...
const dcolors = {
    "normal": "```Hello ```\n**Source:**\n\\`\\`\\`Hello\\`\\`\\`",
    "css": "```css\nText is green\n#blue(one word)\n.blue(one word)\n{yellow: 'Yellow one word before colon. Cyan after colon, inside quotes' }\ngreen.blue\n[orange]```\n**Source:**\n\\`\\`\\`css\nText is green\n#blue(one word)\n.blue(one word)\n{yellow: 'Yellow one word before colon. Cyan after colon, inside quotes' }\ngreen.blue\n[orange]\\`\\`\\`",
    "fix": "```fix\nEverything is Yellow\n123!@#\n= cyan after equal sign```\n**Source:**\n\\`\\`\\`fix\nEverything is Yellow\n123!@#\n= cyan after equal sign\\`\\`\\`",
    "md": "```md\n[orange](cyan)\n[orange][cyan]\n# blue\n  * bullet point\n1. numbered list\n/* orange text*\n> grey text\n< yellow >\n< yellow\nmultiline >\n<blue>\n<blue yellow>\n<bash yellow=\"cyan\">\n# blue\nblue above dashes\n--------\nblue above equal signs\n=====\n123```\n**Source:**\n\\`\\`\\`md\n[orange](cyan)\n[orange][cyan]\n# blue\n  * bullet point\n1. numbered list\n/* orange text*\n> grey text\n< yellow >\n< yellow\nmultiline >\n<blue>\n<blue yellow>\n<bash yellow=\"cyan\">\n# blue\nblue above dashes\n--------\nblue above equal signs\n=====\n123\\`\\`\\`",
    "py": "```py\n@Orange text\n'cyan text'\n# grey text\n123!@#```\n**Source:**\n\\`\\`\\`py\n@Orange text\n'cyan text'\n# grey text\n123!@#\\`\\`\\`",
    "cs": "```cs\n#orange\n\"cyan text\"\n'cyan text'\n123!@#```\n**Source:**\n\\`\\`\\`cs\n#orange\n\"cyan text\"\n'cyan text'\n123!@#\\`\\`\\`",
    "diff": "```diff\n-Red\n+ Green\n--- grey\n*** grey\n!green```\n**Source:**\n\\`\\`\\`diff\n-Red\n+ Green\n--- grey\n*** grey\n!green\\`\\`\\`",
    "xl": "```XL\nAll grey\n123!@#\n'cyan text'```\n**Source:**\n\\`\\`\\`XL\nAll grey\n123!@#\n'cyan text'\\`\\`\\`",
    "tex": "```tex\n$ Hello```\n**Source:**\n\\`\\`\\`tex\n$ Hello\\`\\`\\`",
    "java": "```java\n\"Hello\"```\n**Source:**\n\\`\\`\\`java\n\"Hello\"\\`\\`\\`",
    "js": "```js\nconsole.log(\"Hello\")```\n**Source:**\n\\`\\`\\`js\nconsole.log(\"Hello\")\\`\\`\\`",
    "xml": "```xml\n<blue first then yellow = onegreenword after equals sign> ```\n**Source:**\n\\`\\`\\`xml\n<blue first then yellow = onegreenword after equals sign>\\`\\`\\`",
    "prolog": "```prolog\nYellow For Capitals\n\"cyan text\"\n'red'\ngrey for lowercase\n123```\n**Source:**\n\\`\\`\\`prolog\nYellow For Capitals\n\"cyan text\"\n'red'\ngrey for lowercase\n123\\`\\`\\`",
    "ml": "```ml\nYellow For Capitals\n\"cyan text\"\n'red'\ngrey for lowercase\n123```\n**Source:**\n\\`\\`\\`ml\nYellow For Capitals\n\"cyan text\"\n'red'\ngrey for lowercase\n123\\`\\`\\`",
    "json": "```json\n[{ \"yellow\": \"cyan\", }]```\n**Source:**\n\\`\\`\\`json\n[{ \"yellow\": \"cyan\", }]\\`\\`\\`",
    "ini": "```ini\n[blue inside brackets]\n; grey```\n**Source:**\n\\`\\`\\`ini\n[blue inside brackets]\n; grey\\`\\`\\`",
    "html": "```html\n<img src = \"./image/Boop.png\"/> ```\n**Source:**\n\\`\\`\\`html\n<img src = \"./image/Boop.png\"/> \\`\\`\\`",
    "glsl": "```glsl\n#Orange text\n123```\n**Source:**\n\\`\\`\\`glsl\n#Orange text\n123\\`\\`\\`",
    "cpp": "```cpp\n#orange < cyan >\n\"cyan\"\nint blue()```\n**Source:**\n\\`\\`\\`cpp\n#orange < cyan >\n\"cyan\"\nint blue()\\`\\`\\`",
    "coffee": "```coffeescript\nBlue = ->\n\"Cyan\"\nclass Yellow extends Yellow\n\"#{Orange}\"```\n**Source:**\n\\`\\`\\`coffeescript\nBlue = ->\n\"Cyan\"\nclass Yellow extends Yellow\n\"#{Orange}\"\\`\\`\\`",
    "bash": "```bash\n$Yellow\n\"Cyan\"\n#Grey\ntest echo exit red\nfalse true cyan\nif else then green\nthisIsBlue(){\n#!Bash```\n**Source:**\n\\`\\`\\`bash\n$Yellow\n\"Cyan\"\n#Grey\ntest echo exit red\nfalse true cyan\nif else then green\nthisIsBlue(){\n#!Bash\\`\\`\\`",
    "auto": "```autohotkey\nA_Red\n% Yellow %\n^ Orange::\n123```\n**Source:**\n\\`\\`\\`autohotkey\nA_Red\n% Yellow %\n^ Orange::\n123\\`\\`\\`",
    "asciidoc": "```asciidoc\n= Blue =\n[Orange]```\n**Source:**\n\\`\\`\\`asciidoc\n= Blue =\n[Orange]\\`\\`\\`"

},
      list1 = [
    "SUPERCHIEFYT's Discord [Click Here](https://discord.gg/hgsM86w)",
    "Lackacord: [Click Here](https://discord.gg/lackadaisy)",
    "Kappa [Click Here](https://discord.gg/6bhZqZx)",
    "AdmiralBahroo (Nitro) [Click Here](https://discord.gg/cBnqxyG)",
    "LoL Animated Emotes [Click Here](https://discord.gg/ZK8wxQG)",
    "Word Art Animated Emotes [Click Here](https://discord.gg/sAMRy5R)",
    "Skype Emoticons [Click Here](https://discord.gg/CRjxaGN)",
    "Parrot [Click Here](https://discord.gg/qTfQP6Y)",
    "Link Emojis 1 & 2 [Click Here](https://discord.gg/SUXymVk) [Click Here](https://discord.gg/ubCMzeh)",
    "Yahoo! Messenger Emoticons [Click Here](https://discord.gg/7hfQhZD)",
    "iOS Emojis [Click Here](https://discord.me/ios)",
    "Nitro Dragon 1-3 [Click Here](https://discord.gg/h2ySHh6) [Click Here](https://discord.gg/A36HAJk) [Click Here](https://discord.gg/W2kn7Gg)",
    "Nitro Turtle Emotes [Click Here](https://discord.gg/KPAbMYR)",
    "Feenix Gun Warehouse [Click Here](https://discord.gg/r9RWNfg)",
    "Bears Of The Polar Variety [Nitro] [Click Here](https://discord.gg/QS8CGp5)",
],
      list2 = [
    "OWL Emote Server [Click Here](https://discord.gg/JA2UfZz)",
    "Shinobu's Fanclub [Click Here](https://discord.gg/UdntTu)",
    "Kakegurui Emotes [Click Here](https://discord.gg/Ttk7ryS)",
    "The Super Mario Bros. Super Discord! [Click Here](https://discord.gg/nKn4bht)",
    "Kanna Land [Click Here](https://discord.gg/UksqYSJ)",
    "Nitro Marvel Emotes 1-3 [Click Here](https://discord.gg/wpFbuE9) [Click Here](https://discord.gg/cBbyQRs) [Click Here](https://discord.gg/qg3JxhR)",
    "Om Nom Emojis [Click Here](https://discord.gg/czkntHn)",
    "Kanna City [Click Here](https://discord.gg/SgtXteM)",
    "The Brass Knights [Click Here](https://discord.gg/P3PdnyP)",
    "Gilby's Orange Emoji Server [Click Here](https://discord.gg/uzzfURr)",
    "Club Penguin Emotes (Nitro) [Click Here](https://discord.gg/b3yXvTn)",
    "Spongemoji [Click Here](https://discord.gg/wTpEZSW)",
    "Pepo Emoji Server [Click Here](https://discord.gg/zSvH8MJ)",
    "NITRO [Click Here](https://discord.gg/wjfGmG3)",
    "Squid Girl Emotes [Click Here](https://discord.gg/aAJ7bRn)",
],
      list3 = [
    "Nitro Reach Blobs [Click Here](https://discord.gg/hhwZWNw)",
    "Nitro Pusheen Blobs [Click Here](https://discord.gg/ys8FKMj)",
    "Nitro Roo Blobs [Click Here](https://discord.gg/nBXNqzZ)",
    "Nitro Monkey Blobs [Click Here](https://discord.gg/pR2fUTs)",
    "Nitro Blob Bears [Click Here](https://discord.gg/4USaSzA)",
    "Nitro Blob Hub [Click Here](https://discord.gg/yATKMY8)",
    "Pig Blobs [Click Here](https://discord.gg/KaqCjhq)",
    "Tiger Blobs [Click Here](https://discord.gg/p7cybSH)",
    "Blobsciles 1-2 [Click Here](https://discord.gg/EtDfXgR) [Click Here](https://discord.gg/HPvRrue)",
    "Peanuts Blobs [Click Here](https://discord.gg/uGhYzGe)",
    "Badtz-Maru Blobs [Click Here](https://discord.gg/bPmpk3u)",
    "Pekkle Blobs [Click Here](https://discord.gg/YtKKyhz)",
    "Hello Kitty Blobs [Click Here](https://discord.gg/PNXMpj3)",
    "Dom's Mono Blobs [Click Here](https://discord.gg/RjcJhkT)",
    "Satania Emotes [Nitro] [Click Here](https://discord.gg/dJP2a6B)",
],
      list4 = [
    "Mafu & Sora Dungeon [Click Here](https://discord.gg/DcPqhVe)",
    "Block Emotes (NITRO) [Click Here](https://discord.gg/MupeCRX)",
    "menhera-chan emotes [Click Here](https://discord.gg/2JpaKFQ)",
    "Koroji [Click Here](https://discord.gg/KnXbnh7)",
    "Kingdom of derpy cats [Click Here](https://discord.gg/4katZY4)",
    "OK_HAND [Click Here](https://discord.gg/MAxArQe)",
    "Lost In Potato [Click Here](https://discord.gg/mpBT24E)",
    "Hamtaro & Bijou [Click Here](https://discord.gg/BxEcTQg)",
    "Google Hearts 🧡 [Click Here](https://discord.gg/fES8MnV)",
    "Futurama Emotes [Click Here](https://discord.gg/7uJHEcJ)",
    "Splatoon Blobs Collection [Click Here](https://discord.gg/KwekejQ)",
    "Pokemon Emotes [Click Here](https://discord.gg/G7zkRAv)",
    "SnooEmotes [Click Here](https://discord.gg/4nVjmxW)",
    "Pepo Nitro Only [Click Here](https://discord.gg/NEVk3gF)",
    "Neon Blob Collection [Click Here](https://discord.gg/syVKsvj)",
],
      list5 = [
    "birb [Click Here](https://discord.gg/gZqg8rW)",
    "Winnie The Pooh's Empire [Click Here](https://discord.gg/3eVzRMp)",
    "Ariana’s Nitro Lounge [Click Here](https://discord.gg/uCrq56T)",
    "Timo's aniblobs [Click Here](https://discord.gg/EumAgH9)",
    "Meowmoji [Click Here](https://discord.gg/jvzRCSD)",
    "Peepo-Nitro Only [Click Here](https://discord.gg/vDXnrc3)",
    "Anime 1 (Nitro) [Click Here](https://discord.gg/ru94Zf9)",
    "Hands [Click Here](https://discord.gg/tanuvWj)",
    "Nitro: Discord UI [Click Here](https://discord.gg/EK3nZhC)",
    "Cat emote server [Click Here](https://discord.gg/pdkaJaH)",
    "TurtleLuv-Emotes [Click Here](https://discord.gg/GxSKUXU)",
    "Gilby's Blue Emoji Server [Click Here](https://discord.gg/GmwG3Vz)",
    "Elias Emojis Squad [Click Here](https://discord.gg/mD5nwAc)",
    "Eyes [Click Here](https://discord.gg/VxmuJAH)",
],
      list6 = [
    "Party Parrot [Click Here](https://discord.gg/j2uKrjk)",
    "Pusheen [Click Here](https://discord.gg/JQXFYmv)",
    "Picard [Click Here](https://discord.gg/8arB6Av)",
    "Intense Cat Gif [Click Here](https://discord.gg/Jwcwzq6)",
    "Messenger Emoji [Click Here](https://discord.gg/rS8jkRY)",
    "Dancing Letters - Red [Click Here](https://discord.gg/tcCQpwU)",
    "Pepsimon [Click Here](https://discord.gg/fgCexSU)",
    "Test Emoji Server [Click Here](https://discord.gg/aphe2JS)",
    "Party Emotes [Click Here](https://discord.gg/y2aupZD)",
    "Blobs [Click Here](https://discord.gg/2aRyMR6)",
    "padoru [Click Here](https://discord.gg/BUVYhP3)",
    "Discord ASDAS [Click Here](http://discord.gg/nFYuBSG)",
    "B l u e 💙 [Click Here](https://discord.gg/ymXB3CW)",
    "emptixo's server (nitro emojis) [Click Here](https://discord.gg/JUcqmfP)",
    "Franxx Emote Server [Click Here](https://discord.gg/YUcJ6sy)",
],
      list7 = [
    "Dancing Letters - Rainbow [Click Here](https://discord.gg/eCmuz4Z)",
    "yookneecorn emotes [Click Here](https://discord.gg/kdDYVvG)",
    "Better Blob Cat 1 [Click Here](https://discord.gg/Ak36gX4)",
    "Better Blob Cat 2 [Click Here](https://discord.gg/9GVHcaV)",
    "Blob Emoji [Click Here](https://discord.gg/2GMVNzQ)",
    "Melancholy [Click Here](https://discord.gg/EXV2SKC)",
    "Blobs With Googly Eyes [Click Here](https://discord.gg/qfQr2Aj)",
    "Nitro Keycap Blobs [Click Here](https://discord.gg/EVafubh)",
],
      list8 = [
    "Discord Staff Blobs [Click Here](https://discord.gg/PQW85fX)",
    "Twitch Emotes 1-4 [Click Here](https://discord.gg/KNMMS2p) [Click Here](https://discord.gg/PDwFP4V) [Click Here](https://discord.gg/8745TRg) [Click Here](https://discord.gg/pf8wmvw)",
    "Twitch Turbo Emotes 1-2  [Click Here](https://discord.gg/4GGWawS) [Click Here](https://discord.gg/pK5Ta6v)",
    "Twitch Robot Emotes [Click Here](https://discord.gg/DA46d2j)",
    "Discord Emoji & Servers [Click Here](https://discord.gg/2qyyFZM)",
    "Neon Nitro Blobs 1-3 [Click Here](https://discord.gg/syVKsvj) [Click Here](https://discord.gg/mqeXUAX) [Click Here](https://discord.gg/z696gQN)",
    "Global Emoji Hunters [Click Here](https://discord.gg/GYBtYeg)",
],
      list9 = [
    `Slippy's Deam Worlds
    1. [Invite](https://discord.gg/sa5kSUy)
    2. [Invite](https://discord.gg/mKTjYw2)
    3. [Invite](https://discord.gg/5CgvPWa)
    4. [Invite](https://discord.gg/DGQw8RR)
    5. [Invite](https://discord.gg/cC5VD6d)
    6. [Invite](https://discord.gg/M9KXWQs)
    7. [Invite](https://discord.gg/5r23Ke9)
    8. [Invite](https://discord.gg/XDuqcJd)
    9. [Invite](https://discord.gg/Z2wzxUk)
    10. [Invite](https://discord.gg/TbhqAxv)
    11. [Invite](https://discord.gg/Da8vPVX)
    12. [Invite](https://discord.gg/SdmBPNB)
    13. [Invite](https://discord.gg/H5JXgSS)
    14. [Invite](https://discord.gg/KwgX2QG)
    15. [Invite](https://discord.gg/NKexPRD)
    `
],
      fortunes = [
    " There is a true and sincere friendship between you and your friends.",
    " You find beauty in ordinary things, do not lose this ability.",
    " Ideas are like children; there are none so wonderful as your own.",
    " It takes more than good memory to have good memories.",
    " A thrilling time is in your immediate future.",
    " Plan for many pleasures ahead.",
    " The joyfulness of a man prolongeth his days.",
    " Your everlasting patience will be rewarded sooner or later.",
    " Make two grins grow where there was only a grouch before.",
    " Something you lost will soon turn up.",
    " Your heart is pure, and your mind clear, and your soul devout.",
    " Excitement and intrigue follow you closely wherever you go!",
    " A pleasant surprise is in store for you.",
    " May life throw you a pleasant curve.",
    " As the purse is emptied the heart is filled.",
    " Be mischievous and you will not be lonesome.",
    " You have a deep appreciation of the arts and music.",
    " Your flair for the creative takes an important place in your life.",
    " Your artistic talents win the approval and applause of others.",
    " Pray for what you want, but work for the things you need.",
    " Your many hidden talents will become obvious to those around you.",
    " Don't forget, you are always on our minds.",
    " Don't forget, you are always on our minds.",
    " Your greatest fortune is the large number of friends you have.",
    " A firm friendship will prove the foundation on your success in life.",
    " Don't ask, don't say. Everything lies in silence.",
    " Look for new outlets for your own creative abilities.",
    " Be prepared to accept a wondrous opportunity in the days ahead!",
    " Fame, riches and romance are yours for the asking.",
    " Good luck is the result of good planning.",
    " Good things are being said about you.",
    " Smiling often can make you look and feel younger.",
    " Someone is speaking well of you.",
    " The time is right to make new friends.",
    " You will inherit some money or a small piece of land.",
    " Your life will be happy and peaceful.",
    " A friend is a present you give yourself.",
    " A member of your family will soon do something that will make you proud.",
    " A quiet evening with friends is the best tonic for a long day.",
    " A single kind word will keep one warm for years.",
    " Anger begins with folly, and ends with regret.",
    " Generosity and perfection are your everlasting goals.",
    " Happy news is on its way to you.",
    " He who laughs at himself never runs out of things to laugh at.",
    " If your desires are not extravagant they will be granted.",
    " Let there be magic in your smile and firmness in your handshake.",
    " If you want the rainbow, you must to put up with the rain. D. Parton",
    " Nature, time and patience are the three best physicians.",
    " Strong and bitter words indicate a weak cause.",
    " The beginning of wisdom is to desire it.",
    " You will have a very pleasant experience.",
    " You will inherit some money or a small piece of land.",
    " You will live a long, happy life.",
    " You will spend old age in comfort and material wealth.",
    " You will step on the soil of many countries.",
    " You will take a chance in something in the near future.",
    " You will witness a special ceremony.",
    " Your everlasting patience will be rewarded sooner or later.",
    " Your great attention to detail is both a blessing and a curse.",
    " Your heart is a place to draw true happiness.",
    " Your ability to juggle many tasks will take you far.",
    " A friend asks only for your time, not your money.",
    " You will be invited to an exciting event."
],
      emojis = {
    "sreact": "476629550797684736",
    "nreact": "482868924573155349",
    "rload": "426956230582599690",
    "rplan": "558433500420898846",
    "semoji": "<a:success:476629550797684736>",
    "eplan": "<:Planned:558433500420898846>",
    "nemoji": "<a:XX:482868924573155349>",
    "eload": "<a:Dots:426956230582599690>",
    "robot": "<:Robot:520773153753137162>",
    "human": "<:humanno:521558500351148052>",
    "eminus": "<:minus:552471429199953921>",
    "rminus": "552471429199953921",
    "eplus": "<:plus:552471361960804362>",
    "rplus": "552471361960804362"
},
      status = {
    "online": "<a:online:506430888670920704>",
    "idle": "<a:Idle:506430934359343104>",
    "dnd": "<a:dnd:506430977065877505>",
    "offline": "<a:offline:506431026604539904>"
},
      colors = {
    "red": "#FF0000",
    "green": "#FF000",
    "yellow": "#FAFF00",
    "orange": "#FF8300",
    "cyan": "#00ffe9",
    "default": "#36393E"
},
      verifLevels = [
    "None",
    "Low: must have verified email on account",
    "Medium: must be registered on Discord for longer than 5 minutes",
    "High: (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes",
    "Very High: ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"
    ],
      region = {
    "brazil": "Brazil",
    "eu-central": "Central Europe",
    "singapore": "Singapore",
    "us-central": "U.S. Central",
    "sydney": "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    "russia": "Russia",
    "frankfurt": "Germany",
    "japan": "Japan",
    "india": "India",
    "london": "London",
    "amsterdam": "Amsterdam",
    "hongkong": "Hong Kong"
},
      throws = [
"Car", "Bus", "Elara", "Plane",
"Poop", "Heart", "Hearts", "Love",
"Hate", "Developer", "Scams",
"Train", "Trains", "Yourself",
"Cat", "Cats", "Dog", "Dogs",
"Groovy", "Chicken", "A Building",
"Tea", "Lemons", "Lemon", "Coins",
"Money", "Coffee", "Chips", "Crisps",
"Cake", "Pringles", "Black Hole", "Chair",
"House", "iPhone", "Banana", "Meme", "Memes",
"Staff", "Truck", "SpongeBob", "Gummy Bears",
"Toys", "kitten", "kittens", "puppy", "puppies",
"o.o", "Speakers", "Amp", "Microphone", "Piano",
"Drum", "Drum Kit", "Drum Sticks","Fruit",
"Tennis Ball", "Rugby Ball", "Tennis Racket",
"Guitar","Hockey Stick","Car tire","Horse Shoe",
"Cricket Bat","Music","Flower","Cricket Ball",
"Soccer Ball","Football","Insults","Paper Plane",
"Eggs","Grass","Stones","Dirt","Flower Pot","Sprouts",
"Music","Bulb","Coat Hanger","Desk","Computer","Laptop",
"Cabbage","Bucket","Ball","Fan","Fork","Spoon","Cow","Horse",
"Mug","Chicken","Plate","Tree","Pig","Glass"
],
      jobs = [
    `You worked at Mcdonalds`, `You worked at the local shop`, `You worked at Amazon`, `You worked at Target`,
    `You worked at Walmart`, `You worked at Subway`, `You worked as a pilot`, `You worked as a FireFighter`, `You worked as a Police Officer`,
    `You worked as a Doctor`, `You worked at Discord`, `You worked at the local coffee shop`, `You worked at the local pizza resturant`,
    `You worked as a Time Traveler`
  ],
  perms = {
    "ADMINISTRATOR": "Administrator",
    "VIEW_AUDIT_LOG": "View Audit Logs",
    "MANAGE_GUILD": "Manage Server",
    "MANAGE_CHANNELS": "Manage Channels",
    "MANAGE_ROLES": "Manage Roles",
    "BAN_MEMBERS": "Ban Members",
    "KICK_MEMBERS": "Kick Members",
    "MANAGE_NICKNAMES": "Manage Nicknames",
    "MANAGE_WEBHOOKS": "Manage Webhooks",
    "MANAGE_EMOJIS": "Manage Emojis",
    "CREATE_INSTANT_INVITE": "Create Instant Invite",
    "CHANGE_NICKNAME": "Change Nickname",
    "READ_MESSAGES": "Read Messages",
    "SEND_MESSAGES": "Send Messages",
    "SEND_TTS_MESSAGES": "Send TTS Messages",
    "MANAGE_MESSAGES": "Manage Messages",
    "EMBED_LINKS": "Embed Links",
    "ATTACH_FILES": "Attach Files",
    "READ_MESSAGE_HISTORY": "Read Message History",
    "MENTION_EVERYONE": "Mention Everyone",
    "ADD_REACTIONS": "Add Reactions",
    "USE_EXTERNAL_EMOJIS": "Use External Emojis",
    "EXTERNAL_EMOJIS": "External Emojis",
    
    // Voice Chat Permissions
    "MANAGE_ROLES_OR_PERMISSIONS": "Manage Permissions",
    "VIEW_CHANNEL": "View Channel",
    "CONNECT": "Connect",
    "SPEAK": "Speak",
    "MUTE_MEMBERS": "Mute Members",
    "DEAFEN_MEMBERS": "Deafen Members",
    "MOVE_MEMBERS": "Move Members",
    "USE_VAD": "Use Voice Activity",
    "PRIORITY_SPEAKER": "Priority Speaker",
    "STREAM": "Stream"
    },
    permbits = {
    CREATE_INSTANT_INVITE: 1,
    KICK_MEMBERS: 2,
    BAN_MEMBERS: 4,
    ADMINISTRATOR: 8,
    MANAGE_CHANNELS: 16,
    MANAGE_GUILD: 32,
    ADD_REACTIONS: 64,
    VIEW_AUDIT_LOG: 128,
    PRIORITY_SPEAKER: 256,
    VIEW_CHANNEL: 1024,
    READ_MESSAGES: 1024,
    SEND_MESSAGES: 2048,
    SEND_TTS_MESSAGES: 4096,
    MANAGE_MESSAGES: 8192,
    EMBED_LINKS: 16384,
    ATTACH_FILES: 32768,
    READ_MESSAGE_HISTORY: 65536,
    MENTION_EVERYONE: 131072,
    EXTERNAL_EMOJIS: 262144,
    USE_EXTERNAL_EMOJIS: 262144,
    CONNECT: 1048576,
    SPEAK: 2097152,
    MUTE_MEMBERS: 4194304,
    DEAFEN_MEMBERS: 8388608,
    MOVE_MEMBERS: 16777216,
    USE_VAD: 33554432,
    CHANGE_NICKNAME: 67108864,
    MANAGE_NICKNAMES: 134217728,
    MANAGE_ROLES: 268435456,
    MANAGE_ROLES_OR_PERMISSIONS: 268435456,
    MANAGE_WEBHOOKS: 536870912,
    MANAGE_EMOJIS: 1073741824 
    };
//End of Random Utility stuff
module.exports = {
    colors,emojis,status,dcolors,region,verifLevels,fortunes, jobs,
    list1, list2, list3, list4, list5, list6, list7, list8, list9, throws, perms, permbits
}
