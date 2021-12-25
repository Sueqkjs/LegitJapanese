const $ = document.querySelector.bind(document);
const input = $("#i");
const button = $("#s");
const { q } = [...new URLSearchParams(location.search.substring(1)).values()];

if (q) input.value = q;

button.addEventListener("click", async () => {
  const r = await navigator.clipboard.writeText(
    await generate(input.value)).then(() => alert("クリップボードにコピーしたわぼけ")).catch((e) => alert("エラーだわぼけ" + e.message)
  );
  history.replaceState({ q: input.value }, null, "index.html");
});

async function generate(string) {
  const src = await fetch(
    "assets/ayasii.txt",
  ).then(async r => await r.text());
  const ime = new MSIMEDict(src);
  return ime.json();
}
