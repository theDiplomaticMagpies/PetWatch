## General Workflow
 
- - - Terms - - -
Main project remote (i.e. theDiplomaticMagpies/PetWatch)
Your personal remote (i.e. plasm0dium/PetWatch)
Your local machine (i.e. your laptop)
 
 

- - - First Steps - - - 
Create a dev branch on your personal remote (your GitHub):
(go to Branch button next to the green pull request button, type in “dev”, 
press enter)
 
Create a dev branch on your local machine:
        	git checkout -b dev
 
Create an upstream remote branch from the main project remote to your local machine:
 	git remote add upstream https://github.com/theDiplomaticMagpies/PetWatch.git
 
 

- - - Things to do every time you add something to the project - - -
Go to your dev branch on your local machine:
 	git checkout dev
 
Pull from the upstream to ensure your have the latest version of our project:
 	git pull --rebase upstream dev
 
Create a featureBranch (this is where you’ll add your new code to the project):
 	git checkout –b featureBranch
 
Get to coding! (You can put as many commits on this featureBranch as you want):
 
After you know your new feature works (i.e. after you’ve rigorously tested it):
Make sure you actually add your changes and the make the commit:
 	git add .
	git commit -m “[Tag] your comment”

Go back to your local machine dev branch:
 	git checkout dev
 
Pull from the upstream once more to make sure you have the latest version of our project:
 	git pull --rebase upstream dev
 
Now, merge your featureBranch with dev:
 	git merge featureBranch
 
Push your local dev branch to your personal remote dev branch on GitHub:
 	git push origin dev
 
Tell everyone on the team you’re about to make a pull request (so we don’t try to do it at the same time):
        	(“Hey everyone, I’m about to make a pull request!”)
 
Make a pull request to the main project remote dev branch:
        	(Make sure that base is dev! NOT master!)


**
In the event that you already pushed your featureBranch into the main project’s dev when your featureBranch was incomplete and you still want to work on it, it is easiest to:

Delete that old featureBranch from your local machine: 
 	git branch -d featureBranch

re-pull from the upstream:
 	git pull --rebase upstream dev

make a newFeatureBranch on your local machine 
 	git checkout -b newFeatureBranch (make sure you’re on dev when you do this)

and continue on.

**


- - - Things to note - - - 
Everyone should be working on a separate file; working on the same file will lead to merge conflicts.
Working on the frontend and backend in pairs will lead minimal merge conflicts.
If there is a merge conflict, the two parties whose code conflict, you must communicate together and work it out.
If you’re in the middle of working
Communicate constantly! Let everyone know what file you are working on. Even though you think everyone is on the same page, we could very well not be.
 
 
--------------------------------------------------------------------------------------------------------------------------------
Don’t forget to add one of these tags to the beginning of your commit messages!
[Progress]
[Add]
[Delete]
[Feature]
[Update]
[Fix]
[Layout]
[Docs]
[Merge]  (this does NOT include regular merges from featureBranch into dev)
[Cleanup]
[Refactor]
--------------------------------------------------------------------------------------------------------------------------------
