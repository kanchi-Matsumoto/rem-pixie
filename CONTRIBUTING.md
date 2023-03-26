# Contribution Guide

This is a guide on how to contribute to RemPixie.
Contributions are welcome 🎉

## Issues

The following Issue is accepted.

- Questions about features
- Report errors or problems
- Propose additions or improvements to feature

Please click [here](https://github.com/kanchi-Matsumoto/rem-pixie/issues) to issue.

## Pull Request

Pull requests are always welcome.

The following types of Pull Requests are accepted.  For basic Pull Requests (especially minor ones), you may send a Pull Request without creating an Issue.


- Bug Fixes
- Add functionality
- Performance Fixes
- Typo Fixes

"How about this kind of fix/improvement?" If you have a question, please raise an Issue and discuss it with me.

## How to send Pull Request

Please follow these steps to create a pull request.

1. Fork the repository
2. Create a branch
3. Add or modify feature
4. Run e2e and unit test
5. Check the feature in your browser
5. Commit Changes
6. Push branch
7. Create Pull Request

## How to set up a Local Development Environment

First, clone the forked repository locally.

```bash
$ git clone git@github.com:kanchi-Matsumoto/rem-pixie.git
```

Install dependent modules.

```bash
$ npm ci
```

The dev command starts the development server.

```bash
$ npm run dev
```

When the development server starts, the Extension build results are output to the `extension`.

You can use extensions in your browser by loading the contents of the extensions folder in Chrome Exteinsions.

When you modify the code, the change is automatically reflected.

That's it. Happy coding 👍
