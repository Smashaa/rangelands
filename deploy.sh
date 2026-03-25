#!/usr/bin/env bash

# Check commit message
if [ $# -eq 0 ]; then
  echo "Commit message required!"
  echo "Usage: ./deploy.sh \"Your commit message\""
  exit 1
fi

COMMIT_MSG="$*"

echo "Starting deployment..."

# 1. Delete old dist folder
echo "Removing old dist folder..."
if [ -d "dist" ]; then
  rm -rf "dist"
fi

# 2. Git add any deletions
echo "Adding changes to Git..."
git add .

# 3. Build
echo "Building..."
if ! npm run build; then
  echo "Build failed!"
  exit 1
fi

# 4. Add build output
echo "Adding build files..."
git add .

# 5. Commit
echo "Committing changes..."
if ! git commit -m "$COMMIT_MSG"; then
  echo "Commit failed - nothing to commit or commit was aborted."
  exit 1
fi

# 6. Push to main
echo "Pushing to main..."
if ! git push origin main; then
  echo "Push failed!"
  exit 1
fi

echo "Deployment complete!"
