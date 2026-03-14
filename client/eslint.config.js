module.exports = {
  apps: [
    {
      name: "codeher-api",
      script: "./src/server.js",
      cwd: "/var/www/codeher-v2/server",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};