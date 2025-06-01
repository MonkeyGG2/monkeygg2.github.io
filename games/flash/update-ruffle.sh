#!/bin/bash
# script to update ruffle with the latest version
# this exists because other links of ruffle could get blocked
# and to make updating ruffle easier
export FORMER_DIR=$(pwd)
cd $(dirname $(realpath "$0"))
if ! command -v jq 2>&1 >/dev/null; then
    echo "jq not found"
    exit 1
fi
rm ruffle.zip

rm -- *.js *.wasm
export URL=$(curl -s https://api.github.com/repos/ruffle-rs/ruffle/releases | jq -r '.[0].assets[] | select(.name | test("selfhosted")) | .browser_download_url')
wget "$URL" -O ruffle.zip
unzip ruffle.zip "*.js" "*.wasm"
rm ruffle.zip
cd "$FORMER_DIR"
