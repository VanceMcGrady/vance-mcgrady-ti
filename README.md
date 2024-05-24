## start here

You will be able to get this app started locally with npm run dev

## notes on basic approach

There were a lot of trade-offs to make in the interest of keeping this to a limited amount of time to stand this up

Styling is very basic ("Style might be an overstatement) - I figured that it was best to demonstrate a broad understanding of Next.js and
demonstrating my style and decicions in how to handle the basic architecture of a small app. I did not want to get bogged down nitpicking CSS
so I kept it very striaghtforward.

Also in the interest of time, I didn't stand up a db or any any deployment infrastructure for this app. The instructions said to use mock data/api calls,
and so I made the assumption that it wouldn't count against me if I didn't have an actual "backend". As a result of that, the "mock API calls" are very lean.
I use them in this case to simply return the mock data I created. I was tempted to try to squeeze in a vercel/postgres db so that I could get one layer closer to
demonstrating a more realistic API function, but I didn't want to potentially get bogged down with all of that. I would've had to make tables and schema and it
would not have fit well into the scope of this exercise.

The prompt mentioned the use of "data structures" for the mock data. I used very basic object literals and arrays. In reality, the data would be in e.g.
a postgres database which has much more effective structures for storing and retreiving that data than it would be reasonable to try to emulate here.
I opted not to overcomplicate the mock-data part of this by trying to maximize performance on this really small dataset.
I sincerely hope that I was able to demonstrate my problem-solving style elsewhere in the app
and that my decision to do it like this makes sense in this context.

I did not stand up any logic for dealing with state, except for a very basic useState hook to help toggle the "Details" of the posts in the /feed route.
I was afraid of running into problems if I tried to make the app seem more complicated than it really is.

Additionally, I felt that it made logical sense to have the root "/" redirect to "/feed". To me, it made sense to keep the functionality consistent with the route names,
and in this app we only needed "Feed" and "Profile" pages, so those are the only two routes, with "/feed" being home base.

The Typescript is also very primative. This was another thing that I didn't want to get too in the weeds about as I think it does little in the way of
demonstrating my "style".

** one last thing **
I added another few commits this morning. I woke up realizing that I hadn't demonstrated dynamic routing and that I think that is important. I spent 20ish minutes on it just to have a basic example.
Subtracting the time I spent writing out this README, I'd say this is still indicative of two hours of work, give or take a few minutes.

That's all I have!
