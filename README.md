<img src="https://lunch-voter.vercel.app/banner.png" alt="Banner image">

Lunch restaurant voting app [frontend](https://github.com/peippo/lunch-voter/tree/main/client) built for [Solidabis](https://www.solidabis.com/) coding challenge. The Spring Boot [backend](https://github.com/peippo/lunch-voter/tree/main/server) was provided & ready to use, and only minor adjustments related to cookies/Heroku were added.

### <a href="https://lunch-voter.vercel.app/">Open the project</a>

Note: the backend is running on Heroku and is probably sleeping, it will take a short while to wake up.

## Tech

-  Built with Typescript & [Sveltekit](https://kit.svelte.dev/)
-  Styling with [Tailwind](https://tailwindcss.com/)
-  Uses [SWR](https://github.com/ConsoleTVs/sswr) package for data fetching/caching & window focus revalidation
-  E2E tests with [Playwright](https://playwright.dev/)
-  Backend runs on Heroku, frontend at Vercel

## Issues

-  Voting does not work in Safari, probably due to the server & client being hosted at different domains and third-party cookies being blocked by default
-  Tests related to voting fail due to cookie issues, couldn't figure out a fix

## Running locally

### Server

```bash
./gradlew bootRun
```

Note: I never ran this locally but I suppose it will still work after the small changes

### Client

```bash
npm install
npm run build
npm run preview
```

Running tests

```bash
npm run test
```
