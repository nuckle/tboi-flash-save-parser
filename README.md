# The Binding of Isaac Flash Save Parser

A parser for The Binding of Isaac (Flash version) `serial.txt` save file.

## Features

- Parses and extracts data from `serial.txt` save files.
- Provides a structured way to manipulate save data.
- Built using TypeScript for reliability and scalability.

**NOTE**: This project is not well-tested. Make sure to back up your game data before using it. Copy both the `serial.txt` and `so.sol` files to ensure you can recover your progress if anything goes wrong.

## Installation

To install the parser, run the following command:


```sh
npm install tboi-flash-save-parser
```

## Common Questions

1. Where is `serial.txt`?

The `serial.txt` file is typically found in the game's directory, alongside the executable.

- **Windows**: `..\Steam\steamapps\common\The Binding Of Isaac\`
- **Mac**: `~/Library/Application Support/Steam/SteamApps/common/the binding of isaac rebirth/`
- **Linux**: `~/.steam/steam/steamapps/common//The Binding Of Isaac/`

2. My progress isn't changing or nothing gets unlocked!

If your save data doesn't seem to update, try deleting your `so.sol` file. This file is deprecated but still used by the game to sync with `serial.txt`.

- **Windows**: `%appdata%\Macromedia\Flash Player\#SharedObjects\<some random string>\localhost\`
- **Mac**: `~/Library/Preferences/Macromedia/Flash Player/#SharedObjects/4UUE5CSF/localhost/`
- **Linux**: `~/.macromedia/Flash_Player/#SharedObjects/randomstring/localhost/so.sol`

For more information, refer to [this article](https://bindingofisaac.fandom.com/wiki/Save_Data#How_serial.txt_works) on The Binding of Isaac Wiki.

## Resources

This project was inspired by [Himsl Games's video](https://www.youtube.com/watch?v=0aMURcjvbEI), titled "Save Files Explained in The Binding of Isaac!" - a fantastic explanation of the game's save system.


Additionally, a big thank you to [The Binding of Isaac Wiki](https://bindingofisaac.fandom.com/) for its detailed resources.

## Usage

### Basic example

```js
import { SaveParser } from 'tboi-flash-save-parser';

const parser = new SaveParser();

// Sample save string (contains all secrets unlocked)
const mySaveString = `8368483363880242075421014404153202610417376862552834616636650562633468860349756683014106572909430714310164031636616134270769613568846142376481024374558202460516230842051539696356153569643326066369346703378686313982078436348378013336847702214336760522433686332640368683366830848736388004803532807400313380760021433666032240368683264836848336388084873538807450313280740021138676052143366603224036868326,0,0,0,896,14890,8734,105,565,13954,301,50242,0'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1,0'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1'1,0'513'693'426'551'375'455'341'410'302'0'0,1'1'1'1'1'1'1'0'0'0,1394,274`

parser.parse(mySaveString);
console.log(parser.getMomKillsCount()); // Output: 896

parser.setMomKillsCount(412);
console.log(parser.getMomKillsCount()); // Output: 412
```

### Get Unlocked Secrets

```js
console.log(parser.getSecretsUnlocked());
// Output: Array of unlocked secrets, such as:
// [
//   { name: 'Maggy', unlocked: true },
//   { name: 'Cain', unlocked: true },
//   { name: 'Judas', unlocked: true },
//   { name: 'The Womb Floors', unlocked: true },
//   { name: 'Horsemen Appear', unlocked: true },
//   { name: 'Cube of Meat', unlocked: true },
//   ...
// ]
```

### Unlock or Lock Items and Secrets

```js
// Unlock an item
parser.unlockItem('PHD');

// Lock an item
parser.unlockItem('PHD', true);

// Unlock a secret
parser.unlockSecret('D20');

// Lock a secret
parser.unlockSecret('D20', true);
```

### Get a string for serial.txt 

```js
const newSaveString = parser.toString();
console.log(newSaveString);
// Output: A string formatted for serial.txt, such as:
// 8368483363880242075421014404153202610417376862552834616636650562633468860349756683014106572909430714310164031636616134270769613568846142376481024374558202460516230842051539696356153569643326066369346703378686313982078436348378013336847702214336760522433686332640368683366830848736388004803532807400313380760021433666032240368683264836848336388084873538807450313280740021138676052143366603224036868326,0,0,0,896,14890,8734,105,565,13954,301,50242,0'1'1'...
```

## Scripts

- `test` - Runs tests using Jest
- `build` - Compiles TypeScript

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under [the MIT License](LICENSE).
