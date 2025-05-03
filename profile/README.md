# Deeeep.io Archive

An automated archive for [Deeeep.io](https://deeeep.io/).

# 📚 Repositories

## [the-archiver](https://github.com/deeeepio-archive/the-archiver)

This repository contains the code responsible for scraping Deeeep.io's API and committing them to archive repositories.

## [forumPosts](https://github.com/deeeepio-archive/forumPosts)

Archive of the Deeeep.io forums. It includes all forum regions (English, Chinese, Portuguese, Spanish, Bork, Turkish, Russian, Vietnamese, and Polish). The archive also includes publicly visible comments for each post.

## [maps](https://github.com/deeeepio-archive/maps)

Archive of maps created in the [Deeeep.io Mapmaker](https://mapmaker.deeeep.io/).

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
Forum posts: 59,215 files (1014M)  
Maps: 11,989 files (708M)  
Users: 1,078,259 files (4.2G)  


## Forum leaderboards
### Comments
1. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 683 comments  
2. [¿Qué es lo más difícil de ver?](https://deeeep.io/forum/es/50727) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---50700/---50727.json)) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21318200/21318236.json)) - 440 comments  
3. [Soy amigo de WorldStarMoney, hagan sus preguntas.](https://deeeep.io/forum/es/53630) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53600/---53630.json)) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21318200/21318236.json)) - 359 comments  
4. [ELBROMAS SIEMPRE GANA](https://deeeep.io/forum/es/53083) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53000/---53083.json)) by [ElBromas🤡](https://deeeep.io/u/ElBromas%F0%9F%A4%A1) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21180000/21182900/21182964.json)) - 350 comments  
5. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---45100/---45189.json)) by [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 349 comments  
6. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 347 comments  
7. [20% de descuento](https://deeeep.io/forum/es/56485) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56400/---56485.json)) by [-The_door](https://deeeep.io/u/-The_door) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21360000/21363000/21363047.json)) - 334 comments  
8. [Reminder from Fed](https://deeeep.io/forum/en/42054) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---42000/---42054.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 326 comments  
9. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 307 comments  
10. [Swampy Shores](https://deeeep.io/forum/en/53911) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53911.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 296 comments

### Upvotes
1. [1v1跟pd不能玩的真正原因](https://deeeep.io/forum/zh/13452) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13400/---13452.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 300 likes  
2. [聚集了三端之力....](https://deeeep.io/forum/zh/16999) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16900/---16999.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 300 likes  
3. [亞服tffa變得超卡的 真正原因](https://deeeep.io/forum/zh/13553) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13500/---13553.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 296 likes  
4. [我對於某些開掛者的看法](https://deeeep.io/forum/zh/13334) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13300/---13334.json)) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20960000/20968600/20968673.json)) - 281 likes  
5. [1v1,PD,TFFA全開了](https://deeeep.io/forum/zh/14032) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---14000/---14032.json)) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--718500/--718596.json)) - 259 likes  
6. [史記：西奈塔列傳__](https://deeeep.io/forum/zh/13632) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---13600/---13632.json)) by [謝宗諺](https://deeeep.io/u/%E8%AC%9D%E5%AE%97%E8%AB%BA) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--720200/--720210.json)) - 237 likes  
7. [西奈塔的奇妙冒險ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/forum/zh/17619) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17600/---17619.json)) by [請勿違規紅線停車以免愛車遭拖屌ㅤ](https://deeeep.io/u/%E8%AB%8B%E5%8B%BF%E9%81%95%E8%A6%8F%E7%B4%85%E7%B7%9A%E5%81%9C%E8%BB%8A%E4%BB%A5%E5%85%8D%E6%84%9B%E8%BB%8A%E9%81%AD%E6%8B%96%E5%B1%8C%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--799100/--799158.json)) - 228 likes  
8. [西奈塔与渔民的寓意故事](https://deeeep.io/forum/zh/16026) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---16000/---16026.json)) by [寄生虫HuLei_](https://deeeep.io/u/%E5%AF%84%E7%94%9F%E8%99%ABHuLei_) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20819700/20819740.json)) - 223 likes  
9. [關於西奈塔有了外掛這檔事](https://deeeep.io/forum/zh/11788) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---11700/---11788.json)) by [angryfish_](https://deeeep.io/u/angryfish_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--794800/--794821.json)) - 220 likes  
10. [ai hoshino meets pi hoshino 😱😱](https://deeeep.io/forum/en/18686) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---18600/---18686.json)) by [AiHoshino](https://deeeep.io/u/AiHoshino) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21280000/21286100/21286162.json)) - 180 likes

### Views
1. [Rules Post.](https://deeeep.io/forum/en/32551) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---30000/---32500/---32551.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 6,167 views  
2. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---40000/---45100/---45189.json)) by [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 4,376 views  
3. [Swampy Shores](https://deeeep.io/forum/en/53911) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---53900/---53911.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 3,959 views  
4. [Rules Post](https://deeeep.io/forum/en/25689) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---20000/---25600/---25689.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 3,704 views  
5. [Forum Rules](https://deeeep.io/forum/en/9477) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----9400/----9477.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 3,052 views  
6. [Welcome to the new Deeeep.io's forum!](https://deeeep.io/forum/en/246) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/-----200/-----246.json)) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 3,008 views  
7. [This... (click to see)](https://deeeep.io/forum/en/2200) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----2200/----2200.json)) by [Pαɳɳყ_Lҽ_Pαɳƈαƙҽ🥞💜🤡🗿](https://deeeep.io/u/P%CE%B1%C9%B3%C9%B3%E1%83%A7_L%D2%BD_P%CE%B1%C9%B3%C6%88%CE%B1%C6%99%D2%BD%F0%9F%A5%9E%F0%9F%92%9C%F0%9F%A4%A1%F0%9F%97%BF) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20830000/20833100/20833158.json)) - 2,835 views  
8. [Forum Rules Post](https://deeeep.io/forum/en/56204) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---50000/---56200/---56204.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,715 views  
9. [FFA and TFFA coin/XP system change](https://deeeep.io/forum/en/4282) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/-------0/----4200/----4282.json)) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--690000/--694300/--694350.json)) - 2,695 views  
10. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/-------0/---10000/---17400/---17455.json)) by [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 2,445 views

## User leaderboards
### Account XP
1. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 18,263,850 xp  
2. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 18,262,350 xp  
3. [ooCarnage](https://deeeep.io/u/ooCarnage) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20810000/20810055.json)) - 17,827,650 xp  
4. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 16,631,100 xp  
5. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 16,385,100 xp  
6. [AlexPoatan](https://deeeep.io/u/AlexPoatan) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20750000/20758000/20758000.json)) - 16,037,250 xp  
7. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 13,063,200 xp  
8. [Fantah](https://deeeep.io/u/Fantah) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--780000/--782800/--782854.json)) - 13,056,450 xp  
9. [justleminouu](https://deeeep.io/u/justleminouu) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20970000/20971300/20971398.json)) - 12,975,450 xp  
10. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 12,668,100 xp

### Coins
1. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 163,549 coins  
2. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 141,400 coins  
3. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 109,112 coins  
4. [ooCarnage](https://deeeep.io/u/ooCarnage) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20810000/20810000/20810055.json)) - 95,594 coins  
5. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 86,343 coins  
6. [𝓢𝓸𝓾𝓳𝓲ソウジ](https://deeeep.io/u/%F0%9D%93%A2%F0%9D%93%B8%F0%9D%93%BE%F0%9D%93%B3%F0%9D%93%B2%E3%82%BD%E3%82%A6%E3%82%B8) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--712000/--712057.json)) - 79,185 coins  
7. [felixk_359](https://deeeep.io/u/felixk_359) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--530000/--538100/--538166.json)) - 72,608 coins  
8. [A4134307_740](https://deeeep.io/u/A4134307_740) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--700000/--700200/--700253.json)) - 68,853 coins  
9. [5890752_384](https://deeeep.io/u/5890752_384) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--590000/--597400/--597433.json)) - 68,599 coins  
10. [𝑲𝒊𝒏𝒈_𝑺𝒊𝒛𝒆](https://deeeep.io/u/%F0%9D%91%B2%F0%9D%92%8A%F0%9D%92%8F%F0%9D%92%88_%F0%9D%91%BA%F0%9D%92%8A%F0%9D%92%9B%F0%9D%92%86) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--749700/--749790.json)) - 65,229 coins

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

### Kill count
1. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 295,601 kills  
2. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--448500/--448541.json)) - 226,335 kills  
3. [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--569700/--569738.json)) - 214,288 kills  
4. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 200,753 kills  
5. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--560000/--562700/--562791.json)) - 182,526 kills  
6. [morty_376](https://deeeep.io/u/morty_376) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--440000/--442400/--442444.json)) - 173,431 kills  
7. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 160,803 kills  
8. [TheㅤLeaderㅤ](https://deeeep.io/u/The%E3%85%A4Leader%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 130,893 kills  
9. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 126,798 kills  
10. [Torent](https://deeeep.io/u/Torent) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--610000/--619100/--619106.json)) - 110,066 kills

### Play count
1. [웅냐](https://deeeep.io/u/%EC%9B%85%EB%83%90) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21210000/21219800/21219830.json)) - 35,513 plays  
2. [silence_kms](https://deeeep.io/u/silence_kms) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21330000/21333500/21333553.json)) - 32,937 plays  
3. [Flipsss](https://deeeep.io/u/Flipsss) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--790000/--798200/--798231.json)) - 32,438 plays  
4. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--710000/--716700/--716736.json)) - 31,903 plays  
5. [MemeSanctuary](https://deeeep.io/u/MemeSanctuary) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--680000/--686300/--686323.json)) - 30,971 plays  
6. [Cat_](https://deeeep.io/u/Cat_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--800000/--803400/--803418.json)) - 27,011 plays  
7. [_𝓒𝓵𝓮𝓶𝓮𝓷𝓽𝓲𝓷𝓮_](https://deeeep.io/u/_%F0%9D%93%92%F0%9D%93%B5%F0%9D%93%AE%F0%9D%93%B6%F0%9D%93%AE%F0%9D%93%B7%F0%9D%93%BD%F0%9D%93%B2%F0%9D%93%B7%F0%9D%93%AE_) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--370000/--379900/--379969.json)) - 25,977 plays  
8. [TheㅤLeaderㅤ](https://deeeep.io/u/The%E3%85%A4Leader%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--540000/--541400/--541466.json)) - 24,968 plays  
9. [sɑdfaceFish](https://deeeep.io/u/s%C9%91dfaceFish) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--720000/--729400/--729446.json)) - 24,565 plays  
10. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--630000/--633400/--633438.json)) - 24,181 plays

### Views
1. [mahdi1337ㅤㅤㅤㅤ](https://deeeep.io/u/mahdi1337%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--520000/--524700/--524705.json)) - 1,193,690 views  
2. [ᴄʜᴀᴍᴘɪᴏɴ](https://deeeep.io/u/%E1%B4%84%CA%9C%E1%B4%80%E1%B4%8D%E1%B4%98%C9%AA%E1%B4%8F%C9%B4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--742900/--742947.json)) - 1,012,336 views  
3. [mahdiㅤghurbㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/u/mahdi%E3%85%A4ghurb%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21030000/21038500/21038507.json)) - 653,883 views  
4. [moob](https://deeeep.io/u/moob) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--460000/--466900/--466909.json)) - 135,134 views  
5. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/20000000/20790000/20795500/20795558.json)) - 123,300 views  
6. [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/-------0/-------0/-------5.json)) - 108,533 views  
7. [FederationBot18263](https://deeeep.io/u/FederationBot18263) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21310000/21316400/21316401.json)) - 107,187 views  
8. [Unmamedㅤ](https://deeeep.io/u/Unmamed%E3%85%A4) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--750000/--756300/--756301.json)) - 81,152 views  
9. [echdeath](https://deeeep.io/u/echdeath) ([archive](https://github.com/deeeepio-archive/users/blob/main/-------0/--740000/--745300/--745316.json)) - 72,301 views  
10. [SeanQuan](https://deeeep.io/u/SeanQuan) ([archive](https://github.com/deeeepio-archive/users/blob/main/21000000/21370000/21377900/21377920.json)) - 65,455 views

