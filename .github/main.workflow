workflow "Build, Test, and Publish" {
  on = "push"
  resolves = ["Release"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "test"
}

# Filter for develop branch
action "Develop" {
  needs = "Test"
  uses = "actions/bin/filter@master"
  args = "branch develop"
}

action "Release" {
  needs = "Develop"
  uses = "actions/npm@master"
  args = "run release"
  secrets = ["NPM_AUTH_TOKEN"]
}
