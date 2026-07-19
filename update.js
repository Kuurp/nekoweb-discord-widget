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

  const apiReq2 = await fetch(`https://nekoweb.org/api/site/info/puddingpudd.com`);
  const apiRes2 = await apiReq2.json();

  const output2 = {
    domain: apiRes2.domain,
    title: apiRes2.title,
    updates: apiRes2.updates,
    followers: apiRes2.followers,
    views: apiRes2.views,
    created_at: new Date(apiRes2.created_at).toLocaleDateString("en-GB"),
    updated_at: new Date(apiRes2.updated_at).toLocaleDateString("en-GB")
  };


  const apiReq3 = await fetch(`https://nekoweb.org/api/site/info/whirrfox.moe`);
  const apiRes3 = await apiReq3.json();

  const output3 = {
    domain: apiRes3.domain,
    title: apiRes3.title,
    updates: apiRes3.updates,
    followers: apiRes3.followers,
    views: apiRes3.views,
    created_at: new Date(apiRes3.created_at).toLocaleDateString("en-GB"),
    updated_at: new Date(apiRes3.updated_at).toLocaleDateString("en-GB")
  };

  const jsonOut = {
    "kuurp": output,
    "puddingpudd": output2,
    "whirrfox": output3
  }

  fs.writeFileSync("nekoweb.json", JSON.stringify(jsonOut, null, 2));
}

main();