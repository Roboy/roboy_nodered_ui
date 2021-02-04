module.exports = {
  apps : [{
    name: 'node-red',
    script: '/usr/bin/node-red',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: '',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      GOOGLE_APPLICATION_CREDENTIALS: '/home/roboy/keys.json',
      BAIDU_TTS_API_KEY: '0',
      BAIDU_TTS_SECRET_KEY: '0'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
