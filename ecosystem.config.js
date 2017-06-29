module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: [
        // { host: 's0.xxjz.org' },
        // { host: 's1.xxjz.org' },
        // { host: 's2.xxjz.org' },
      ],
      ref: 'origin/master',
      repo: 'root@dev.xxjz.org:blueoak/fs-student.git',
      path: '/var/www/fs-student',
      'post-deploy': 'bash post-deploy.sh',
    },
    dev: {
      user: 'root',
      host: [{ host: 'dev.xxjz.org', port: '2222' }],
      ref: 'origin/develop',
      repo: 'root@dev.xxjz.org:blueoak/fs-student.git',
      path: '/var/www/fs-student',
      'post-deploy': 'bash post-deploy.sh',
    },
  },
}
