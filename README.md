# t1-reforged

### Instructions

To install, run `yarn add t1-reforged` in a create-react-app bootstraped project. Both `CRA 1.X` and CRA `2.0 NEXT` are currently supported, but we recommend using 2.0 as it includes features such as CSS/SASS modules.

Installing this package will generate new files in your project directory; to prevent loss of data, any existing files with conflicting names will be renamed to `{filename}.old.{ext}`.

Finally, change the following script entries in your `package.json`:

```diff
-  "start": "react-scripts start",
+  "start": "t1-reforged start",
-  "build": "react-scripts build",
+  "build": "t1-reforged build",
-  "test": "react-scripts --env=jsdom",
+  "test": "t1-reforged test --env=jsdom",

```

You can now run `yarn start` to start up your project.
