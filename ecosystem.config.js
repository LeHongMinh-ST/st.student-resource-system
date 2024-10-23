module.exports = {
  apps: [
    {
      name: 'st-student-system',
      script: 'npm',
      args: 'start',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
