#!/bin/bash

cd "$(dirname "$0")"

echo ""
echo "================================"
echo "   GitHub Upload Script"
echo "================================"
echo ""

read -p "Enter commit message: " message

if [ -z "$message" ]; then
  echo "Error: Commit message cannot be empty."
  exit 1
fi

echo ""
echo "Adding all files..."
git add .

echo "Committing with message: '$message'"
git commit -m "$message"

echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "================================"
echo "   Done! Uploaded to GitHub"
echo "================================"
echo ""
