const { AwsCdkConstructLibrary, FileBase } = require("projen");

class ContentFile extends FileBase {
  constructor(project, path, options) {
    super(project, path, options);
    this.options = options;
  }

  synthesizeContent() {
    return this.options.content;
  }
}

const project = new AwsCdkConstructLibrary({
  cdkVersion: "1.63.0",
  name: "@JordanSinko/the-autoscaling-kinesis-stream",
  authorName: "Jordan Sinko",
  authorAddress: "jordan5sinko@gmail.com",
  repository: "https://github.com/JordanSinko/the-autoscaling-kinesis-stream",
  scripts: {
    format: "pretty-quick --staged",
  },
  devDependencies: {
    husky: "^4.3.0",
    prettier: "^2.1.2",
    "pretty-quick": "^3.0.2",
    "npm-run-all": "^4.1.5",
  },
  cdkDependencies: ["@aws-cdk/core", "@aws-cdk/aws-kinesis"],
  cdkTestDependencies: ["@aws-cdk/assert"],
  eslint: false,
  releaseWorkflow: true,
  buildWorkflow: true,
  mergify: true,
  npmRegistry: "npm.pkg.github.com",
});

new ContentFile(project, ".prettierignore", {
  content: `package.json
API.md
`,
});

new ContentFile(project, "husky.config.js", {
  content: `module.exports = {
  hooks: {
    "pre-commit": "run-s format",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
`,
});

new ContentFile(project, "commitlint.config.js", {
  content: `module.exports = {
  extends: ["@commitlint/config-conventional"],
};
`,
});

new ContentFile(project, "prettier.config.js", {
  content: `module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 120,
  endOfLine: "lf",
};
`,
});

project.synth();
