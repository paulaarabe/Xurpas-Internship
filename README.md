## Deer Backend

Backend Service for Deer.

## Installation

1. Install [Node.js and npm](https://www.npmjs.com/get-npm) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

2. Clone this repository:

```bash git clone https://gitlab.com/whitecloak/deer/core-service.git

```

3. This project uses PostgreSQL. We recommend install [Docker](https://docs.docker.com/desktop/mac/install/).
   After install, run:

   ```bash
   docker run --name deer -p 5432:5432 -e POSTGRES_USER=deer_app -e POSTGRES_PASSWORD=deer -d postgres
   ```

4. Run [`./init`](./init). This installs the required dependencies and sets up Git commit templates.

   ```bash
   ./init
   ```

5. Create [.env](.env).

6. Install https://github.com/whitecloakph/changelog-sh

## Running the app

1.  To run the app for the first time and everytime there are changes in the migration files, execute these commands:

```bash
$ npm run build
$ npm run migration:up
```

Followed by any of the commands in step 2.

2. If there is no need for any migrations, the app can be ran using any of these command:

   ```bash
   # development
   $ npm run start

   # watch mode
   $ npm run start:dev

   # production mode
   $ npm run start:prod
   ```

## Testing

### Unit Tests

Simply run

```bash
$ npm run test
```

### End-to-End (e2e) Tests

Simply run

```bash
$ npm run test:e2e
```

### Test coverage

To determine the code coverage, run

```bash
$ npm run test:cov
```

### Updating CHANGELOG.md

Make sure changelog-sh is already installed. Refer to [Installation Step 6](#installation).

1. For every notable update on the application, add a changelog entry

   ```bash
   change new <changed | added | fixed>
   ```

   Sample:

   ```bash
   change new added [SA-123] BackOffice | Reports | Search users
   ```

2. For every release to QA env, use the changelog-sh to group the entries together.

   3.1. Branch out from master branch:

   `release/dev/<version>`

   3.2. Using changelog-sh, run

   ```bash
   change release <version>
   ```

   3.3. Copy all the changes to the top of CHANGELOG.md file

   Sample:

   ```## [0.1.10]
   ### Added
   - [SA-669] Marketplace | getMomentPriceRange API
   - [SA-685] getOldNotifications API

   ### Changed
   - [SA-671] Notification | Add age field
   - [SA-612] Sort newsfeed items by purchase date desc
   ```

## Stay in touch

- Author
    - [John Michael Baldonado](jm.baldonado@whitecloak.com)
    - [Neil Ryan Lipa-od](neil.lipa-od@whitecloak.com)
