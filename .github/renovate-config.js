module.exports = {
  $schema: 'https://docs.renovatebot.com/renovate-schema.json',
  onboarding: false,
  requireConfig: 'optional',
  platform: 'github',
  repositories: ['acocia-agaps/renovate-config'],
  extends: [
    'local>acocia-agaps/renovate-config',
  ],
  secrets: {
    GITHUB_TOKEN: process.env.RENOVATE_GITHUB_TOKEN,
  },
  packageRules: [],
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
  },
}
