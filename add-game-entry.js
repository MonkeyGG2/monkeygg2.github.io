import { exit } from 'process';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { input } from '@inquirer/prompts';

if (!existsSync('config.jsonc')) {
    console.log('config.jsonc not found! Are you in the right directory?');
    exit(1);
}

(async () => {
    const gameName = await input({ message: 'Enter the display name of the game\n>' });
    const gamePath = await input({ message: 'Enter the path from games directory to the game:\n>' });
    const gameAliases = await input({ message: 'Enter comma separated list of aliases for the game:\n>' });
    const gameAliasesList = gameAliases.split(',');
    const gameCategories = await input({ message: 'Enter comma separated list of categories for the game:\n>' });
    const gameCategoriesList = gameCategories.split(',');
    const newKey = `"${gameName}": {
            "path": "${gamePath}",
            "aliases": [${gameAliasesList.toString()}],
            "categories": [${gameCategoriesList.toString()}]
        },
        `;
    let jsonc = readFileSync('config.jsonc', 'utf-8');

    // searching only in games key value
    let i = jsonc.search(/"games":\s*{/);
    const end = jsonc.slice(i).search(/}[,\s]*}/) + i;
    i = jsonc.slice(i).indexOf('{') + i + 1;

    let curlyBracketDepth = 0;
    while (i < end) {
        const char = jsonc.charAt(i);
        const nextChar = jsonc.charAt(i + 1);
        // skipping comments
        if (char === '/') {
            if (nextChar === '/') {
                i = jsonc.indexOf('\n', i);
                continue;
            } else if (nextChar === '*') {
                i = jsonc.indexOf('*/', i + 2) + 1;
                continue;
            }
        } else if (char === '"' || char === "'") {
            // nextJump is index of next unescaped quote (single or double depending on starting quote)
            let nextJump;
            if (char === '"') {
                nextJump = jsonc.indexOf('"', i + 1);
                while (jsonc.charAt(nextJump - 1) === '\\') nextJump = jsonc.indexOf('"', nextJump + 1);
            } else {
                nextJump = jsonc.indexOf("'", i + 1);
                while (jsonc.charAt(nextJump - 1) === '\\') nextJump = jsonc.indexOf("'", nextJump + 1);
            }
            if (nextJump === -1 || nextJump > end) {
                console.log('Error while parsing file: Invalid JSONC data');
                exit(1);
            }

            if (curlyBracketDepth === 0) {
                const selectedGameName = jsonc.substring(i + 1, nextJump);
                const comparison = selectedGameName.localeCompare(gameName);

                // selectedGameName first in alphanumerical order
                if (comparison === -1) {
                    i = nextJump + 1;
                    continue;
                }

                if (comparison === 0) {
                    console.log(`Error while parsing file: game "${gameName}" is already added as an entry.`);
                    exit(1);
                }

                if (comparison === 1) {
                    jsonc = jsonc.substring(0, i) + newKey + jsonc.substring(i);
                    writeFileSync('config.jsonc', jsonc);
                    console.log('Saved to config.jsonc!');
                    exit(0);
                }

                // comparison only returns 1,0,-1 so the code should not reach this point
                console.log('Error while parsing file: comparison failed');
                exit(1);
            }

            i = nextJump;
        } else if (char === '{') {
            ++curlyBracketDepth;
        } else if (char === '}') {
            --curlyBracketDepth;
        }

        ++i;
    }

    // now i = end, no error occured but game has not been added to config data
    // game display name might be last in alphanumerical order so append the entry to the end
    jsonc =
        jsonc.substring(0, end + 1) +
        ',\n        ' +
        newKey.substring(0, newKey.lastIndexOf('\n')) +
        jsonc.substring(end + 1);

    writeFileSync('config.jsonc', jsonc);
    console.log('Saved to config.jsonc!');
    exit(0);
})();
