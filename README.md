# Nekoweb Discord widget

Makes multiple nekoweb stats available in an API point to use for [Discord widgets](https://discordwidgets.com/).

<img width="445" height="318" alt="image" src="https://github.com/user-attachments/assets/87ee7a9d-5b40-4e9a-8469-203834bd3c1b" />

## Usage

- Copy this repository
- Enable Github pages on branch main
- Allow Github actions to run
- Change the urls variable in update.js to the nekoweb urls you want to track

The API will be available at https://[your github name].github.io/nekoweb-discord-widget/nekoweb.json

It updates every 30 minutes, you can change this in the .github/workflows/update.yml file
