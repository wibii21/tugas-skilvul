```
What is the difference between git reset and git revert. When would you use one over the other?
What is the difference between git merge and git rebase. When would you use one over the other?
What is the difference between git stash pop and git stash apply. When would you use one over the other?
What kinds of things can you do in interactive mode when rebasing?

ANSWER

1. a. git reset
this command is complicated It actually does a couple of different things depending on how it is invoked. It modifies the index (the so-called "staging area"). Or it changes which commit a branch head is currently pointing at. This command may alter existing history (by changing the commit that a branch references).
b. git revert 
 This command creates a new commit that undoes the changes from a previous commit. This command adds new history to the project (it doesn't modify existing history)
2. Git merge is a command that allows you to merge branches from Git. Git rebase is a command that allows developers to integrate changes from one branch to another. If you're working alone or on a small team, use rebase. If you're working with a big team, use merge.
3. git stash pop 
Throws away the stash after applying it,
whereas git stash apply leaves it in the stash list for possible later reuse.
This happens unless there are conflicts after git stash pop, in which case it will not remove the stash, leaving it to behave exactly as git stash apply.
This happens unless there are conflicts after git stash pop, in which case it will not remove the stash, leaving it to behave exactly as git stash apply.
git stash apply 
There is one more way to look at git stash pop is 
&& 
git stash drop
Hope this helps to resolve your problem.
For more commands like this please go through the following tutorial that will help you understand the git
4.  Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing. To tell Git where to start the interactive rebase, use the SHA-1 or index of the commit that immediately precedes the commit you want to modify.




```
