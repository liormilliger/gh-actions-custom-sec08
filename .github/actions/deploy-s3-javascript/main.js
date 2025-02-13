// This file can be named anything and then referenced in the action.yaml file under runs.main
// An npm init -y is required in this path and then npm install @actions/core @actions/github @actions/exec
const core = require('@actions/core')
const exec = require('@actions/exec')

function run() {
  // 1) Get some input values
  const bucket = core.getInput('bucket', { requied: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  //2) Upload files
  const s3Uri = `s3://${bucket}`;
  //exec.exec('aws s3 sync <local-folder> <s3-bucket>') //works with AWS cli
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice('Hello from my custom JavaScript Action!');
}

run();