module.exports = {
  apps: [{
    name: 'hermes-translations',
    script: 'server.js',
    cwd: '/var/www/hermes-translations',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3005,
      HOSTNAME: '0.0.0.0'
    },
    env_file: '.env',
    error_file: '/root/.pm2/logs/hermes-error.log',
    out_file: '/root/.pm2/logs/hermes-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M'
  }]
};
