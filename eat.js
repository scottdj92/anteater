const blacklist = [
    // google
    "utm_source",
    "utm_content",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "gclid",
    "mkwid",
    // facebook
    "ad_id",
    "adset_id",
    "campaign_id",
    "ad_name",
    "adset_name",
    "campaign_name",
    "placement",
    "site_source_name",
    "fbclid"
];

document.addEventListener("copy", (doc) => {
    const url = decodeURIComponent(doc.target.value);
    if (url !== "undefined") {
        doc.preventDefault();
        const params = url.split("?")[1];
        const keys = params.split("&");
        // we have all of the params split by key=val
        // check to see if any one of them matches the blacklist. if it does, remove it.
        const saved = keys.filter((key) => !blacklist.includes(key.split("=")[0]));
        // re-join all values
        const joined = saved.join("&");
        const full = url.split("?")[0] + joined;
        // now save to latest clipboard entry
        navigator.clipboard.writeText(full);
    }
});
