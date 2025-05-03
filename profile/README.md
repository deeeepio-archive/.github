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
1. [POV:Mike The "Great" When he sees a actually decent player.](https://deeeep.io/forum/en/17455) by [echdeath](https://deeeep.io/u/echdeath) - 683 comments  
2. [¿Qué es lo más difícil de ver?](https://deeeep.io/forum/es/50727) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) - 440 comments  
3. [Soy amigo de WorldStarMoney, hagan sus preguntas.](https://deeeep.io/forum/es/53630) by [PalomoSensacionalista](https://deeeep.io/u/PalomoSensacionalista) - 359 comments  
4. [ELBROMAS SIEMPRE GANA](https://deeeep.io/forum/es/53083) by [ElBromas🤡](https://deeeep.io/u/ElBromas%F0%9F%A4%A1) - 350 comments  
5. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) by [Cat_](https://deeeep.io/u/Cat_) - 349 comments

### Upvotes
1. [1v1跟pd不能玩的真正原因](https://deeeep.io/forum/zh/13452) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) - 300 likes  
2. [聚集了三端之力....](https://deeeep.io/forum/zh/16999) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) - 300 likes  
3. [亞服tffa變得超卡的 真正原因](https://deeeep.io/forum/zh/13553) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) - 296 likes  
4. [我對於某些開掛者的看法](https://deeeep.io/forum/zh/13334) by [✔Ac起源](https://deeeep.io/u/%E2%9C%94Ac%E8%B5%B7%E6%BA%90) - 281 likes  
5. [1v1,PD,TFFA全開了](https://deeeep.io/forum/zh/14032) by [✔C奈塔](https://deeeep.io/u/%E2%9C%94C%E5%A5%88%E5%A1%94) - 259 likes

### Views
1. [Rules Post.](https://deeeep.io/forum/en/32551) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) - 6,167 views  
2. [Swampy Shores Teasers Announcement](https://deeeep.io/forum/en/45189) by [Cat_](https://deeeep.io/u/Cat_) - 4,376 views  
3. [Swampy Shores](https://deeeep.io/forum/en/53911) by [fedeio👍](https://deeeep.io/u/fedeio%F0%9F%91%8D) - 3,959 views  
4. [Rules Post](https://deeeep.io/forum/en/25689) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) - 3,704 views  
5. [Forum Rules](https://deeeep.io/forum/en/9477) by [Whale_Shark2](https://deeeep.io/u/Whale_Shark2) - 3,052 views

## User leaderboards
### Account XP
1. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) - 18,263,850 xp  
2. [morty_376](https://deeeep.io/u/morty_376) - 18,262,350 xp  
3. [ooCarnage](https://deeeep.io/u/ooCarnage) - 17,827,650 xp  
4. [echdeath](https://deeeep.io/u/echdeath) - 16,631,100 xp  
5. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) - 16,385,100 xp

### Coins
1. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) - 163,549 coins  
2. [٠٠٠𝓛𝓸𝓵𝓵𝓲𝓹𝓸𝓹٠](https://deeeep.io/u/%D9%A0%D9%A0%D9%A0%F0%9D%93%9B%F0%9D%93%B8%F0%9D%93%B5%F0%9D%93%B5%F0%9D%93%B2%F0%9D%93%B9%F0%9D%93%B8%F0%9D%93%B9%D9%A0) - 141,400 coins  
3. [Torent](https://deeeep.io/u/Torent) - 109,112 coins  
4. [ooCarnage](https://deeeep.io/u/ooCarnage) - 95,594 coins  
5. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) - 86,343 coins

### Highest score
1. [deeeepguardian](https://deeeep.io/u/deeeepguardian) - 2,147,483,647 xp  
2. [morty_376](https://deeeep.io/u/morty_376) - 2,147,483,647 xp  
3. [지현김_591](https://deeeep.io/u/%EC%A7%80%ED%98%84%EA%B9%80_591) - 2,147,483,647 xp  
4. [killer_cat](https://deeeep.io/u/killer_cat) - 2,147,483,647 xp  
5. [moonf_568](https://deeeep.io/u/moonf_568) - 2,147,483,647 xp

### Kill count
1. [echdeath](https://deeeep.io/u/echdeath) - 295,601 kills  
2. [𝒩𝑒𝓉𝓈𝒸𝒶𝓅𝑒ㅤㅤ](https://deeeep.io/u/%F0%9D%92%A9%F0%9D%91%92%F0%9D%93%89%F0%9D%93%88%F0%9D%92%B8%F0%9D%92%B6%F0%9D%93%85%F0%9D%91%92%E3%85%A4%E3%85%A4) - 226,335 kills  
3. [LemonDemon_real](https://deeeep.io/u/LemonDemon_real) - 214,288 kills  
4. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) - 200,753 kills  
5. [٠злая_сказочка٠](https://deeeep.io/u/%D9%A0%D0%B7%D0%BB%D0%B0%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D1%87%D0%BA%D0%B0%D9%A0) - 182,526 kills

### Play count
1. [웅냐](https://deeeep.io/u/%EC%9B%85%EB%83%90) - 35,513 plays  
2. [silence_kms](https://deeeep.io/u/silence_kms) - 32,937 plays  
3. [Flipsss](https://deeeep.io/u/Flipsss) - 32,438 plays  
4. [☪Mˣsₜ](https://deeeep.io/u/%E2%98%AAM%CB%A3s%E2%82%9C) - 31,903 plays  
5. [MemeSanctuary](https://deeeep.io/u/MemeSanctuary) - 30,971 plays

### Views
1. [mahdi1337ㅤㅤㅤㅤ](https://deeeep.io/u/mahdi1337%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) - 1,193,690 views  
2. [ᴄʜᴀᴍᴘɪᴏɴ](https://deeeep.io/u/%E1%B4%84%CA%9C%E1%B4%80%E1%B4%8D%E1%B4%98%C9%AA%E1%B4%8F%C9%B4) - 1,012,336 views  
3. [mahdiㅤghurbㅤㅤㅤㅤㅤㅤㅤ](https://deeeep.io/u/mahdi%E3%85%A4ghurb%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4%E3%85%A4) - 653,883 views  
4. [moob](https://deeeep.io/u/moob) - 135,134 views  
5. [Zerahㅤ](https://deeeep.io/u/Zerah%E3%85%A4) - 123,300 views

