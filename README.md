# Anteater
A Firefox extension to eat ANTs

## Why?
A lot of advertisers add utm parameters to their links to track where links are being shared. For more computer savvy people, this can be extremely annoying as it explodes the length of URLs.

## What are ANTs?
ANT is an abbreviation for Asynchronous Network Tracker. These are usually saved and tracked after the fact (usually upon link generation)

### Getting started with development
0. ensure Node.js is installed. This will also install npm.
1. edit the `eat.js` file.
2. run `npm run build`, which will create a folder called `web-ext-artifacts` with the `dist` folder containing `anteater.js`. This is the compiled source code for `eat.js`.
