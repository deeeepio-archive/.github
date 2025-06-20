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
Forum posts: 61,360 files (1.1G)  
Maps: 12,067 files (713M)  
Play histories: 5,211,033 files (21G)  
Users: 1,088,318 files (4.3G)  


## Forum leaderboards
### Comments
1. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 696 comments  
2. [¿Qué es lo más difícil de ver?](https://deeeep.io/forum/es/50727) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---50700/---50727.json)) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21318200/21318236.json)) - 440 comments  
3. [volvi de nuevo](https://deeeep.io/forum/es/61058) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---60000/---61000/---61058.json)) by [3XEcutioner](https://deeeep.io/u/3XEcutioner) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21400000/21401200/21401217.json)) - 430 comments  
4. [Soy amigo de WorldStarMoney, hagan sus preguntas.](https://deeeep.io/forum/es/53630) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53600/---53630.json)) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21318200/21318236.json)) - 359 comments  
5. [ELBROMAS SIEMPRE GANA](https://deeeep.io/forum/es/53083) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53000/---53083.json)) by [ElBromas🤡](https://deeeep.io/u/ElBromas%F0%9F%A4%A1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21180000/21182900/21182964.json)) - 350 comments  
6. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---45100/---45189.json)) by [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 349 comments  
7. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 347 comments  
8. [20% de descuento](https://deeeep.io/forum/es/56485) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56400/---56485.json)) by [-The_door](https://deeeep.io/u/-The_door) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21360000/21363000/21363047.json)) - 334 comments  
9. [Reminder from Fed](https://deeeep.io/forum/en/42054) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42000/---42054.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 326 comments  
10. [Si eres Door, está es tu post.](https://deeeep.io/forum/es/56623) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56600/---56623.json)) by [SERRESIETE_v4tmp](https://deeeep.io/u/SERRESIETE_v4tmp) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20836500/20836517.json)) - 308 comments  
<details>
<summary>Show more</summary>

11. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 307 comments  
12. [I know Someone is waiting](https://deeeep.io/forum/en/59698) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---59600/---59698.json)) by [Ngaa](https://deeeep.io/u/Ngaa) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795600/20795658.json)) - 305 comments  
13. [Convocatoria a la Guerra](https://deeeep.io/forum/es/60297) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---60000/---60200/---60297.json)) by [Froggger](https://deeeep.io/u/Froggger) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21380000/21384900/21384966.json)) - 305 comments  
14. [Swampy Shores](https://deeeep.io/forum/en/53911) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53911.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 297 comments  
15. [Very very very sad and terrible news](https://deeeep.io/forum/en/61247) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---60000/---61200/---61247.json)) by [The_Derp](https://deeeep.io/u/The_Derp) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21345400/21345413.json)) - 290 comments  
16. [FFA and TFFA coin/XP system change](https://deeeep.io/forum/en/4282) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4200/----4282.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 289 comments  
17. [Хм... А по чему бы и нет?](https://deeeep.io/forum/ru/20331) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---20300/---20331.json)) by [Freyk_SI](https://deeeep.io/u/Freyk_SI) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20961400/20961496.json)) - 286 comments  
18. [GET BETTER THEASIEST | THESA DISS](https://deeeep.io/forum/en/40609) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---40600/---40609.json)) by [Veracity](https://deeeep.io/u/Veracity) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21348700/21348734.json)) - 286 comments  
19. [Make this the most commented post](https://deeeep.io/forum/en/3540) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3500/----3540.json)) by [GamerAds](https://deeeep.io/u/GamerAds) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20789600/20789601.json)) - 281 comments  
20. [The 5 Best Orcas](https://deeeep.io/forum/en/41075) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---41000/---41075.json)) by [Thesa](https://deeeep.io/u/Thesa) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21250000/21252500/21252539.json)) - 276 comments  
21. [*insert good title*](https://deeeep.io/forum/en/27238) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27200/---27238.json)) by [Smes](https://deeeep.io/u/Smes) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21300000/21306500/21306561.json)) - 269 comments  
22. [bornovnbd2008](https://deeeep.io/forum/en/6150) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----6100/----6150.json)) by [bornNov2nd2008haiti](https://deeeep.io/u/bornNov2nd2008haiti) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20836600/20836616.json)) - 268 comments  
23. [Forum Rules](https://deeeep.io/forum/en/19229) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19229.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 265 comments  
24. [Alateㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/forum/en/56573) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56500/---56573.json)) by [Nosk_Husk](https://deeeep.io/u/Nosk_Husk) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21348300/21348319.json)) - 265 comments  
25. [tutorial de como ocultar un cuerpo](https://deeeep.io/forum/es/51958) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---51900/---51958.json)) by [-The_door](https://deeeep.io/u/-The_door) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21360000/21363000/21363047.json)) - 261 comments  
26. [rating forum users from a scale of 1-10](https://deeeep.io/forum/en/56743) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56700/---56743.json)) by [Revolutionary_dumbass](https://deeeep.io/u/Revolutionary_dumbass) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21377000/21377000.json)) - 251 comments  
27. [PRIVATE CHAT ROOM #12...](https://deeeep.io/forum/en/43488) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43400/---43488.json)) by [a-SAD-cat](https://deeeep.io/u/a-SAD-cat) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21373400/21373421.json)) - 237 comments  
28. [In ur personal opinion what is the best song you've listened to?](https://deeeep.io/forum/en/59927) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---59900/---59927.json)) by [Naomiii](https://deeeep.io/u/Naomiii) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21350000/21353300/21353366.json)) - 237 comments  
29. [To Mahdi: . . .](https://deeeep.io/forum/en/36469) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---36400/---36469.json)) by [mahdighurb](https://deeeep.io/u/mahdighurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21030000/21038500/21038507.json)) - 227 comments  
30. [Hi everyone!](https://deeeep.io/forum/en/40830) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---40800/---40830.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 227 comments  
31. [Noticias: Pandemia de enfermos mentales por el doctor, psicologo y reportero B. Rojas Velez. Parte 1.](https://deeeep.io/forum/es/59336) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---59300/---59336.json)) by [ElBromas🤡](https://deeeep.io/u/ElBromas%F0%9F%A4%A1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21180000/21182900/21182964.json)) - 224 comments  
32. [Random Questions for the deeeep.io playerbase](https://deeeep.io/forum/en/12890) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12890.json)) by [WWWWWWWWWW](https://deeeep.io/u/WWWWWWWWWW) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21220000/21229300/21229308.json)) - 223 comments  
33. [top 5 con chó phiền nhất deeeep](https://deeeep.io/forum/vi/46129) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---46100/---46129.json)) by [sapeer_](https://deeeep.io/u/sapeer_) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21325700/21325798.json)) - 222 comments  
34. [Para Thesa:](https://deeeep.io/forum/es/47171) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---47100/---47171.json)) by [ElBromas🤡](https://deeeep.io/u/ElBromas%F0%9F%A4%A1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21180000/21182900/21182964.json)) - 210 comments  
35. [Map Submissions!](https://deeeep.io/forum/en/49283) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---49200/---49283.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 210 comments  
36. [50k views special Q&A](https://deeeep.io/forum/en/41952) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---41900/---41952.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 209 comments  
37. [Rules Post](https://deeeep.io/forum/en/23728) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---23700/---23728.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 203 comments  
38. [Esta post es negra como les gusta:](https://deeeep.io/forum/es/54771) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---54700/---54771.json)) by [SERRESIETE_v4tmp](https://deeeep.io/u/SERRESIETE_v4tmp) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20836500/20836517.json)) - 202 comments  
39. [Que calor 🥵](https://deeeep.io/forum/es/41876) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---41800/---41876.json)) by [Thesa](https://deeeep.io/u/Thesa) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21250000/21252500/21252539.json)) - 201 comments  
40. [Seems like the mods have doubled down :l](https://deeeep.io/forum/en/23847) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---23800/---23847.json)) by [Tammy](https://deeeep.io/u/Tammy) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21317500/21317526.json)) - 200 comments  
41. [If this gets 1000 comments i will delete System32 from my computer](https://deeeep.io/forum/en/60692) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---60000/---60600/---60692.json)) by [ooCarnageㅤ](https://deeeep.io/u/ooCarnage%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21293200/21293238.json)) - 200 comments  
42. [Forum Rules.](https://deeeep.io/forum/en/12825) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12825.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 199 comments  
43. [Biome Vote For Future Update](https://deeeep.io/forum/en/14174) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14100/---14174.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 197 comments  
44. [thuc su thi em van bi rung dong boi cai ten ay](https://deeeep.io/forum/vi/32912) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---32900/---32912.json)) by [🎀𝕭𝖙𝖗𝖆𝖒𝖒♛](https://deeeep.io/u/%F0%9F%8E%80%F0%9D%95%AD%F0%9D%96%99%F0%9D%96%97%F0%9D%96%86%F0%9D%96%92%F0%9D%96%92%E2%99%9B) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21317400/21317429.json)) - 196 comments  
45. [Nicknames for all forumers](https://deeeep.io/forum/en/43292) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---43200/---43292.json)) by [Nosk_Husk](https://deeeep.io/u/Nosk_Husk) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21348300/21348319.json)) - 195 comments  
46. [Name of your favourite main and why its the best animal in depio](https://deeeep.io/forum/en/59838) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---59800/---59838.json)) by [♪♬Symphony♬♪](https://deeeep.io/u/%E2%99%AA%E2%99%ACSymphony%E2%99%AC%E2%99%AA) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20796700/20796750.json)) - 194 comments  
47. [關於我自己的遊戲體驗](https://deeeep.io/forum/zh/10114) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---10100/---10114.json)) by [✔IAmQiYuan](https://deeeep.io/u/%E2%9C%94IAmQiYuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--542200/--542293.json)) - 193 comments  
48. [INTRODUCING . . .](https://deeeep.io/forum/en/40172) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---40100/---40172.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 192 comments  
49. [Men's mental health matters.](https://deeeep.io/forum/en/60938) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---60000/---60900/---60938.json)) by [Wels](https://deeeep.io/u/Wels) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21400000/21403700/21403734.json)) - 191 comments  
50. [Busco novio](https://deeeep.io/forum/es/46829) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---46800/---46829.json)) by [Thesa](https://deeeep.io/u/Thesa) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21250000/21252500/21252539.json)) - 190 comments
</details>

### Upvotes
1. [1v1跟pd不能玩的真正原因](https://deeeep.io/forum/zh/13452) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13400/---13452.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 300 likes  
2. [聚集了三端之力....](https://deeeep.io/forum/zh/16999) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16999.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 300 likes  
3. [亞服tffa變得超卡的 真正原因](https://deeeep.io/forum/zh/13553) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13553.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 296 likes  
4. [我對於某些開掛者的看法](https://deeeep.io/forum/zh/13334) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13300/---13334.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 281 likes  
5. [1v1,PD,TFFA全開了](https://deeeep.io/forum/zh/14032) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14000/---14032.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 259 likes  
6. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 237 likes  
7. [西奈塔的奇妙冒險ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/forum/zh/17619) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17600/---17619.json)) by [🗡弓🏹箭🏹手🗡ㅤㅤㅤ](https://deeeep.io/u/%F0%9F%97%A1%E5%BC%93%F0%9F%8F%B9%E7%AE%AD%F0%9F%8F%B9%E6%89%8B%F0%9F%97%A1%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 228 likes  
8. [西奈塔与渔民的寓意故事](https://deeeep.io/forum/zh/16026) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16000/---16026.json)) by [寄生虫HuLei_](https://deeeep.io/u/%E5%AF%84%E7%94%9F%E8%99%ABHuLei_) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20819700/20819740.json)) - 223 likes  
9. [關於西奈塔有了外掛這檔事](https://deeeep.io/forum/zh/11788) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11700/---11788.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 220 likes  
10. [ai hoshino meets pi hoshino 😱😱](https://deeeep.io/forum/en/18686) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18600/---18686.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 180 likes  
<details>
<summary>Show more</summary>

11. [**FORUM DOWNVOTE RESULTS**](https://deeeep.io/forum/en/18891) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18800/---18891.json)) by [ItsGrandPi8](https://deeeep.io/u/ItsGrandPi8) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21300000/21304800/21304852.json)) - 180 likes  
12. [I didnt die](https://deeeep.io/forum/en/19058) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19000/---19058.json)) by [ItsGrandPi9](https://deeeep.io/u/ItsGrandPi9) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21300000/21306000/21306031.json)) - 167 likes  
13. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 157 likes  
14. [Make a proper share feature](https://deeeep.io/forum/en/2276) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----2200/----2276.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 139 likes  
15. [Markdown on forums](https://deeeep.io/forum/en/3700) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----3700/----3700.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 134 likes  
16. [ai hoshino has a request](https://deeeep.io/forum/en/18314) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18300/---18314.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 129 likes  
17. [⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀](https://deeeep.io/forum/en/19337) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19337.json)) by [00757](https://deeeep.io/u/00757) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21292800/21292851.json)) - 127 likes  
18. [Новогодние скины 2023 (презентация)](https://deeeep.io/forum/ru/30731) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30700/---30731.json)) by [--Beluga--](https://deeeep.io/u/--Beluga--) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21288300/21288390.json)) - 127 likes  
19. [The Federations new rules](https://deeeep.io/forum/en/30889) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30800/---30889.json)) by [stephanietse](https://deeeep.io/u/stephanietse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--761000/--761017.json)) - 127 likes  
20. [MAHDI X GHURB RUN DEPIO EZ 50432](https://deeeep.io/forum/en/27007) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27000/---27007.json)) by [Wuasdzx](https://deeeep.io/u/Wuasdzx) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21329700/21329740.json)) - 120 likes  
21. [MAHDI X GHURB RUN DEPIO EZ 86995](https://deeeep.io/forum/en/27008) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27000/---27008.json)) by [jewraper](https://deeeep.io/u/jewraper) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21328800/21328804.json)) - 120 likes  
22. [MAHDI X GHURB RUN DEPIO EZ 92838](https://deeeep.io/forum/en/27009) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27000/---27009.json)) by [alt123](https://deeeep.io/u/alt123) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21329700/21329734.json)) - 120 likes  
23. [MAHDI X GHURB RUN DEPIO EZ 97512](https://deeeep.io/forum/en/27010) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27000/---27010.json)) by [negroslammer](https://deeeep.io/u/negroslammer) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21328700/21328788.json)) - 120 likes  
24. [MAHDI X GHURB RUN DEPIO EZ 79986](https://deeeep.io/forum/en/27011) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27000/---27011.json)) by [raper](https://deeeep.io/u/raper) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21329700/21329737.json)) - 120 likes  
25. [mahdi is a skid](https://deeeep.io/forum/en/30882) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30800/---30882.json)) by [ranbyghurbandmahdi](https://deeeep.io/u/ranbyghurbandmahdi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811179.json)) - 120 likes  
26. [The Federations new rules](https://deeeep.io/forum/en/30904) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30904.json)) by [ranbyghurbandmahdi](https://deeeep.io/u/ranbyghurbandmahdi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811179.json)) - 120 likes  
27. [The federations new rules](https://deeeep.io/forum/en/30902) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30902.json)) by [ranbyghurbandmahdi](https://deeeep.io/u/ranbyghurbandmahdi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811179.json)) - 119 likes  
28. [(Glory To The Federation) History Of the Federation (0hr-1hr after establishment)](https://deeeep.io/forum/en/30921) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30921.json)) by [TTKPlays](https://deeeep.io/u/TTKPlays) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21320000/21326900/21326969.json)) - 119 likes  
29. [The Federation's new Forum Rules (Glory to The Federation)](https://deeeep.io/forum/en/30875) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30800/---30875.json)) by [stephanietse](https://deeeep.io/u/stephanietse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--761000/--761017.json)) - 118 likes  
30. [The Federation's New Forum Rules (Glory to The Federation)](https://deeeep.io/forum/en/30876) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30800/---30876.json)) by [stephanietse](https://deeeep.io/u/stephanietse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--761000/--761017.json)) - 118 likes  
31. [The Federation's New Forum Rules (Glory To The Federation)](https://deeeep.io/forum/en/30878) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30800/---30878.json)) by [stephanietse](https://deeeep.io/u/stephanietse) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--760000/--761000/--761017.json)) - 116 likes  
32. [Swampy Shores](https://deeeep.io/forum/en/53911) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53911.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 114 likes  
33. [The Federation's New Forum Rules (All Glory To The Federation)](https://deeeep.io/forum/en/30977) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30977.json)) by [mahdigotrunbyfilbert](https://deeeep.io/u/mahdigotrunbyfilbert) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21315100/21315187.json)) - 113 likes  
34. [The Federation New Forum Rules](https://deeeep.io/forum/en/30959) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30959.json)) by [ranbyghurbandmahdi](https://deeeep.io/u/ranbyghurbandmahdi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811179.json)) - 112 likes  
35. [殺你100次✓ ／等級乃一切 恭喜西奈塔帝國入主論壇](https://deeeep.io/forum/zh/19469) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19469.json)) by [Zindai](https://deeeep.io/u/Zindai) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20700000/20703800/20703814.json)) - 111 likes  
36. [The federations new rules](https://deeeep.io/forum/en/30913) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---30900/---30913.json)) by [ranbyghurbandmahdi](https://deeeep.io/u/ranbyghurbandmahdi) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--810000/--811100/--811179.json)) - 111 likes  
37. [GET BETTER THEASIEST | THESA DISS](https://deeeep.io/forum/en/40609) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---40600/---40609.json)) by [Veracity](https://deeeep.io/u/Veracity) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21348700/21348734.json)) - 111 likes  
38. [Dp人物傳記-西奈塔3](https://deeeep.io/forum/zh/19536) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19536.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 109 likes  
39. [神射手與不敢打鉤翁—-](https://deeeep.io/forum/zh/15908) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15900/---15908.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 105 likes  
40. [管好發文ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ(並非完全真實 勿認真)](https://deeeep.io/forum/zh/19537) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19537.json)) by [🗡弓🏹箭🏹手🗡ㅤㅤㅤ](https://deeeep.io/u/%F0%9F%97%A1%E5%BC%93%F0%9F%8F%B9%E7%AE%AD%F0%9F%8F%B9%E6%89%8B%F0%9F%97%A1%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 105 likes  
41. [對我於與我同團的成員和大隊長的看法 這件事就這樣到這邊就結束了](https://deeeep.io/forum/zh/17316) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17300/---17316.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 103 likes  
42. [奈塔之執法         司馬遷](https://deeeep.io/forum/zh/19472) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19472.json)) by [🗡弓🏹箭🏹手🗡ㅤㅤㅤ](https://deeeep.io/u/%F0%9F%97%A1%E5%BC%93%F0%9F%8F%B9%E7%AE%AD%F0%9F%8F%B9%E6%89%8B%F0%9F%97%A1%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 103 likes  
43. [起初，當他們抵制撿頭仔的時候， 我沉默](https://deeeep.io/forum/zh/13562) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13562.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 102 likes  
44. [根據我精密的計算``](https://deeeep.io/forum/zh/16641) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16600/---16641.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 102 likes  
45. [✅️勾勾幫大隊長的獨白](https://deeeep.io/forum/zh/16944) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16944.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 102 likes  
46. [💥💥💥西奈塔(我)被永ban的真正原因💥💥💥](https://deeeep.io/forum/zh/19420) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19420.json)) by [西奈塔4](https://deeeep.io/u/%E8%A5%BF%E5%A5%88%E5%A1%944) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21299100/21299170.json)) - 102 likes  
47. [西奈塔大軍進入中文論壇](https://deeeep.io/forum/zh/19435) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19400/---19435.json)) by [𝕍𝕚𝕣𝕦𝕤ㅤㅤㅤㅤㅤㅤ](https://deeeep.io/u/%F0%9D%95%8D%F0%9D%95%9A%F0%9D%95%A3%F0%9D%95%A6%F0%9D%95%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20730000/20734500/20734563.json)) - 102 likes  
48. [💥💥💥管理員連別人的文都敢刪💥💥💥](https://deeeep.io/forum/zh/19520) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19500/---19520.json)) by [西奈塔塔](https://deeeep.io/u/%E8%A5%BF%E5%A5%88%E5%A1%94%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21290000/21298900/21298918.json)) - 102 likes  
49. [What's actually going on with the forums.](https://deeeep.io/forum/en/25910) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---25900/---25910.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 102 likes  
50. [完了...事情真的超不妙](https://deeeep.io/forum/zh/15986) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15900/---15986.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 100 likes
</details>

### Views
1. [Rules Post.](https://deeeep.io/forum/en/32551) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---32500/---32551.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 6,167 views  
2. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---45100/---45189.json)) by [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 4,384 views  
3. [Swampy Shores](https://deeeep.io/forum/en/53911) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53911.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 4,032 views  
4. [Forum Rules Post](https://deeeep.io/forum/en/56204) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56200/---56204.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 4,002 views  
5. [Rules Post](https://deeeep.io/forum/en/25689) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---25600/---25689.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 3,704 views  
6. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 3,057 views  
7. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 3,035 views  
8. [This... (click to see)](https://deeeep.io/forum/en/2200) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----2200/----2200.json)) by [Pαɳɳყ_Lҽ_Pαɳƈαƙҽ🥞💜🤡🗿](https://deeeep.io/u/P%CE%B1%C9%B3%C9%B3%E1%83%A7_L%D2%BD_P%CE%B1%C9%B3%C6%88%CE%B1%C6%99%D2%BD%F0%9F%A5%9E%F0%9F%92%9C%F0%9F%A4%A1%F0%9F%97%BF) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20833100/20833158.json)) - 2,960 views  
9. [FFA and TFFA coin/XP system change](https://deeeep.io/forum/en/4282) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4200/----4282.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,706 views  
10. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 2,604 views  
<details>
<summary>Show more</summary>

11. [<-_ Правила Форума _ ->](https://deeeep.io/forum/ru/19978) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19900/---19978.json)) by [𝚃𝚛𝚞𝚎_𝙽𝚞𝚐𝚐𝚎𝚝](https://deeeep.io/u/%F0%9D%9A%83%F0%9D%9A%9B%F0%9D%9A%9E%F0%9D%9A%8E_%F0%9D%99%BD%F0%9D%9A%9E%F0%9D%9A%90%F0%9D%9A%90%F0%9D%9A%8E%F0%9D%9A%9D) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20768100/20768110.json)) - 2,428 views  
12. [Reminder from Fed](https://deeeep.io/forum/en/42054) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42000/---42054.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,403 views  
13. [Forum Rules](https://deeeep.io/forum/en/19229) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19200/---19229.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,328 views  
14. [Make a proper share feature](https://deeeep.io/forum/en/2276) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----2200/----2276.json)) by [Pie3141](https://deeeep.io/u/Pie3141) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--640000/--644600/--644652.json)) - 2,263 views  
15. [重要：关于使用论坛发出政治上的看法](https://deeeep.io/forum/zh/128) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----100/-----128.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 2,213 views  
16. [小号大扫除​​​​​​​​](https://deeeep.io/forum/zh/22286) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---22200/---22286.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 2,089 views  
17. [Deeeep.io 论坛的基本准则 -](https://deeeep.io/forum/zh/15270) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15200/---15270.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 2,016 views  
18. [關於遊戲外掛以及外部軟件](https://deeeep.io/forum/zh/42073) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42000/---42073.json)) by [limbo_](https://deeeep.io/u/limbo_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--696200/--696277.json)) - 1,963 views  
19. [ALT CLEARANCE MASS PURGE](https://deeeep.io/forum/en/22342) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---22300/---22342.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,845 views  
20. [论坛清空的真像。‌‌‌‌‌‌‌‌‌‌‌‌‌‌](https://deeeep.io/forum/zh/25683) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---25600/---25683.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,679 views  
21. [Rules Post](https://deeeep.io/forum/en/23728) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---23700/---23728.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,587 views  
22. [关于向官方提建议：‌‌‌‌‌‌‌](https://deeeep.io/forum/zh/5873) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----5800/----5873.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,556 views  
23. [關於新任的論壇管理員](https://deeeep.io/forum/zh/33683) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---33600/---33683.json)) by [limbo_](https://deeeep.io/u/limbo_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--696200/--696277.json)) - 1,523 views  
24. [新的论坛管理员‌‌‌‌‌](https://deeeep.io/forum/zh/19399) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19300/---19399.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,508 views  
25. [Official 2024 Deeeep.io Awards](https://deeeep.io/forum/en/53527) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53500/---53527.json)) by [CyberBagel](https://deeeep.io/u/CyberBagel) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--755900/--755962.json)) - 1,503 views  
26. [我做了一部沼澤海岸更新的影片](https://deeeep.io/forum/zh/46142) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---46100/---46142.json)) by [Zeroes](https://deeeep.io/u/Zeroes) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--590000/--597500/--597586.json)) - 1,481 views  
27. [Deeeep.io'nun yeni Türkçe forumuna hoş geldiniz!](https://deeeep.io/forum/tr/4311) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4300/----4311.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 1,453 views  
28. [How to Fix: Respawn Glitch](https://deeeep.io/forum/en/47576) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---47500/---47576.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,398 views  
29. [The Crabinet needs you!](https://deeeep.io/forum/en/17512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17500/---17512.json)) by [Poborski](https://deeeep.io/u/Poborski) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--545400/--545482.json)) - 1,385 views  
30. [Forum Rules](https://deeeep.io/forum/en/12900) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12900/---12900.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,359 views  
31. [Forum Rules](https://deeeep.io/forum/en/11512) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11500/---11512.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,350 views  
32. [关于玩家主页标有Blocky Fish Client 的内容](https://deeeep.io/forum/zh/12935) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12900/---12935.json)) by [RichDas](https://deeeep.io/u/RichDas) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--730000/--731400/--731481.json)) - 1,341 views  
33. [Evolution Ideas](https://deeeep.io/forum/en/2261) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----2200/----2261.json)) by [zDarkSea](https://deeeep.io/u/zDarkSea) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20780000/20788700/20788719.json)) - 1,263 views  
34. [What's actually going on with the forums.](https://deeeep.io/forum/en/25910) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---25900/---25910.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,258 views  
35. [Swampy Shores Final Presentation!](https://deeeep.io/forum/en/19821) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---19800/---19821.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,224 views  
36. [GET BETTER THEASIEST | THESA DISS](https://deeeep.io/forum/en/40609) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---40600/---40609.json)) by [Veracity](https://deeeep.io/u/Veracity) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21340000/21348700/21348734.json)) - 1,219 views  
37. [关于外挂（client）举报渠道](https://deeeep.io/forum/zh/55086) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---55000/---55086.json)) by [howdy](https://deeeep.io/u/howdy) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20760000/20764500/20764598.json)) - 1,206 views  
38. [Forum Rules.](https://deeeep.io/forum/en/12825) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---12800/---12825.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,204 views  
39. [(ANUNCIO) Cambio del sistema de coins](https://deeeep.io/forum/es/4288) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4200/----4288.json)) by [MutantenatuM](https://deeeep.io/u/MutantenatuM) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--719600/--719649.json)) - 1,172 views  
40. [關於沼澤更新正式實裝](https://deeeep.io/forum/zh/53914) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53914.json)) by [limbo_](https://deeeep.io/u/limbo_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--696200/--696277.json)) - 1,151 views  
41. [生海大作战 - 新的赚钱系统](https://deeeep.io/forum/zh/4302) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4300/----4302.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,123 views  
42. [關於FFA、TFFA伺服器無法遊玩](https://deeeep.io/forum/zh/35669) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---35600/---35669.json)) by [limbo_](https://deeeep.io/u/limbo_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--696200/--696277.json)) - 1,114 views  
43. [论坛恢复过程当中。。。。。。。。。。](https://deeeep.io/forum/zh/27649) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---27600/---27649.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,112 views  
44. [Sobre o atual estado do fórum em português](https://deeeep.io/forum/pt/35211) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---35200/---35211.json)) by [Dudalina](https://deeeep.io/u/Dudalina) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--780600/--780659.json)) - 1,104 views  
45. [Custom Server Submissions!](https://deeeep.io/forum/en/24852) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---24800/---24852.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,101 views  
46. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 1,095 views  
47. [To Mahdi: . . .](https://deeeep.io/forum/en/36469) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---36400/---36469.json)) by [mahdighurb](https://deeeep.io/u/mahdighurb) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21030000/21038500/21038507.json)) - 1,087 views  
48. [PSA for OCE Players regarding FFA](https://deeeep.io/forum/en/59426) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---59400/---59426.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,087 views  
49. [新地图 公投结果出来了！](https://deeeep.io/forum/zh/15668) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---15600/---15668.json)) by [✶アイ💫𝐆𝐞𝐦𝐢𝐧𝐢🌟](https://deeeep.io/u/%E2%9C%B6%E3%82%A2%E3%82%A4%F0%9F%92%AB%F0%9D%90%86%F0%9D%90%9E%F0%9D%90%A6%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A2%F0%9F%8C%9F) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--380000/--389900/--389999.json)) - 1,076 views  
50. [Silence's Goodbye Message](https://deeeep.io/forum/en/23040) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---23000/---23040.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 1,036 views
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

