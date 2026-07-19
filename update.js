const fs = require("fs");

const urls= [
  'kuurp.nekoweb.org',
  'puddingpudd.com',
  'whirrfox.moe',
  'mimiya.nekoweb.org',
]

async function main() {

  let jsonOut = {};

  for (const url of urls) {
    const apiReq = await fetch(`https://nekoweb.org/api/site/info/${url}`);
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

    const name = url.split(".")[0];

    jsonOut[name] = output;
  }

  fs.writeFileSync("nekoweb.json", JSON.stringify(jsonOut, null, 2));
}

main();