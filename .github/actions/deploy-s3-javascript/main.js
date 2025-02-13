// This file can be named anything and then referenced in the action.yaml file under runs.main
// An npm init -y is required in this path and then npm install @actions/core @actions/github @actions/exec
const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
  core.notice('Hello from my custom JavaScript Action!')
}

run();