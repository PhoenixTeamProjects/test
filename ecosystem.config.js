module.exports = {
  apps: [{
    name: 'truckparts',
    script: 'npm',
    args: 'start',
    cwd: '/root/.openclaw/workspace/truckparts',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
