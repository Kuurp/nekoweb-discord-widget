const fs = require("fs");

const username = "kuurp";

async function main() {
  
  const apiReq = await fetch(`https://nekoweb.org/api/site/info/${username}.nekoweb.org`);
  const apiRes = await apiReq.json();

  const output = {
    domain: apiRes.domain,
    title: apiRes.title,
    updates: apiRes.updates,
    followers: apiRes.followers,
    views: apiRes.views,
    created_at: new Date(apiRes.created_at).toLocaleDateString("en-GB"),
    updated_at: new Date(apiRes.updated_at).toLocaleDateString("en-GB")
  };

  fs.writeFileSync(
    "nekoweb.json",
    JSON.stringify(output, null, 2)
  );
}

main();