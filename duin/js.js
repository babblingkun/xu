const translations = {
    "ja": {
        "header_title": "私、徐军ことしゅー君",
        "language_label": "Language:",
        "caption_1": "ぼくのちんちん",
        "caption_2": "何してるんだろうね",
        "caption_3": "Twitter風",
        "caption_4": "しゅー少年 in はま寿司",
        "caption_5": "痩せたい",
        "caption_6": "5月15日公開！！",
        "footer_note_ja": "【無断転載・保存厳禁】当サイト内のすべてのコンテンツ（文章・画像等）の著作権は当サイト運営者に帰属します。無許可での転載、複製、ダウンロード、保存、改変等の行為は、法律により罰せられます。",
        "footer_note_zh": "基IDP备12052008号 彩虹网帅备20081205号 运营者：司马徐军", // 中国系のサイトで見るあれ
        "footer_copyright": "© 2025 しゅーさんのポータルサイト KAKAO ID syuaa8"
    },
    "zh": {
        "header_title": "我，徐军，柊哉君",
        "language_label": "语言:",
        "caption_1": "屌爆了",
        "caption_2": "我在做什么呢",
        "caption_3": "推特风",
        "caption_4": "徐军在浜寿司",
        "caption_5": "我想减肥",
        "caption_6": "5月15日公開！！",
        "footer_note_ja": "【严禁转载和保存】 本网站内的所有内容（文字、图片等）的版权归本网站运营者所有。未经许可，禁止进行转载、复制、下载、保存、修改等行为。任何未经授权的行为将依法追究法律责任。",
        "footer_note_zh": "基IDP备12052008号 彩虹网帅备20081205号 运营者：司马徐军", // 中国系のサイトで見るあれ
        "footer_copyright": "© 2025 徐军的门户网站 KAKAO ID syuaa8"
    }
};

function changeLanguage(lang) {
    const currentTranslations = translations[lang];

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (currentTranslations[key]) {
            element.textContent = currentTranslations[key];
        }
    });

    document.documentElement.lang = lang;
}
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(document.documentElement.lang || 'ja'); 
});