# roboy_nodered_ui
```
cd ~/.node-red
npm install node-red-dashboard node-red-contrib-ros node-red-contrib-python3-function node-red-node-ui-list
```

For node-red autostart
```
cd roboy_nodered_ui
sudo npm install -g pm2
which node-red
pm2 start ecosystem.config.js
pm2 save
pm2 startup
# follow the instruction printed in the terminal
sudo reboot 
```

```
pm2 info node-red
pm2 logs node-red
pm2 restart node-red
```
