import fs from "node:fs";

const h = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export const getPath = (number) => {
	const segments = [
		Math.floor(number / 1000000) * 1000000,
		Math.floor(number / 10000) * 10000,
		Math.floor(number / 100) * 100,
		number,
	].map((n) => n.toString().padStart(8, "-"));
	return `${segments.join("/")}.json`;
};

let template = fs.readFileSync("scripts/stats-template.md", "utf-8");
const fileSizes = fs.readFileSync("stats", "utf-8");

const leaderboards = {
	forumPosts: {
		upvotes: [],
		comments: [],
		views: [],
	},
	users: {
		coins: [],
		xp: [],
		playCount: [],
		killCount: [],
		highscore: [],
		views: [],
	},
};

const c = `<details>
<summary>Show more</summary>

`;

const nums = 100;
const previewNums = 10;
const repos = ["forumPosts", "users"];
const callbacks = {
	forumPosts: (post) => {
		if (
			leaderboards.forumPosts.upvotes.length < nums ||
			leaderboards.forumPosts.upvotes[nums - 1].likes < post.likes
		) {
			leaderboards.forumPosts.upvotes.push(post);
			leaderboards.forumPosts.upvotes = leaderboards.forumPosts.upvotes
				.sort((a, b) => b.likes - a.likes)
				.slice(0, nums);
		}

		if (
			leaderboards.forumPosts.comments.length < nums ||
			leaderboards.forumPosts.comments[nums - 1].comments.length <
				post.comments.length
		) {
			leaderboards.forumPosts.comments.push(post);
			leaderboards.forumPosts.comments = leaderboards.forumPosts.comments
				.sort((a, b) => b.comments.length - a.comments.length)
				.slice(0, nums);
		}

		if (
			leaderboards.forumPosts.views.length < nums ||
			leaderboards.forumPosts.views[nums - 1].views < post.views
		) {
			leaderboards.forumPosts.views.push(post);
			leaderboards.forumPosts.views = leaderboards.forumPosts.views
				.sort((a, b) => b.views - a.views)
				.slice(0, nums);
		}
	},
	users: (user) => {
		if (
			leaderboards.users.coins.length < nums ||
			leaderboards.users.coins[nums - 1].coins < user.coins
		) {
			leaderboards.users.coins.push(user);
			leaderboards.users.coins = leaderboards.users.coins
				.sort((a, b) => b.coins - a.coins)
				.slice(0, nums);
		}

		if (
			leaderboards.users.xp.length < nums ||
			leaderboards.users.xp[nums - 1].xp < user.xp
		) {
			leaderboards.users.xp.push(user);
			leaderboards.users.xp = leaderboards.users.xp
				.sort((a, b) => b.xp - a.xp)
				.slice(0, nums);
		}

		if (
			leaderboards.users.playCount.length < nums ||
			leaderboards.users.playCount[nums - 1].play_count < user.play_count
		) {
			leaderboards.users.playCount.push(user);
			leaderboards.users.playCount = leaderboards.users.playCount
				.sort((a, b) => b.play_count - a.play_count)
				.slice(0, nums);
		}

		if (
			leaderboards.users.killCount.length < nums ||
			leaderboards.users.killCount[nums - 1].kill_count < user.kill_count
		) {
			leaderboards.users.killCount.push(user);
			leaderboards.users.killCount = leaderboards.users.killCount
				.sort((a, b) => b.kill_count - a.kill_count)
				.slice(0, nums);
		}

		if (
			leaderboards.users.highscore.length < nums ||
			leaderboards.users.highscore[nums - 1].highest_score < user.highest_score
		) {
			leaderboards.users.highscore.push(user);
			leaderboards.users.highscore = leaderboards.users.highscore
				.sort((a, b) => b.highest_score - a.highest_score)
				.slice(0, nums);
		}

		if (
			leaderboards.users.views.length < nums ||
			leaderboards.users.views[nums - 1].profile_views < user.profile_views
		) {
			leaderboards.users.views.push(user);
			leaderboards.users.views = leaderboards.users.views
				.sort((a, b) => b.profile_views - a.profile_views)
				.slice(0, nums);
		}
	},
};
for (const repo of repos) {
	if (!fs.existsSync(`./${repo}`)) continue;
	const millions = fs.readdirSync(`./${repo}`);
	for (const million of millions) {
		if (!million.match(/-*\d+/)) continue;
		const tenThousands = fs.readdirSync(`./${repo}/${million}`);
		for (const tenThousand of tenThousands) {
			const hundreds = fs.readdirSync(`./${repo}/${million}/${tenThousand}`);
			console.log(`Checking ${repo}/${million}/${tenThousand} ...`);
			for (const hundred of hundreds) {
				const files = fs.readdirSync(
					`./${repo}/${million}/${tenThousand}/${hundred}`,
				);
				for (const file of files) {
					callbacks[repo](
						JSON.parse(
							fs.readFileSync(
								`./${repo}/${million}/${tenThousand}/${hundred}/${file}`,
								"utf-8",
							),
						),
					);
				}
			}
		}
	}
}

console.log(leaderboards);

const stats = `## File sizes
${fileSizes}

## Forum leaderboards
### Comments
${leaderboards.forumPosts.comments
	.map(
		(p, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/${getPath(p.id)})) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(p.user.id)})) - ${h(p.comments.length)} comments`,
	)
	.join("  \n")}
</details>

### Upvotes
${leaderboards.forumPosts.upvotes
	.map(
		(p, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/${getPath(p.id)})) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(p.user.id)})) - ${h(p.likes)} likes`,
	)
	.join("  \n")}
</details>

### Views
${leaderboards.forumPosts.views
	.map(
		(p, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) ([archive](https://github.com/deeeepio-archive/forumPosts/blob/main/${getPath(p.id)})) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(p.user.id)})) - ${h(p.views)} views`,
	)
	.join("  \n")}
</details>

## User leaderboards
### Account XP
${leaderboards.users.xp
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.xp)} xp`,
	)
	.join("  \n")}
</details>

### Coins
${leaderboards.users.coins
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.coins)} coins`,
	)
	.join("  \n")}
</details>

### Highest score
${leaderboards.users.highscore
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.highest_score)} xp`,
	)
	.join("  \n")}
</details>

### Kill count
${leaderboards.users.killCount
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.kill_count)} kills`,
	)
	.join("  \n")}
</details>

### Play count
${leaderboards.users.playCount
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.play_count)} plays`,
	)
	.join("  \n")}
</details>

### Views
${leaderboards.users.views
	.map(
		(u, i) =>
			`${i === previewNums ? c : ""}${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) ([archive](https://github.com/deeeepio-archive/users/blob/main/${getPath(u.id)})) - ${h(u.profile_views)} views`,
	)
	.join("  \n")}
`;

template = template.replace("{{stats}}", stats);

fs.writeFileSync("profile/README.md", template);

console.log("Stats updated");
