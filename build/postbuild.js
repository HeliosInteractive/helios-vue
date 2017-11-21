const path = require('path');
const fs = require('fs');

const ENV = process.env.CONFIG_ENV || 'production';
/**
 * Rename the helios config and set to correct env
 * This will only work for json in the helios.config.json format
 */
const renameHeliosConfig = (from, to, done) => {
  fs.stat(from, err => {
    if (err) return done();

    fs.readFile(from, 'utf8', (err, res) => {
      if (err) return done(err);
      const config = JSON.parse(res)[ENV];
      fs.writeFile(
        path.join(path.dirname(from), to),
        JSON.stringify(config, null, 2),
        err => {
          if (err) return done(err);
          fs.unlink(from, done);
        },
      );
    });
  });
};

/**
 * Copys a file from one place to another
 * @param {*} source
 * @param {*} target
 * @param {*} cb
 */
const copyFile = (source, target, cb) => {
  let cbCalled = false;

  let rd = fs.createReadStream(source);
  rd.on('error', function(err) {
    done(err);
  });
  let wr = fs.createWriteStream(target);
  wr.on('error', function(err) {
    done(err);
  });
  wr.on('close', function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
};

/**
 * Rename the helios config, and format it for ENV
 */
const heliosFilepath = path.join(
  __dirname,
  '..',
  'dist',
  'static',
  'helios.config.json',
);
renameHeliosConfig(heliosFilepath, 'helios.example.config.json', err => {
  if (!err)
    return console.info(
      'renamed',
      heliosFilepath,
      'to',
      'helios.example.config.json',
    );
  console.error(err);
});

/**
 * Copy the README to dist
 */
const readmeFilepath = path.join(__dirname, '..', 'README.md');
const readmeCopyFilepath = path.join(__dirname, '..', 'dist', 'README.md');
copyFile(readmeFilepath, readmeCopyFilepath, err => {
  err
    ? console.log('There was an error copying:', err)
    : console.log('README copied successfully');
});
