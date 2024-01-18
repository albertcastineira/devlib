import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Git() {

const setup1 =
`git config --global user.name “[firstname lastname]”
`

const setup2 =
`git config --global user.email “[valid-email]”
`

const setup3 =
`git config --global color.ui auto
`

const init1 =
`git init`

const init2 =
`git clone [url]`

const snapshot1 =
`git status`

const snapshot2 =
`git add [file]`

const snapshot3 =
`git reset [file]`

const snapshot4 =
`git diff`

const snapshot5 =
`git diff --staged`

const snapshot6 =
`git commit -m “[descriptive message]”`

const branch1 =
`git branch`

const branch2 =
`git branch [branch-name]`

const branch3 =
`git checkout`

const branch4 =
`git merge [branch]`

const branch5 =
`git log`

const inspect1 =
`git log`

const inspect2 =
`git log branchB..branchA`

const inspect3 =
`git log --follow [file]`

const inspect4 =
`git diff branchB...branchA`

const inspect5 =
`show any object in Git in human-readable format`

const tracking1 =
`git rm [file]`

const tracking2 =
`git mv [existing-path] [new-path]`

const tracking3 =
`git log --stat -M`

const ignoring1 =
`logs/
*.notes
pattern*/`

const ignoring2 =
`git config --global core.excludesfile [file]`

const share1 =
`git remote add [alias] [url]`

const share2 =
`git fetch [alias]`

const share3 =
`git merge [alias]/[branch]`

const share4 =
`git push [alias] [branch]`

const share5 =
`git pull`

const history1 =
`git rebase [branch]`

const history2 =
`git reset --hard [commit]`

const temporary1 =
`git stash`

const temporary2 =
`git stash list`

const temporary3 =
`git stash pop`

const temporary4 =
`git stash drop`

  return (
    <div className="container content">
      <h2>GIT</h2>
      <p>Git is a distributed <span className="font-bold underline underline-offset-2">version control system (VCS)</span> that helps developers <strong>track changes in their source code during software development</strong>. It was created by Linus Torvalds in 2005 and has become the most widely used version control system in the world. Git is known for its speed, flexibility, and ability to handle both small and large projects effectively. <br />Here are some key concepts and commands related to Git:</p>

      <h3 className="mt-10">SETUP</h3>
      <p><span className="text-white">Configuring user information used across all local repositories</span></p>

      <CodeBlock code={setup1} language={"bash"} hasDescription={true} />
      <p>set a name that is identifiable for credit when review version history</p>

      <CodeBlock code={setup2} language={"bash"} hasDescription={true} />
      <p>set an email address that will be associated with each history marker</p>

      <CodeBlock code={setup3} language={"bash"} hasDescription={true} />
      <p>set automatic command line coloring for Git for easy reviewing</p>

      <h3 className="mt-10">SETUP & INIT</h3>
      <p><span className="text-white">Configuring user information, initializing and cloning repositories</span></p>

      <CodeBlock code={init1} language={"bash"} hasDescription={true} />
      <p>initialize an existing directory as a Git repository</p>

      <CodeBlock code={init2} language={"bash"} hasDescription={true} />
      <p>retrieve an entire repository from a hosted location via URL</p>

      <h3 className="mt-10">STAGE & SNAPSHOT</h3>
      <p><span className="text-white">Working with snapshots and the Git staging area</span></p>

      <CodeBlock code={snapshot1} language={"bash"} hasDescription={true} />
      <p>show modified files in working directory, staged for your next commit</p>

      <CodeBlock code={snapshot2} language={"bash"} hasDescription={true} />
      <p>add a file as it looks now to your next commit (stage)</p>

      <CodeBlock code={snapshot3} language={"bash"} hasDescription={true} />
      <p>unstage a file while retaining the changes in working directory</p>

      <CodeBlock code={snapshot4} language={"bash"} hasDescription={true} />
      <p>diff of what is changed but not staged</p>

      <CodeBlock code={snapshot5} language={"bash"} hasDescription={true} />
      <p>diff of what is staged but not yet commited</p>

      <CodeBlock code={snapshot6} language={"bash"} hasDescription={true} />
      <p>commit your staged content as a new commit snapshot</p>

      <h3 className="mt-10">BRANCH & MERGE</h3>
      <p><span className="text-white">Isolating work in branches, changing context, and integrating changes</span></p>

      <CodeBlock code={branch1} language={"bash"} hasDescription={true} />
      <p>list your branches. a * will appear next to the currently active branch</p>

      <CodeBlock code={branch2} language={"bash"} hasDescription={true} />
      <p>create a new branch at the current commit</p>

      <CodeBlock code={branch3} language={"bash"} hasDescription={true} />
      <p>switch to another branch and check it out into your working directory</p>

      <CodeBlock code={branch4} language={"bash"} hasDescription={true} />
      <p>merge the specified branch’s history into the current one</p>

      <CodeBlock code={branch5} language={"bash"} hasDescription={true} />
      <p>show all commits in the current branch’s history</p>

      <h3 className="mt-10">INSPECT & COMPARE</h3>
      <p><span className="text-white">Examining logs, diffs and object information</span></p>

      <CodeBlock code={inspect1} language={"bash"} hasDescription={true} />
      <p>show the commit history for the currently active branch</p>

      <CodeBlock code={inspect2} language={"bash"} hasDescription={true} />
      <p>show the commits on branchA that are not on branchB</p>

      <CodeBlock code={inspect3} language={"bash"} hasDescription={true} />
      <p>show the commits that changed file, even across renames</p>

      <CodeBlock code={inspect4} language={"bash"} hasDescription={true} />
      <p>show the diff of what is in branchA that is not in branchB</p>

      <CodeBlock code={inspect5} language={"bash"} hasDescription={true} />
      <p>show any object in Git in human-readable format</p>

      <h3 className="mt-10">TRACKING PATH CHANGES</h3>
      <p><span className="text-white">Versioning file removes and path changes</span></p>

      <CodeBlock code={tracking1} language={"bash"} hasDescription={true} />
      <p>delete the file from project and stage the removal for commit</p>

      <CodeBlock code={tracking2} language={"bash"} hasDescription={true} />
      <p>change an existing file path and stage the move</p>

      <CodeBlock code={tracking3} language={"bash"} hasDescription={true} />
      <p>show all commit logs with indication of any paths that moved</p>

      <h3 className="mt-10">IGNORING PATTERNS</h3>
      <p><span className="text-white">Preventing unintentional staging or commiting of files</span></p>

      <CodeBlock code={ignoring1} language={"bash"} hasDescription={true} />
      <p>Save a file with desired paterns as .gitignore with either direct string matches or wildcard globs.</p>

      <CodeBlock code={ignoring2} language={"bash"} hasDescription={true} />
      <p>system wide ignore patern for all local repositories</p>

      <h3 className="mt-10">SHARE & UPDATE</h3>
      <p><span className="text-white">Retrieving updates from another repository and updating local repos</span></p>

      <CodeBlock code={share1} language={"bash"} hasDescription={true} />
      <p>add a git URL as an alias</p>

      <CodeBlock code={share2} language={"bash"} hasDescription={true} />
      <p>fetch down all the branches from that Git remote</p>

      <CodeBlock code={share3} language={"bash"} hasDescription={true} />
      <p>merge a remote branch into your current branch to bring it up to date</p>

      <CodeBlock code={share4} language={"bash"} hasDescription={true} />
      <p>Transmit local branch commits to the remote repository branch</p>

      <CodeBlock code={share5} language={"bash"} hasDescription={true} />
      <p>fetch and merge any commits from the tracking remote branch</p>

      <h3 className="mt-10">REWRITE HISTORY</h3>
      <p><span className="text-white">Rewriting branches, updating commits and clearing history</span></p>

      <CodeBlock code={history1} language={"bash"} hasDescription={true} />
      <p>apply any commits of current branch ahead of specified one</p>

      <CodeBlock code={history2} language={"bash"} hasDescription={true} />
      <p>clear staging area, rewrite working tree from specified commit</p>

      <h3 className="mt-10">TEMPORARY COMMITS</h3>
      <p><span className="text-white">Temporarily store modified, tracked files in order to change branches</span></p>

      <CodeBlock code={temporary1} language={"bash"} hasDescription={true} />
      <p>Save modified and staged changes</p>

      <CodeBlock code={temporary2} language={"bash"} hasDescription={true} />
      <p>list stack-order of stashed file changes</p>

      <CodeBlock code={temporary3} language={"bash"} hasDescription={true} />
      <p>write working from top of stash stack</p>

      <CodeBlock code={temporary4} language={"bash"} hasDescription={true} />
      <p>discard the changes from top of stash stack</p>

      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
          <h4>Sources</h4>
          <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
          <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
          <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
