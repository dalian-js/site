export default async function handler(_, res) {
  const userResponse = await fetch(process.env.GITHUB_API);
  const userReposResponse = await fetch(
    `${process.env.GITHUB_API}/repos?per_page=100`
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  if (!repositories || !repositories.length) return

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );

  return res.status(200).json({
    followers: user.followers,
    stars
  });
}