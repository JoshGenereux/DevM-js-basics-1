/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "git is a local user repository software, letting you save/delete/track files conveniently on your local device" +
                     "it makes saving and going back to past versions of your software a breeze, letting you create branches and move" +
                    "between virtual timelines of your own project by hoping branch to branch if necessary."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = "GitHub is a website that hosts and saves users git repositories'. The users can upload their own git repositories" +
                        "and save them on the cloud through github servers, and let others view and also download their project." +
                        "GitHub allows multiple users to work on and collaborate on the same project in different locations," +
                        "and each user can make changes on their own branch and push said branch up to the main branch on GitHub" +
                        "creating a singular project that was built across multiple users inputs in different locations."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description: "Initializes the git repository. (creating a new repository, were it will be saved). Make sure you are" +
                    "in the folder in which your project is in",
    code: "   git init   "
};


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: "clones (makes a copy of) a repository from GitHub, and saves it to your local device",
    code: "   git repo clone <'url of git repository>'"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: "tells you the status of the changes that have been made to your project, that have not been saved" +
                " ie... weather or not you have changes made that have not been saved, or if you are all up to date" +
                " and all of your work is saved.",
    code: "git status"
};

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: "adds all of your unsaved changes to a basked of what will be saved when you tell it to do so. if you make" +
                "changes to your project, then 'git status', add those changes to a 'basket' that will be tracked and ready to save" +
                "if you continue to make changes and dont add them to the 'basket' then they wont be saved when you commit",
    code: "     git add <'directory location'> or '.'       "
};

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: "this is the 'save' button, saves all the changes in you 'add basket' to your local repository",
    code: "  git commit -m <'description of change'>    "
};

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: "pushes or uploads your local saved repository to GitHub",
    code: "   git push <'remote name'> <'branch name'>   or   git push   (if you have already pushed initially)"
};