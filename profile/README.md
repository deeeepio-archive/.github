# Deeeep.io Archive

An automated archive for [Deeeep.io](https://deeeep.io/).

# 📚 Repositories

## [the-archiver](https://github.com/deeeepio-archive/the-archiver)

This repository contains the code responsible for scraping Deeeep.io's API and committing them to archive repositories.

## [client](https://github.com/deeeepio-archive/client)

Archive of the Deeeep.io client. It includes all JavaScript and CSS files. Images are not included.

## [forumPosts](https://github.com/deeeepio-archive/forumPosts)

Archive of the Deeeep.io forums. It includes all forum regions (English, Chinese, Portuguese, Spanish, Bork, Turkish, Russian, Vietnamese, and Polish). The archive also includes publicly visible comments for each post.

## [maps](https://github.com/deeeepio-archive/maps)

Archive of maps created in the [Deeeep.io Mapmaker](https://mapmaker.deeeep.io/).

## [playHistories](https://github.com/deeeepio-archive/playHistories)

Archive of the game's play history.

## [users](https://github.com/deeeepio-archive/users)

Archive of all Deeeep.io users. In addition to the user's profile, the archive also includes the following information:

- Social networks
- User stats
- Maps that the user has created
- Skins that the user has created

# 🏛️ Structure

Each archive repository has its contents split into nested folders and is organized by ID. Each directory, except for the repository's root, contains at most 100 directories/files, making it easy to browse on GitHub.

For example, a document with ID 12345678 will be placed in `12000000/12340000/12345600/12345678.json`  
In this case, the documented can be easily located by incrementally reading the digits of the ID:

- The ID starts with `12`, meaning it will be in `12000000/`
- The next two digits are `34`, meaning it will be in `12000000/12340000/`
- And so on...

For IDs shorter than 8 digits, directory and file names are padded at the start with `-` to ensure that Github lists directories or files in the correct order:

| # | w/o padding   | w/ padding      |
| - | ------------- | --------------- |
| 1 | `1.json`      | `-------1.json` |
| 2 | `10.json`     | `-------2.json` |
| 3 | `100.json`    | `-------3.json` |
| 4 | `2.json`      | `-------4.json` |
| 5 | `20.json`     | `-------5.json` |
| 6 | `200.json`    | `-------6.json` |

For example, a document with ID 1234 will be placed in `-------0/-------0/----1200/----1234.json`

# 📊 Statistics

## File sizes
Forum posts: 61,653 files (400M)  
Maps: 12,072 files (714M)  
Play histories: 6,167,306 files (24G)  
Users: 1,088,341 files (4.3G)  


## Forum leaderboards
### Comments
1. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 696 comments  
2. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 347 comments  
3. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 307 comments  
4. [Forum Rules](https://deeeep.io/forum/en/19229) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19229.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 265 comments  
5. [Random Questions for the deeeep.io playerbase](https://deeeep.io/forum/en/12890) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12890.json)) by [WWWWWWWWWW](https://deeeep.io/u/WWWWWWWWWW) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21229300/21229308.json)) - 223 comments  
6. [Forum Rules.](https://deeeep.io/forum/en/12825) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12825.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 199 comments  
7. [Biome Vote For Future Update](https://deeeep.io/forum/en/14174) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14100/---14174.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 197 comments  
8. [關於我自己的遊戲體驗](https://deeeep.io/forum/zh/10114) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10100/---10114.json)) by [✔IAmQiYuan](https://deeeep.io/u/%E2%9C%94IAmQiYuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--542200/--542293.json)) - 193 comments  
9. [The Animals Have Been Chosen!](https://deeeep.io/forum/en/15479) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15400/---15479.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 188 comments  
10. [¿What is your favorite animal?](https://deeeep.io/forum/en/19113) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19100/---19113.json)) by [MutantenatuM](https://deeeep.io/u/MutantenatuM) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--719600/--719649.json)) - 177 comments  
<details>
<summary>Show more</summary>

11. [Forum Rules](https://deeeep.io/forum/en/11512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11500/---11512.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 169 comments  
12. [¡Bienvenido al nuevo foro (beta) en español de Deeeep.io!](https://deeeep.io/forum/es/34) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-------0/------34.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 156 comments  
13. [Goodbye guys](https://deeeep.io/forum/en/13764) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13700/---13764.json)) by [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--569700/--569738.json)) - 156 comments  
14. [Someone please tell me what is going on...](https://deeeep.io/forum/en/3679) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3600/----3679.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 151 comments  
15. [‼️‼️ATTENTION‼️‼️The BEST player is asking a QUESTION](https://deeeep.io/forum/en/10579) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10500/---10579.json)) by [A_Fox](https://deeeep.io/u/A_Fox) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--759000/--759064.json)) - 147 comments  
16. [Did somebody say they're bored?!?! It's time to play 🥁 🥁 🥁 GUESS THE FORUM USER’S EMOJI!!! with your host 🍎SKINNY🍎](https://deeeep.io/forum/en/43231) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43200/---43231.json)) by [🍎SKINNY🍎](https://deeeep.io/u/%F0%9F%8D%8ESKINNY%F0%9F%8D%8E) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20746900/20746963.json)) - 147 comments  
17. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 137 comments  
18. [想吃漢堡嗎？我偏不給 ! 嘿嘿嘿嘿。(FB社團複製的)](https://deeeep.io/forum/zh/17084) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17000/---17084.json)) by [海鮮突擊隊-地瓜YAM](https://deeeep.io/u/%E6%B5%B7%E9%AE%AE%E7%AA%81%E6%93%8A%E9%9A%8A-%E5%9C%B0%E7%93%9CYAM) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21271500/21271569.json)) - 136 comments  
19. [math problem:](https://deeeep.io/forum/en/9728) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9700/----9728.json)) by [KittyOffical_pancakeMain](https://deeeep.io/u/KittyOffical_pancakeMain) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20710000/20712900/20712988.json)) - 135 comments  
20. [Que quieren que coma hoy](https://deeeep.io/forum/es/55841) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---55800/---55841.json)) by [Takma](https://deeeep.io/u/Takma) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20800000/20807600/20807693.json)) - 126 comments  
21. [所有阿神的bob点进来（howdy看到也点进来    If “howdy” see it, click here）](https://deeeep.io/forum/zh/752) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----700/-----752.json)) by [尽头是一片海](https://deeeep.io/u/%E5%B0%BD%E5%A4%B4%E6%98%AF%E4%B8%80%E7%89%87%E6%B5%B7) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20930000/20939400/20939443.json)) - 123 comments  
22. [does any have tips for destroy your enemies wanna destroy abigail](https://deeeep.io/forum/en/10279) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10200/---10279.json)) by [atlas-durus](https://deeeep.io/u/atlas-durus) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21228900/21228933.json)) - 122 comments  
23. [What is the animal you hate the most?](https://deeeep.io/forum/en/19173) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19100/---19173.json)) by [MutantenatuM](https://deeeep.io/u/MutantenatuM) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--719600/--719649.json)) - 122 comments  
24. [Guessing what your search history is based on your PFP, death message and about me!!!](https://deeeep.io/forum/en/56328) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56300/---56328.json)) by [Tophat](https://deeeep.io/u/Tophat) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298600/21298611.json)) - 120 comments  
25. [Swampy Shores Artwork Has Been Chosen + Batch X Animals Have Been Chosen](https://deeeep.io/forum/en/17744) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17700/---17744.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 119 comments  
26. [What is the worst animal to use?](https://deeeep.io/forum/en/55956) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---55900/---55956.json)) by [Sir_Capybara](https://deeeep.io/u/Sir_Capybara) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21380000/21388100/21388104.json)) - 117 comments  
27. [官方可以管管開掛的玩家嗎?](https://deeeep.io/forum/zh/11617) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11600/---11617.json)) by [天影](https://deeeep.io/u/%E5%A4%A9%E5%BD%B1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21223300/21223312.json)) - 114 comments  
28. [Comment something everyone else disagrees with but you know is true](https://deeeep.io/forum/en/56138) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56100/---56138.json)) by [--FishyFish1234--](https://deeeep.io/u/--FishyFish1234--) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21300000/21307300/21307340.json)) - 112 comments  
29. [whats the most cheap skin (excluding unrealistic) thats actually cool and worthed?](https://deeeep.io/forum/en/13514) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13514.json)) by [mimikyu](https://deeeep.io/u/mimikyu) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20980000/20980800/20980864.json)) - 111 comments  
30. [can I get a recap pls](https://deeeep.io/forum/en/19299) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19299.json)) by [FunctionOfX](https://deeeep.io/u/FunctionOfX) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21295200/21295230.json)) - 110 comments  
31. [今天，真他麻痹的遇到脑C了](https://deeeep.io/forum/zh/18379) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18300/---18379.json)) by [龙玉涛](https://deeeep.io/u/%E9%BE%99%E7%8E%89%E6%B6%9B) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21291900/21291923.json)) - 109 comments  
32. [Save me from this torture](https://deeeep.io/forum/en/43253) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43200/---43253.json)) by [l_am_Lean](https://deeeep.io/u/l_am_Lean) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21360000/21361100/21361143.json)) - 108 comments  
33. [This post is for kappa.](https://deeeep.io/forum/en/56143) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56100/---56143.json)) by [Rawer2hoo_](https://deeeep.io/u/Rawer2hoo_) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21350000/21351200/21351258.json)) - 107 comments  
34. [The Crabinet needs you!](https://deeeep.io/forum/en/17512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17500/---17512.json)) by [Poborski](https://deeeep.io/u/Poborski) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--545400/--545482.json)) - 102 comments  
35. [WHY JUST WHY](https://deeeep.io/forum/en/3854) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3800/----3854.json)) by [Ether](https://deeeep.io/u/Ether) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20768000/20768010.json)) - 97 comments  
36. [Forum Rules](https://deeeep.io/forum/en/12900) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12900/---12900.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 97 comments  
37. [I rate your guys pfp :]](https://deeeep.io/forum/en/56287) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56200/---56287.json)) by [KHΔOS_](https://deeeep.io/u/KH%CE%94OS_) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21300000/21301600/21301686.json)) - 95 comments  
38. [People Problems](https://deeeep.io/forum/en/3941) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3900/----3941.json)) by [ObIivion](https://deeeep.io/u/ObIivion) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20930000/20939800/20939841.json)) - 94 comments  
39. [Why? Just why?](https://deeeep.io/forum/en/3995) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3900/----3995.json)) by [Pαɳɳყ_Lҽ_Pαɳƈαƙҽ🥞💜🤡🗿](https://deeeep.io/u/P%CE%B1%C9%B3%C9%B3%E1%83%A7_L%D2%BD_P%CE%B1%C9%B3%C6%88%CE%B1%C6%99%D2%BD%F0%9F%A5%9E%F0%9F%92%9C%F0%9F%A4%A1%F0%9F%97%BF) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20833100/20833158.json)) - 92 comments  
40. [Puzzle Wally de SS resuelto (Swampy Shores)](https://deeeep.io/forum/es/42630) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42600/---42630.json)) by [MutantenatuM](https://deeeep.io/u/MutantenatuM) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--719600/--719649.json)) - 92 comments  
41. [Everyone, you're only allowed to post CookieDough approved things,Soo everyone basically eff off&let CookieDough run this](https://deeeep.io/forum/en/3984) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3900/----3984.json)) by [seagirl](https://deeeep.io/u/seagirl) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20784700/20784740.json)) - 91 comments  
42. [i hate PD players](https://deeeep.io/forum/en/42994) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42900/---42994.json)) by [Thesa](https://deeeep.io/u/Thesa) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21250000/21252500/21252539.json)) - 91 comments  
43. [Hug Or Ugh (The kid friendlier version of "Smash Or Pass"! 😸)](https://deeeep.io/forum/en/43199) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43100/---43199.json)) by [a-stray-cat](https://deeeep.io/u/a-stray-cat) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21373400/21373421.json)) - 91 comments  
44. [Death Message & About Me Generator](https://deeeep.io/forum/en/13949) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13900/---13949.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 89 comments  
45. [how good of a player do you think u r?](https://deeeep.io/forum/en/12355) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12300/---12355.json)) by [KittyOffical_pancakeMain](https://deeeep.io/u/KittyOffical_pancakeMain) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20710000/20712900/20712988.json)) - 88 comments  
46. [Related post: But what even is a "pro player"](https://deeeep.io/forum/en/9562) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9562.json)) by [ღ𝒟𝐸𝐸𝒫-𝐻𝐸𝒜𝑅𝒯ღ](https://deeeep.io/u/%E1%83%A6%F0%9D%92%9F%F0%9D%90%B8%F0%9D%90%B8%F0%9D%92%AB-%F0%9D%90%BB%F0%9D%90%B8%F0%9D%92%9C%F0%9D%91%85%F0%9D%92%AF%E1%83%A6) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20788500/20788571.json)) - 86 comments  
47. [失戀了⋯⋯⋯⋯⋯⋯⋯](https://deeeep.io/forum/zh/42876) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42800/---42876.json)) by [LZJ](https://deeeep.io/u/LZJ) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21350000/21359000/21359053.json)) - 86 comments  
48. [NEW CHAT!!!!!!!!!!!!!!!](https://deeeep.io/forum/en/9522) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9522.json)) by [-_Abigail_-](https://deeeep.io/u/-_Abigail_-) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20974900/20974932.json)) - 85 comments  
49. [more questions for the deeeep.io players](https://deeeep.io/forum/en/13087) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13000/---13087.json)) by [WWWWWWWWWW](https://deeeep.io/u/WWWWWWWWWW) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21229300/21229308.json)) - 85 comments  
50. [I finally made it to tier two, and can now access this wonderful kid friendly social media app! :)](https://deeeep.io/forum/en/43088) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43000/---43088.json)) by [a-stray-cat](https://deeeep.io/u/a-stray-cat) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21373400/21373421.json)) - 85 comments
</details>

### Upvotes
1. [1v1跟pd不能玩的真正原因](https://deeeep.io/forum/zh/13452) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13400/---13452.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 300 likes  
2. [聚集了三端之力....](https://deeeep.io/forum/zh/16999) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16999.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 300 likes  
3. [亞服tffa變得超卡的 真正原因](https://deeeep.io/forum/zh/13553) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13553.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 296 likes  
4. [我對於某些開掛者的看法](https://deeeep.io/forum/zh/13334) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13300/---13334.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 281 likes  
5. [1v1,PD,TFFA全開了](https://deeeep.io/forum/zh/14032) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14000/---14032.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 259 likes  
6. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 237 likes  
7. [西奈塔的奇妙冒險ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/forum/zh/17619) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17600/---17619.json)) by [JS-ニメンシダベン](https://deeeep.io/u/JS-%E3%83%8B%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%80%E3%83%99%E3%83%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 228 likes  
8. [西奈塔与渔民的寓意故事](https://deeeep.io/forum/zh/16026) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16000/---16026.json)) by [寄生虫HuLei_](https://deeeep.io/u/%E5%AF%84%E7%94%9F%E8%99%ABHuLei_) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20819700/20819740.json)) - 223 likes  
9. [關於西奈塔有了外掛這檔事](https://deeeep.io/forum/zh/11788) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11700/---11788.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 220 likes  
10. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 157 likes  
<details>
<summary>Show more</summary>

11. [Markdown on forums](https://deeeep.io/forum/en/3700) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3700/----3700.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 134 likes  
12. [ai hoshino has a request](https://deeeep.io/forum/en/18314) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18300/---18314.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 129 likes  
13. [⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀](https://deeeep.io/forum/en/19337) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19337.json)) by [00757](https://deeeep.io/u/00757) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21292800/21292851.json)) - 127 likes  
14. [殺你100次✓ ／等級乃一切 恭喜西奈塔帝國入主論壇](https://deeeep.io/forum/zh/19469) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19469.json)) by [Zindai](https://deeeep.io/u/Zindai) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20700000/20703800/20703814.json)) - 111 likes  
15. [Dp人物傳記-西奈塔3](https://deeeep.io/forum/zh/19536) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19536.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 109 likes  
16. [神射手與不敢打鉤翁—-](https://deeeep.io/forum/zh/15908) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15900/---15908.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 105 likes  
17. [管好發文ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ(並非完全真實 勿認真)](https://deeeep.io/forum/zh/19537) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19537.json)) by [JS-ニメンシダベン](https://deeeep.io/u/JS-%E3%83%8B%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%80%E3%83%99%E3%83%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 105 likes  
18. [對我於與我同團的成員和大隊長的看法 這件事就這樣到這邊就結束了](https://deeeep.io/forum/zh/17316) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17300/---17316.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 103 likes  
19. [奈塔之執法         司馬遷](https://deeeep.io/forum/zh/19472) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19472.json)) by [JS-ニメンシダベン](https://deeeep.io/u/JS-%E3%83%8B%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%80%E3%83%99%E3%83%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 103 likes  
20. [起初，當他們抵制撿頭仔的時候， 我沉默](https://deeeep.io/forum/zh/13562) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13562.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 102 likes  
21. [根據我精密的計算``](https://deeeep.io/forum/zh/16641) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16600/---16641.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 102 likes  
22. [✅️勾勾幫大隊長的獨白](https://deeeep.io/forum/zh/16944) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16944.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 102 likes  
23. [💥💥💥西奈塔(我)被永ban的真正原因💥💥💥](https://deeeep.io/forum/zh/19420) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19420.json)) by [西奈塔4](https://deeeep.io/u/%E8%A5%BF%E5%A5%88%E5%A1%944) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21299100/21299170.json)) - 102 likes  
24. [西奈塔大軍進入中文論壇](https://deeeep.io/forum/zh/19435) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19435.json)) by [𝕍𝕚𝕣𝕦𝕤ㅤㅤㅤㅤㅤㅤ](https://deeeep.io/u/%F0%9D%95%8D%F0%9D%95%9A%F0%9D%95%A3%F0%9D%95%A6%F0%9D%95%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20730000/20734500/20734563.json)) - 102 likes  
25. [💥💥💥管理員連別人的文都敢刪💥💥💥](https://deeeep.io/forum/zh/19520) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19520.json)) by [西奈塔塔](https://deeeep.io/u/%E8%A5%BF%E5%A5%88%E5%A1%94%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298900/21298918.json)) - 102 likes  
26. [完了...事情真的超不妙](https://deeeep.io/forum/zh/15986) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15900/---15986.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 100 likes  
27. [💥💥💥emi獨創的精神勝利法💥💥💥](https://deeeep.io/forum/zh/19635) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19600/---19635.json)) by [小西奈塔](https://deeeep.io/u/%E5%B0%8F%E8%A5%BF%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298900/21298936.json)) - 100 likes  
28. [如何成為大外佬：)。。。。。。(外是指超出常人，就是很好的意思，沒有別的意思:)](https://deeeep.io/forum/zh/14676) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14600/---14676.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 99 likes  
29. [ai hoshino discovers deeeep.io](https://deeeep.io/forum/en/18271) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18200/---18271.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 99 likes  
30. [💥💥💥關於對帳號的規劃💥💥💥(rip西奈系)](https://deeeep.io/forum/zh/19502) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19502.json)) by [西奈塔3](https://deeeep.io/u/%E8%A5%BF%E5%A5%88%E5%A1%943) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298600/21298686.json)) - 99 likes  
31. [—《關於我最近的遊戲體驗》—(經典)](https://deeeep.io/forum/zh/13515) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13515.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 96 likes  
32. [💥💥💥emi自創的精神勝利法💥💥💥](https://deeeep.io/forum/zh/19660) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19600/---19660.json)) by [五服第一](https://deeeep.io/u/%E4%BA%94%E6%9C%8D%E7%AC%AC%E4%B8%80) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298900/21298948.json)) - 93 likes  
33. [真的有人超覺得這是一個技術遊戲?](https://deeeep.io/forum/zh/16342) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16300/---16342.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 90 likes  
34. [NEW CHAT!!!!!!!!!!!!!!!](https://deeeep.io/forum/en/9522) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9522.json)) by [-_Abigail_-](https://deeeep.io/u/-_Abigail_-) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20974900/20974932.json)) - 86 likes  
35. [Witamy na nowym polskim (beta) forum Deeeep.io!](https://deeeep.io/forum/pl/35) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-------0/------35.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 85 likes  
36. [很多人慢慢地不玩dp的原因(主要是單人玩家)](https://deeeep.io/forum/zh/19375) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19375.json)) by [Beatrice🌹](https://deeeep.io/u/Beatrice%F0%9F%8C%B9) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20690000/20690700/20690775.json)) - 79 likes  
37. [大家好，我剛入坑（湊。。。。。。](https://deeeep.io/forum/zh/16678) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16600/---16678.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 77 likes  
38. [Christmas Gift](https://deeeep.io/forum/en/9603) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9600/----9603.json)) by [Awesomearod1](https://deeeep.io/u/Awesomearod1) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20720000/20727500/20727573.json)) - 76 likes  
39. [Add markdown text editor](https://deeeep.io/forum/en/452) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----400/-----452.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 72 likes  
40. [Parece que alguém tem usado bots pra dar upvote ou downvote nos posts do fórum](https://deeeep.io/forum/pt/9574) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9574.json)) by [Dudalina](https://deeeep.io/u/Dudalina) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--780600/--780659.json)) - 70 likes  
41. [math problem:](https://deeeep.io/forum/en/9728) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9700/----9728.json)) by [KittyOffical_pancakeMain](https://deeeep.io/u/KittyOffical_pancakeMain) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20710000/20712900/20712988.json)) - 69 likes  
42. [What is The word?](https://deeeep.io/forum/en/10191) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10100/---10191.json)) by [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--569700/--569738.json)) - 69 likes  
43. [ima spam this forum bc pi boted me](https://deeeep.io/forum/en/10189) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10100/---10189.json)) by [⚢sAmthepro_1⚢](https://deeeep.io/u/%E2%9A%A2sAmthepro_1%E2%9A%A2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--756400/--756404.json)) - 68 likes  
44. [do yall prefer downvote or upvote spamming](https://deeeep.io/forum/en/9627) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9600/----9627.json)) by [sloop](https://deeeep.io/u/sloop) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--639400/--639429.json)) - 67 likes  
45. [Hey guys!! Guess what? I GOT HACKED!!!!!!](https://deeeep.io/forum/en/11531) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11500/---11531.json)) by [wez_got_hacked](https://deeeep.io/u/wez_got_hacked) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21250000/21256200/21256214.json)) - 67 likes  
46. [Heres a copy and paste of a baby penguin](https://deeeep.io/forum/en/9795) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9700/----9795.json)) by [N_VIV_N](https://deeeep.io/u/N_VIV_N) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20980000/20980300/20980320.json)) - 66 likes  
47. [Hey friends](https://deeeep.io/forum/en/10069) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10000/---10069.json)) by [Dovahkiin](https://deeeep.io/u/Dovahkiin) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--711900/--711972.json)) - 64 likes  
48. [To all racist people:](https://deeeep.io/forum/en/17725) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17700/---17725.json)) by [mahdighurb](https://deeeep.io/u/mahdighurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21030000/21038500/21038507.json)) - 63 likes  
49. [NBC News / VectorStock](https://deeeep.io/forum/en/9589) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9589.json)) by [00903](https://deeeep.io/u/00903) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21180000/21182700/21182774.json)) - 62 likes  
50. [We need more pinned comments](https://deeeep.io/forum/en/9781) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9700/----9781.json)) by [Zenobia](https://deeeep.io/u/Zenobia) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20976000/20976001.json)) - 62 likes
</details>

### Views
1. [Forum Rules Post](https://deeeep.io/forum/en/56204) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56200/---56204.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 4,163 views  
2. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 3,057 views  
3. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 3,037 views  
4. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 2,627 views  
5. [Forum Rules](https://deeeep.io/forum/en/19229) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19229.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,328 views  
6. [重要：关于使用论坛发出政治上的看法](https://deeeep.io/forum/zh/128) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----100/-----128.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 2,213 views  
7. [Deeeep.io 论坛的基本准则 -](https://deeeep.io/forum/zh/15270) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15200/---15270.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 2,016 views  
8. [新的论坛管理员‌‌‌‌‌](https://deeeep.io/forum/zh/19399) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19399.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,508 views  
9. [The Crabinet needs you!](https://deeeep.io/forum/en/17512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17500/---17512.json)) by [Poborski](https://deeeep.io/u/Poborski) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--545400/--545482.json)) - 1,385 views  
10. [Forum Rules](https://deeeep.io/forum/en/12900) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12900/---12900.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,359 views  
<details>
<summary>Show more</summary>

11. [Forum Rules](https://deeeep.io/forum/en/11512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11500/---11512.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,350 views  
12. [关于玩家主页标有Blocky Fish Client 的内容](https://deeeep.io/forum/zh/12935) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12900/---12935.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 1,341 views  
13. [Forum Rules.](https://deeeep.io/forum/en/12825) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12825.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,204 views  
14. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 1,099 views  
15. [新地图 公投结果出来了！](https://deeeep.io/forum/zh/15668) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15600/---15668.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,076 views  
16. [很多人慢慢地不玩dp的原因(主要是單人玩家)](https://deeeep.io/forum/zh/19375) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19375.json)) by [Beatrice🌹](https://deeeep.io/u/Beatrice%F0%9F%8C%B9) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20690000/20690700/20690775.json)) - 1,017 views  
17. [Swampy Shores Artwork Has Been Chosen + Batch X Animals Have Been Chosen](https://deeeep.io/forum/en/17744) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17700/---17744.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,007 views  
18. [Добро пожаловать на новый русский (бета) форум Deeeep.io!](https://deeeep.io/forum/ru/70) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-------0/------70.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 963 views  
19. [The Animals Have Been Chosen!](https://deeeep.io/forum/en/15479) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15400/---15479.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 962 views  
20. [Regulamin Forum](https://deeeep.io/forum/pl/19234) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19234.json)) by [Rem2](https://deeeep.io/u/Rem2) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14004900/14004913.json)) - 945 views  
21. [歡迎來到華語論壇測試版](https://deeeep.io/forum/zh/1) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-------0/-------1.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 913 views  
22. [申请当本论坛的管理员](https://deeeep.io/forum/zh/17761) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17700/---17761.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 913 views  
23. [¡Bienvenido al nuevo foro (beta) en español de Deeeep.io!](https://deeeep.io/forum/es/34) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-------0/------34.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 888 views  
24. [NEW CHAT!!!!!!!!!!!!!!!](https://deeeep.io/forum/en/9522) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9500/----9522.json)) by [-_Abigail_-](https://deeeep.io/u/-_Abigail_-) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20974900/20974932.json)) - 888 views  
25. [西奈塔的奇妙冒險ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/forum/zh/17619) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17600/---17619.json)) by [JS-ニメンシダベン](https://deeeep.io/u/JS-%E3%83%8B%E3%83%A1%E3%83%B3%E3%82%B7%E3%83%80%E3%83%99%E3%83%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 886 views  
26. [Biome Vote For Future Update](https://deeeep.io/forum/en/14174) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14100/---14174.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 872 views  
27. [關於我自己的遊戲體驗](https://deeeep.io/forum/zh/10114) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10100/---10114.json)) by [✔IAmQiYuan](https://deeeep.io/u/%E2%9C%94IAmQiYuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--542200/--542293.json)) - 832 views  
28. [Luxoral Prime Re-Release](https://deeeep.io/forum/en/16922) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16922.json)) by [zDarkSea](https://deeeep.io/u/zDarkSea) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20788700/20788719.json)) - 831 views  
29. [ai hoshino has a request](https://deeeep.io/forum/en/18314) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18300/---18314.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 828 views  
30. [教學 如何上傳GIF頭像 (不會看不懂](https://deeeep.io/forum/zh/10546) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10500/---10546.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 801 views  
31. [Christmas Gift](https://deeeep.io/forum/en/9603) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9600/----9603.json)) by [Awesomearod1](https://deeeep.io/u/Awesomearod1) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20720000/20727500/20727573.json)) - 798 views  
32. [關於西奈塔有了外掛這檔事](https://deeeep.io/forum/zh/11788) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11700/---11788.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 795 views  
33. [math problem:](https://deeeep.io/forum/en/9728) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9700/----9728.json)) by [KittyOffical_pancakeMain](https://deeeep.io/u/KittyOffical_pancakeMain) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20710000/20712900/20712988.json)) - 771 views  
34. [Markdown on forums](https://deeeep.io/forum/en/3700) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3700/----3700.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 764 views  
35. [农历新年到了！🧨🎆](https://deeeep.io/forum/zh/11725) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11700/---11725.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 747 views  
36. [Someone please tell me what is going on...](https://deeeep.io/forum/en/3679) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3600/----3679.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 744 views  
37. [ok so uhhh idk how to explain this in a title and i also included a question](https://deeeep.io/forum/en/43000) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43000/---43000.json)) by [FishDeep](https://deeeep.io/u/FishDeep) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20962800/20962803.json)) - 738 views  
38. [Death Message & About Me Generator](https://deeeep.io/forum/en/13949) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13900/---13949.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 717 views  
39. [‼️‼️ATTENTION‼️‼️The BEST player is asking a QUESTION](https://deeeep.io/forum/en/10579) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10500/---10579.json)) by [A_Fox](https://deeeep.io/u/A_Fox) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--759000/--759064.json)) - 711 views  
40. [--- Swampy Shores 公投结果放送 ---](https://deeeep.io/forum/zh/15478) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15400/---15478.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 659 views  
41. [Tournaments](https://deeeep.io/forum/en/585) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----500/-----585.json)) by [M_in_pain](https://deeeep.io/u/M_in_pain) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20942100/20942122.json)) - 641 views  
42. [ai hoshino discovers deeeep.io](https://deeeep.io/forum/en/18271) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18200/---18271.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 640 views  
43. [Another one bites the dust 😞](https://deeeep.io/forum/en/55809) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---55800/---55809.json)) by [747](https://deeeep.io/u/747) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21350000/21350300/21350332.json)) - 616 views  
44. [刚刚那篇删错了，有关外挂的问题](https://deeeep.io/forum/zh/17483) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17483.json)) by [刻痕的夕阳](https://deeeep.io/u/%E5%88%BB%E7%97%95%E7%9A%84%E5%A4%95%E9%98%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21274700/21274758.json)) - 610 views  
45. [Правила форума](https://deeeep.io/forum/ru/3692) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3600/----3692.json)) by [Myhailot](https://deeeep.io/u/Myhailot) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--680000/--687300/--687357.json)) - 567 views  
46. [统一回复一下皮肤出错的问题](https://deeeep.io/forum/zh/10629) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10600/---10629.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 536 views  
47. [官方可以管管開掛的玩家嗎?](https://deeeep.io/forum/zh/11617) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11600/---11617.json)) by [天影](https://deeeep.io/u/%E5%A4%A9%E5%BD%B1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21223300/21223312.json)) - 523 views  
48. [我對於某些開掛者的看法](https://deeeep.io/forum/zh/13334) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13300/---13334.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 523 views  
49. [made my first skin!!](https://deeeep.io/forum/en/10085) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10000/---10085.json)) by [Ligma-](https://deeeep.io/u/Ligma-) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20800000/20801100/20801168.json)) - 518 views  
50. [Bu arf beni delirticek yaaa](https://deeeep.io/forum/tr/13669) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13669.json)) by [NabüN](https://deeeep.io/u/Nab%C3%BCN) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--769800/--769810.json)) - 493 views
</details>

## User leaderboards
### Account XP
1. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 18,836,100 xp  
2. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 18,810,900 xp  
3. [ooCarnage](https://deeeep.io/u/ooCarnage) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20810000/20810055.json)) - 17,897,250 xp  
4. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 17,097,600 xp  
5. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 16,443,750 xp  
6. [AlexPoatan](https://deeeep.io/u/AlexPoatan) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20758000/20758000.json)) - 16,037,250 xp  
7. [Sworb](https://deeeep.io/u/Sworb) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14007100/14007129.json)) - 14,376,300 xp  
8. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 13,541,250 xp  
9. [Fantah](https://deeeep.io/u/Fantah) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--782800/--782854.json)) - 13,102,800 xp  
10. [anna838](https://deeeep.io/u/anna838) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20971300/20971398.json)) - 12,982,800 xp  
<details>
<summary>Show more</summary>

11. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 12,720,750 xp  
12. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--448500/--448541.json)) - 12,480,450 xp  
13. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 12,365,700 xp  
14. [GarlinX](https://deeeep.io/u/GarlinX) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20946400/20946409.json)) - 12,281,700 xp  
15. [cashshit](https://deeeep.io/u/cashshit) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20741200/20741230.json)) - 12,227,850 xp  
16. [😈Tayjaygang😈ㅤㅤ](https://deeeep.io/u/%F0%9F%98%88Tayjaygang%F0%9F%98%88%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 12,142,950 xp  
17. [Swampanion](https://deeeep.io/u/Swampanion) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20690000/20690100/20690137.json)) - 12,063,000 xp  
18. [Asterix](https://deeeep.io/u/Asterix) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20814100/20814184.json)) - 11,553,600 xp  
19. [spoon-](https://deeeep.io/u/spoon-) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21272900/21272914.json)) - 11,541,000 xp  
20. [Sift](https://deeeep.io/u/Sift) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796200/--796218.json)) - 11,526,000 xp  
21. [Primer_](https://deeeep.io/u/Primer_) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21222600/21222683.json)) - 11,265,000 xp  
22. [ぽくぁtheぁぁ](https://deeeep.io/u/%E3%81%BD%E3%81%8F%E3%81%81the%E3%81%81%E3%81%81) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20730000/20734700/20734773.json)) - 10,920,300 xp  
23. [seagirl](https://deeeep.io/u/seagirl) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20784700/20784740.json)) - 10,909,800 xp  
24. [guest_8815](https://deeeep.io/u/guest_8815) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796400/--796461.json)) - 10,849,350 xp  
25. [Rem2](https://deeeep.io/u/Rem2) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14004900/14004913.json)) - 10,681,950 xp  
26. [𝓢𝓸𝓾𝓳𝓲ソウジ](https://deeeep.io/u/%F0%9D%93%A2%F0%9D%93%B8%F0%9D%93%BE%F0%9D%93%B3%F0%9D%93%B2%E3%82%BD%E3%82%A6%E3%82%B8) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--712000/--712057.json)) - 10,555,800 xp  
27. [YourLeader](https://deeeep.io/u/YourLeader) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--560100/--560162.json)) - 10,444,350 xp  
28. [TongueEatingLouse](https://deeeep.io/u/TongueEatingLouse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--480000/--486100/--486161.json)) - 10,106,400 xp  
29. [Swerz1008𰻞ㅤㅤㅤ](https://deeeep.io/u/Swerz1008%F0%B0%BB%9E%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 10,070,850 xp  
30. [smoketree](https://deeeep.io/u/smoketree) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21277400/21277454.json)) - 9,972,300 xp  
31. [카ㅤ](https://deeeep.io/u/%EC%B9%B4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20980000/20984300/20984367.json)) - 9,959,100 xp  
32. [𝑲𝒊𝒏𝒈_𝑺𝒊𝒛𝒆](https://deeeep.io/u/%F0%9D%91%B2%F0%9D%92%8A%F0%9D%92%8F%F0%9D%92%88_%F0%9D%91%BA%F0%9D%92%8A%F0%9D%92%9B%F0%9D%92%86) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--749700/--749790.json)) - 9,797,400 xp  
33. [Dargoniter](https://deeeep.io/u/Dargoniter) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20782800/20782882.json)) - 9,698,850 xp  
34. [나나닝뉴뉴뉸](https://deeeep.io/u/%EB%82%98%EB%82%98%EB%8B%9D%EB%89%B4%EB%89%B4%EB%89%B8) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20976900/20976981.json)) - 9,570,600 xp  
35. [_Silence](https://deeeep.io/u/_Silence) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--670000/--679400/--679460.json)) - 9,548,550 xp  
36. [Jinty](https://deeeep.io/u/Jinty) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725400/--725475.json)) - 9,242,400 xp  
37. [ᶜᵃᵈᵉᵗ](https://deeeep.io/u/%E1%B6%9C%E1%B5%83%E1%B5%88%E1%B5%89%E1%B5%97) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--798200/--798231.json)) - 9,191,400 xp  
38. [卄anu卄al](https://deeeep.io/u/%E5%8D%84anu%E5%8D%84al) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21260000/21263200/21263207.json)) - 9,171,300 xp  
39. [ᴡᴅ40](https://deeeep.io/u/%E1%B4%A1%E1%B4%8540) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20710000/20716400/20716461.json)) - 9,147,900 xp  
40. [-solevaya](https://deeeep.io/u/-solevaya) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21326800/21326847.json)) - 9,011,700 xp  
41. [designated999](https://deeeep.io/u/designated999) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20950000/20959300/20959308.json)) - 9,000,300 xp  
42. [☪𝓦𝓪𝓵𝓵](https://deeeep.io/u/%E2%98%AA%F0%9D%93%A6%F0%9D%93%AA%F0%9D%93%B5%F0%9D%93%B5) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20760300/20760325.json)) - 8,957,100 xp  
43. [Sidereal](https://deeeep.io/u/Sidereal) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20944400/20944438.json)) - 8,948,700 xp  
44. [W0W_](https://deeeep.io/u/W0W_) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20946000/20946046.json)) - 8,931,600 xp  
45. [JFK_Official](https://deeeep.io/u/JFK_Official) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21260000/21267600/21267627.json)) - 8,916,300 xp  
46. [Azulejo_Offline](https://deeeep.io/u/Azulejo_Offline) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725700/--725746.json)) - 8,733,450 xp  
47. [firec4t](https://deeeep.io/u/firec4t) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20965900/20965941.json)) - 8,622,900 xp  
48. [hmmmmmmmmmm](https://deeeep.io/u/hmmmmmmmmmm) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20945700/20945738.json)) - 8,558,850 xp  
49. [わわわをん](https://deeeep.io/u/%E3%82%8F%E3%82%8F%E3%82%8F%E3%82%92%E3%82%93) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21350000/21359000/21359089.json)) - 8,532,600 xp  
50. [ghurb](https://deeeep.io/u/ghurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20788600/20788694.json)) - 8,405,400 xp
</details>

### Coins
1. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 163,940 coins  
2. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 145,037 coins  
3. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 109,463 coins  
4. [Sworb](https://deeeep.io/u/Sworb) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14007100/14007129.json)) - 96,101 coins  
5. [ooCarnage](https://deeeep.io/u/ooCarnage) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20810000/20810055.json)) - 96,058 coins  
6. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 84,164 coins  
7. [𝓢𝓸𝓾𝓳𝓲ソウジ](https://deeeep.io/u/%F0%9D%93%A2%F0%9D%93%B8%F0%9D%93%BE%F0%9D%93%B3%F0%9D%93%B2%E3%82%BD%E3%82%A6%E3%82%B8) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--712000/--712057.json)) - 81,673 coins  
8. [felixk_359](https://deeeep.io/u/felixk_359) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--530000/--538100/--538166.json)) - 73,094 coins  
9. [A4134307_740](https://deeeep.io/u/A4134307_740) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--700200/--700253.json)) - 71,544 coins  
10. [Rem2](https://deeeep.io/u/Rem2) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14004900/14004913.json)) - 70,484 coins  
<details>
<summary>Show more</summary>

11. [𝑲𝒊𝒏𝒈_𝑺𝒊𝒛𝒆](https://deeeep.io/u/%F0%9D%91%B2%F0%9D%92%8A%F0%9D%92%8F%F0%9D%92%88_%F0%9D%91%BA%F0%9D%92%8A%F0%9D%92%9B%F0%9D%92%86) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--749700/--749790.json)) - 69,114 coins  
12. [5890752_384](https://deeeep.io/u/5890752_384) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--590000/--597400/--597433.json)) - 68,599 coins  
13. [Kanaa](https://deeeep.io/u/Kanaa) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--504800/--504825.json)) - 64,314 coins  
14. [AlexPoatan](https://deeeep.io/u/AlexPoatan) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20758000/20758000.json)) - 64,066 coins  
15. [seagirl](https://deeeep.io/u/seagirl) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20784700/20784740.json)) - 63,953 coins  
16. [GoldMask](https://deeeep.io/u/GoldMask) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--512100/--512111.json)) - 62,044 coins  
17. [BuBuㅤ](https://deeeep.io/u/BuBu%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--751200/--751293.json)) - 58,825 coins  
18. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 55,584 coins  
19. [Mana](https://deeeep.io/u/Mana) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--792900/--792988.json)) - 54,505 coins  
20. [Artasia🌹](https://deeeep.io/u/Artasia%F0%9F%8C%B9) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--767400/--767437.json)) - 53,081 coins  
21. [Fantah](https://deeeep.io/u/Fantah) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--782800/--782854.json)) - 52,895 coins  
22. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--448500/--448541.json)) - 52,817 coins  
23. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 52,495 coins  
24. [Locus](https://deeeep.io/u/Locus) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--730200/--730248.json)) - 52,489 coins  
25. [😈Tayjaygang😈ㅤㅤ](https://deeeep.io/u/%F0%9F%98%88Tayjaygang%F0%9F%98%88%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 52,422 coins  
26. [Poy](https://deeeep.io/u/Poy) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--617600/--617663.json)) - 50,761 coins  
27. [Sift](https://deeeep.io/u/Sift) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796200/--796218.json)) - 50,410 coins  
28. [ZZB7](https://deeeep.io/u/ZZB7) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--590000/--592000/--592032.json)) - 50,320 coins  
29. [gereksiz](https://deeeep.io/u/gereksiz) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619900/--619902.json)) - 50,216 coins  
30. [empyon](https://deeeep.io/u/empyon) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--550000/--552300/--552373.json)) - 50,029 coins  
31. [ぽくぁtheぁぁ](https://deeeep.io/u/%E3%81%BD%E3%81%8F%E3%81%81the%E3%81%81%E3%81%81) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20730000/20734700/20734773.json)) - 49,805 coins  
32. [smoketree](https://deeeep.io/u/smoketree) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21277400/21277454.json)) - 49,516 coins  
33. [Rona_](https://deeeep.io/u/Rona_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--420000/--425400/--425456.json)) - 48,960 coins  
34. [Garychen](https://deeeep.io/u/Garychen) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--580000/--583700/--583761.json)) - 48,221 coins  
35. [Gh0sts](https://deeeep.io/u/Gh0sts) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--620000/--626200/--626256.json)) - 47,505 coins  
36. [ZAIDAWGTMD](https://deeeep.io/u/ZAIDAWGTMD) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--600000/--608800/--608852.json)) - 47,389 coins  
37. [KROKODIL_](https://deeeep.io/u/KROKODIL_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--787200/--787239.json)) - 45,473 coins  
38. [NormalUsername](https://deeeep.io/u/NormalUsername) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725000/--725015.json)) - 45,403 coins  
39. [_𝐙𝐚𝐜𝐤_](https://deeeep.io/u/_%F0%9D%90%99%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A4_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--660000/--665900/--665997.json)) - 45,033 coins  
40. [doom__](https://deeeep.io/u/doom__) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20967400/20967445.json)) - 44,277 coins  
41. [joaquinalex7](https://deeeep.io/u/joaquinalex7) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20770000/20776500/20776528.json)) - 43,923 coins  
42. [wabiwasabi](https://deeeep.io/u/wabiwasabi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--646000/--646088.json)) - 43,013 coins  
43. [MysteryxMys](https://deeeep.io/u/MysteryxMys) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--785300/--785389.json)) - 41,670 coins  
44. [GarlinX](https://deeeep.io/u/GarlinX) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20946400/20946409.json)) - 40,087 coins  
45. [Sidereal](https://deeeep.io/u/Sidereal) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20944400/20944438.json)) - 39,481 coins  
46. [Dark恩恩](https://deeeep.io/u/Dark%E6%81%A9%E6%81%A9) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20741500/20741532.json)) - 39,315 coins  
47. [DerpyDerp](https://deeeep.io/u/DerpyDerp) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20720000/20729800/20729851.json)) - 39,187 coins  
48. [Hitta](https://deeeep.io/u/Hitta) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--808000/--808061.json)) - 38,525 coins  
49. [Rh_4m](https://deeeep.io/u/Rh_4m) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--580000/--583400/--583491.json)) - 38,203 coins  
50. [☪𝓦𝓪𝓵𝓵](https://deeeep.io/u/%E2%98%AA%F0%9D%93%A6%F0%9D%93%AA%F0%9D%93%B5%F0%9D%93%B5) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20760300/20760325.json)) - 37,750 coins
</details>

### Highest score
1. [deeeepguardian](https://deeeep.io/u/deeeepguardian) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/---10000/---10600/---10650.json)) - 2,147,483,647 xp  
2. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 2,147,483,647 xp  
3. [지현김_591](https://deeeep.io/u/%EC%A7%80%ED%98%84%EA%B9%80_591) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--520800/--520846.json)) - 2,147,483,647 xp  
4. [killer_cat](https://deeeep.io/u/killer_cat) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--523100/--523199.json)) - 2,147,483,647 xp  
5. [moonf_568](https://deeeep.io/u/moonf_568) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--530000/--538600/--538675.json)) - 2,147,483,647 xp  
6. [greensm_949](https://deeeep.io/u/greensm_949) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--490000/--493500/--493507.json)) - 2,147,483,646 xp  
7. [oO𝕡𝕖𝕒𝕣𝕝Oo](https://deeeep.io/u/oO%F0%9D%95%A1%F0%9D%95%96%F0%9D%95%92%F0%9D%95%A3%F0%9D%95%9DOo) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/---50000/---52300/---52338.json)) - 2,147,483,645 xp  
8. [俊佑郭](https://deeeep.io/u/%E4%BF%8A%E4%BD%91%E9%83%AD) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--230000/--237400/--237495.json)) - 2,147,483,644 xp  
9. [manawarf04_623](https://deeeep.io/u/manawarf04_623) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--521600/--521669.json)) - 2,147,483,642 xp  
10. [ouo_945](https://deeeep.io/u/ouo_945) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--516500/--516506.json)) - 2,147,483,641 xp  
<details>
<summary>Show more</summary>

11. [brayanc_558](https://deeeep.io/u/brayanc_558) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--520300/--520314.json)) - 2,147,483,640 xp  
12. [80629_794](https://deeeep.io/u/80629_794) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--521100/--521148.json)) - 2,147,483,640 xp  
13. [4421665_860](https://deeeep.io/u/4421665_860) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--507400/--507412.json)) - 2,147,483,639 xp  
14. [ZzZ01](https://deeeep.io/u/ZzZ01) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--521900/--521930.json)) - 2,147,483,639 xp  
15. [39](https://deeeep.io/u/39) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--524400/--524446.json)) - 2,147,483,639 xp  
16. [gonegaming.](https://deeeep.io/u/gonegaming.) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--300000/--301900/--301915.json)) - 2,147,483,636 xp  
17. [TeaCat茶貓](https://deeeep.io/u/TeaCat%E8%8C%B6%E8%B2%93) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--540300/--540383.json)) - 2,147,483,636 xp  
18. [米田_801](https://deeeep.io/u/%E7%B1%B3%E7%94%B0_801) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--516300/--516304.json)) - 2,147,483,630 xp  
19. [5327679_832](https://deeeep.io/u/5327679_832) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--490000/--493000/--493063.json)) - 2,147,483,611 xp  
20. [markosh_916](https://deeeep.io/u/markosh_916) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--470000/--474200/--474259.json)) - 2,147,483,609 xp  
21. [lyritz_912](https://deeeep.io/u/lyritz_912) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--420000/--422400/--422441.json)) - 2,147,483,608 xp  
22. [禾品陳](https://deeeep.io/u/%E7%A6%BE%E5%93%81%E9%99%B3) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/---60000/---69000/---69083.json)) - 2,147,483,585 xp  
23. [地球的地_506](https://deeeep.io/u/%E5%9C%B0%E7%90%83%E7%9A%84%E5%9C%B0_506) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--522000/--522065.json)) - 2,147,483,527 xp  
24. [dyland_881](https://deeeep.io/u/dyland_881) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--520800/--520809.json)) - 2,147,359,605 xp  
25. [33275_596](https://deeeep.io/u/33275_596) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--410000/--418600/--418687.json)) - 2,147,308,221 xp  
26. [晉池_588](https://deeeep.io/u/%E6%99%89%E6%B1%A0_588) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--470000/--479400/--479409.json)) - 2,147,234,091 xp  
27. [lauramanuelar_584](https://deeeep.io/u/lauramanuelar_584) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--519900/--519977.json)) - 2,146,723,190 xp  
28. [小路山_564](https://deeeep.io/u/%E5%B0%8F%E8%B7%AF%E5%B1%B1_564) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--518500/--518557.json)) - 2,146,572,363 xp  
29. [annabelw_250](https://deeeep.io/u/annabelw_250) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--508400/--508442.json)) - 2,146,420,946 xp  
30. [PMJohn](https://deeeep.io/u/PMJohn) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--514200/--514269.json)) - 2,146,295,742 xp  
31. [2916695_610](https://deeeep.io/u/2916695_610) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--490000/--499800/--499805.json)) - 2,146,215,229 xp  
32. [theanimem_448](https://deeeep.io/u/theanimem_448) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--490000/--495800/--495825.json)) - 2,145,550,786 xp  
33. [9469474_595](https://deeeep.io/u/9469474_595) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--480000/--480600/--480624.json)) - 2,145,430,625 xp  
34. [威威陳_339](https://deeeep.io/u/%E5%A8%81%E5%A8%81%E9%99%B3_339) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--504200/--504286.json)) - 2,145,231,456 xp  
35. [gretellv_989](https://deeeep.io/u/gretellv_989) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--520100/--520113.json)) - 2,145,191,924 xp  
36. [8026397_940](https://deeeep.io/u/8026397_940) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--522000/--522005.json)) - 2,145,162,221 xp  
37. [政翔王_561](https://deeeep.io/u/%E6%94%BF%E7%BF%94%E7%8E%8B_561) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--370000/--370300/--370373.json)) - 2,145,000,103 xp  
38. [189747_374](https://deeeep.io/u/189747_374) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--513600/--513651.json)) - 2,144,545,425 xp  
39. [287578_802](https://deeeep.io/u/287578_802) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--512000/--512057.json)) - 2,144,379,455 xp  
40. [aarong_612](https://deeeep.io/u/aarong_612) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--490000/--495800/--495829.json)) - 2,144,199,233 xp  
41. [justinl_222](https://deeeep.io/u/justinl_222) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--500500/--500588.json)) - 2,144,008,315 xp  
42. [Lelee](https://deeeep.io/u/Lelee) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--518500/--518544.json)) - 2,143,987,701 xp  
43. [490416_324](https://deeeep.io/u/490416_324) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--509300/--509359.json)) - 2,143,812,783 xp  
44. [吉良郑_783](https://deeeep.io/u/%E5%90%89%E8%89%AF%E9%83%91_783) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--400000/--407800/--407852.json)) - 2,143,787,252 xp  
45. [3945500_344](https://deeeep.io/u/3945500_344) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--449100/--449173.json)) - 2,143,720,767 xp  
46. [信齊紀](https://deeeep.io/u/%E4%BF%A1%E9%BD%8A%E7%B4%80) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/---90000/---99800/---99862.json)) - 2,143,437,646 xp  
47. [nhocxx_293](https://deeeep.io/u/nhocxx_293) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--521600/--521610.json)) - 2,143,261,909 xp  
48. [shitingc_292](https://deeeep.io/u/shitingc_292) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--514700/--514764.json)) - 2,143,112,559 xp  
49. [jimh](https://deeeep.io/u/jimh) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/---10000/---11400/---11430.json)) - 2,142,854,524 xp  
50. [楓葉_920](https://deeeep.io/u/%E6%A5%93%E8%91%89_920) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--360000/--364400/--364424.json)) - 2,142,564,224 xp
</details>

### Kill count
1. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 306,807 kills  
2. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--448500/--448541.json)) - 229,416 kills  
3. [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--569700/--569738.json)) - 214,288 kills  
4. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 200,753 kills  
5. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 184,013 kills  
6. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 175,016 kills  
7. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 162,754 kills  
8. [😈Tayjaygang😈ㅤㅤ](https://deeeep.io/u/%F0%9F%98%88Tayjaygang%F0%9F%98%88%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 134,026 kills  
9. [Rem2](https://deeeep.io/u/Rem2) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14004900/14004913.json)) - 132,468 kills  
10. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 126,987 kills  
<details>
<summary>Show more</summary>

11. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 110,212 kills  
12. [_Silence](https://deeeep.io/u/_Silence) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--670000/--679400/--679460.json)) - 108,335 kills  
13. [Fantah](https://deeeep.io/u/Fantah) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--782800/--782854.json)) - 108,268 kills  
14. [Sworb](https://deeeep.io/u/Sworb) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14007100/14007129.json)) - 108,243 kills  
15. [iWormify](https://deeeep.io/u/iWormify) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--410000/--418700/--418772.json)) - 107,149 kills  
16. [TongueEatingLouse](https://deeeep.io/u/TongueEatingLouse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--480000/--486100/--486161.json)) - 104,511 kills  
17. [𝐁𝐈𝐆⓶𝐓𝐎𝐏ㅤ](https://deeeep.io/u/%F0%9D%90%81%F0%9D%90%88%F0%9D%90%86%E2%93%B6%F0%9D%90%93%F0%9D%90%8E%F0%9D%90%8F%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--715500/--715588.json)) - 100,361 kills  
18. [𝓢𝓸𝓾𝓳𝓲ソウジ](https://deeeep.io/u/%F0%9D%93%A2%F0%9D%93%B8%F0%9D%93%BE%F0%9D%93%B3%F0%9D%93%B2%E3%82%BD%E3%82%A6%E3%82%B8) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--712000/--712057.json)) - 97,963 kills  
19. [Gh0sts](https://deeeep.io/u/Gh0sts) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--620000/--626200/--626256.json)) - 96,430 kills  
20. [Alopiax](https://deeeep.io/u/Alopiax) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--650000/--650300/--650380.json)) - 94,814 kills  
21. [AsianGiantSquid](https://deeeep.io/u/AsianGiantSquid) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20766500/20766553.json)) - 93,938 kills  
22. [supercar](https://deeeep.io/u/supercar) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--680000/--688700/--688716.json)) - 91,355 kills  
23. [GoldMask](https://deeeep.io/u/GoldMask) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--510000/--512100/--512111.json)) - 88,411 kills  
24. [A4134307_740](https://deeeep.io/u/A4134307_740) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--700200/--700253.json)) - 88,090 kills  
25. [𝑲𝒊𝒏𝒈_𝑺𝒊𝒛𝒆](https://deeeep.io/u/%F0%9D%91%B2%F0%9D%92%8A%F0%9D%92%8F%F0%9D%92%88_%F0%9D%91%BA%F0%9D%92%8A%F0%9D%92%9B%F0%9D%92%86) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--749700/--749790.json)) - 85,219 kills  
26. [cashshit](https://deeeep.io/u/cashshit) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20741200/20741230.json)) - 83,645 kills  
27. [Rh_4m](https://deeeep.io/u/Rh_4m) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--580000/--583400/--583491.json)) - 82,763 kills  
28. [felixk_359](https://deeeep.io/u/felixk_359) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--530000/--538100/--538166.json)) - 82,605 kills  
29. [Kanaa](https://deeeep.io/u/Kanaa) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--504800/--504825.json)) - 81,957 kills  
30. [BuBuㅤ](https://deeeep.io/u/BuBu%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--751200/--751293.json)) - 80,625 kills  
31. [Swerz1008𰻞ㅤㅤㅤ](https://deeeep.io/u/Swerz1008%F0%B0%BB%9E%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 80,429 kills  
32. [PudyLove](https://deeeep.io/u/PudyLove) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--620000/--628700/--628783.json)) - 80,421 kills  
33. [𝓚𝓴-𝓼𝓾𝓹𝓮𝓻](https://deeeep.io/u/%F0%9D%93%9A%F0%9D%93%B4-%F0%9D%93%BC%F0%9D%93%BE%F0%9D%93%B9%F0%9D%93%AE%F0%9D%93%BB) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--704700/--704766.json)) - 78,734 kills  
34. [SKUChnii](https://deeeep.io/u/SKUChnii) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--450000/--455400/--455472.json)) - 77,463 kills  
35. [Garychen](https://deeeep.io/u/Garychen) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--580000/--583700/--583761.json)) - 77,094 kills  
36. [ooCarnage](https://deeeep.io/u/ooCarnage) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20810000/20810055.json)) - 76,971 kills  
37. [Azulejo_Offline](https://deeeep.io/u/Azulejo_Offline) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725700/--725746.json)) - 76,722 kills  
38. [𝓝3](https://deeeep.io/u/%F0%9D%93%9D3) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20740600/20740621.json)) - 76,042 kills  
39. [guest_8815](https://deeeep.io/u/guest_8815) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796400/--796461.json)) - 75,880 kills  
40. [Barbanegra_](https://deeeep.io/u/Barbanegra_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--733600/--733677.json)) - 75,639 kills  
41. [кurogane](https://deeeep.io/u/%D0%BAurogane) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--600000/--607800/--607888.json)) - 75,262 kills  
42. [Locus](https://deeeep.io/u/Locus) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--730200/--730248.json)) - 75,212 kills  
43. [✔IAmQiYuan](https://deeeep.io/u/%E2%9C%94IAmQiYuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--542200/--542293.json)) - 75,076 kills  
44. [hmmmmmmmmmm](https://deeeep.io/u/hmmmmmmmmmm) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20945700/20945738.json)) - 73,853 kills  
45. [Swampanion](https://deeeep.io/u/Swampanion) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20690000/20690100/20690137.json)) - 73,319 kills  
46. [babyyodaswig](https://deeeep.io/u/babyyodaswig) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--770000/--771300/--771320.json)) - 73,237 kills  
47. [Rona_](https://deeeep.io/u/Rona_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--420000/--425400/--425456.json)) - 73,140 kills  
48. [Jinty](https://deeeep.io/u/Jinty) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725400/--725475.json)) - 71,957 kills  
49. [Sift](https://deeeep.io/u/Sift) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796200/--796218.json)) - 71,819 kills  
50. [ZAIDAWGTMD](https://deeeep.io/u/ZAIDAWGTMD) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--600000/--608800/--608852.json)) - 71,057 kills
</details>

### Play count
1. [웅냐](https://deeeep.io/u/%EC%9B%85%EB%83%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21210000/21219800/21219830.json)) - 35,513 plays  
2. [silence_kms](https://deeeep.io/u/silence_kms) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21330000/21333500/21333553.json)) - 32,937 plays  
3. [ᶜᵃᵈᵉᵗ](https://deeeep.io/u/%E1%B6%9C%E1%B5%83%E1%B5%88%E1%B5%89%E1%B5%97) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--798200/--798231.json)) - 32,548 plays  
4. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 31,955 plays  
5. [MemeSanctuary](https://deeeep.io/u/MemeSanctuary) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--680000/--686300/--686323.json)) - 30,971 plays  
6. [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 27,143 plays  
7. [_𝓒𝓵𝓮𝓶𝓮𝓷𝓽𝓲𝓷𝓮_](https://deeeep.io/u/_%F0%9D%93%92%F0%9D%93%B5%F0%9D%93%AE%F0%9D%93%B6%F0%9D%93%AE%F0%9D%93%B7%F0%9D%93%BD%F0%9D%93%B2%F0%9D%93%B7%F0%9D%93%AE_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--370000/--379900/--379969.json)) - 25,977 plays  
8. [😈Tayjaygang😈ㅤㅤ](https://deeeep.io/u/%F0%9F%98%88Tayjaygang%F0%9F%98%88%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 25,551 plays  
9. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 24,886 plays  
10. [sɑdfaceFish](https://deeeep.io/u/s%C9%91dfaceFish) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--729400/--729446.json)) - 24,636 plays  
<details>
<summary>Show more</summary>

11. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--448500/--448541.json)) - 23,550 plays  
12. [Elycia](https://deeeep.io/u/Elycia) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14005200/14005201.json)) - 23,355 plays  
13. [ShocNotShoeFake](https://deeeep.io/u/ShocNotShoeFake) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--670000/--674300/--674347.json)) - 22,277 plays  
14. [DLRSimon](https://deeeep.io/u/DLRSimon) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811169.json)) - 22,267 plays  
15. [ghurb](https://deeeep.io/u/ghurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20788600/20788694.json)) - 22,212 plays  
16. [GarlinX](https://deeeep.io/u/GarlinX) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20946400/20946409.json)) - 22,035 plays  
17. [jeomi](https://deeeep.io/u/jeomi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--807800/--807891.json)) - 21,519 plays  
18. [cashshit](https://deeeep.io/u/cashshit) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20741200/20741230.json)) - 21,458 plays  
19. [Sift](https://deeeep.io/u/Sift) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796200/--796218.json)) - 21,305 plays  
20. [Orion_](https://deeeep.io/u/Orion_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--709100/--709109.json)) - 20,720 plays  
21. [TheWizardingBro](https://deeeep.io/u/TheWizardingBro) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--770000/--776000/--776019.json)) - 20,562 plays  
22. [Phu_vn](https://deeeep.io/u/Phu_vn) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20740000/20748900/20748957.json)) - 20,402 plays  
23. [weh32](https://deeeep.io/u/weh32) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--795500/--795506.json)) - 20,236 plays  
24. [Barbanegra_](https://deeeep.io/u/Barbanegra_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--733600/--733677.json)) - 20,040 plays  
25. [𝑲𝒊𝒏𝒈_𝑺𝒊𝒛𝒆](https://deeeep.io/u/%F0%9D%91%B2%F0%9D%92%8A%F0%9D%92%8F%F0%9D%92%88_%F0%9D%91%BA%F0%9D%92%8A%F0%9D%92%9B%F0%9D%92%86) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--749700/--749790.json)) - 19,812 plays  
26. [ᴄʜᴀᴍᴘɪᴏɴ](https://deeeep.io/u/%E1%B4%84%CA%9C%E1%B4%80%E1%B4%8D%E1%B4%98%C9%AA%E1%B4%8F%C9%B4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--742900/--742947.json)) - 19,589 plays  
27. [Kanaa](https://deeeep.io/u/Kanaa) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--500000/--504800/--504825.json)) - 19,503 plays  
28. [epix](https://deeeep.io/u/epix) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--743700/--743728.json)) - 19,368 plays  
29. [anna838](https://deeeep.io/u/anna838) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20971300/20971398.json)) - 19,223 plays  
30. [갓시리](https://deeeep.io/u/%EA%B0%93%EC%8B%9C%EB%A6%AC) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20820000/20821100/20821186.json)) - 19,149 plays  
31. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 18,955 plays  
32. [Azulejo_Offline](https://deeeep.io/u/Azulejo_Offline) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725700/--725746.json)) - 18,633 plays  
33. [Locus](https://deeeep.io/u/Locus) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--730200/--730248.json)) - 18,481 plays  
34. [liliilililil](https://deeeep.io/u/liliilililil) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--797600/--797672.json)) - 18,414 plays  
35. [guest_8815](https://deeeep.io/u/guest_8815) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--796400/--796461.json)) - 17,888 plays  
36. [ϻѶƤ](https://deeeep.io/u/%CF%BB%D1%B6%C6%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--770000/--774900/--774931.json)) - 17,880 plays  
37. [Gren](https://deeeep.io/u/Gren) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20752800/20752882.json)) - 17,635 plays  
38. [JEREMIYYYYY](https://deeeep.io/u/JEREMIYYYYY) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--770000/--770700/--770739.json)) - 17,409 plays  
39. [monsieur_stuff](https://deeeep.io/u/monsieur_stuff) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--766400/--766426.json)) - 17,308 plays  
40. [TER-MİNATÖR☕](https://deeeep.io/u/TER-M%C4%B0NAT%C3%96R%E2%98%95) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20720000/20723700/20723789.json)) - 17,155 plays  
41. [manduㅤ](https://deeeep.io/u/mandu%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--100000/--106700/--106746.json)) - 17,138 plays  
42. [🖤𝑡ü𝑟𝑘𝑝𝑟𝑜💔](https://deeeep.io/u/%F0%9F%96%A4%F0%9D%91%A1%C3%BC%F0%9D%91%9F%F0%9D%91%98%F0%9D%91%9D%F0%9D%91%9F%F0%9D%91%9C%F0%9F%92%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--780100/--780170.json)) - 17,077 plays  
43. [tBoom](https://deeeep.io/u/tBoom) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--550000/--557600/--557649.json)) - 16,939 plays  
44. [DerpyDerp](https://deeeep.io/u/DerpyDerp) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20720000/20729800/20729851.json)) - 16,931 plays  
45. [KROKODIL_](https://deeeep.io/u/KROKODIL_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--787200/--787239.json)) - 16,653 plays  
46. [Rh_4m](https://deeeep.io/u/Rh_4m) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--580000/--583400/--583491.json)) - 16,580 plays  
47. [Sworb](https://deeeep.io/u/Sworb) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14007100/14007129.json)) - 16,400 plays  
48. [AlexPoatan](https://deeeep.io/u/AlexPoatan) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20758000/20758000.json)) - 16,396 plays  
49. [Primer_](https://deeeep.io/u/Primer_) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21222600/21222683.json)) - 16,390 plays  
50. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 16,305 plays
</details>

### Views
1. [deleted-user-3848](https://deeeep.io/u/deleted-user-3848) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--524700/--524705.json)) - 1,194,425 views  
2. [ᴄʜᴀᴍᴘɪᴏɴ](https://deeeep.io/u/%E1%B4%84%CA%9C%E1%B4%80%E1%B4%8D%E1%B4%98%C9%AA%E1%B4%8F%C9%B4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--742900/--742947.json)) - 1,012,470 views  
3. [mahdighurb](https://deeeep.io/u/mahdighurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21030000/21038500/21038507.json)) - 653,940 views  
4. [moob](https://deeeep.io/u/moob) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--460000/--466900/--466909.json)) - 135,225 views  
5. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 123,324 views  
6. [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 109,780 views  
7. [FederationBot18263](https://deeeep.io/u/FederationBot18263) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21316400/21316401.json)) - 107,187 views  
8. [Unmamedㅤ](https://deeeep.io/u/Unmamed%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--756300/--756301.json)) - 81,379 views  
9. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 74,420 views  
10. [Swerz1008𰻞ㅤㅤㅤ](https://deeeep.io/u/Swerz1008%F0%B0%BB%9E%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 65,694 views  
<details>
<summary>Show more</summary>

11. [SeanQuan](https://deeeep.io/u/SeanQuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21377900/21377920.json)) - 65,602 views  
12. [ClimateChange](https://deeeep.io/u/ClimateChange) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20789200/20789201.json)) - 65,175 views  
13. [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 57,160 views  
14. [seagirl](https://deeeep.io/u/seagirl) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20784700/20784740.json)) - 52,408 views  
15. [Jinty](https://deeeep.io/u/Jinty) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--725400/--725475.json)) - 50,606 views  
16. [_Silence](https://deeeep.io/u/_Silence) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--670000/--679400/--679460.json)) - 43,530 views  
17. [🍁Nickニッキー](https://deeeep.io/u/%F0%9F%8D%81Nick%E3%83%8B%E3%83%83%E3%82%AD%E3%83%BC) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21327000/21327006.json)) - 34,711 views  
18. [칭크러스](https://deeeep.io/u/%EC%B9%AD%ED%81%AC%EB%9F%AC%EC%8A%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20690000/20692100/20692196.json)) - 32,671 views  
19. [willz](https://deeeep.io/u/willz) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21360000/21366400/21366469.json)) - 32,285 views  
20. [nemo-](https://deeeep.io/u/nemo-) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21390000/21394700/21394781.json)) - 31,746 views  
21. [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--569700/--569738.json)) - 30,574 views  
22. [☪𝓦𝓪𝓵𝓵](https://deeeep.io/u/%E2%98%AA%F0%9D%93%A6%F0%9D%93%AA%F0%9D%93%B5%F0%9D%93%B5) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20760300/20760325.json)) - 30,060 views  
23. [카ㅤ](https://deeeep.io/u/%EC%B9%B4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20980000/20984300/20984367.json)) - 28,311 views  
24. [Sworb](https://deeeep.io/u/Sworb) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14007100/14007129.json)) - 28,263 views  
25. [Un3h](https://deeeep.io/u/Un3h) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--763500/--763575.json)) - 28,209 views  
26. [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 28,084 views  
27. [龜_](https://deeeep.io/u/%E9%BE%9C_) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20753500/20753576.json)) - 27,949 views  
28. [Fantah](https://deeeep.io/u/Fantah) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--782800/--782854.json)) - 27,800 views  
29. [Sidereal](https://deeeep.io/u/Sidereal) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20944400/20944438.json)) - 27,423 views  
30. [hmmmmmmmmmm](https://deeeep.io/u/hmmmmmmmmmm) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20940000/20945700/20945738.json)) - 26,934 views  
31. [ʚ𝘾𝙖𝙩𝙈𝙚𝙢𝙤𝙧𝙞𝙚𝙨✵](https://deeeep.io/u/%CA%9A%F0%9D%98%BE%F0%9D%99%96%F0%9D%99%A9%F0%9D%99%88%F0%9D%99%9A%F0%9D%99%A2%F0%9D%99%A4%F0%9D%99%A7%F0%9D%99%9E%F0%9D%99%9A%F0%9D%99%A8%E2%9C%B5) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--752100/--752178.json)) - 26,183 views  
32. [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 25,320 views  
33. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 23,872 views  
34. [卄anu卄al](https://deeeep.io/u/%E5%8D%84anu%E5%8D%84al) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21260000/21263200/21263207.json)) - 23,601 views  
35. [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 23,571 views  
36. [smoketree](https://deeeep.io/u/smoketree) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21270000/21277400/21277454.json)) - 23,538 views  
37. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 23,338 views  
38. [AsianGiantSquid](https://deeeep.io/u/AsianGiantSquid) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20766500/20766553.json)) - 23,317 views  
39. [Rem2](https://deeeep.io/u/Rem2) ([archive](https://github.com/deeeepio-archive/users/blob/main/14000000/14000000/14004900/14004913.json)) - 23,247 views  
40. [Tacoco](https://deeeep.io/u/Tacoco) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--709200/--709227.json)) - 22,074 views  
41. [indiankiller](https://deeeep.io/u/indiankiller) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21372400/21372470.json)) - 21,964 views  
42. [_𝐙𝐚𝐜𝐤_](https://deeeep.io/u/_%F0%9D%90%99%F0%9D%90%9A%F0%9D%90%9C%F0%9D%90%A4_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--660000/--665900/--665997.json)) - 21,481 views  
43. [Slam1](https://deeeep.io/u/Slam1) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20972400/20972491.json)) - 21,372 views  
44. [TheWizardingBro](https://deeeep.io/u/TheWizardingBro) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--770000/--776000/--776019.json)) - 20,910 views  
45. [飛天沙丁](https://deeeep.io/u/%E9%A3%9B%E5%A4%A9%E6%B2%99%E4%B8%81) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21347500/21347574.json)) - 20,649 views  
46. [Takma](https://deeeep.io/u/Takma) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20800000/20807600/20807693.json)) - 20,568 views  
47. [minne](https://deeeep.io/u/minne) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20730000/20733600/20733615.json)) - 20,116 views  
48. [Myhailot](https://deeeep.io/u/Myhailot) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--680000/--687300/--687357.json)) - 19,820 views  
49. [bluefis](https://deeeep.io/u/bluefis) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--480000/--487300/--487355.json)) - 19,559 views  
50. [Ngaa](https://deeeep.io/u/Ngaa) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795600/20795658.json)) - 19,227 views

