import NodeGit from 'nodegit';
import path from 'path';
import { todo } from '../../utils';
import LFS from '../../../build/src';
import ls from '../../../build/src/commands/ls';

describe('ls-files', () => {
  it('does generate ls response', () => {
    const workdirPath = path.resolve(__dirname, '..', '..', 'repos', 'lfs-test-repository');
    const NodeGitLFS = LFS(NodeGit);

    return NodeGitLFS.Repository.open(workdirPath)
      .then(repo => ls(repo, { long: true }))
      .then(() => todo());
  });
});
