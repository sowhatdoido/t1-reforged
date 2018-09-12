const path = require('path');
const fs = require('fs-extra');
const templatePath = path.resolve(__dirname, './template');
const appPath = '.';

const renameFileIfExists = function(filePath) {
  const fileExists = fs.existsSync(path.join(appPath, filePath));
  if (fileExists) {
    const parts = filePath.split('.');
    const ext = parts.pop();
    const newFilePath = parts.concat(['old', ext]).join('.');

    fs.renameSync(
      path.join(appPath, filePath),
      path.join(appPath, newFilePath)
    );
  }
}

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// Rename any file that already exists before copying new template files into place.
const filelist = walkSync(templatePath).map(e => e.replace(`${templatePath}`, '').slice(1));
filelist.map(e => renameFileIfExists(e));

if (fs.existsSync(templatePath)) {
  fs.copySync(templatePath, appPath);
  return true;
} else {
  console.error(
    `Template not found at: ${templatePath}`
  );
  return false;
}

