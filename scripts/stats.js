import fs from "node:fs";

const h = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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

const repos = ["forumPosts", "users"];
const callbacks = {
	forumPosts: (post) => {
		if (
			leaderboards.forumPosts.upvotes.length < 5 ||
			leaderboards.forumPosts.upvotes[4].likes < post.likes
		) {
			leaderboards.forumPosts.upvotes = leaderboards.forumPosts.upvotes
				.sort((a, b) => b.likes - a.likes)
				.slice(0, 5);
		}

		if (
			leaderboards.forumPosts.comments.length < 5 ||
			leaderboards.forumPosts.comments[4].comments.length < post.comments.length
		) {
			leaderboards.forumPosts.comments = leaderboards.forumPosts.comments
				.sort((a, b) => b.comments.length - a.comments.length)
				.slice(0, 5);
		}

		if (
			leaderboards.forumPosts.views.length < 5 ||
			leaderboards.forumPosts.views[4].views < post.views
		) {
			leaderboards.forumPosts.views = leaderboards.forumPosts.views
				.sort((a, b) => b.views - a.views)
				.slice(0, 5);
		}
	},
	users: (user) => {
		if (
			leaderboards.users.coins.length < 5 ||
			leaderboards.users.coins[4].coins < user.coins
		) {
			leaderboards.users.coins = leaderboards.users.coins
				.sort((a, b) => b.coins - a.coins)
				.slice(0, 5);
		}

		if (
			leaderboards.users.xp.length < 5 ||
			leaderboards.users.xp[4].xp < user.xp
		) {
			leaderboards.users.xp = leaderboards.users.xp
				.sort((a, b) => b.xp - a.xp)
				.slice(0, 5);
		}

		if (
			leaderboards.users.playCount.length < 5 ||
			leaderboards.users.playCount[4].play_count < user.play_count
		) {
			leaderboards.users.playCount = leaderboards.users.playCount
				.sort((a, b) => b.play_count - a.play_count)
				.slice(0, 5);
		}

		if (
			leaderboards.users.killCount.length < 5 ||
			leaderboards.users.killCount[4].kill_count < user.kill_count
		) {
			leaderboards.users.killCount = leaderboards.users.killCount
				.sort((a, b) => b.kill_count - a.kill_count)
				.slice(0, 5);
		}

		if (
			leaderboards.users.highscore.length < 5 ||
			leaderboards.users.highscore[4].highest_score < user.highest_score
		) {
			leaderboards.users.highscore = leaderboards.users.highscore
				.sort((a, b) => b.highest_score - a.highest_score)
				.slice(0, 5);
		}

		if (
			leaderboards.users.views.length < 5 ||
			leaderboards.users.views[4].views < user.views
		) {
			leaderboards.users.views = leaderboards.users.views
				.sort((a, b) => b.views - a.views)
				.slice(0, 5);
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
			`${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) - ${n(p.comments.length)} comments`,
	)
	.join("  \n")}

### Upvotes
${leaderboards.forumPosts.upvotes
	.map(
		(p, i) =>
			`${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) - ${n(p.likes)} likes`,
	)
	.join("  \n")}

### Views
${leaderboards.forumPosts.views
	.map(
		(p, i) =>
			`${i + 1}. [${p.title}](https://deeeep.io/forum/${p.forum_id}/${p.id}) by [${p.user.username}](https://deeeep.io/u/${encodeURIComponent(p.user.username)}) - ${n(p.views)} views`,
	)
	.join("  \n")}

## User leaderboards
### Account XP
${leaderboards.users.xp
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.xp)} xp`,
	)
	.join("  \n")}

### Coins
${leaderboards.users.coins
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.coins)} coins`,
	)
	.join("  \n")}

### Highest score
${leaderboards.users.highscore
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.highest_score)} xp`,
	)
	.join("  \n")}

### Kill count
${leaderboards.users.killCount
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.kill_count)} kills`,
	)
	.join("  \n")}

### Play count
${leaderboards.users.playCount
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.play_count)} plays`,
	)
	.join("  \n")}

### Views
${leaderboards.users.views
	.map(
		(u, i) =>
			`${i + 1}. [${u.username}](https://deeeep.io/u/${encodeURIComponent(u.username)}) - ${n(u.views)} views`,
	)
	.join("  \n")}
`;

template = template.replace("{{stats}}", stats);

fs.writeFileSync("profile/README.md", template);

console.log("Stats updated");
