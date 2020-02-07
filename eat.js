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
    "loc",
    "ls_ref",
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
    try {
        const url = new URL(doc.target.value);
        doc.preventDefault();
        const keys = url.search.split("?")[1].split("&");
        const saved = keys.filter((key) => !blacklist.includes(key.split("=")[0]));
        const full = `${url.origin}${url.pathname}${saved.join("&")}`;
        navigator.clipboard.writeText(full);
    } catch (err) {
        void(0);
    }
});
