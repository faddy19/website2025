import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function compressImages() {
  const sourceDir = path.join(__dirname, '../public/imagesnavbar');
  const targetDir = path.join(__dirname, '../public/images/navbar');

  try {
    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Get all jpg files from source directory
    const files = await fs.readdir(sourceDir);
    const jpgFiles = files.filter(file => file.endsWith('.jpg'));

    for (const file of jpgFiles) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      await sharp(sourcePath)
        .resize(1200, null, { // Max width 1200px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({
          quality: 80,
          progressive: true,
        })
        .toFile(targetPath);

      console.log(`Compressed ${file}`);
    }

    console.log('All images compressed successfully!');
  } catch (error) {
    console.error('Error compressing images:', error);
  }
}

compressImages(); 