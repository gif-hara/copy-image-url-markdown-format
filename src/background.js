// コンテキストメニューに登録
chrome.contextMenus.create(
    {
        "title": "マークダウン形式でコピー",
        "type": "normal",
        "contexts": ["image"],
        "onclick": function (info)
        {
            copyClipboard("![](" + info.srcUrl + ")");
        }    
    }
)

// クリップボードにコピー
function copyClipboard(message)
{
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = message;
    textArea.select();
    document.execCommand("copy");
    document.removeChild(textArea);
}