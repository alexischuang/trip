const fs = require('fs');

const path = 'D:/ebook/Trip/tour-final.html';
const html = fs.readFileSync(path, 'utf8');
const start = html.indexOf('<article class="day" id="yt-guide">');
if (start === -1) {
  throw new Error('yt-guide section not found');
}

const before = html.slice(0, start);
const after = `  <div class="footer-note">已依你最後確認的行程與住宿重做，並把附近商店、購物點、路徑條與影片參考整合進每一天。</div>
</div>
<script>
  (function () {
    const grids = Array.from(document.querySelectorAll('.photo-grid'));
    grids.forEach((grid) => {
      const cards = Array.from(grid.querySelectorAll('.photo-card'));
      if (cards.length < 2) return;
      grid.classList.add('carousel-ready');
      let index = 0;
      const show = (nextIndex) => {
        cards.forEach((card, i) => card.classList.toggle('is-active', i === nextIndex));
        index = nextIndex;
      };
      show(0);
      setInterval(() => show((index + 1) % cards.length), Math.min(5000, Math.max(2800, 1800 + cards.length * 500)));
    });
  })();
</script>
</body>
</html>
`;

const block = `  <article class="day" id="yt-guide">
    <div class="day-head"><div class="badge">YouTube</div><div><h3>2026 影片參考 - 依每天分組</h3><p>這裡整理成 Day 1 到 Day 5 對應的 YouTube 搜尋連結，方便你直接看今年的旅行影片與實拍經驗。</p></div></div>
    <div class="route">
      <div class="stop"><h4>Day 1 影片</h4><div class="meta"><span class="pill">高山</span><span class="pill">住宿</span></div><p><a href="https://www.youtube.com/results?search_query=2026+KOKO+HOTEL+%E9%A3%9B%E9%A9%92%E9%AB%98%E5%B1%B1" target="_blank" rel="noopener">KOKO HOTEL 飛驒高山</a>、<a href="https://www.youtube.com/results?search_query=2026+%E9%AB%98%E5%B1%B1%E8%80%81%E8%A1%97" target="_blank" rel="noopener">高山老街 / 上三之町</a>、<a href="https://www.youtube.com/results?search_query=2026+%E9%A3%9B%E9%A9%92%E9%AB%98%E5%B1%B1" target="_blank" rel="noopener">飛驒高山</a>。</p></div>
      <div class="stop"><h4>Day 2 影片</h4><div class="meta"><span class="pill">白川鄉</span><span class="pill">金澤</span></div><p><a href="https://www.youtube.com/results?search_query=2026+%E7%99%BD%E5%B7%9D%E9%84%89%E5%90%88%E6%8E%8C%E6%9D%91" target="_blank" rel="noopener">白川鄉合掌村</a>、<a href="https://www.youtube.com/results?search_query=2026+%E5%85%BC%E5%85%AD%E5%9C%92" target="_blank" rel="noopener">兼六園</a>、<a href="https://www.youtube.com/results?search_query=2026+%E9%87%91%E6%BE%A4%E5%9F%8E%E8%B7%A1" target="_blank" rel="noopener">金澤城跡</a>、<a href="https://www.youtube.com/results?search_query=2026+%E6%9D%B1%E8%8C%B6%E5%B1%8B%E8%A1%97" target="_blank" rel="noopener">東茶屋街</a>、<a href="https://www.youtube.com/results?search_query=2026+%E9%87%91%E6%BE%A4T-MARK%E9%A3%AF%E5%BA%97" target="_blank" rel="noopener">金澤 T-MARK 飯店</a>。</p></div>
      <div class="stop"><h4>Day 3 影片</h4><div class="meta"><span class="pill">郡上八幡</span><span class="pill">犬山 / 名古屋</span></div><p><a href="https://www.youtube.com/results?search_query=2026+%E9%83%A1%E4%B8%8A%E5%85%AB%E5%B9%A1" target="_blank" rel="noopener">郡上八幡</a>、<a href="https://www.youtube.com/results?search_query=2026+%E5%AE%97%E7%A5%87%E6%B0%B4" target="_blank" rel="noopener">宗祇水</a>、<a href="https://www.youtube.com/results?search_query=2026+%E7%8A%AC%E5%B1%B1%E5%9F%8E" target="_blank" rel="noopener">犬山城</a>、<a href="https://www.youtube.com/results?search_query=2026+%E4%B8%89%E5%85%89%E7%A8%BB%E8%8D%B7%E7%A5%9E%E7%A4%BE" target="_blank" rel="noopener">三光稻荷神社</a>、<a href="https://www.youtube.com/results?search_query=2026+AEON+%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83+%E5%90%8D%E5%8F%A4%E5%B1%8B" target="_blank" rel="noopener">AEON 購物中心</a>、<a href="https://www.youtube.com/results?search_query=2026+TRAVELODGE+HOTEL+%E5%90%8D%E5%8F%A4%E5%B1%8B%E6%A6%AE" target="_blank" rel="noopener">TRAVELODGE 名古屋榮</a>。</p></div>
      <div class="stop"><h4>Day 4 影片</h4><div class="meta"><span class="pill">名古屋自由行</span><span class="pill">逛街 / 模型</span></div><p><a href="https://www.youtube.com/results?search_query=2026+%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%B8%AD%E5%A4%AE%E5%A1%94%E6%A8%93" target="_blank" rel="noopener">名古屋中央塔樓</a>、<a href="https://www.youtube.com/results?search_query=2026+%E6%A6%AE%E7%94%BA%E5%95%86%E5%9C%88" target="_blank" rel="noopener">榮町商圈</a>、<a href="https://www.youtube.com/results?search_query=2026+%E5%90%8D%E5%8F%A4%E5%B1%8BPARCO" target="_blank" rel="noopener">名古屋PARCO</a>、<a href="https://www.youtube.com/results?search_query=2026+animate+%E9%87%91%E5%B1%B1" target="_blank" rel="noopener">animate 金山</a>、<a href="https://www.youtube.com/results?search_query=2026+%E9%A7%BF%E6%B2%B3%E5%B1%8B+%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%A4%A7%E9%A0%88%E6%9C%AC%E9%A4%A8" target="_blank" rel="noopener">駿河屋 大須</a>、<a href="https://www.youtube.com/results?search_query=2026+Joshin+Kids+Land+%E5%A4%A7%E9%A0%88%E5%BA%97" target="_blank" rel="noopener">Joshin Kids Land 大須店</a>、<a href="https://www.youtube.com/results?search_query=2026+THE+GUNDAM+BASE+SATELLITE+NAGOYA" target="_blank" rel="noopener">GUNDAM BASE NAGOYA</a>。</p></div>
      <div class="stop"><h4>Day 5 影片</h4><div class="meta"><span class="pill">回程</span><span class="pill">大須觀音</span></div><p><a href="https://www.youtube.com/results?search_query=2026+%E5%A4%A7%E9%A0%88%E8%A7%80%E9%9F%B3" target="_blank" rel="noopener">大須觀音</a>、<a href="https://www.youtube.com/results?search_query=2026+%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%B8%AD%E9%83%A8%E5%9C%8B%E9%9A%9B%E7%A9%BA%E6%B8%AF" target="_blank" rel="noopener">中部國際空港</a>、<a href="https://www.youtube.com/results?search_query=2026+%E5%B7%9D%E5%B3%B6PA" target="_blank" rel="noopener">川島PA</a>、<a href="https://www.youtube.com/results?search_query=2026+%E3%81%B2%E3%82%8B%E3%81%8C%E3%81%AE%E9%AB%98%E5%8E%9FSA" target="_blank" rel="noopener">ひるがの高原SA</a>。</p></div>
    </div>
  </article>
`;

fs.writeFileSync(path, before + block + after, 'utf8');
