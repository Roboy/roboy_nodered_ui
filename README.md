# roboy_nodered_ui
## Pre-requisites 
- https://nodered.org/docs/getting-started/local
- ROS melodic (noetic)
- other dependencies:
```
cd ~/.node-red
npm install node-red-dashboard node-red-contrib-ros node-red-contrib-python3-function node-red-node-ui-list
```

## Usage 
0. Run `node-red` from terminal and navigate to `http://127.0.0.1:1880/ui` from your browser
1. Clone this repository
2. Import `flows_jetson-xavier.json` into your Node-Red (https://nodered.org/docs/user-guide/editor/workspace/import-export)
3. `Deploy` the Node-Red flow and check if the front-end is updated

## Utilities

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
