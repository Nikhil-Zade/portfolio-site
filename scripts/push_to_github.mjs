import fs from 'fs';
import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node/index.js';

const dir = '/Users/nikhilzade/Downloads/Projects/portfolio-site';

export async function pushToRemote(repoUrl, token) {
  console.log(`Pushing to ${repoUrl}...`);

  try {
    await git.addRemote({ fs, dir, remote: 'origin', url: repoUrl, force: true });
  } catch (e) {
    // remote might already exist
  }

  const pushResult = await git.push({
    fs,
    http,
    dir,
    remote: 'origin',
    ref: 'main',
    onAuth: () => ({ username: token, password: '' }),
  });

  console.log('Push complete:', pushResult);
  return pushResult;
}

if (process.argv[2] && process.argv[3]) {
  pushToRemote(process.argv[2], process.argv[3]).catch(console.error);
}
