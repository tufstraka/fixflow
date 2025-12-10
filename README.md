# Bounty Hunter

## The Problem We Set Out to Solve

Every day, thousands of open-source projects that power the modern internet go unmaintained. Bugs pile up. Issues sit unanswered. Developers who once poured their hearts into these projects have moved on—to new jobs, new responsibilities, new lives. The code remains, used by millions, but the people who understand it best are no longer there.

Meanwhile, talented developers around the world have time and skills to contribute, but lack the incentive. "Why should I spend my weekend debugging someone else's code for free?" is a fair question. The result is a tragedy of the commons: projects that benefit everyone are maintained by no one.

We built Bounty Hunter because we believe there's a better way.

## What If Bug Fixes Paid for Themselves?

Imagine a world where open-source maintenance is sustainable. Where a failing test doesn't just create anxiety—it creates opportunity. Where developers can earn real money for solving real problems, and project maintainers don't have to beg for help.

Bounty Hunter makes this possible by automating the entire process:

1. Your CI/CD pipeline runs. A test fails.
2. Automatically, a bounty is created—real money, waiting for whoever fixes it.
3. A developer somewhere finds the issue, understands the problem, and submits a fix.
4. The moment the tests pass, payment is released. No paperwork. No waiting. No trust required.

This isn't just about money. It's about respect. Respect for the time developers invest in understanding complex codebases. Respect for the maintainers who need help but can't afford to hire. Respect for the invisible infrastructure that holds the digital world together.

## How It Actually Works

The technical implementation is straightforward, but the implications are profound.

When you integrate Bounty Hunter into your repository, it watches your test suite. When tests fail, it creates a GitHub issue documenting the failure and records a bounty in our system. The bounty is denominated in MNEE, a USD-backed stablecoin—so developers know exactly what they'll earn, without worrying about cryptocurrency volatility.

Here's where it gets interesting: if nobody claims the bounty right away, it automatically increases over time. A 50 MNEE bounty becomes 60 after 24 hours, 75 after three days, 100 after a week. The longer a bug persists, the more valuable fixing it becomes. This creates a natural market for maintenance work.

When a developer submits a pull request that fixes the failing tests, Bounty Hunter verifies the fix and releases payment directly to their wallet. The entire process—from test failure to payment—can happen without any human intervention.

## The Technology Behind It

Bounty Hunter is built on a few key pieces:

**The Bot Server** receives webhook events from GitHub and orchestrates the entire bounty lifecycle. It tracks bounties in a PostgreSQL database, ensuring every state change is recorded and auditable.

**GitHub App Integration** means you don't have to share personal access tokens. When you install Bounty Hunter on your repository, you're granting specific permissions through GitHub's official OAuth flow. The bot operates within those boundaries, nothing more.

**MNEE Stablecoin** handles payments. Unlike volatile cryptocurrencies, MNEE maintains a stable value pegged to the US dollar. This is crucial for bounties—developers need to know what they're working for, and maintainers need to budget predictably.

## Getting Started

Setting this up takes about ten minutes.

First, create a PostgreSQL database for Bounty Hunter:

```bash
createdb bounty_hunter_bot
```

Then clone the repository, install dependencies, and configure your environment:

```bash
cd bot
npm install
cp .env.example .env
# Edit .env with your database connection, GitHub App credentials, and MNEE API key
npm start
```

Finally, add the Bounty Hunter workflow to your repository. Create `.github/workflows/bounty-hunter.yml`:

```yaml
name: Bounty Hunter

on:
  workflow_run:
    workflows: ["Tests"]
    types: [completed]

jobs:
  create-bounty:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    
    steps:
      - uses: bounty-hunter/bounty-hunter-action@v1
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          bot_server_url: ${{ secrets.BOUNTY_HUNTER_URL }}
          bot_api_key: ${{ secrets.BOUNTY_HUNTER_API_KEY }}
          bounty_amount: 50
```

That's it. The next time your tests fail, Bounty Hunter will create a bounty automatically.

## Configuring Bounty Behavior

The default configuration works well for most projects, but you can customize everything.

Create a `.bounty-hunter.yml` file in your repository root:

```yaml
bounty_config:
  default_amount: 75
  severity_multipliers:
    critical: 4.0
    high: 2.0
    medium: 1.0
    low: 0.5
```

The escalation schedule—how bounties increase over time—follows this pattern:

| Time Elapsed | Increase | Example |
|--------------|----------|---------|
| 24 hours     | +20%     | 60 MNEE |
| 72 hours     | +50%     | 75 MNEE |
| 1 week       | +100%    | 100 MNEE |

Bounties cap at 3x their initial value. After that, they need human attention.

## Security and Trust

We understand that automated payment systems need to be trustworthy.

All bounty states are recorded in PostgreSQL with full audit trails. Every payment, every state change, every verification is logged. GitHub webhook signatures are verified cryptographically, so nobody can fake events. API endpoints require authentication.

MNEE payments use secure API credentials that never leave your server. The bot operates with the minimum permissions necessary through GitHub's OAuth system.

## Who Is This For?

**Open-source maintainers** who are tired of watching their issue queue grow while their time shrinks. Set up Bounty Hunter once, and let the market handle maintenance.

**Companies using open-source** who want to give back in a way that scales. Instead of donating money that might sit in a foundation's bank account, fund specific fixes that matter to you.

**Developers looking for meaningful work** who want to get paid for their skills without the bureaucracy of traditional freelancing. Find a bounty, fix the bug, receive payment.

**Organizations running internal platforms** who want to incentivize teams to fix broken tests quickly instead of letting them accumulate.

## Why We Chose MNEE

Cryptocurrency bounties have been tried before, but volatility killed them. Nobody wants to work for a bounty that might be worth half as much by the time they claim it.

MNEE solves this by being a stablecoin—its value is pegged to the US dollar. When you see a 50 MNEE bounty, you know it's worth approximately $50. When you receive payment, you're not gambling on market movements.

MNEE also provides a clean API for programmatic payments. No blockchain transactions, no gas fees, no wallet complications. Just simple API calls that move money instantly.

## The Bigger Picture

Bounty Hunter started as a hackathon project, but the problem it addresses is real and urgent.

The world runs on open-source software. The websites you visit, the apps on your phone, the infrastructure of banks and hospitals and governments—all of it depends on code that was given away freely by developers who believed in sharing.

That generosity is beautiful, but it's not sustainable when the people doing the work can't pay rent. Something has to change.

We believe programmable money—automated payments triggered by verifiable events—is part of the answer. Not charity, but fair exchange. Not goodwill, but aligned incentives.

Bounty Hunter is a small step in that direction. A tool that makes it slightly easier to maintain open-source software, slightly fairer for the developers who do the work, slightly more sustainable for the ecosystem we all depend on.

## Documentation

For detailed technical documentation, see:

- [Setup Guide](docs/SETUP.md) - Complete installation instructions
- [API Reference](docs/API_REFERENCE.md) - Endpoint documentation
- [MNEE Integration](docs/MNEE_SDK_INTEGRATION.md) - Payment system details
- [Troubleshooting](docs/TROUBLESHOOTING.md) - Common issues and solutions
- [Deployment Guide](docs/DEPLOYMENT_GUIDE.md) - Production deployment

## Contributing

We welcome contributions. Whether it's fixing a bug, improving documentation, or suggesting new features—all of it helps.

See our Contributing Guide for details on how to get involved.

## License

MIT License - use this however you want.

---

## 163jN4jSfLaAauZqL4znAHAgC9N5f4FeRr

Built for the MNEE Hackathon. Built because we care about open source.

[Get Started](docs/SETUP.md) | [Learn about MNEE](https://mnee.io)