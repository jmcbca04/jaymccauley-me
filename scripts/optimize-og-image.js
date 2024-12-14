const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public', 'jaymccauley-og.png');
const outputPath = path.join(process.cwd(), 'public', 'jaymccauley-og-optimized.png');

async function optimizeImage() {
  try {
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 29, g: 35, b: 42, alpha: 1 } // Dark theme background color
      })
      .toFile(outputPath);

    console.log('✅ OG image optimized successfully!');
    console.log(`Original image: ${inputPath}`);
    console.log(`Optimized image: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error optimizing image:', error);
  }
}

optimizeImage(); 