#! /bin/bash
set -eo pipefail

lerna publish --conventional-commits --yes --no-push
lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add **/package-lock.json
git commit --amend --no-edit
VERSION=`node -pe "require('$PWD/lerna.json').version;"`
git tag -f "v${VERSION}"
git push --follow-tags -u origin master
