# Project TODOs #

This folder contains the features to be implemented in the web-app

- Whenever a new feature is conceived, it should be added to a markdown file (with a corresponding date) in this folder

- The format for the file storage is `YYYY-MM-DD.md`, this way it would be easier to sort.

- If no file with a corresponding date exists, it should be created and titled with the date. For Example:
```bash
$ ls
2021-06-30.md
$ date 
Wed 01 Jul 2021 00:00:00 AM WAT
# The date is 2021-07-01 and a '2021-07-01.md' file does not exist.
# If a new 'TODO's is conceived on this day, a '2021-07-01.md'
# file should be created and the 'TODO' should be added to it.
# Also the new 'TODO' file should be titled (using only one '#') with the day of creation
...
$ cat 2021-07-01.md
```
```markdown
# 2021-07-01 #
- <New feature to be implemented>
```
