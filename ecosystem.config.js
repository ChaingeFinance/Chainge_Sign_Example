module.exports = {
  apps : [{
    name   : "chainge",
    script : "./app.js",
    instances: 2,
    watch: true,
    watch_delay: 8000,
    max_memory_restart: '150M',
    env_production: {
      NODE_ENV: "production",
      PORT: 3000,
    },
    log_date_format: "YYYY-MM-DD HH:mm Z"
  }]
}
