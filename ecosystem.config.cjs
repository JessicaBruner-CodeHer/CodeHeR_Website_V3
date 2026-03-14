module.exports = {
  apps: [
    {
      name: "codeher-api",
      script: "./server/src/server.js",
      cwd: "/var/www/codeher-v2",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};