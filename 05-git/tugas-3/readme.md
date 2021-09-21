```
What does git clean do?
What do the -d and -f flags for git clean do?
What git command creates a branch?
What is the difference between a fast-forward and recursive merge?
What git command changes to another branch?
How do you remove modified or deleted files from the working directory?
What git command deletes a branch?
What does the git diff command do?
How do you remove files from the staging area?
How do merge conflicts happen?

Answer 

1. git clean is a convenience method for deleting untracked files in a repo's working directory.
2. The -d option tells git clean that you also want to remove any untracked directories, by default it will ignore directories.
   The -f option initiates the actual deletion of untracked files from the current directory. Force is required unless the clean.requireForce configuration option is set to false.    This will not remove untracked folders or files specified by .gitignore.
3. git branch <branch-name>
4. Recursive is the default merge strategy when pulling or merging one branch. Additionally this can detect and handle merges involving renames, but currently cannot make use of      detected copies. This is the default merge strategy when pulling or merging one branch.
5. The easiest way to switch branch on Git is to use the “git checkout” command and specify the name of the branch you want to switch to.
6. $> git add -u .
   $> git commit -m "removing deleted files from tracking"
   $> git push origin master
7. To delete a branch with git branch -d <branch>
8. The git diff command tells us in detail what changes occurred between two Git reference points. By default, when we run git diff without any arguments, Git will print the        changes that occurred between the working tree and HEAD. The information printed by Git is actually very informative, but sometimes we miss it because we only care about        adding and subtracting data in our code
9. To remove a file from Git, you have to remove it from your tracked files (more accurately, remove it from your staging area) and then commit. The git rm command does that,      and also removes the file from your working directory so you don't see it as an untracked file the next time around.
10. Merge conflicts can happen when merging a branch, rebasing a branch, or cherry picking a commit. If Git detects a conflict, it will highlight the conflicted area and ask        which code you wish to keep. Once you tell Git which code you want, you can save the file and proceed with the merge, rebase, or cherry pick.



 



```
