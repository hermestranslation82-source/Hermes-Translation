#!/bin/bash
PROJECT_DIR="/var/www/hermes-translations"
LOG_FILE="/var/www/hermes-translations/deploy.log"

cd $PROJECT_DIR || exit 1

git fetch origin

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "========================================" >> $LOG_FILE
    echo "$(date): Updates found. Deploying..." >> $LOG_FILE
    
    git reset --hard origin/main >> $LOG_FILE 2>&1
    npm install >> $LOG_FILE 2>&1
    npm run build >> $LOG_FILE 2>&1
    pm2 restart hermes-translations >> $LOG_FILE 2>&1
    
    echo "$(date): Deployment completed successfully." >> $LOG_FILE
fi
