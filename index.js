const $ = document.querySelector.bind(document);
const input = $("#i");
const button = $("#s");
const { q } = [...new URLSearchParams(Location.search.substring(1)).values();

if (q) input.value = q;

button.addEventListener("click", async () => {
  const r = await navigator.clipboard.writeText(
    await generate(input.value)).then(() => alert("クリップボードにコピーしたわぼけ")).catch(() => alert("エラーだわぼけ")
  );
  history.replaceState({ q: input.value }, null, "index.html");
});

async function generate(string) {
  const src = await fetch(
    "https://raw.githubusercontent.com/Rinrin0413/MS.dic_Ayashiy-Nipongo/master/assets/MS-IME-DICT_Ayashiy-Nipongo_v1.1.0.txt",
  ).then(async r => r.text());
  const { json } = MSIMEDict(src);
  return json();
}
