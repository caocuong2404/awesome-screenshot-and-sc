"undefined" == typeof isContentScriptLoaded
  ? chrome.runtime.sendMessage({ action: "insert_script" })
  : chrome.runtime.sendMessage({ action: "script_running" });
