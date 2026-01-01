import { User, Bounty, Repository, Metrics } from './api';

// ============================================
// Demo User Profiles
// ============================================

export const DEMO_USER: User = {
  id: 1,
  githubId: 12345678,
  githubLogin: 'demo-developer',
  email: 'demo@bountyhunter.dev',
  name: 'Demo Developer',
  avatarUrl: 'https://avatars.githubusercontent.com/u/12345678?v=4',
  role: 'user',
  mneeAddress: '1DemoWalletAddress123456789',
  totalEarned: 1250.00,
  bountiesClaimed: 15,
  createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
  updatedAt: new Date().toISOString(),
};

export const DEMO_ADMIN_USER: User = {
  id: 2,
  githubId: 87654321,
  githubLogin: 'demo-admin',
  email: 'admin@bountyhunter.dev',
  name: 'Demo Admin',
  avatarUrl: 'https://avatars.githubusercontent.com/u/87654321?v=4',
  role: 'admin',
  mneeAddress: '1AdminWalletAddress987654321',
  totalEarned: 3500.00,
  bountiesClaimed: 42,
  createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
  updatedAt: new Date().toISOString(),
};

// ============================================
// Demo Bounties
// ============================================

export const DEMO_BOUNTIES: Bounty[] = [
  {
    bountyId: 1,
    repository: 'acme/web-app',
    issueId: 142,
    issueUrl: 'https://github.com/acme/web-app/issues/142',
    initialAmount: 50,
    currentAmount: 75,
    maxAmount: 100,
    status: 'active',
    solver: null,
    claimedAmount: null,
    pullRequestUrl: null,
    escalationCount: 1,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    claimedAt: null,
    hoursElapsed: 72,
    isEligibleForEscalation: true,
  },
  {
    bountyId: 2,
    repository: 'acme/api-server',
    issueId: 89,
    issueUrl: 'https://github.com/acme/api-server/issues/89',
    initialAmount: 100,
    currentAmount: 100,
    maxAmount: 200,
    status: 'active',
    solver: null,
    claimedAmount: null,
    pullRequestUrl: null,
    escalationCount: 0,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    claimedAt: null,
    hoursElapsed: 12,
    isEligibleForEscalation: false,
  },
  {
    bountyId: 3,
    repository: 'opensource/toolkit',
    issueId: 256,
    issueUrl: 'https://github.com/opensource/toolkit/issues/256',
    initialAmount: 25,
    currentAmount: 25,
    maxAmount: 50,
    status: 'active',
    solver: null,
    claimedAmount: null,
    pullRequestUrl: null,
    escalationCount: 0,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    claimedAt: null,
    hoursElapsed: 6,
    isEligibleForEscalation: false,
  },
  {
    bountyId: 4,
    repository: 'acme/web-app',
    issueId: 138,
    issueUrl: 'https://github.com/acme/web-app/issues/138',
    initialAmount: 50,
    currentAmount: 50,
    maxAmount: 100,
    status: 'claimed',
    solver: 'demo-developer',
    claimedAmount: 50,
    pullRequestUrl: 'https://github.com/acme/web-app/pull/139',
    escalationCount: 0,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    claimedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    hoursElapsed: 168,
    isEligibleForEscalation: false,
  },
  {
    bountyId: 5,
    repository: 'acme/mobile-app',
    issueId: 45,
    issueUrl: 'https://github.com/acme/mobile-app/issues/45',
    initialAmount: 75,
    currentAmount: 100,
    maxAmount: 150,
    status: 'claimed',
    solver: 'demo-developer',
    claimedAmount: 100,
    pullRequestUrl: 'https://github.com/acme/mobile-app/pull/46',
    escalationCount: 1,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    claimedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    hoursElapsed: 336,
    isEligibleForEscalation: false,
  },
  {
    bountyId: 6,
    repository: 'opensource/database',
    issueId: 512,
    issueUrl: 'https://github.com/opensource/database/issues/512',
    initialAmount: 200,
    currentAmount: 200,
    maxAmount: 400,
    status: 'active',
    solver: null,
    claimedAmount: null,
    pullRequestUrl: null,
    escalationCount: 0,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    claimedAt: null,
    hoursElapsed: 2,
    isEligibleForEscalation: false,
  },
  {
    bountyId: 7,
    repository: 'startup/saas-platform',
    issueId: 78,
    issueUrl: 'https://github.com/startup/saas-platform/issues/78',
    initialAmount: 150,
    currentAmount: 225,
    maxAmount: 300,
    status: 'active',
    solver: null,
    claimedAmount: null,
    pullRequestUrl: null,
    escalationCount: 2,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    claimedAt: null,
    hoursElapsed: 120,
    isEligibleForEscalation: true,
  },
  {
    bountyId: 8,
    repository: 'acme/api-server',
    issueId: 92,
    issueUrl: 'https://github.com/acme/api-server/issues/92',
    initialAmount: 60,
    currentAmount: 60,
    maxAmount: 120,
    status: 'claimed',
    solver: 'other-dev',
    claimedAmount: 60,
    pullRequestUrl: 'https://github.com/acme/api-server/pull/93',
    escalationCount: 0,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    claimedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    hoursElapsed: 72,
    isEligibleForEscalation: false,
  },
];

// ============================================
// Demo Repositories
// ============================================

export const DEMO_REPOSITORIES: Repository[] = [
  {
    repository: 'acme/web-app',
    totalBounties: 12,
    activeBounties: 3,
    claimedBounties: 9,
    totalLocked: 225,
  },
  {
    repository: 'acme/api-server',
    totalBounties: 8,
    activeBounties: 2,
    claimedBounties: 6,
    totalLocked: 160,
  },
  {
    repository: 'acme/mobile-app',
    totalBounties: 5,
    activeBounties: 1,
    claimedBounties: 4,
    totalLocked: 75,
  },
];

// ============================================
// Demo Users List
// ============================================

export const DEMO_USERS: User[] = [
  DEMO_USER,
  DEMO_ADMIN_USER,
  {
    id: 3,
    githubId: 11111111,
    githubLogin: 'bug-squasher',
    email: 'squasher@example.com',
    name: 'Bug Squasher',
    avatarUrl: 'https://avatars.githubusercontent.com/u/11111111?v=4',
    role: 'user',
    mneeAddress: '1SquasherWallet111111111',
    totalEarned: 850.00,
    bountiesClaimed: 12,
    createdAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 4,
    githubId: 22222222,
    githubLogin: 'code-ninja',
    email: 'ninja@example.com',
    name: 'Code Ninja',
    avatarUrl: 'https://avatars.githubusercontent.com/u/22222222?v=4',
    role: 'user',
    mneeAddress: '1NinjaWallet222222222222',
    totalEarned: 2100.00,
    bountiesClaimed: 28,
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    githubId: 33333333,
    githubLogin: 'fix-master',
    email: 'master@example.com',
    name: 'Fix Master',
    avatarUrl: 'https://avatars.githubusercontent.com/u/33333333?v=4',
    role: 'user',
    mneeAddress: null,
    totalEarned: 450.00,
    bountiesClaimed: 6,
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// ============================================
// Demo Metrics (for Admin Dashboard)
// ============================================

export const DEMO_METRICS: Metrics = {
  bounties: {
    total: 156,
    active: 23,
    claimed: 133,
    success_rate: '85.3%',
  },
  tokens: {
    locked: 4750.00,
    claimed: 28500.00,
    wallet_balance: 15000.00,
    wallet_address: '1BotWalletAddressDemo123456',
  },
  system: {
    uptime: 864000,
    memory: { heapUsed: 45000000, heapTotal: 100000000 },
    node_version: 'v20.10.0',
  },
};

// ============================================
// Demo Stats (for User Dashboard)
// ============================================

export const DEMO_STATS = {
  totalClaimed: 15,
  totalEarned: 1250.00,
  repositoriesContributed: 4,
  memberSince: DEMO_USER.createdAt,
};

// ============================================
// Aliases for backward compatibility
// ============================================

export const MOCK_BOUNTIES = DEMO_BOUNTIES;
export const MOCK_STATS = DEMO_STATS;
export const MOCK_USERS = DEMO_USERS;
export const MOCK_METRICS = DEMO_METRICS;

// ============================================
// Helper function
// ============================================

export const simulateDelay = (ms: number = 300): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));