import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

const input = 'public/assets/profile/ezaldeen-profile.jpg'

await sharp(input)
  .resize(32, 32)
  .toFile('public/favicon-32x32.png')

await sharp(input)
  .resize(180, 180)
  .toFile('public/apple-touch-icon.png')

writeFileSync('public/favicon.ico', readFileSync('public/favicon-32x32.png'))

console.log('Favicons generated.')
