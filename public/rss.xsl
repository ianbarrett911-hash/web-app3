<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="5.0" encoding="UTF-8" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="rss/channel/title"/> — RSS</title>
        <style>
          :root{--bg:#0f172a;--card:#ffffff;--ink:#0b1b37;--muted:#475569;--brand:#1e3a8a;--accent:#f59e0b}
          body{margin:0;background:var(--bg);font-family:Inter,system-ui,Segoe UI,Helvetica,Arial,sans-serif;}
          .wrap{max-width:880px;margin:0 auto;padding:24px}
          .card{background:var(--card);border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,.15);padding:24px}
          h1{margin:0 0 8px;font-size:24px;color:var(--ink)}
          .desc{color:var(--muted);margin:0 0 16px}
          .actions{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 20px}
          .btn{display:inline-block;padding:10px 14px;border-radius:10px;font-weight:700;text-decoration:none}
          .btn.copy{background:#e2e8f0;color:#0f172a}
          .btn.feedly{background:#2bb24c;color:#fff}
          .btn.inoreader{background:#1f2937;color:#fff}
          .btn.newsblur{background:#f59e0b;color:#1f2937}
          ol{list-style:none;padding:0;margin:0}
          li{padding:16px 0;border-top:1px solid #e5e7eb}
          li:first-child{border-top:none}
          .item-title{font-weight:800;color:var(--ink);text-decoration:none}
          .item-title:hover{color:var(--brand);text-decoration:underline}
          .date{color:#64748b;font-size:12px}
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p class="desc"><xsl:value-of select="rss/channel/description"/></p>
            <div class="actions">
              <a class="btn feedly" id="add-feedly" target="_blank" rel="noopener">Add in Feedly</a>
              <a class="btn inoreader" id="add-inoreader" target="_blank" rel="noopener">Add in Inoreader</a>
              <a class="btn newsblur" id="add-newsblur" target="_blank" rel="noopener">Open in NewsBlur</a>
              <button class="btn copy" id="copy-feed">Copy feed URL</button>
            </div>
            <p class="desc">Tip: In Outlook or other readers, paste the feed URL to subscribe.</p>
            <ol>
              <xsl:for-each select="rss/channel/item">
                <li>
                  <a class="item-title"><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a>
                  <div class="date"><xsl:value-of select="pubDate"/></div>
                </li>
              </xsl:for-each>
            </ol>
          </div>
        </div>
        <script>
          (function(){
            var feedUrl=location.origin+location.pathname;
            var byId=function(id){return document.getElementById(id)};
            var setHref=function(id,href){var el=byId(id); if(el) el.href=href};
            setHref('add-feedly','https://feedly.com/i/subscription/feed/'+encodeURIComponent(feedUrl));
            setHref('add-inoreader','https://www.inoreader.com/?add_feed='+encodeURIComponent(feedUrl));
            setHref('add-newsblur','https://www.newsblur.com/?url='+encodeURIComponent(feedUrl));
            var copyBtn=byId('copy-feed');
            if(copyBtn){copyBtn.addEventListener('click',function(){
              navigator.clipboard.writeText(feedUrl).then(function(){copyBtn.textContent='Copied!'; setTimeout(function(){copyBtn.textContent='Copy feed URL'},1500)});
            })}
          })();
        </script>
      </body>
    </html>
  </xsl:template>
  </xsl:stylesheet>
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <title>
          <xsl:value-of select="rss/channel/title"/>
        </title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 2rem; color: #0f172a; background: #f8fafc; }
          header { margin-bottom: 1.5rem; }
          h1 { font-size: 1.75rem; margin: 0 0 0.25rem 0; }
          .desc { color: #334155; }
          .item { background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; margin: 0 0 1rem 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
          .item h2 { font-size: 1.125rem; margin: 0 0 0.25rem 0; }
          .item a { color: #1d4ed8; text-decoration: none; }
          .item a:hover { text-decoration: underline; }
          .meta { font-size: 0.875rem; color: #475569; margin-bottom: 0.5rem; }
        </style>
      </head>
      <body>
        <header>
          <h1><xsl:value-of select="rss/channel/title"/></h1>
          <div class="desc"><xsl:value-of select="rss/channel/description"/></div>
          <div><a><xsl:attribute name="href"><xsl:value-of select="rss/channel/link"/></xsl:attribute>Visit website →</a></div>
        </header>
        <div class="items">
          <xsl:for-each select="rss/channel/item">
            <div class="item">
              <h2><a href="{link}"><xsl:value-of select="title"/></a></h2>
              <div class="meta"><xsl:value-of select="pubDate"/></div>
              <div class="content">
                <xsl:value-of select="description" disable-output-escaping="yes"/>
              </div>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
