import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('/Users/apple/Real_Estate/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Find <img ... /> and add loading="lazy" decoding="async" if not present
  const regex = /<img\s([^>]+)>/g;
  content = content.replace(regex, (match, attrs) => {
    if (attrs.includes('loading=')) return match; // Skip if already has loading

    // If it's a hero component, make it eager, otherwise lazy
    const isHero = file.includes('Hero') || file.includes('About.jsx');
    
    let newAttrs = attrs;
    if (isHero && !attrs.includes('fetchpriority=')) {
      newAttrs = `${attrs} fetchpriority="high" loading="eager" decoding="async"`;
    } else {
      newAttrs = `${attrs} loading="lazy" decoding="async"`;
    }

    changed = true;
    return `<img ${newAttrs}>`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated images in ${path.basename(file)}`);
  }
});

console.log('Image optimization complete.');
