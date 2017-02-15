{
    chrome.contextMenus.create(
        {
            "title": "マークダウン形式でコピー",
            "type": "normal",
            "contexts": ["image"],
            "onclick": function (info)
            {
                alert("Hello World");
            }    
        }
    )
}