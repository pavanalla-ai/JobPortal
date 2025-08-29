#!/bin/bash
cd /home/ec2-user/project/backend
npm install
npm install pm2 --save-dev
npm install cross-env
if pm2 list | grep -q 'backend'; then 
  pm2 restart backend; 
else 
  pm2 start server.js --name backend; 
fi
