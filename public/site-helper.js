const config = {
  siteUrl: "https://zh-app-leyusports.com.cn",
  keywords: ["乐鱼体育", "体育赛事", "实时比分", "运动资讯"],
  cardTitle: "平台使用指引",
  cardDescription: "欢迎访问乐鱼体育，获取最新赛事动态与体育资讯。"
};

function createBadge(text) {
  const span = document.createElement("span");
  span.className = "keyword-badge";
  span.textContent = text;
  return span;
}

function buildCard() {
  const card = document.createElement("div");
  card.className = "info-card";

  const title = document.createElement("h3");
  title.textContent = config.cardTitle;
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = config.cardDescription;
  card.appendChild(desc);

  const link = document.createElement("a");
  link.href = config.siteUrl;
  link.textContent = "前往乐鱼体育";
  link.target = "_blank";
  card.appendChild(link);

  return card;
}

function buildBadgeContainer() {
  const container = document.createElement("div");
  container.className = "badge-container";

  config.keywords.forEach(kw => {
    container.appendChild(createBadge(kw));
  });

  return container;
}

function buildAccessNotice() {
  const notice = document.createElement("div");
  notice.className = "access-notice";

  const icon = document.createElement("span");
  icon.textContent = "ℹ️";
  icon.className = "notice-icon";
  notice.appendChild(icon);

  const text = document.createElement("span");
  text.textContent = "如无法访问，请检查网络连接或复制以下链接到浏览器打开：";
  notice.appendChild(text);

  const urlDisplay = document.createElement("code");
  urlDisplay.textContent = config.siteUrl;
  notice.appendChild(urlDisplay);

  return notice;
}

function initSiteHelper() {
  const container = document.createElement("div");
  container.id = "site-helper-root";

  container.appendChild(buildCard());
  container.appendChild(buildBadgeContainer());
  container.appendChild(buildAccessNotice());

  document.body.appendChild(container);
}

const style = document.createElement("style");
style.textContent = `
  #site-helper-root {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 16px;
    font-family: system-ui, -apple-system, sans-serif;
    z-index: 9999;
    box-sizing: border-box;
  }
  .info-card h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    color: #1a1a1a;
  }
  .info-card p {
    margin: 0 0 12px 0;
    font-size: 14px;
    color: #555;
  }
  .info-card a {
    display: inline-block;
    padding: 8px 16px;
    background: #2563eb;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
  }
  .badge-container {
    margin: 12px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .keyword-badge {
    background: #e5e7eb;
    color: #374151;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
  }
  .access-notice {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    background: #f9fafb;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    color: #333;
    margin-top: 8px;
  }
  .notice-icon {
    flex-shrink: 0;
  }
  .access-notice code {
    display: block;
    margin-top: 4px;
    word-break: break-all;
    background: #f3f4f6;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
    color: #1f2937;
  }
`;
document.head.appendChild(style);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelper);
} else {
  initSiteHelper();
}