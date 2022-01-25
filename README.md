# NodeJS microservice template enchanced

this is a base microservice template using fastify and ready to deploy

## Requisites

- nodejs lts (fixed version at `.nvmrc` file)
- npm > v6
- docker and docker compose (optative)
- git and git flow

## Pre requisites

- set up privative config at npm, you only need to change the email param at `.npmrc` file

## Use git and conventions

- For a better understanding, to use git it is recommended to create the branches using git flow [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) , so to create a new feature it would be recommended to write git flow start feature "shortname in snake_case" and this creates a new branch dependent on develop called "feature/short_name" which can easily be later requested as PR

### commits

To make commits and have a good understanding, it has been fixed to use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) based on those of Angular

### test

before any PR they must have their tests without errors. in case of being a work in progress, it would be good to do it with ` --no-verify` at the end of the command to be able to upload it, what if, the tests must be OK to authorize a PR

all this is because there are hooks created in the project, to ensure the best quality and understanding in case it has to be scaled in the future, unfortunately something like this cannot be done to comment on the functions and methods, but as a good practice it should also be done.

- **commit:**
  - First, the commit message is analyzed, which is under the conventional standard.
  - Second, a `lint --fix `is performed on all the code to maintain the quality of the code.
  - third, the CHANGELOG.md file is automatically updated with the last commit maded.
  - finally, the commit is executed leaving the changes, including the changelog in the updated repository, in the current branch
- push