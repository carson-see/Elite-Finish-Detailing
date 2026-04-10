#!/usr/bin/env bash
# Recompile Tailwind CSS for elitefinishomaha.com.
# Run this whenever you edit index.html or privacy.html and add/change Tailwind classes.
#
# Usage:
#   ./build.sh
#
# First-time setup on a new machine:
#   curl -sSL -o tailwindcss "https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-macos-arm64"
#   chmod +x tailwindcss
#   mv tailwindcss /usr/local/bin/   # or keep it in this directory

set -euo pipefail
cd "$(dirname "$0")"

# Locate the tailwindcss binary. Prefer a repo-local copy, then /tmp, then PATH.
if [[ -x "./tailwindcss" ]]; then
  TW="./tailwindcss"
elif [[ -x "/tmp/tailwindcss" ]]; then
  TW="/tmp/tailwindcss"
elif command -v tailwindcss >/dev/null 2>&1; then
  TW="$(command -v tailwindcss)"
else
  echo "Error: tailwindcss binary not found."
  echo "Install with:"
  echo "  curl -sSL -o tailwindcss 'https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-macos-arm64'"
  echo "  chmod +x tailwindcss"
  exit 1
fi

echo "Building Tailwind CSS with $TW..."
"$TW" -c tailwind.config.js -i src/tailwind-input.css -o dist/tailwind.css --minify

echo ""
echo "Output:"
ls -lh dist/tailwind.css
echo ""
echo "Done. Commit dist/tailwind.css along with your HTML changes."
