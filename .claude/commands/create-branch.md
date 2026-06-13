---
description: Pull latest code from GitHub, create a new branch, and switch to it
argument-hint: "project number and project name e.g. 1 accrodian"
allowed-tools: Read, Write, Glob, Bash(git:*)
---

You are a senior developer spinning up a new project for the react project
. Always follow the rules in CLAUDE.md.

User input: $ARGUMENTS

## Step 1 — Check working directory is clean
Run `git status` and check for uncommitted, unstaged, or
untracked files. If any exist, stop immediately and tell
the user to commit or stash changes before proceeding.
DO NOT CONTINUE until the working directory is clean.

## Step 2 — Parse the arguments
From $ARGUMENTS extract:

1. `step_number` — zero-padded to 2 digits: 2 → 02, 11 → 11

2. `project name` — human readable title in Title Case
   - Example: "accordian" or "reviews"

3. `project-slug` — git and file safe slug
   - Lowercase, kebab-case
   - Only a-z, 0-9 and -
   - Maximum 40 characters
   - Example: accordian, reviews

4. `branch_name` — format: `project/<project_slug>`
   - Example: `project/accoridian`

If you cannot infer these from $ARGUMENTS, ask the user
to clarify before proceeding.

## Step 3 — Check branch name is not taken
Run `git branch` to list existing branches.
If `branch_name` is already taken, append a number:
`project/accoridian-01`, `project/acoridian-02` etc.

## Step 4 — Switch to main and pull latest
Run:
```
git checkout main
git pull origin main
```

## Step 5 — Create and switch to the feature branch
Run:
```
git checkout -b <branch_name>
```

