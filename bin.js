#!/usr/bin/env node

// Imports
import chalk from 'chalk';
import { createWordArt, delay } from './styles.js';
import centerAlign from 'center-align';


// Variables
const log = console.log;


// Main Function
function main() {


    // Empty Space
    log("");
    log("");


    // Centered ASCII Text WordArt
    createWordArt("Aditya  Maurya");


    // Empty Space
    log("");
    log("");


    // Delay before executing the next lines (5000 milliseconds = 5 seconds)
    delay(1).then(() => {
        // Centered
        log("");
    });


    // Centered
    // log(chalk.yellow(centerAlign('My Socials', (process.stdout.columns || 80))));


    // Description
    log("Ayo! I'm Aditya, a full stack developer and programmer. I pride myself on being reliable, always ready to deliver whenever needed. With a strong grasp of core concepts, I tackle complex challenges with ease. But coding isn't just serious business for me; I bring a touch of humor and entertainment to the table. Collaboration with me is not only productive but also enjoyable. Oh, and did I mention my love for coffee? It fuels my passion for technology and innovation. If you're looking for a skilled, entertaining developer who never misses a beat, let's connect! ")
    log("");
    log("");


    // Socials
    log("   ⬇️ ", "My Socials", "⬇️")
    log("");

    log(chalk.bgHex("#EDF2F8").black("Portfolio"), "   ", chalk.white("https://adityamaurya.netlify.app/"));
    log(chalk.bgHex("#171515").white("GitHub"), "      ", chalk.white("https://github.com/adxxtya/"));
    log(chalk.bgHex("#0A66C2").white("LinkedIn"), "    ", chalk.white("https://linkedin.com/in/adxxtya/"));
    log(chalk.bgHex("#FF4500").white("Reddit"), "      ", chalk.white("https://www.reddit.com/user/Unusual-Progress-267/"));
    log(chalk.bgHex("#E49E3E").black("LeetCode"), "    ", chalk.white("https://leetcode.com/adxxtya/"));
    log(chalk.bgHex("#F6017E").black("Instagram"), "   ", chalk.white("https://www.instagram.com/adxxtya/"));


    // My Works
    log("");
    log("");
    log("   ⬇️ ", "My Works", "⬇️")
    log("");

    log(chalk.bgWhite.black("My Open Source Projects"), "    ", chalk.white("https://github.com/adxxtya?tab=repositories/"));
    log(chalk.bgHex("#ACBB3B").black("Sync-o-Philia"), "              ", chalk.white("https://github.com/adxxtya/syncophilia/"));
    log(chalk.bgHex("#8956FF").white("destructure-html"), "           ", chalk.white("https://www.npmjs.com/package/destructure-html/"));
    log(chalk.bgHex("#D7111F").black("Xilflix"), "                    ", chalk.white("https://www.xilflix.ml/"));

    log("")

    log(chalk.underline("+ Many More..."))

    log("");
    log("");


}

main();

