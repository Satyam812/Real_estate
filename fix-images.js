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

  if (content.includes('/ loading="lazy" decoding="async">')) {
    content = content.replaceAll('/ loading="lazy" decoding="async">', 'loading="lazy" decoding="async" />');
    changed = true;
  }
  
  if (content.includes('/ fetchpriority="high" loading="eager" decoding="async">')) {
    content = content.replaceAll('/ fetchpriority="high" loading="eager" decoding="async">', 'fetchpriority="high" loading="eager" decoding="async" />');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Fixed images in ${path.basename(file)}`);
  }
});

console.log('Image fix complete.');
