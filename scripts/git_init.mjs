import fs from 'fs';
import path from 'path';
import git from 'isomorphic-git';

const dir = '/Users/nikhilzade/Downloads/Projects/portfolio-site';

async function initAndCommit() {
  console.log('Initializing git repository in:', dir);
  await git.init({ fs, dir, defaultBranch: 'main' });

  // Function to recursively get files respecting gitignore patterns
  function getFiles(currentDir, baseDir = dir) {
    let results = [];
    const list = fs.readdirSync(currentDir);
    for (const file of list) {
      if (['node_modules', '.git', 'dist', '.DS_Store'].includes(file)) continue;
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(fullPath, baseDir));
      } else {
        const relativePath = path.relative(baseDir, fullPath);
        results.push(relativePath);
      }
    }
    return results;
  }

  const files = getFiles(dir);
  console.log(`Adding ${files.length} files to git staging...`);

  for (const filepath of files) {
    await git.add({ fs, dir, filepath });
  }

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Nikhil Zade',
      email: 'nikhildzade@outlook.com',
    },
    message: 'Initial commit: Nikhil Zade Executive Portfolio Website'
  });

  console.log('Successfully created initial commit with SHA:', sha);
}

initAndCommit().catch(err => {
  console.error('Error during git init and commit:', err);
  process.exit(1);
});
