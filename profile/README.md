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
