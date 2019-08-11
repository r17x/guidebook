workflow "Push" {
  on = "push"
  resolves = ["codecov"]
}

action "codecov" {
  uses = "codecov"
  secrets = ["CODECOV_TOKEN"]
  runs = "yarn test:ci --coverage"
}
